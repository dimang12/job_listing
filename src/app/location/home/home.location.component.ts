import { Component, OnInit } from '@angular/core';
import { CityService } from '../../services/city.service';

@Component ({
  // selector: 'home-location-component',
  templateUrl: './home.location.component.html'
})
export class HomeLocationComponent implements OnInit {
  public cities: Object;

  constructor ( private cityService: CityService) {}

  ngOnInit () {
    this.cityService.getAllCities().subscribe(data => {
      this.cities = data;
    });
  }
}
