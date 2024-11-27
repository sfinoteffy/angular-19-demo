import { ChangeDetectionStrategy, Component, computed, resource, signal } from '@angular/core';
import { Joke } from '../app.model';

@Component({
  selector: 'app-random',
  imports: [],
  template: `
    <button (click)="jokeResource.reload()">Get new joke</button>
    {{ loadingText() }}
    @if (jokeResource.value()) {
      <p class="joke">
        <img [src]="jokeResource.value()?.icon_url">
        <span>{{jokeResource.value()?.value}}</span>
      </p>
    }
    <p class="error">{{jokeResource.error()}}</p>
  `,
  styles: [`
    .joke {
      display: flex;
      align-items: center;
    }

    .error {
      color: red;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RandomComponent {
  readonly api = 'https://api.chucknorris.io/jokes/random';

  readonly generateRandom = signal<boolean>(true);

  readonly jokeResource = resource({
    request: () => this.generateRandom,
    loader: () =>  fetch(this.api).then(res => res.json() as Promise<Joke>)
  });

  readonly loadingText = computed(() => this.jokeResource.isLoading() ? 'loading...' : '');
}
