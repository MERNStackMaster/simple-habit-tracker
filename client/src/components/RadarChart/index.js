import React from 'react';
import { Radar } from 'react-chartjs-2';

function RadarChart(props) {
  return (
    <div>
      <h2>Radar Example</h2>
      <Radar data={props.data} />
    </div>
  );
}

export default RadarChart;