import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapview',
  templateUrl: './mapview.component.html',
  styleUrls: ['./mapview.component.css']
})
export class MapviewComponent implements OnInit {

  constructor() { }
  lat: number = 51.678418;
  lng: number = 7.809007;
  ngOnInit() {
  }

}
