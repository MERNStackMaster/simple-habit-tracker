export default {
	createMetric: function(data) {
		fetch('/api/metrics/new', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		}).then((res) => {
				console.log(res);

				res.status === 200 ? window.location.replace('/') : console.log('Something went wrong.');
			// window.location.replace('/');
		}).catch(err => console.log(err));
	}
}