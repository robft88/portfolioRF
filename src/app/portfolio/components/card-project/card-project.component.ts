import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../../utils/interfaces/information.interface';

@Component({
  selector: 'app-card-project',
  templateUrl: './card-project.component.html',
  styles: [
  ]
})
export class CardProjectComponent implements OnInit {
  load: boolean = false;

  @Input() project!: Project;
  active: number = 0;

  constructor() { }

  ngOnInit(): void {
    if(this.project){
      this.load = true;
    }
  }

  onClick(i: number) {
    this.active = i;
  }

}
