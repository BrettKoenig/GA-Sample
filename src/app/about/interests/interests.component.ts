import { Component, Input, EventEmitter, Output } from '@angular/core';
import { InterestGroup } from '../../models/interestGroup';

@Component({
  selector: 'interests',
  templateUrl: './interests.template.html',
  styles: ['img {max-height: 200px; } ']
})
export class InterestsComponent { 
  @Input() interest: InterestGroup
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  searchString: string = '';
  
  onClick(name: string): void {
    this.notify.emit(name)
  }
}
