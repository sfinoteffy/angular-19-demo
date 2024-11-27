import { ChangeDetectionStrategy, Component, computed, effect, resource, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JokeSearchApiResponse } from '../app.model';

@Component({
  selector: 'app-search',
  imports: [FormsModule],
  template: `
    <input [ngModel]="query()" (ngModelChange)="query.set($event)"/>
    {{ loadingText() }}
    <p>total results: {{jokeResource.value()?.total}}</p>
    @for(joke of jokeResource.value()?.result; track $index) {
      <p class="joke">
        <img [src]="joke.icon_url">
        <span>{{joke.value}}</span>
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
export class SearchComponent {
  readonly api = 'https://api.chucknorris.io/jokes/search';

  readonly query = signal<string>('abc');

  readonly jokeResource = resource({
    request: () => ({query: this.query()}),
    loader: ({request}) =>  fetch(`${this.api}?query=${request.query}`).then(res => res.json() as Promise<JokeSearchApiResponse>)
  });

  readonly loadingText = computed(() => this.jokeResource.isLoading() ? 'loading...' : '');

  constructor() {
    effect(() => console.log('error', this.jokeResource.error()));
  }
}
