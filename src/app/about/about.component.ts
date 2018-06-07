import { Component } from '@angular/core';
import { IPerson } from '../models/person';

@Component({
  selector: 'about',
  templateUrl: './about.template.html',
  styles: ['img {max-height: 300px; } ']
})
export class AboutComponent {
  public person: IPerson;

  ngOnInit() {
    this.makeInitialDataCall();
  }

  public makeInitialDataCall = (): void => {
    this.person = {
      name: 'Brett Koenig',
      almaMater: 'The Ohio State University',
      extraCurricularActivity: 'NEWPATH',
      jsExperience: 8,
      favoriteTechnology: 'JavaScript',
      hmbReason: `I chose HMB because I knew I wanted to learn the entire app infrastructure from front to back. HMB was an
      option where I knew, through working on various projects, I would have the opportunity to do that. Additionally,
      they value both work-life balance, and learning; investing in their people to push us to grow.`,
      profilePicture: '../../assets/img/profile.JPG',
      tagline: 'Question of the day...'
    }
  }

  public sayTagline(): void {
    alert(this.person.tagline)
  }
}
