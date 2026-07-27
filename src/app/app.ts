import { Component, signal, computed, effect, OnInit, AfterViewInit, OnDestroy, ElementRef, ViewChild, inject } from '@angular/core';
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
  activeIndex = signal(0);

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

  railProgress = computed(() => {
    const total = this.filteredTemplates().length;
    if (total <= 1) return 100;
    return (this.activeIndex() / (total - 1)) * 100;
  });

  private mouseMoveHandler?: (e: MouseEvent) => void;
  private reducedMotion = false;
  private viewReady = false;
  private rowsCtx?: gsap.Context;

  constructor() {
    effect(() => {
      // track dependency so re-runs on template list / filter changes
      this.filteredTemplates();
      if (!this.viewReady) return;
      this.activeIndex.set(0);
      setTimeout(() => this.initRowAnimations(), 0);
    });
  }

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
    this.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.viewReady = true;

    if (this.reducedMotion) return;

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

    // Scroll-triggered reveals for static section chrome (header, toolbar, empty states)
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

    // Template rows: each one gets its own reveal + parallax + active tracking
    this.initRowAnimations();

    // Images load asynchronously; recalc trigger positions once they've settled
    window.addEventListener('load', () => ScrollTrigger.refresh());

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

  /**
   * Re-scopes GSAP triggers to the current set of `.t-row` elements. Called on
   * mount and again whenever the filtered/search results change the DOM.
   */
  private initRowAnimations() {
    this.rowsCtx?.revert();
    if (this.reducedMotion) return;

    const rows = Array.from(this.hostEl.nativeElement.querySelectorAll('.t-row')) as HTMLElement[];
    if (!rows.length) return;

    this.rowsCtx = gsap.context(() => {
      rows.forEach((row, i) => {
        const frame = row.querySelector('.t-media-frame');
        const media = row.querySelector('.t-media-img, .t-media-placeholder');
        const contentChildren = row.querySelectorAll('.t-content > *');
        const index = row.querySelector('.t-media-index');

        gsap.fromTo(
          frame,
          { clipPath: 'inset(14% 14% 14% 14% round 18px)', opacity: 0, scale: 1.08 },
          {
            clipPath: 'inset(0% 0% 0% 0% round 18px)',
            opacity: 1,
            scale: 1,
            duration: 1.1,
            ease: 'power3.out',
            scrollTrigger: { trigger: row, start: 'top 78%' },
          }
        );

        gsap.fromTo(
          contentChildren,
          { y: 26, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: 'power3.out',
            stagger: 0.07,
            scrollTrigger: { trigger: row, start: 'top 75%' },
          }
        );

        if (index) {
          gsap.fromTo(
            index,
            { opacity: 0, x: -10 },
            { opacity: 1, x: 0, duration: 0.6, ease: 'power2.out', scrollTrigger: { trigger: row, start: 'top 80%' } }
          );
        }

        if (media) {
          gsap.to(media, {
            yPercent: -7,
            ease: 'none',
            scrollTrigger: { trigger: row, start: 'top bottom', end: 'bottom top', scrub: 0.6 },
          });
        }

        ScrollTrigger.create({
          trigger: row,
          start: 'top center',
          end: 'bottom center',
          onToggle: (self) => {
            if (self.isActive) this.activeIndex.set(i);
          },
        });
      });
    }, this.hostEl.nativeElement);
  }

  padIndex(n: number): string {
    return n < 10 ? `0${n}` : `${n}`;
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

  ngOnDestroy() {
    this.removeInteractionListeners();
    if (this.mouseMoveHandler) {
      window.removeEventListener('mousemove', this.mouseMoveHandler);
    }
    this.rowsCtx?.revert();
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
