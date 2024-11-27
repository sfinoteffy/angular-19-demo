import { Component, linkedSignal, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-linked-signal',
  imports: [FormsModule],
  template: `
    <p>nombre de chocolats: {{productCount()}}</p>
    <input type="number" [ngModel]="productCount()" (ngModelChange)="productCount.set($event)"/>
    <p>prix boîte de chocolats: {{productPrice()}}</p>
    <input type="number" [ngModel]="productPrice()" (ngModelChange)="productPrice.set($event)"/>
  `,
  styles: [``]
})
export class LinkedSignalComponent {
  productCount = signal(5);
  productPrice = linkedSignal(() => this.productCount() * 5);
}
