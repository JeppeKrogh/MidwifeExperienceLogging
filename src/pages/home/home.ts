import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  allowNewItem: boolean = true;
  todoOutput: string;
  vesthest: string;
  
  addButtonClicked() {
    this.todoOutput = this.vesthest;
  }


  constructor(public navCtrl: NavController) {

  }

}
