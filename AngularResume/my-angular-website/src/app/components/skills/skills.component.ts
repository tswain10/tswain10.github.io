import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  standalone: true
})
export class SkillsComponent {
    skills: string[];

    constructor() {
        this.skills = [
            'C#, C++, .NET (Core & Framework)',
            'HTML, CSS, PHP, JavaScript, Typescript, jQuery, VueJS, AJAX',
            'SQL, MySQL, Python',
            'APIs (REST and SOAP)',
            'CI/CD Pipeline Experience',
            'Agile Software Development',
            'Troubleshooting',
            'Enterprise System Experience'
        ];
    }
}