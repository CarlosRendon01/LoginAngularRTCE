import { Component, OnInit } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';


/** @title Basic sidenav */
@Component({
  selector: 'app-sidenav',
  templateUrl: 'sidenav.component.html',
  styleUrl: 'sidenav.component.css',
  standalone: true,
  imports: [MatSidenavModule],
})
export class SidenavComponent implements OnInit{
  shouldRun: boolean = false;

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      this.shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);
    }
}

}
