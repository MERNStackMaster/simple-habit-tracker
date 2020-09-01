import React from 'react';

import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import LineChart from '../../components/LineChart';
import RadarChart from '../../components/RadarChart';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'

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
				this.calcCumulativeScore(data);
			});
	}

	handleRecordSubmit = (e) => {
		const metric = e.target.getAttribute('data-metric');
		const value = e.target.value;
		const now = new Date();
		const today = `${now.getFullYear()}-${(now.getMonth()) + 1}-${now.getDate()}`; // 2020-08-27

		API.createRecord({ metric, value, today }).then(res => {
			if (res.status === 200) {
				API.getAllMetrics()
					.then(res => res.json())
					.then((data) => {
						this.calcCumulativeScore(data);
					});
			}
		}).catch(err => console.log(err));
	};

	calcCumulativeScore = (data) => {
		let cumulativeScore = [];
		data.forEach((metric) => {
			console.log(metric.records);

			let score = 0;
			metric.records.forEach((rec) => {
				console.log(rec.value)
				rec.value ? score++ : score--;
			});
			cumulativeScore.push(score);
		});
		console.log(cumulativeScore);

		this.setState({
			metrics: data,
			labels: data.map(i => i.name),
			data: cumulativeScore
		});
	};

	render() {
		return (
			<Container fluid>
				<Row>
					<Col xl={8}>
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
					<Col xl={4}>
						<Row>
							{this.state.metrics.map((metric) => {
								return (
									<Col xl={6} sm={4} key={metric._id}>
										<h2><Link to={"/metric/" + metric._id}>{metric.name}</Link></h2>
										{/* <LineChart /> */}
										{/* {metric.records.map((record) => {
											return (
												// this should be a chart
												<p key={record._id}>{JSON.stringify(record.value + ' @ ' + record.date)}</p>
											);
										})} */}

										<Button
											value={true}
											onClick={this.handleRecordSubmit}
											data-metric={metric.name}
											variant="success"
										>
											<FontAwesomeIcon icon={faThumbsUp} />
										</Button>

										<Button
											value={false}
											onClick={this.handleRecordSubmit}
											data-metric={metric.name}
											variant="danger"
										>
											<FontAwesomeIcon icon={faThumbsDown} />
										</Button>
									</Col>
								);
							})}
						</Row>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default Home;