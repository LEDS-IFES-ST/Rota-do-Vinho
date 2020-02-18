import { Component, OnInit } from '@angular/core';
import { CarroselService } from 'src/app/services/carrosel'

@Component({
  selector: 'app-carrossel',
  templateUrl: './carrossel.component.html',
  styleUrls: ['./carrossel.component.css']
})
export class CarrosselComponent implements OnInit {

  carroselList: any = []

  constructor(private carroselService: CarroselService) { }

  ngOnInit() {
    this.getCarrosel();
  }

  getCarrosel(){
    this.carroselService.getImagemCarrosel().subscribe(
      res => {
        this.carroselList = res
        console.log("TESTE");
        console.log(this.carroselList);
      },
      err => console.log(err)
          )
    
  }

}
