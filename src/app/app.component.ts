import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public tarefa= "";
  public items = [];
  
  
  addTarefa(items) {
    this.items.push(this.tarefa);
    this.tarefa="";

    
  }
  DeletarTarefa(item) {
    this.items.splice( this.items.indexOf(item), 1 );

  }
  
}



