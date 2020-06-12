import { Component } from '@angular/core';
import { ChartDataSets, ChartType, RadialChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styleUrls: ['./radar.component.sass']
})
export class RadarComponent   {

  public radarChartOptions: RadialChartOptions = {
    responsive: true,
  };
  public radarChartLabels: Label[] = ['PHP', 'NODE JS', 'JAVA', 'PYTHON', 'RUBY', 'GO', 'C#'];

  public radarChartData: ChartDataSets[] = [
    { data: [65, 59, 90, 81, 56, 55, 40], label: 'DESTABILIDAD' },
    { data: [28, 48, 40, 19, 96, 27, 100], label: ' ESTABILIDAD' }
  ];
  public radarChartType: ChartType = 'radar';
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
