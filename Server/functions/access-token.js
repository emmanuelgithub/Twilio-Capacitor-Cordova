exports.handler = function(context, event, callback) {

  // Create a custom Twilio Response
  const response = new Twilio.Response();
  // Set the CORS headers to allow Flex to make an error-free HTTP request
  response.appendHeader('Access-Control-Allow-Origin', '*');
  response.appendHeader('Access-Control-Allow-Methods', 'OPTIONS, POST, GET');
  response.appendHeader('Access-Control-Allow-Headers', 'Content-Type');

  const AccessToken = require('twilio').jwt.AccessToken;
  const VoiceGrant = AccessToken.VoiceGrant;

  const twilioAccountSid = context.ACCOUNT_SID;
  const twilioApiKey = context.API_KEY_SID;
  const twilioApiSecret = context.API_SECRET;

  const outgoingApplicationSid = context.APP_SID;
  const pushCredentialSid = context.PUSH_CREDENTIAL_SID;
  const identity = context.IDENTITY;

  const voiceGrant = new VoiceGrant({
    outgoingApplicationSid: outgoingApplicationSid,
    pushCredentialSid: pushCredentialSid,
    incomingAllow: true,
  });

  const token = new AccessToken(twilioAccountSid, twilioApiKey, twilioApiSecret);
  token.addGrant(voiceGrant);
  token.identity = identity;

  response.appendHeader('Content-Type', 'application/json');
  response.setBody({'token': token.toJwt()});
  //response.setBody({'token': token.toJwt(), 'push': pushCredentialSid, 'identity': identity});

  callback(null, response);
};
