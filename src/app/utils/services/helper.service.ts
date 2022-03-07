import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  private language = new BehaviorSubject<string>('');
  public languageOb = this.language.asObservable();

  constructor() { }

  public changelanguage(lang: string): void {
    if (lang === 'esp') {
      this.language.next(lang);
    }
    if (lang === 'eng') {
      this.language.next(lang);
    }
  }
}
