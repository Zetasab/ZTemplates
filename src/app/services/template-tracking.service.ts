import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export enum TemplateVisitType {
  Visit = 'Visit',
  Download = 'Download'
}

@Injectable({
  providedIn: 'root'
})
export class TemplateTrackingService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = environment.apiUrl;

  track(name: string = 'default', type: TemplateVisitType = TemplateVisitType.Visit): Observable<{ message: string }> {
    const params = new HttpParams()
      .set('name', name)
      .set('type', type);

    return this.http.post<{ message: string }>(`${this.baseUrl}/api/TemplateVisits/track`, null, { params });
  }
}
