import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  searchControl = new FormControl();
  options: string[] = ['Lenore CUU', 'Fernando Herrera', 'Republica CUU' , 'Dan Bilzerian', 'Monica Arreondo'];
  filteredOptions: Observable<string[]>;

  constructor() {
    this.filteredOptions = this.searchControl.valueChanges
    .pipe(
      startWith(''),
      map(value => this._filter(value))
    );
   }

  ngOnInit() {
  }

  onSearch() {
    console.log('Searching ' + this.searchControl.value);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

}
