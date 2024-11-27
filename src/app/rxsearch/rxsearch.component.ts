import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { JokeSearchApiResponse } from '../app.model';

@Component({
  selector: 'app-rxsearch',
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
    <p class="error">{{error()}}</p>
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
export class RxsearchComponent {
  readonly httpClient = inject(HttpClient);
  readonly api = 'https://api.chucknorris.io/jokes/search';

  readonly query = signal<string>('abc');

  readonly jokeResource = rxResource({
    request: () => ({query: this.query()}),
    loader: ({request}) =>  this.httpClient.get<JokeSearchApiResponse>(`${this.api}?query=${request.query}`)
  });

  readonly loadingText = computed(() => this.jokeResource.isLoading() ? 'loading...' : '');
  readonly error = computed(() => {
    const error = this.jokeResource.error() as any;
    return error?.error?.message ?? error;
  });
}
