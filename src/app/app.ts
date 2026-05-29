import { Component, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, style, transition, animate, query, stagger } from '@angular/animations';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

interface TemplateItem {
  id: string;
  name: string;
  path: string;
  downloadPath: string;
}

@Component({
  selector: 'app-root',
  imports: [CommonModule, ButtonModule, CardModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(40px)' }),
        animate('0.8s cubic-bezier(0.16, 1, 0.3, 1)', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'scale(0.9) translateY(20px)' }),
          stagger(150, [
            animate('0.6s cubic-bezier(0.16, 1, 0.3, 1)', style({ opacity: 1, transform: 'scale(1) translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class App implements OnInit {
  protected readonly title = signal('ZTemplates');
  templates = signal<TemplateItem[]>([]);

  async ngOnInit() {
    try {
      const response = await fetch('/templates.json');
      if (response.ok) {
        const data = await response.json();
        this.templates.set(data);
      }
    } catch (err) {
      console.error('Failed to fetch templates', err);
    }
  }

  downloadTemplate(path: string) {
    alert(`Por el momento no hay un .zip disponible para descargar directamente. La ruta esperada es: ${path}.zip`);
  }
}
