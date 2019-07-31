import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'map-root',
  templateUrl: 'map.component.html',
  styleUrls: ['map.component.css'],
})
export class MapComponent implements OnInit, OnChanges{
  
  public pontosLocalizacao; 
  @Input() set pontos(value) {
    this.pontosLocalizacao = value;
  };
  
  title: string = 'My first AGM project';
  lat: number = -8.0597277;
  lng: number = -34.8724749;
  
  ngOnInit() {

  }

  ngOnChanges() {
    // console.log(this.pontos)
  }
}