import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DemoComponent } from './demo.component';

import { PlotlyModule } from '../plotly/plotly.module';

// Examples
import { BoxPlotComponent } from './box-plots/box-plots.component';
import { LinearChartsComponent } from './linear-charts/linear-charts.component';


const demoRoutes: Routes = [
    { path: 'home', component: HomeComponent, data: { title: 'Home' } },
    { path: 'box-plots', component: BoxPlotComponent, data: { title: 'Box Plots' } },
    { path: 'linear-charts', component: LinearChartsComponent, data: { title: 'Linear Charts' } },

    { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
    imports: [CommonModule, PlotlyModule, RouterModule.forRoot(demoRoutes, { enableTracing: true })],
    declarations: [HomeComponent, DemoComponent, BoxPlotComponent, LinearChartsComponent],
    exports: [DemoComponent],
})
export class DemoModule { }
