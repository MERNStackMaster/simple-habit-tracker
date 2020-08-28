import React from 'react';
import { Radar } from 'react-chartjs-2';

const data = {
  labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
  datasets: [
    {
      label: 'My First dataset',												// passed in
      backgroundColor: 'rgba(179,181,198,0.2)',
      borderColor: 'rgba(179,181,198,1)',
      pointBackgroundColor: 'rgba(179,181,198,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(179,181,198,1)',
      data: [65, 59, 90, 81, 56, 55, 40]								// passed in (made up of cumul... scores of all metrics)
    }
  ]
};

class LineChart extends React.Component {
	render() {
    return (
      <div>
        <h2>Radar Example</h2>
        <Radar data={data} />
      </div>
    );
  }
}

export default LineChart;