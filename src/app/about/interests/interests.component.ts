import { Component, Input, EventEmitter, Output } from '@angular/core';
import { InterestGroup } from '../../models/interestGroup';
import { Interest } from '../../models/interest';

@Component({
  selector: 'interests',
  templateUrl: './interests.template.html',
  styles: ['img {max-height: 200px; } ']
})
export class InterestsComponent { 
  @Input() interest: InterestGroup
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  //we need to make a copy, otherwise, we would lose original data and have no way to get the original
  filteredInterestItems: Interest[];

  //looks like C#
  _searchString: string;
  get searchString(): string {
    return this._searchString;
  }
  set searchString(value: string) {
    this._searchString = value;
    this.filteredInterestItems = this.searchString ? this.filterItems(this.searchString) : this.interest.items;
  }

  ngOnInit() {
    this.filteredInterestItems = this.interest.items;
    this.searchString = '';
  }

  filterItems(searchString: string): Interest[] {
    return this.interest.items.filter((interest: Interest) => interest.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
  }


  onClick(name: string): void {
    this.notify.emit(name)
  }
}
