import { Component } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.template.html',
  styles: ['img {max-height: 300px; } ']
})
export class AboutComponent { 
  public name: string = 'Brett Koenig';
  public almaMater: string = 'The Ohio State University';
  public extraCurricularActivity: string = 'NEWPATH';
  public jsExperience: number = 8;
  public favoriteTechnology: string = 'JavaScript';
  public hmbReason: string = `I chose HMB because I knew I wanted to learn the entire app infrastructure from front to back. HMB was an
  option where I knew, through working on various projects, I would have the opportunity to do that. Additionally,
  they value both work-life balance, and learning; investing in their people to push us to grow.`
  public profilePicture: string = '../../assets/img/profile.JPG';
  public tagline: string = 'Question of the day...';

  public sayTagline(): void {
    alert(this.tagline)
  }
}
