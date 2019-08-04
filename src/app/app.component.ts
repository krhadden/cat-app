import { Component } from '@angular/core';
import { CatsService } from './shared/services/cats.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cat-app';
  cats: any;

  constructor(private catsService: CatsService) {}
  
  getKitty() {
    this.catsService.getKitty().subscribe((cats: any) => {
      this.cats = cats;
      console.log(cats[0].url);});
  }

}
