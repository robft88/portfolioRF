import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';
import { HelperService } from 'src/app/utils/services/helper.service';
import { InfoService } from '../../../utils/services/info.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: [
  ]
})
export class MainComponent implements OnInit {
  isChecked: boolean = false;
  load: boolean = false;
  nav!: any;
  navBarSticky: boolean = false;

  @Output() toEng = new EventEmitter();
  @Output() toEsp = new EventEmitter();

  constructor(private hs: HelperService,
    private is: InfoService) { }

  ngOnInit(): void {
    this.is.getInfo('esp').pipe(
      map(resp => Object.values(resp.find(r => r.$key === 'nav')!)),
    ).subscribe(resp => {
      this.nav = resp.splice(0, resp.length - 1);
      console.log(this.nav);
      this.load = true;
    })
  }

  checkValue(value: string) {
    if (this.isChecked) {
      this.hs.changelanguage(value);
    } else {
      this.hs.changelanguage(value);
    }
  }

  toCheck(lang: string) {
    if (lang === 'eng' && this.isChecked) {
      return;
    }
    if (lang === 'esp' && !this.isChecked) {
      return;
    }
    if (lang === 'esp') {
      this.isChecked = false;
      return this.checkValue('esp');
    }
    if (lang === 'eng') {
      this.isChecked = true;
      return this.checkValue('eng');
    }
    return;
  }
}
