import {Component} from '@angular/core';
import {MatListModule} from '@angular/material/list';


/**
 * @title Basic list
 */
@Component({
  selector: 'app-list',
  templateUrl: 'list.component.html',
  standalone: true,
  imports: [MatListModule],
})
export class ListComponent {}
