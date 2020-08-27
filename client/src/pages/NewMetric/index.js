import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import API from '../../utils/API';

class NewMetric extends React.Component {
	constructor() {
		super();

		this.state = {
			name: ''
		};
	}

	handleInputChange = (e) => {
		const { name, value } = e.target;

		this.setState({
			[name]: value
		});
	};

	handleFormSubmit = (e) => {
		e.preventDefault();

		API.createMetric(this.state)
	};

	render() {
		return (
			<Container>
				<Row>
					<Col>
					<Form>
						<Form.Group controlId="formBasicEmail">
							<Form.Label>What Metric do you want to track?</Form.Label>
							<Form.Control
								onChange={this.handleInputChange}
								type="text"
								placeholder="eg. Exercise"
								value={this.state.name}
								name="name"
								required
							/>
						</Form.Group>
						<Button onClick={this.handleFormSubmit} variant="primary" type="submit">
							Add Metric
						</Button>
					</Form>
					</Col>
				</Row>
				{/* <main>
					Test
				</main> */}
			</Container>
		);
	}
}

export default NewMetric;