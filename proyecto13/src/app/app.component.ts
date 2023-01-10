import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto13';
  texto!: string;
  valor = 0;
  moneda = 'USD'; 

  myobjeto:any=[
    {
      "Apellido":"Arcila",
      "Casado":false,
      "Dirección":"Calle 35 # 43 28",
      "Nombre":"Diego",
      "Teléfono":3859720
    },
    {
      "Apellido":"Bueno",
      "Casado":false,
      "Dirección":"CR 16A # 53 28",
      "Nombre":"Kevin",
      "Teléfono":31485579954
    },
    {
      "Apellido":"Palomino",
      "Casado":false,
      "Dirección":"CR 25 # 52 33",
      "Nombre":"Natalia",
      "Teléfono":32255945555
    }
  ];
}