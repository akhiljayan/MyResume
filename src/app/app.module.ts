import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PrintPageComponent } from './print-page/print-page.component';
import { ShowPageComponent } from './show-page/show-page.component';
import { BracketListComponent } from './Components/bracket-list/bracket-list.component';
import { TopHeaderComponent } from './Components/top-header/top-header.component';
import { LeftBarComponent } from './Components/page-one/page-one.component';
import { ContactsComponent } from './Components/contacts/contacts.component';
import { SkillsComponent } from './Components/skills/skills.component';
import { WorkExperienceComponent } from './Components/work-experience/work-experience.component';
import { PageTwoComponent } from './Components/page-two/page-two.component';
import { EducationComponent } from './Components/education/education.component';

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
    EducationComponent,
    PrintPageComponent,
    ShowPageComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
