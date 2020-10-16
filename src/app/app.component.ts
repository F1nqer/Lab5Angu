import { Component} from '@angular/core';

@Component({
  selector: 'app-color',
  template: `<div [style.backgroundColor]="colors[0].hex">
              <input type="text" [(ngModel)]="colors[0].hex" />
              <input type="text" [(ngModel)]="colors[0].name" />
            </div>
            <div [style.background-color]="colors[1].hex">
              <input type="text" [(ngModel)]="colors[1].hex" />
              <input type="text" [(ngModel)]="colors[1].name" />
            </div>
            <div [style.background-color]="colors[2].hex">
              <input type="text" [(ngModel)]="colors[2].hex" />
              <input type="text" [(ngModel)]="colors[2].name" />
            </div>
            <div [style.background-color]="colors[3].hex">
              <input type="text" [(ngModel)]="colors[3].hex" />
              <input type="text" [(ngModel)]="colors[3].name" />
            </div>
            <div [style.background-color]="colors[4].hex">
              <input type="text" [(ngModel)]="colors[4].hex" />
              <input type="text" [(ngModel)]="colors[4].name" />
            </div>
            `,
  styles: [`
    div {
      width: 10000px;
      height: 150px;
      border: 4px solid #000000
    }
  `]
})
export class AppComponent {
  colors: Color[] = [new Color('#bd9bff', 'purple'),
    new Color('#f95734', 'red-orange'),
    new Color('#7a9dea', 'sky blue'),
    new Color('#e3e829', 'yellow-green'),
    new Color('#950a24', 'very red')];
}
class Color{
  hex: string;
  name: string;
  constructor(hex: string, name: string) {
    this.hex = hex;
    this.name = name;
  }
}

const first: Color = new Color('fsdfds', 'fsdfds');
