import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from '../home/home.component';
import { TeamComponent } from '../team/team.component';
import { MembersComponent } from '../members/members.component';
import { AboutUsComponent } from '../about-us/about-us.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { DashboardComponent } from '../users/dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HomeComponent,
    TeamComponent,
    MembersComponent,
    AboutUsComponent,
    ContactUsComponent,
    DashboardComponent,
    TestComponent
  ]
})
export class PagesModule { }
