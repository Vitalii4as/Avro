const avsc = require('avsc');

const validate = (script) => {
    try {
        avsc.parse(script);
        return [{
            type: 'success',
            label: '',
            title: 'Avro schema is valid',
            context: ''
        }];
    } catch(err) {
        return [{
            type: 'error',
            label: err.name,
            title: err.message,
            context: ''
        }];
    }
};

module.exports = {
	validate
};