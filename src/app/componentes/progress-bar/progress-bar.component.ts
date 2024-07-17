import {Component} from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';

/**
 * @title Determinate progress-bar
 */
@Component({
  selector: 'app-progressbar',
  templateUrl: 'progress-bar.component.html',
  standalone: true,
  imports: [MatProgressBarModule],
})
export class ProgressBarComponent {}
