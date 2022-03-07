import { Component, OnInit } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';
import { HelperService } from 'src/app/utils/services/helper.service';
import { InfoService } from '../../../utils/services/info.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  load: boolean = false;
  home!: any;

  constructor(private is: InfoService,
    private hs: HelperService) {

  }

  ngOnInit(): void {
    this.hs.languageOb.pipe(
      switchMap(msg => this.is.getInfo(msg)),
      map(resp => resp.find(r => r.$key === 'home'))
    ).subscribe((resp) => {
      this.home = resp;
      this.load = true;
    })
  }
}
