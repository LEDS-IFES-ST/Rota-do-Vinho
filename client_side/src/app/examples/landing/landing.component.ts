import { Component, OnInit } from '@angular/core';
import * as Rellax from 'rellax';
import { VinicolaService } from '../../service/vinicola.service'
import { log } from 'util';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  vinicolas: any = [];
  data : Date = new Date();
  focus;
  focus1;

  constructor(private vinicolaService: VinicolaService) { }

  ngOnInit() {
    var rellaxHeader = new Rellax('.rellax-header');

    var body = document.getElementsByTagName('body')[0];
    body.classList.add('landing-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');

    this.getVinicola();
    console.log(this.vinicolas);
  }
  ngOnDestroy(){
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('landing-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
  }

  getVinicola() {
    this.vinicolaService.getVinicola().subscribe( res => {
      console.log(res);
      this.vinicolas = res;
    },
    err => console.log(err)
    )}
}
