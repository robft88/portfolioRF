import { Component, OnInit } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';
import { Information } from 'src/app/utils/interfaces/information.interface';
import { InfoService } from '../../../utils/services/info.service';
import { HelperService } from 'src/app/utils/services/helper.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html'
})
export class ProjectsComponent implements OnInit {
  load: boolean = false;
  projects!: any;
  active: number = 0;

  constructor(private is: InfoService,
    private hs: HelperService) { }


  ngOnInit(): void {
    this.hs.languageOb.pipe(
      switchMap(msg => this.is.getInfo(msg)),
      map(resp => resp.find(r => r.$key === 'projects'))
    ).subscribe((resp) => {
      this.projects = resp;
      this.load = true;
    })
  }

  onClick(i: number) {
    this.active = i;
  }
}
