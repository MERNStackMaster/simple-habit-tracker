import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import LineChart from '../../components/LineChart';
import RadarChart from '../../components/RadarChart';

import API from '../../utils/API';

class Home extends React.Component {
	constructor() {
		super();

		this.state = {
			metrics: []
		};
	}

	componentDidMount() {
		API.getAllMetrics()
			.then(res => res.json())
			.then((data) => {
				console.log(data);

				this.setState({
					metrics: data
				});
			});
	}

	handleRecordSubmit = (e) => {
		const metric = e.target.getAttribute('data-metric');
		const value = e.target.value;
		const now = new Date();
		const today = `${now.getFullYear()}-${(now.getMonth()) + 1}-${now.getDate()}`; // 2020-08-27

		console.log(today);

		API.createRecord({ metric, value, today }).then(res => {
			if (res.status === 200) {
				API.getAllMetrics()
				.then(res => res.json())
				.then((data) => this.setState({ metrics: data }));
			}
		}).catch(err => console.log(err));
	};

	render() {
		return (
			<Container fluid>
				<Row>
					<Col>
						<RadarChart />
					</Col>
				</Row>
				<Row>
					{this.state.metrics.map((metric) => {
						return (
							<Col md={4} key={metric._id}>
								<h2>{metric.name}</h2>
								{metric.records.map((record) => {
									return (
										// this should be a chart
										<p key={record._id}>{JSON.stringify(record.value + ' @ ' + record.date)}</p>
									);
								})}

								<Button
									value={true}
									onClick={this.handleRecordSubmit}
									data-metric={metric.name}
									variant="success"
								>
									Good
								</Button>

								<Button
									value={false}
									onClick={this.handleRecordSubmit}
									data-metric={metric.name}
									variant="danger"
								>
									Bad
								</Button>
							</Col>
						);
					})}
				</Row>
				{/* <main>
					Test
				</main> */}
			</Container>
		);
	}
}

export default Home;