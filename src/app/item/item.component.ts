import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'todo-item',
  template: `
  <div *ngIf="!editMode" class="inputLine">
  <input type="checkbox" (click)="completeItem()"/>
  <p class="todo-title" [ngClass]="{'todo-complete': isComplete}">
  {{ todoItem.title }}
</p>
    <button (click)="changeItem()" class="btn"> 
    change</button>
    <button (click)="removeItem()" class="btn btn-red">
    remove
  </button>
  </div>
  <todo-input *ngIf="editMode" [title]="todoItem.title" (submit)="updateTitle($event)"></todo-input>
  `,
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() todoItem: any;
  @Output() remove: EventEmitter<any> = new EventEmitter();
  editMode = false;
  private isComplete: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  removeItem() {
    this.remove.emit(this.todoItem);
  }
  changeItem() {
    this.editMode = true;
  }
  updateTitle(event) {
    this.todoItem.title = event;
    this.editMode = false;
  }
  completeItem() {
    this.isComplete = !this.isComplete;
  }
}
