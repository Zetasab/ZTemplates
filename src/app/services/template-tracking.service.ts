import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

export enum TemplateVisitType {
  Visit = 'Visit',
  Download = 'Download'
}

@Injectable({
  providedIn: 'root'
})
export class TemplateTrackingService {
  private readonly baseUrl = environment.apiUrl;

  track(name: string = 'default', type: TemplateVisitType = TemplateVisitType.Visit): void {
    const url = `${this.baseUrl}/api/TemplateVisits/track?name=${encodeURIComponent(name)}&type=${encodeURIComponent(type)}`;
    fetch(url, { method: 'POST' }).catch(() => {});
  }
}
