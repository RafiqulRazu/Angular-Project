import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { LocationComponent } from './location/location.component';

const routes: Routes = [
  {path: 'student', component:StudentComponent},
  {path: 'location', component:LocationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
