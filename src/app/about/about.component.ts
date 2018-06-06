import { Component } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.template.html',
  styles: [`
            h2 {color: green; }
            ul {
                font-size: 30px;
                color: red;
              }`]
})
export class AboutComponent { }
