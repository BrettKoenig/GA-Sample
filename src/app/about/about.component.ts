import { Component } from '@angular/core';
import { IPerson } from '../models/person';
import { InterestGroup } from '../models/interestGroup';
import { InterestsComponent } from './interests/interests.component';
import { Interest } from '../models/interest';

@Component({
  selector: 'about',
  templateUrl: './about.template.html',
  styles: ['img {max-height: 300px; } ']
})
export class AboutComponent {
  public person: IPerson;
  public interestGroup: InterestGroup;
  public showInterests: boolean;

  constructor() {
    this.interestGroup = {
      interestTitle: 'States',
      items: [
        {
          pictureSrc: '../../assets/img/virginia.jpg',
          name: 'Virginia',
          description: '3rd Anniversary Trip',
          date: '05/26/18',
          rating: 5
        },
        {
          pictureSrc: '../../assets/img/idaho.JPG',
          name: 'Idaho',
          description: 'Watching NCAA Tournament',
          date: '03/15/18',
          rating: 4
        },
        {
          pictureSrc: '../../assets/img/arizona.JPG',
          name: 'Arizona',
          description: 'Family Vacation',
          date: '01/01/18',
          rating: 3
        },
      ]
    };
    this.showInterests = false;
  }

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

  public getButtonClasses(): any {
    return {
      'btn': true,
      'btn-success': this.interestGroup.interestTitle.includes('a'),
      'btn-secondary': !this.interestGroup.interestTitle.includes('a'),
      'active': this.showInterests
    };
  }

  public onNotify(message: string): void {
    alert("Interested in " + message);
  }

  public sayTagline(): void {
    alert(this.person.tagline)
  }
}
