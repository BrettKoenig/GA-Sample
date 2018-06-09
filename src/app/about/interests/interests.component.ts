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

  _sortString: string;
  orderString: string;
  get sortString(): string {
    return this._sortString;
  }
  set sortString(value: string) {
    if(this._sortString === value){
      this.orderString = this.orderString === 'asc' ? 'desc' : 'asc';
    } else {
      this.orderString = 'asc';
    }
    this._sortString = value;
    this.filteredInterestItems = this.filteredInterestItems.sort(this.compareValues(this._sortString, this.orderString)); 
  }

  ngOnInit() {
    this.filteredInterestItems = this.interest.items;
    this.searchString = '';
    this.sortString = '';
    this.orderString = '';
  }

  filterItems(searchString: string): Interest[] {
    return this.interest.items.filter((interest: Interest) => interest.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
  }


  onClick(name: string): void {
    this.notify.emit(name)
  }

  compareValues(key, order='asc') {
    return function(a, b) {
      if(!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        // property doesn't exist on either object
          return 0; 
      }
  
      const varA = (typeof a[key] === 'string') ? 
        a[key].toUpperCase() : a[key];
      const varB = (typeof b[key] === 'string') ? 
        b[key].toUpperCase() : b[key];
  
      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return (
        (order == 'desc') ? (comparison * -1) : comparison
      );
    };
  }
}
