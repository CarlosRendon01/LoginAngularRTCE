import {Component} from '@angular/core';
import {MatRippleModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';

/**
 * @title MatRipple basic usage
 */
@Component({
  selector: 'app-ripple',
  templateUrl: 'ripples.component.html',
  styleUrl: 'ripples.component.css',
  standalone: true,
  imports: [MatCheckboxModule, FormsModule, MatFormFieldModule, MatInputModule, MatRippleModule],
})
export class RipplesComponent {
  centered = false;
  disabled = false;
  unbounded = false;

  radius: number = 0;
  color: string = '';
}
