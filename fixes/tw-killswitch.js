// Terminates the client and logs an error if a specific, highly suspicious packet is sent (TW region only)

module.exports = function TwKillswitch(mod) {
	try {
		mod.hook('C_TW_SPYWARE', 'raw', (code, data) => {
			mod.log.warn(
`TW client attempting to upload data:
=== BEGIN PACKET ===
${data.toString('hex')}
=== END PACKET ===
Client has been terminated for your safety. Please report this error message to Pinkie Pie#7969 on Discord.`
			)
			mod.send('S_EXIT', 3)
			return false
		})
	}
	catch(e) {}
}