export default {
	createMetric: function(data) {
		return fetch('/api/metric/new', {
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
	getOneMetric: function(url) {
		return fetch('/api' + url);
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