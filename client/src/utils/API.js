export default {
	createMetric: function(data) {
		return fetch('/api/metrics/new', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		});
	},
	getAllMetrics: function () {
		return fetch('/api/metrics');
	},
	createRecord: function(data) {
		return fetch('/api/records/new', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		});
	}
}