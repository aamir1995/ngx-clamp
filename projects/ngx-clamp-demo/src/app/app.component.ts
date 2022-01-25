import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private _text = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, odio. Dolore odit illo ab quam. Numquam adipisci sapiente eius. Explicabo, quam cumque enim a nesciunt corporis ipsam quis reiciendis iusto?';
  public text = Array(50).fill(this._text).join(' ');
}
