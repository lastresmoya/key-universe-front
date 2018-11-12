export default function(axios) {
	const self = {};
	const headers = {
        'Content-Type': 'application/json',
	};

	self.request = params => {
		return axios({
			method: params.method,
			url: params.route,
			headers
		});
	};

	self.get = params => self.request(Object.assign({ method: 'GET' }, params));

	return self;
}
