import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BracketListComponent } from './bracket-list/bracket-list.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { LeftBarComponent } from './page-one/page-one.component';
import { ContactsComponent } from './contacts/contacts.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { EducationComponent } from './education/education.component';

@NgModule({
  declarations: [
    AppComponent,
    BracketListComponent,
    TopHeaderComponent,
    LeftBarComponent,
    ContactsComponent,
    SkillsComponent,
    WorkExperienceComponent,
    PageTwoComponent,
    EducationComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
