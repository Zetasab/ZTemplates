import { Component, signal, computed, OnInit, OnDestroy, AfterViewInit, ElementRef, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TemplateTrackingService, TemplateVisitType } from './services/template-tracking.service';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface TemplateItem {
  id: string;
  name: string;
  description?: string;
  language?: string;
  technologies?: string[];
  path: string | null;
  downloadPath: string;
  imagePath?: string;
  gifPath?: string;
  zipPath?: string;
}

@Component({
  selector: 'app-root',
  imports: [CommonModule, ButtonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit, AfterViewInit, OnDestroy {
  private readonly tracking = inject(TemplateTrackingService);
  private readonly hostEl = inject(ElementRef<HTMLElement>);
  @ViewChild('heroStack') heroStack?: ElementRef<HTMLElement>;

  private visitTracked = false;
  private readonly onUserInteraction = () => {
    if (!this.visitTracked) {
      this.visitTracked = true;
      this.tracking.track('ztemplates-web', TemplateVisitType.Visit);
      this.removeInteractionListeners();
    }
  };
  private readonly interactionEvents = ['scroll', 'touchstart'] as const;

  private removeInteractionListeners() {
    this.interactionEvents.forEach(event =>
      document.removeEventListener(event, this.onUserInteraction)
    );
  }

  protected readonly title = signal('ZTemplates');
  templates = signal<TemplateItem[]>([]);
  hoveredCard = signal<string | null>(null);

  query = signal('');
  activeFilter = signal('Todos');
  readonly filters = ['Todos', 'React', 'Angular', 'JavaScript'];

  featuredPreviews = computed(() =>
    this.templates()
      .filter(t => !!t.imagePath)
      .slice(0, 3)
  );

  filteredTemplates = computed(() => {
    const q = this.query().trim().toLowerCase();
    const lang = this.activeFilter();
    return this.templates().filter(t => {
      const matchesLang = lang === 'Todos' || (t.language ?? '').toLowerCase() === lang.toLowerCase();
      if (!matchesLang) return false;
      if (!q) return true;
      const haystack = [t.name, t.description ?? '', ...(t.technologies ?? [])].join(' ').toLowerCase();
      return haystack.includes(q);
    });
  });

  private mouseMoveHandler?: (e: MouseEvent) => void;
  private mediaQuery?: MediaQueryList;

  async ngOnInit() {
    setTimeout(() => {
      this.interactionEvents.forEach(event =>
        document.addEventListener(event, this.onUserInteraction, { passive: true })
      );
    }, 1500);
    try {
      const response = await fetch('templates.json');
      if (response.ok) {
        const data = await response.json();
        this.templates.set(data);
      }
    } catch (err) {
      console.error('Failed to fetch templates', err);
    }
  }

  ngAfterViewInit() {
    this.mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (this.mediaQuery.matches) return;

    // Hero title lines reveal
    gsap.fromTo(
      this.hostEl.nativeElement.querySelectorAll('.reveal-inner'),
      { yPercent: 110 },
      { yPercent: 0, duration: 1, ease: 'expo.out', stagger: 0.08, delay: 0.1 }
    );

    gsap.fromTo(
      this.hostEl.nativeElement.querySelectorAll('.hero-badge, .hero-subtitle, .hero-actions, .hero-stack'),
      { y: 24, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', stagger: 0.1, delay: 0.35 }
    );

    // Scroll-triggered reveals for everything below the fold
    this.hostEl.nativeElement.querySelectorAll('.reveal-up').forEach((el: Element) => {
      if (el.closest('.hero')) return;
      gsap.fromTo(
        el,
        { y: 32, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%' },
        }
      );
    });

    // Cards stagger in as grid mounts / filters change
    ScrollTrigger.batch(this.hostEl.nativeElement.querySelectorAll('.card'), {
      start: 'top 92%',
      onEnter: (batch) =>
        gsap.fromTo(
          batch,
          { y: 36, opacity: 0, scale: 0.97 },
          { y: 0, opacity: 1, scale: 1, duration: 0.7, ease: 'power3.out', stagger: 0.08, overwrite: true }
        ),
      once: true,
    });

    // Hero stack parallax on pointer move
    if (this.heroStack?.nativeElement && window.matchMedia('(pointer: fine)').matches) {
      const stack = this.heroStack.nativeElement;
      this.mouseMoveHandler = (e: MouseEvent) => {
        const rect = stack.getBoundingClientRect();
        const relX = (e.clientX - rect.left - rect.width / 2) / rect.width;
        const relY = (e.clientY - rect.top - rect.height / 2) / rect.height;
        gsap.to(stack.querySelectorAll('.stack-card'), {
          x: relX * 18,
          y: relY * 18,
          duration: 0.6,
          ease: 'power2.out',
          stagger: 0.02,
        });
      };
      window.addEventListener('mousemove', this.mouseMoveHandler, { passive: true });
    }

    // Magnetic buttons
    if (window.matchMedia('(pointer: fine)').matches) {
      const magneticEls = this.hostEl.nativeElement.querySelectorAll('.magnetic') as NodeListOf<HTMLElement>;
      magneticEls.forEach((btn: HTMLElement) => {
        const move = (e: MouseEvent) => {
          const rect = btn.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          gsap.to(btn, { x: x * 0.28, y: y * 0.35, duration: 0.4, ease: 'power2.out' });
        };
        const leave = () => gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.4)' });
        btn.addEventListener('mousemove', move);
        btn.addEventListener('mouseleave', leave);
      });
    }
  }

  setHovered(id: string | null) {
    this.hoveredCard.set(id);
  }

  setQuery(value: string) {
    this.query.set(value);
  }

  setFilter(value: string) {
    this.activeFilter.set(value);
  }

  onCardMove(event: MouseEvent) {
    const card = event.currentTarget as HTMLElement;
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mx', `${event.clientX - rect.left}px`);
    card.style.setProperty('--my', `${event.clientY - rect.top}px`);
  }

  ngOnDestroy() {
    this.removeInteractionListeners();
    if (this.mouseMoveHandler) {
      window.removeEventListener('mousemove', this.mouseMoveHandler);
    }
    ScrollTrigger.getAll().forEach(st => st.kill());
  }

  viewDemo(path: string | null, name: string) {
    if (!path) return;
    this.tracking.track(name, TemplateVisitType.Visit);
    window.open(path, '_blank');
  }

  downloadTemplate(zipPath: string | undefined, name: string) {
    if (!zipPath) {
      alert(`No se encontró descarga.zip en la raíz del proyecto "${name}".`);
      return;
    }
    this.tracking.track(name, TemplateVisitType.Download);
    const a = document.createElement('a');
    a.href = zipPath;
    a.download = `${name}.zip`;
    a.click();
  }
}
