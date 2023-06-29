import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import '../App.css';
import Needle from '../assests/Needle.png';

Chart.register(ArcElement);

const data = {
  labels: ["Label 1", "Label 2", "Label 3", "Label 4", "Label 5"],

  datasets: [
    {
      data: [10, 10, 10, 10, 10],
      backgroundColor: ["#5c9ce5", "#5c9ce5", "#dcdcdc", "#dcdcdc", "#dcdcdc"],
      display: false,
      borderColor: "white",
    }
  ]
};

const HalfDoughnutChart = () => {
  return (
    <div>
      <Doughnut
        data={data}
        options={{
          plugins: {
            labels:{
              render:'label',
              position:'outside'
            },
            legend: {
              display: true
            },
            tooltip: {
              enabled: false
            }
          },
          rotation: -90,
          circumference: 180,
          cutout: "90%",
          maintainAspectRatio: true,
          responsive: true,
          elements: {
            arc: {
              borderRadius: 50
            }
          }
        }}
      />
      <div
        style={{
          position: "relative",
          top: "55%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center"
        }}
      >
        <div style={{fontFamily:'fonty',fontWeight:'bold',marginTop:'-40%'}}>
          <img src={Needle} style={{width:'25px',marginTop:'-1px',transform:'rotate(90deg)',marginRight:'5px'}}></img>
          <p style={{marginTop:'-5px',fontWeight:'bolder',fontSize:'25px'}}>8 km/h</p>
        </div>
      </div>
    </div>
  );
};

export default HalfDoughnutChart;
