import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../../app.component';
import { LeerJsonService } from '../../../servicios/leer-json.service';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.scss']
})
export class ExperienciaLaboralComponent implements OnInit {

  rutaImg:string = '';
  contenidoJSON:any = [];
  jsonURL:string = '../../../assets/json/experiencia-laboral.json';

  constructor(
    private componenteprincipal:AppComponent,
    private _servicio:LeerJsonService
  ) {
    this.rutaImg = this.componenteprincipal.ruta_imagenes;
    this._servicio.getJSON(this.jsonURL).subscribe(data => {
      this.contenidoJSON = data;
      //console.log(this.contenidoJSON);
    });
  }

  ngOnInit(): void {
  }

}
