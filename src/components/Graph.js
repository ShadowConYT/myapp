import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

 
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class Graph extends Component {
	render() {
		const options = {
			theme: "light2",
			animationEnabled: true,
			exportEnabled: false,
			title: {
				text: ""
			},
			axisX:{
				lineThickness:1,
				gridThickness:1

			},
			axisY: {
				title: "",
				lineThickness: 0,
  				gridThickness: 0,
  				tickLength: 0,
  				labelFormatter: function(e) {
  	    		return "";}
				
			},
			height:95,
			width:925,
			data: [
			{
				color:'#5c9ce5',
				type: "area",
				dataPoints: [
					{ x: 1, y: 27,label:23},
					{ x: 2, y: 28 ,label:29},
					{ x: 3, y: 28,label:58},
					{ x: 4, y: 29,label:75},
					{ x: 5, y: 30,label:33},
					{ x: 6, y: 29,label:20},
					{ x: 7, y: 29,label:73},
					{x:  8,y:28,label:49}
				]
			}
			]
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