import { Component } from '@angular/core';

/**
 * Generated class for the MapComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'map',
  templateUrl: 'map.html'
})
export class MapComponent {

  text: string;

  constructor() {
    console.log('Hello MapComponent Component');
    this.text = 'Hello World';
  }

}
