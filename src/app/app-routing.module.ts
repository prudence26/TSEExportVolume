import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExportVolumeComponent } from './export-volume/export-volume.component';



const routes: Routes = [
  { path: '', redirectTo: '/export-volume', pathMatch: 'full'},
  { path: 'export-volume', component: ExportVolumeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
