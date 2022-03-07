import { Component, OnInit } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';
import { InfoService } from '../../../utils/services/info.service';
import { HelperService } from '../../../utils/services/helper.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {
  load: boolean = false;
  about!: any;

  constructor(private is: InfoService,
    private hs: HelperService) { }

  ngOnInit(): void {
    this.hs.languageOb.pipe(
      switchMap(msg => this.is.getInfo(msg)),
      map(resp => resp.find(r => r.$key === 'about'))
    ).subscribe((resp) => {
      this.about = resp;
      this.load = true;
    })
  }

}
