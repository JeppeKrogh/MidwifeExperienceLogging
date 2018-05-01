import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  todoText: string = "no item added yet";
  allowNewItem: boolean = true;

  addButtonClicked() {
    this.todoText += "added an item";
  }

  constructor(public navCtrl: NavController) {

  }

}
