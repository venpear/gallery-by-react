import config from 'config';

function formData(data) {
	if (!data) {
		return '';
	}

	if (data instanceof FormData) {
		return data;
	}

	let s = [];
	for (let k in data) {
		s.push(k + '=' + data[k]);
	}
	return s.join('&');
}

module.exports = {
  prepareUrl: function(url) {
		// if (url.match(/^\//)) {
		// 	if (__DEV__) {
		// 		return `http://localhost:3001/${url}`;
		// 	} else {
		// 		return url;
		// 	}
		// }
		return `${config.origin.interior.domain}${url}`;;
	},
	response: function(res) {
		if (res.status < 200 || res.status >= 300) {
			var error = new Error(res.statusText);
			error.res = res;
			throw error
		}
		return res.json();
	},
  get: function(url, data = {}) {
		url = this.prepareUrl(url);
		if (url.indexOf('?') > -1) {
			url += '&' + formData(data);
		} else {
			url += '?' + formData(data);
		}

		return fetch(url, {
			credentials: 'same-origin'
		}).then(function(res){
			return this.response(res);
		}.bind(this));
	},
	post: function(url, data) {
		this.postJson(url, data);
	},
  postJson: function(url, data = {}) {
		url = this.prepareUrl(url);
		return fetch(url, {
			credentials: 'same-origin',
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		}).then(function(res){
			return this.response(res);
		}.bind(this));
	},
  postForm: function(url, data = {}) {
		url = this.prepareUrl(url);
		return fetch(url, {
			credentials: 'same-origin',
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
			},
			body: formData(data)
		}).then(function(res){
			return this.response(res);
		}.bind(this));
	},
	put: function(url, data) {
		url = this.prepareUrl(url);
		return fetch(url, {
			credentials: 'same-origin',
			method: 'PUT',
			body: formData(data)
		}).then(function(res){
			return this.response(res);
		}.bind(this));
	},
	delete: function(url) {
		url = this.prepareUrl(url);
		return fetch(url, {
			credentials: 'same-origin',
			method: 'DELETE'
		}).then(function(res){
			return this.response(res);
		}.bind(this));
	},
}
