import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

export enum TemplateVisitType {
  Visit = 'Visit',
  Download = 'Download'
}

const ID_SEG_KEY = 'templates_id_seg';
const HEARTBEAT_INTERVAL_MS = 60000;

@Injectable({
  providedIn: 'root'
})
export class TemplateTrackingService {
  private readonly baseUrl = environment.apiUrl;
  private heartbeatIntervalId: ReturnType<typeof setInterval> | null = null;

  track(name: string = 'default', type: TemplateVisitType = TemplateVisitType.Visit): void {
    const url = `${this.baseUrl}/api/addtemplates`;

    fetch(url, {
      method: 'POST',
      mode: 'cors',
      credentials: 'omit',
      cache: 'no-store',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ idSeg: this.getIdSeg(), proyect: name, type })
    }).catch(() => {});

    this.startHeartbeat();
  }

  trackProject(proyect: string, type: string, action: 'visit' | 'download'): void {
    const url = `${this.baseUrl}/api/template/${action}`;

    fetch(url, {
      method: 'POST',
      mode: 'cors',
      credentials: 'omit',
      cache: 'no-store',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ idSeg: this.getIdSeg(), projects: [{ proyect, type }] })
    }).catch(() => {});
  }

  private startHeartbeat(): void {
    if (this.heartbeatIntervalId !== null) {
      return;
    }

    this.heartbeatIntervalId = setInterval(() => this.sendHeartbeat(), HEARTBEAT_INTERVAL_MS);
  }

  private sendHeartbeat(): void {
    const url = `${this.baseUrl}/api/addkeepalivetemplates?idSeg=${encodeURIComponent(this.getIdSeg())}`;

    fetch(url, {
      method: 'POST',
      mode: 'cors',
      credentials: 'omit',
      cache: 'no-store'
    }).catch(() => {});
  }

  private getIdSeg(): string {
    let idSeg = sessionStorage.getItem(ID_SEG_KEY);
    if (!idSeg) {
      idSeg = crypto.randomUUID();
      sessionStorage.setItem(ID_SEG_KEY, idSeg);
    }
    return idSeg;
  }
}
