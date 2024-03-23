import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title: string;
  public descripcion: string;

  constructor(){
    this.title = 'Título PulentoWeb-Angular',
    this.descripcion="Descripción lololollololololo"
  }
}
