import { Component } from '@angular/core';
type Ico = Array <{id:number, name: string, ico:string}>
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
navegador: Ico=[{
  id: 1,
  name: "Fortalezas",
  ico: "swipe_vertical"
},{
  id: 2,
  name: "Quien soy",
  ico: "web"
},{
  id: 3,
  name: "Estudios",
  ico: "psychology"
},{
  id: 4,
  name: "Proyectos",
  ico: "star_rate"
}]
}
