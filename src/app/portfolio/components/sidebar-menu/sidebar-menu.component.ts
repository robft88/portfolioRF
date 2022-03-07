import { Component, OnInit, Input } from '@angular/core';
import { InfoService } from '../../../utils/services/info.service';
import { HelperService } from '../../../utils/services/helper.service';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styles: [
  ]
})
export class SidebarMenuComponent implements OnInit {
  
  @Input('sidenav') sidenav: any;
  load: boolean = false;
  sidebar!: any;

  constructor(private is: InfoService,
    private hs: HelperService) { }

  ngOnInit(): void {
    this.hs.languageOb.pipe(
      switchMap(msg => this.is.getInfo(msg)),
      map(resp => resp.find(r => r.$key === 'nav'))
    ).subscribe(resp=> {
      this.sidebar = resp;
      this.load = true;
    })
  }
}
