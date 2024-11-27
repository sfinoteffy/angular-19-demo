import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'search',
    loadComponent: () => import('./search/search.component').then(component => component.SearchComponent)
  },
  {
    path: 'rxsearch',
    loadComponent: () => import('./rxsearch/rxsearch.component').then(component => component.RxsearchComponent)
  },
  {
    path: 'random',
    loadComponent: () => import('./random/random.component').then(component => component.RandomComponent)
  },
  {
    path: 'linked-signal',
    loadComponent: () => import('./linked-signal/linked-signal.component').then(component => component.LinkedSignalComponent)
  },
  {
    path: '**',
    redirectTo: 'random'
  }
];
