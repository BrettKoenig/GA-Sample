import { Component, Input } from '@angular/core';
import { InterestGroup } from '../../models/interestGroup';

@Component({
  selector: 'interests',
  templateUrl: './interests.template.html',
  styles: ['img {max-height: 200px; } ']
})
export class InterestsComponent { 
  @Input() interest: InterestGroup
}
