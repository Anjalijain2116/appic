import { Routes } from '@angular/router';
import { authGuard } from './core/guard/auth.guard';
import { ChildComponent } from './pages/child/child.component';

export const routes: Routes = [
    {
        path: 'child',
        loadComponent: () => import('./pages/child/child.component').then(m => m.ChildComponent),
        canActivate: [authGuard]
      },
      {
        path: '',
       loadComponent: () => import('./pages/parent/parent.component').then(m => m.ParentComponent)
      },
      {
        path: 'form',
        loadComponent: () => import('./pages/form/form.component').then(m => m.FormComponent)
      }
];
