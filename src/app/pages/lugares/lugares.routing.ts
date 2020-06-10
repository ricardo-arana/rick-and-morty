import { Routes, RouterModule } from "@angular/router";
import { LugaresComponent } from './lugares.component';
import { ListaComponent } from './components/lista/lista.component';
import { NgModule } from '@angular/core';



const routes: Routes = [
    {
        path: '',
        component: LugaresComponent,
        children: [
            {path: 'lista', component: ListaComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LugaresRoutingModule {}
