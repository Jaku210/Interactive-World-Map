import { Component, OnInit } from '@angular/core';
import { CountryInfoService } from '../country-info.service';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.css']
})
export class WorldComponent {
  name: string = '';
  capital: string = '';
  region: string = '';
  income: string = '';
  longitude: string = '';
  latitude: string = '';

  constructor(private countryInfoService: CountryInfoService) {}

ngOnInit(): void {
   let svgCountryPaths = document.querySelectorAll<SVGPathElement>('path');

 Array.prototype.forEach.call(svgCountryPaths, (svgCountry: SVGPathElement) => {
  svgCountry.addEventListener('mouseover', (event: MouseEvent)=>{
    const path = event?.target as SVGPathElement;
    path.style.fill = 'red';
  });


  svgCountry.addEventListener('mouseleave', (event: MouseEvent)=> {
    const path = event.target as SVGPathElement;
    path.style.fill = ''; 
  });

  svgCountry.addEventListener('click', () => {
    this.fetchCountryData(svgCountry.id);
  });
});
}

fetchCountryData(countryId: string){
  this.countryInfoService.getCountryInfo(countryId).subscribe(data => {
    
    this.name = data[1][0].name;
    this.capital = data[1][0].capitalCity;
    this.region = data[1][0].region.value;
    this.income = data[1][0].incomeLevel.value;
    this.longitude = data[1][0].longitude;
    this.latitude = data[1][0].latitude;

  })
}
  }