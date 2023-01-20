import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-responsabilidad-social',
  templateUrl: './responsabilidad-social.component.html',
  styleUrls: ['./responsabilidad-social.component.css'],
  animations:[]
})
export class ResponsabilidadSocialComponent implements OnInit {

  public estado:string = "inactivo";

  constructor() { }

  ngOnInit(): void {
  }

  toglebutton() {

  };

}
