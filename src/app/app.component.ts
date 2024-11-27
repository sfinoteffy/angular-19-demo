import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  template: `
    <nav>
      <a routerLink="random">Resource - 1</a>
      <a routerLink="search">Resource - 2</a>
      <a routerLink="rxsearch">RxResource</a>
      <a routerLink="linked-signal">Linked Signal</a>
    </nav>
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [`
    :host {
      display: flex;
    }

    nav {
      display: flex;
      flex-direction: column;
      width: 250px;
      flex-shrink: 0;

      a {
        padding: 4px;
      }
    }

    main {
      flex-grow: 1;
    }
  `],
  imports: [RouterOutlet, RouterLink]
})
export class AppComponent {
 
}
