import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

class Home extends React.Component {

	render() {
		return (
			<Container fluid>
				<Row>
					<Col md="4">
						<p>Test</p>
					</Col>

					<Col md="4">
						<p>Test</p>
					</Col>

					<Col md="4">
						<p>Test</p>
					</Col>
				</Row>
				{/* <main>
					Test
				</main> */}
			</Container>
		);
	}
}

export default Home;