import {Component} from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';

/**
 * @title Basic slider
 */
@Component({
  selector: 'app-slider',
  templateUrl: 'slider.component.html',
  styleUrl: 'slider.component.css',
  standalone: true,
  imports: [MatSliderModule],
})
export class SliderComponent {}
