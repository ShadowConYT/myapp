import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class Graph extends Component {	
	render() {
		const options = {
			animationEnabled: true,
			theme: "light2",
			title:{
				text: ""
			},
			axisX:{
				valueFormatString: "DD MMM",
				crosshair: {
					enabled: true,
					snapToDataPoint: true
				}
			},
			axisY: {
				title: "",
				valueFormatString: "€##0.00",
				crosshair: {
					enabled: true,
					snapToDataPoint: true,
					labelFormatter: function(e) {
						return "€" + CanvasJS.formatNumber(e.value, "##0.00");
					}
				}
			},
			data: [{
				type: "area",
				xValueFormatString: "DD MMM",
				dataPoints: [
				  { x: new Date('23%'), y: ''},
				  { x: '29%', y: ''},
				  { x: '58%', y: ''},
				  { x: '75%', y: ''},
				  { x: '33%', y: ''},
				  { x: '20%', y: ''},
				  { x: '73%', y: ''},
				  { x: '49%', y: ''}
				]
			}]
		}
		
		return (
		<div>
			<CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}
 
export default Graph