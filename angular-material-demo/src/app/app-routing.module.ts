import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ToDoListComponent } from './service-components/to-do-list/to-do-list.component';
import { TreeDemoComponent } from './service-components/tree-demo/tree-demo.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'to-do', component: ToDoListComponent },
  { path: 'tree-demo', component: TreeDemoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
