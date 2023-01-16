import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})

export class InicioComponent implements OnInit {

  titulo: String;
  subTitulo: string;
  

  constructor() {
    this.titulo = 'Nuestros Aliados';
    this.subTitulo = 'subtitulo de la app';     

   }

  ngOnInit(): void {
  }


}
