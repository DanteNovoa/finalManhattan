import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HeroesService } from "src/app/servicios/heroes.services";

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent implements OnInit {

  heroes:any[] =[];
  param: string;
  constructor( private activatedRoute: ActivatedRoute,
               private _heroesService: HeroesService) { 

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=> {
      this.param = params["param"];
      this.heroes = this._heroesService.buscarComponentes( params["param"])
      console.log(this.heroes, "this heroes")
    })
  }

}
