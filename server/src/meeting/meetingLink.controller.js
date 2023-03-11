const { generateMeetingLink, validateMeetingLink } = require("./meetingLink.service");

module.exports = class MeetingLink {
	getLink(req, res) {
		const link = generateMeetingLink();
		!link.message ? res.status(400).send(link.err) : res.send(link.value);
	}
	validateLink(req, res) {
		const link = req.params.room;
		const doesExist = validateMeetingLink(link);
		!doesExist.message ? res.status(400).send(doesExist.err) : res.send(doesExist.value);
	}
};
