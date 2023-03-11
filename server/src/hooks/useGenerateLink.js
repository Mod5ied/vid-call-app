const { v4: meetId, validate } = require("uuid");

const useGenerateLink = () => {
	return meetId();
};

const useValidateLink = (link) => {
	return validate(link);
};

module.exports = { useGenerateLink, useValidateLink };
