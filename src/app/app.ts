import { Component, signal, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, style, transition, animate, query, stagger, keyframes } from '@angular/animations';
import { ButtonModule } from 'primeng/button';
import { TemplateTrackingService, TemplateVisitType } from './services/template-tracking.service';

interface TemplateItem {
  id: string;
  name: string;
  description?: string;
  language?: string;
  technologies?: string[];
  path: string;
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
  animations: [
    trigger('heroIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(60px) scale(0.95)' }),
        animate('1s cubic-bezier(0.16, 1, 0.3, 1)', style({ opacity: 1, transform: 'translateY(0) scale(1)' }))
      ])
    ]),
    trigger('titleIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(40px)' }),
        animate('1.1s 200ms cubic-bezier(0.16, 1, 0.3, 1)', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('subtitleIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('1s 400ms cubic-bezier(0.16, 1, 0.3, 1)', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('badgeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.8)' }),
        animate('0.6s 100ms cubic-bezier(0.34, 1.56, 0.64, 1)', style({ opacity: 1, transform: 'scale(1)' }))
      ])
    ]),
    trigger('statsIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.8s 600ms cubic-bezier(0.16, 1, 0.3, 1)', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('sectionIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('0.8s cubic-bezier(0.16, 1, 0.3, 1)', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('gridAnimation', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(40px) scale(0.92)' }),
          stagger(120, [
            animate('0.7s cubic-bezier(0.16, 1, 0.3, 1)', keyframes([
              style({ opacity: 0, transform: 'translateY(40px) scale(0.92)', offset: 0 }),
              style({ opacity: 0.6, transform: 'translateY(-8px) scale(1.02)', offset: 0.7 }),
              style({ opacity: 1, transform: 'translateY(0) scale(1)', offset: 1 })
            ]))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class App implements OnInit, OnDestroy {
  private readonly tracking = inject(TemplateTrackingService);
  private visitTracked = false;
  private readonly onUserInteraction = () => {
    if (!this.visitTracked) {
      this.visitTracked = true;
      this.tracking.track('ztemplates-web', TemplateVisitType.Visit).subscribe();
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

  setHovered(id: string | null) {
    this.hoveredCard.set(id);
  }

  ngOnDestroy() {
    this.removeInteractionListeners();
  }

  viewDemo(path: string, name: string) {
    this.tracking.track(name, TemplateVisitType.Visit).subscribe();
    window.open(path, '_blank');
  }

  downloadTemplate(zipPath: string | undefined, name: string) {
    if (!zipPath) {
      alert(`No se encontró descarga.zip en la raíz del proyecto "${name}".`);
      return;
    }
    this.tracking.track(name, TemplateVisitType.Download).subscribe();
    const a = document.createElement('a');
    a.href = zipPath;
    a.download = `${name}.zip`;
    a.click();
  }
}
