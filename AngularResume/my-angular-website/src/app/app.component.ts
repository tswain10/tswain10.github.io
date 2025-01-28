import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';
import { SummaryComponent } from './components/summary/summary.component';
import { SkillsComponent } from './components/skills/skills.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    HeaderComponent,
    ContactInfoComponent,
    SummaryComponent,
    SkillsComponent
  ]
})
export class AppComponent {
  title = 'my-angular-website';
}