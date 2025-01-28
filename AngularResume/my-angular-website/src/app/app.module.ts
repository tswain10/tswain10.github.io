import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './components/header/header.component';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';
import { SummaryComponent } from './components/summary/summary.component';
import { SkillsComponent } from './components/skills/skills.component';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    HeaderComponent,
    ContactInfoComponent,
    SummaryComponent,
    SkillsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }