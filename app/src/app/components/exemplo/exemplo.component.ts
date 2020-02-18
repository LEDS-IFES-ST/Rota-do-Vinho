import { Component, OnInit } from '@angular/core';
import { ExemploService } from 'src/app/services/exemplo.service';


@Component({
  selector: 'app-exemplo',
  templateUrl: './exemplo.component.html',
  styleUrls: ['./exemplo.component.css']
})
export class ExemploComponent implements OnInit {

  infoGerais: any = [];

  constructor(private exemploServ: ExemploService) { }

  ngOnInit() {
    ///
  }

  /*
  getGeralzao(idVinicola: string){
    console.log('getInfoGeral method call');
    this.exemploServ.getInfoGeral(idVinicola).subscribe(
      res => {
        console.log('res ok' + res);
        this.infoGerais = res;
      },
    )

  }
  */
}
