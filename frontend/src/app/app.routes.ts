import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/dashboard/dashboard').then((m) => m.Dashboard),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./entries/list-entries/list-entries').then((m) => m.ListEntries),
      },
      {
        path: 'list-entries',
        loadComponent: () =>
          import('./entries/list-entries/list-entries').then((m) => m.ListEntries),
      },
      {
        path: 'entry/:id',
        loadComponent: () => import('./entries/view-entry/view-entry').then((m) => m.ViewEntry),
      },
      {
        path: 'entry/:id/edit',
        loadComponent: () => import('./entries/edit-entry/edit-entry').then((m) => m.EditEntry),
      },
      {
        path: 'add-entry',
        loadComponent: () => import('./entries/add-entries/add-entries').then((m) => m.AddEntries),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
