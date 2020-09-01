import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import LineChart from '../../components/LineChart';

import API from '../../utils/API';

class MetricDetails extends React.Component {
	constructor() {
		super();

		this.state = {
			metricDetails: {}
		};
	}

	componentDidMount() {
		API.getOneMetric(window.location.pathname)
			.then(res => res.json())
			.then((data) => {
				this.setState({
					metricDetails: data
				});
			});
	}

	render() {
		return (
			<Container>
				<Row>
					<Col>
						<LineChart />
					</Col>
				</Row>
				<Row>
					<Col>
						<h1>{this.state.metricDetails.name}</h1>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default MetricDetails;