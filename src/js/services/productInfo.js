import constants from '../utils/constants';

export default function(apiService) {
	const self = {};
	const apiConstant = constants.api;
	self.getProduct = (id) =>
        apiService.get({
            route: apiConstant.host + apiConstant.game + '?id=' + id
        });

	return self;
}