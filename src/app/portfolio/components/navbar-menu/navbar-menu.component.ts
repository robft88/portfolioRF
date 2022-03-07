import { Component, OnInit } from '@angular/core';
import { InfoService } from 'src/app/utils/services/info.service';
import { HelperService } from '../../../utils/services/helper.service';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-navbar-menu',
  templateUrl: './navbar-menu.component.html',
  styles: [
  ]
})
export class NavbarMenuComponent implements OnInit {
  load: boolean = false;
  navbar!: any;

  constructor(private is: InfoService,
    private hs: HelperService) { }

  ngOnInit(): void {
    this.hs.languageOb.pipe(
      switchMap(msg => this.is.getInfo(msg)),
      map(resp => resp.find(r => r.$key === 'nav'))
    ).subscribe(resp=> {
      this.navbar = resp;
      this.load = true;
    })
  }

}
