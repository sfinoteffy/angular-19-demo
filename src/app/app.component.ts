import { ChangeDetectionStrategy, Component, computed, effect, resource, signal } from '@angular/core';
import { Joke } from './app.model';
@Component({
  selector: 'app-root',
  template: `
    <button (click)="jokeResource.reload()">Get new joke</button>
    {{ loadingText() }}
    @if (jokeResource.value()) {
      <div><img [src]="jokeResource.value()?.icon_url"></div>
      <p>{{jokeResource.value()?.value}}</p>
    }
    <p class="error">{{jokeResource.error()}}</p>
  `,
  styles: [`
    .error {
      color: red;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  readonly api = 'https://api.chucknorris.io/jokes/random';

  readonly generateRandom = signal<boolean>(true);

  readonly jokeResource = resource({
    request: () => this.generateRandom(),
    loader: () =>  fetch(this.api).then(res => res.json() as Promise<Joke>)
  });

  readonly loadingText = computed(() => this.jokeResource.isLoading() ? 'loading...' : '');

  constructor() {
    effect(() => console.log('coucou', this.jokeResource.value()?.value))
  }
}
