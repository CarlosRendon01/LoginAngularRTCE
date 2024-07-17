import {Component} from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';

/**
 * @title Basic use of the tab group
 */
@Component({
  selector: 'app-tab',
  templateUrl: 'tabs.component.html',
  standalone: true,
  imports: [MatTabsModule],
})
export class TabsComponent {}
