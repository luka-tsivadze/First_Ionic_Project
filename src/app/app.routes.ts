import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  
  {
    path: 'main-page/:id',
    loadComponent: () => import('./main-page/detailed-info/detailed-info.page').then( m => m.DetailedInfoPage)
  },
  {
    path: 'tabs',
    children: [{
      path: 'main-page',
      loadComponent: () => import('./main-page/main-page.page').then( m => m.MainPagePage)
    },
    {
      path: 'favourites',
      loadComponent: () => import('./favourites/favourites.page').then( m => m.FavouritesPage)
    },
    

  {
    path: 'profile',
    loadComponent: () => import('./profile/profile.page').then( m => m.ProfilePage)
  },
  {
    path: 'cart',
    loadComponent: () => import('./cart/cart.page').then( m => m.CartPage)
  },


    ],
    loadComponent: () => import('./tabs/tabs.page').then( m => m.TabsPage)
  },
  {
    path:'**',
    loadComponent:()=> import('./error-page/error-page.page').then(m=> m.ErrorPagePage)
  },
];
