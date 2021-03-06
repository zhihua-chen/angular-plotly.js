import { Injectable } from '@angular/core';
import * as Plotlyjs from 'plotly.js/dist/plotly.js';


export namespace Plotly {
    export type Data = any;
    export type Layout = any;
    export type Config = any;

    export interface Figure {
        data: Data[];
        layout: Partial<Layout>;
        frames: Partial<Config>;
    }

    // tslint:disable-next-line no-empty-interface
    export interface PlotlyHTMLElement extends HTMLElement {

    }
}



@Injectable()
export class PlotlyService {
    protected plotly = Plotlyjs;

    constructor() {
        if (typeof this.plotly === 'undefined') {
            throw new Error(`Peer dependency plotly.js isn't installed`);
        }
    }

    public newPlot(div: HTMLDivElement, data: Plotly.Data[], layout?: Partial<Plotly.Layout>, config?: Partial<Plotly.Config>) {
        return this.plotly.newPlot(div, data, layout);
    }

    public plot(div: Plotly.PlotlyHTMLElement, data: Plotly.Data[], layout?: Partial<Plotly.Layout>, config?: Partial<Plotly.Config>) {
        return this.plotly.plot(div, data, layout);
    }

    public update(div: Plotly.PlotlyHTMLElement, data: Plotly.Data[], layout?: Partial<Plotly.Layout>, config?: Partial<Plotly.Config>) {
        return this.plotly.update(div, data, layout);
    }

    public resize(div: Plotly.PlotlyHTMLElement): void {
        return this.plotly.Plots.resize(div);
    }

}
