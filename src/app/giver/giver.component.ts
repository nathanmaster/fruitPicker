import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-giver',
  templateUrl: './giver.component.html',
  styleUrls: ['./giver.component.css']
})
export class GiverComponent {
  @Input() pickedFruit: string = '';
  @Output() fruitEmitter: EventEmitter<string> = new EventEmitter<string>();

  /*
  giveFruit() {
    this.fruitEmitter.emit(this.pickedFruit);
  }*/
}