import { Component } from '@angular/core';
import { HeroService } from './hero.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: `
  <div *ngIf="Pics.length; else nousers">
  <h1>
  {{myValueinThearry.title}}
  </h1>
  <section>
  <img src="{{myValueinThearry.media.m}}" height="200" width="200">
  </section>
  <p> {{myValueinThearry.description}}</p>
  <h5>{{myValueinThearry.date_taken}}</h5>
  <button type="button" (click)="randomPic()" (click)="clear()">push!</button>
  </div>
  <ng-template #nousers>
  <h1>No pics....</h1>
  </ng-template>
`,
  styles: [`
  section{
    display: flex;
    align-items: center;
    justify-content: center;
  },
  div {
    width: 80%;  
  }
  `]
})

export class AppComponent {
  Pics:any = [];
  myNumber:number = 0;
  myValueinThearry:string="";
  myclick:string ="";  
  myI=setInterval(()=> {this.randomPic();},5000);
  constructor( private pic: HeroService) {
  }

  ngOnInit() {
    this.getPics();
    this.myI;
  }

  clear()
  {
    clearInterval(this.myI)
  }
  
  getPics() {
  this.pic.getFlickrFeed().subscribe(
    data => {
        this.Pics = data['items'];
        if(this.Pics.length>0)
        {
          this.randomPic();
        }
    }
  );
}
randomPic()
{
  this.myNumber = Math.floor((Math.random() * this.Pics.length));
  this.myValueinThearry = this.Pics[this.myNumber];
  this.Pics.splice(this.myNumber, 1);
}
}






