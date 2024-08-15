import { Component, DoCheck} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Item } from '../item.interface';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { AllDoneDialogComponent } from '../all-done-dialog/all-done-dialog.component';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.sass']
})
export class ToDoListComponent implements DoCheck{
  listName:string = '';
  toDoList:Item[] = [];
  sortedList:Item[] = [];
  newName:string = '';
  newPriority:number = 1;
  AllSelected: boolean = false;
  isEmpty:boolean = true;

  constructor(public dialog: MatDialog) {
    this.sortByPriority();
  }

  sortByPriority() {
    this.toDoList.sort((a, b) => a.priority - b.priority);
  }

  ngDoCheck(): void {
    this.sortByPriority();
  }

  addItem(i_name:string, i_priority:number) {
    debugger;
    let item:Item = {
      name: i_name,
      priority: i_priority,
      completed: false
    }
    this.toDoList.push(item);
    this.isEmpty = false;

  }

  editItem(index:number) {
    debugger;
    let updatedName = prompt('new name of item: ' + this.toDoList[index].name);
    let updatedPriority = prompt('new priority of item: ' + this.toDoList[index].name);
    if (updatedName != null) {
      this.toDoList[index].name = updatedName;
    }
    if (updatedPriority != null) {
      this.toDoList[index].priority = parseInt(updatedPriority);
    }
  }

  confirmDelete(index:number) {
    debugger;
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '300px',
      data: { name: this.toDoList[index].name }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteItem(index);
      }
    });
  }
  deleteItem(index:number) {
    this.toDoList.splice(index, 1);
    this.checkAlldone();
    if(this.toDoList == null) {
      this.isEmpty = true;
    }
  }

  allDone() {
    debugger;
    this.dialog.open(AllDoneDialogComponent, {
      width: '300px'
    });
  }

  checkAlldone() {
    this.AllSelected = this.toDoList.every(item => item.completed);
  }
}
