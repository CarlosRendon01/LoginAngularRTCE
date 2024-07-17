import {Component} from '@angular/core';
import {MatRadioModule} from '@angular/material/radio';

/**
 * @title Basic radios
 */
@Component({
  selector: 'app-ratio',
  templateUrl: 'radio-button.component.html',
  styleUrl: 'radio-button.component.css',
  standalone: true,
  imports: [MatRadioModule],
})
export class RadioButtonComponent {}
