import { Component } from '@angular/core';
import { CountryService } from './country.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'world-map';
  responseData: any;
  countryName: any;
  countryCapital: any;
  countryRegion: any;
  income: any;
  latitude: any;
  longitude: any;

  

  constructor(private CountryService: CountryService){}

  

  countryInfo(event: MouseEvent){
    const countryCode = (event.target as HTMLElement).id;
    this.CountryService.callForInfo(countryCode).subscribe((response) => {this.responseData = response;
      this.countryName = response[1][0].name;
      this.countryCapital = response[1][0].capitalCity;
      this.countryRegion = response[1][0].region.value;
      this.income = response[1][0].incomeLevel.value;
      this.latitude = response[1][0].latitude;
      this.longitude = response[1][0].longitude;





    });

    
    
  }
  
}