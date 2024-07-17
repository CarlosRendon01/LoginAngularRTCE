import {Component} from '@angular/core';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';

/**
 * @title Basic tooltip
 */
@Component({
  selector: 'app-tooltip',
  templateUrl: 'tooltip.component.html',
  standalone: true,
  imports: [MatButtonModule, MatTooltipModule],
})
export class TooltipComponent{}
