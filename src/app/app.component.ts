import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng-lts/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shoppingAppPrimeNg';

  disabled: boolean = true;

    value1: string;
    
    value2: string;

    value3: string;

    value4: string;

    value5: string = 'Disabled';


  constructor(private primengConfig: PrimeNGConfig) {}

    ngOnInit() {
        this.primengConfig.ripple = true;
    }
}
