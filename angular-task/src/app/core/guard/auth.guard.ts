import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const isAuthenticated = false; // Check if user is authenticated

  if(isAuthenticated) {
    return true;
  }
  else{
    router.navigate(['/']);
    return false;
  }
 
};
