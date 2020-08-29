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
			metrics: [],
			labels: [],
			data: []
		};
	}

	componentDidMount() {
		API.getAllMetrics()
			.then(res => res.json())
			.then((data) => {
				console.log(data);

				// TODO, move this to its own function, and update other areas state is set. currently line 64
				let cumulativeScore = [];
				data.forEach((metric) => {
					console.log(metric.records);

					let score = 0;
					metric.records.forEach((rec) => {
						console.log(rec.value)
						rec.value ? score ++ : score--;
					});
					cumulativeScore.push(score);
				});
				console.log(cumulativeScore);

				this.setState({
					metrics: data,
					labels: data.map(i => i.name),
					data: cumulativeScore
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
						<RadarChart
							data={{
								labels: this.state.labels,
								datasets: [{
									label: '',												// redundant
									backgroundColor: 'rgba(179,181,198,0.2)',
									borderColor: 'rgba(179,181,198,1)',
									pointBackgroundColor: 'rgba(179,181,198,1)',
									pointBorderColor: '#fff',
									pointHoverBackgroundColor: '#fff',
									pointHoverBorderColor: 'rgba(179,181,198,1)',
									// each num in data => same index in labels.
									data: this.state.data								// passed in (made up of cumul... scores of all metrics)
								}],
							}}
						/>
					</Col>
				</Row>
				<Row>
					{this.state.metrics.map((metric) => {
						return (
							<Col md={4} key={metric._id}>
								<h2>{metric.name}</h2>
								{/* <LineChart /> */}
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