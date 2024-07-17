import {Component} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';

/**
 * @title Basic Inputs
 */


@Component({
  selector: 'app-InputOverviewExample',
  styleUrl: './input.component.css',
  templateUrl: 'input.component.html',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule],
})
export class InputOverviewExample {}
