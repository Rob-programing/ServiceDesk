import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
  export class HomeComponent implements OnInit {


    chamados: boolean = false;
    atendimento: boolean = false;
    settings: boolean = false;
    solicitacoes: boolean = false;
    incidentes: boolean = false;
    images = [
      {title: 'First Slide', short: 'First Slide Short', src: "https://picsum.photos/id/700/900/500"},
      {title: 'Second Slide', short: 'Second Slide Short', src: "https://picsum.photos/id/1011/900/500"},
      {title: 'Third Slide', short: 'Third Slide Short', src: "https://picsum.photos/id/984/900/500"}
    ];
  constructor(private config : NgbCarouselConfig) {
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
   }

  ngOnInit(): void {
  }

  

}
