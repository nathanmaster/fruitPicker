import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GiverComponent } from './giver/giver.component';
import { PickerComponent } from './picker/picker.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GiverComponent, PickerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fruitPicker';
}
