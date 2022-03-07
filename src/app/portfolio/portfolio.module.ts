import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';

import { AboutComponent } from './pages/about/about.component';
import { CardProjectComponent } from './components/card-project/card-project.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { FormsModule } from '@angular/forms';
import { NavbarMenuComponent } from './components/navbar-menu/navbar-menu.component';
import { MainComponent } from './pages/main/main.component';
import { SidebarMenuComponent } from './components/sidebar-menu/sidebar-menu.component';




@NgModule({
  declarations: [
    AboutComponent,
    CardProjectComponent,
    ContactComponent,
    FooterComponent,
    HomeComponent,
    MainComponent,
    NavbarMenuComponent,
    ProjectsComponent,
    SidebarMenuComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  exports: [
    AboutComponent,
    CardProjectComponent,
    ContactComponent,
    FooterComponent,
    HomeComponent,
    MainComponent,
    ProjectsComponent
  ]
})
export class PortfolioModule { }
