// Attempts to enforce GDPR compliance by blocking packets that export personal data without consent or the ability to opt-out

module.exports = function AntiSpyware(mod) {
	for(let pkt of [
		'C_HARDWARE_INFO',			// Low threat - Random chance per login to send generic hardware info
		'C_UPDATE_AFK_STATUS',		// High threat - Obfuscated client function that attempts to flag proxy users

		// High threat - Markers for TeraLagLogStream, which uploads highly detailed hardware and software info to Amazon AWS
		// Cannot be fully disabled, but the accuracy of said data can be reduced
		'SU_TERA_LAG_LOG_INFO',
		'SU_TERA_LAG_LOG_STRING',
		'C_CHECK_RTT'
	])
		try { mod.hook(pkt, 'raw', () => false) } catch {}
}