import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'todo-input',
  template: `
  <div class="inputLine">
  <input class="inputLine_input" [value]="title" (keyup.enter)="changeTitle($event.target.value)" #inputElement>
  <button (click)="changeTitle(inputElement.value)" class="btn inputLine_btn">
    Save
  </button>
  </div>
  `,
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Output() submit: EventEmitter<string> = new EventEmitter();
  @Input() title: string = 'my title';
  constructor() {
  
   }

  ngOnInit() {
  }

  changeTitle(newTitle): void {
    console.log(event);
    this.title = newTitle; // the original functionality still works
    this.submit.emit(this.title);
  }
  
}
