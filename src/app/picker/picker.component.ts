import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiverComponent } from '../giver/giver.component';

@Component({
  selector: 'app-picker',
  standalone: true,
  imports: [CommonModule, GiverComponent],
  templateUrl: './picker.component.html',
  styleUrls: ['./picker.component.css']
})
export class PickerComponent {
  fruits: string[] = ['apple', 'banana', 'cherry'];
  pickedFruit: string = '';

  selectFruit(fruit: string) {
    this.pickedFruit = fruit;
  }

  handleFruitEmitted(fruit: string) {
    console.log('Fruit emitted:', fruit);
  }
}