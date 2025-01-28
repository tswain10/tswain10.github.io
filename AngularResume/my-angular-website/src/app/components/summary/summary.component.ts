import { Component } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
  standalone: true
})
export class SummaryComponent {
    summary: string;

    constructor() {
        this.summary = "Over 6 years of experience as a Full Stack Developer using C#, .NET, SQL, HTML, CSS, JavaScript, and APIs. More than 7 years assisting clients with IT support, including website creation and management. Proven ability to work with product owners in Agile projects. Adaptive learner looking to further enhance my skill set and bring value to the team.";
    }
}