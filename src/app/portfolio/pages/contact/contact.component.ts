import { Component, OnInit } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';
import { InfoService } from '../../../utils/services/info.service';
import { HelperService } from '../../../utils/services/helper.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {
  load: boolean = false;
  contact!: any;

  constructor(private is: InfoService,
    private hs: HelperService) { }

  ngOnInit(): void {
    this.hs.languageOb.pipe(
      switchMap(msg => this.is.getInfo(msg)),
      map(resp => resp.find(r => r.$key === 'contact'))
    ).subscribe((resp) => {
      this.contact = resp;
      this.load = true;
    })
  }

}
