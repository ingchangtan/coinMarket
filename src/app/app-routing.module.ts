import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { BitcoinComponent } from './bitcoin/bitcoin.component';


const routes: Routes = [
  {path: "main", component: MainComponent},
  {path: "bitcoin", component: BitcoinComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
