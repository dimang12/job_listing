import { Component, OnInit } from '@angular/core';
import { CityService } from '../services/city.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  public cities: any;

  constructor(private cityService: CityService) { }

  ngOnInit() {
    this.cityService.getAllCities().subscribe(data => {
      this.cities = data;
    });
  }

}
