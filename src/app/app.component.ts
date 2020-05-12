import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


interface Food {
  value: string;
  viewValue: string;
}

interface Car {
  value: string;
  viewValue: string;
}

interface DropdownOptions {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'angular-material-theme';

  selectedValue: string;
    selectedCar: string;

    dropdownOptions: DropdownOptions[] = [
      {value: 'option-1', viewValue: 'Option 1'},
      {value: 'option-2', viewValue: 'Option 2'},
      {value: 'option-3', viewValue: 'Option 3'}
    ];

    selectionOptions: DropdownOptions[] = [
      {value: 'unselected', viewValue: 'Unselected'},
      {value: 'selected', viewValue: 'Selected'},
      {value: 'disabled', viewValue: 'Disabled'}
    ];

    foods: Food[] = [
      {value: 'steak-0', viewValue: 'Steak'},
      {value: 'pizza-1', viewValue: 'Pizza'},
      {value: 'tacos-2', viewValue: 'Tacos'}
    ];

    cars: Car[] = [
      {value: 'volvo', viewValue: 'Volvo'},
      {value: 'saab', viewValue: 'Saab'},
      {value: 'mercedes', viewValue: 'Mercedes'}
    ];

}
