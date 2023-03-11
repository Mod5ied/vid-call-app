const { useGenerateLink, useValidateLink } = require("../hooks/useGenerateLink.js");

const generateMeetingLink = () => {
	const newLink = useGenerateLink();
	if (newLink) return { message: "ok", value: newLink };
	return { message: false, err: newLink };
};

const validateMeetingLink = (link) => {
	const response = useValidateLink(link);
	if (response) return { message: "ok", value: response };
	return { message: false, err: response };
};

module.exports = { generateMeetingLink, validateMeetingLink };
