const callerNumber = '+18646614861';

exports.handler = function(context, event, callback) {
  const twiml = new Twilio.twiml.VoiceResponse();
  const dial = twiml.dial({callerId : callerNumber});

  var To = event.To;
  if (!To) {
  	twiml.say('Hello! You have made your first call! Good bye.');
    dial.number(To);
  }
  //twiml.append(dial);
  callback(null, twiml);
};

