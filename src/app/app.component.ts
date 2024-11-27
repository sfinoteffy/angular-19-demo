import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  template: `
    <nav>
      <a routerLink="random">Resource - random</a>
      <a routerLink="search">Resource - search</a>
      <a routerLink="rxsearch">RxResource - RxSearch</a>

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
