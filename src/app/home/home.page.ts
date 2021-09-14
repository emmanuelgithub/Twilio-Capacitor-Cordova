import { Component } from '@angular/core';
import { AlertController, Platform, ToastController } from '@ionic/angular';
import { HTTP } from '@ionic-native/http/ngx';

declare var window: any;

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    tokenUrl = 'https://quickstart-4650-dev.twil.io/access-token';
    accessToken = '';
    speakerEnabled = false;
    status = 'Initializing...';
    timer = 0;
    incoming = false;
    calling = false;
    from = '';

    device: any;
    call: any;

    constructor(
        public toastCtrl: ToastController,
        public alertController: AlertController,
        public http: HTTP,
        public platform: Platform
    ) {
        console.log(this.platform.platforms());
        this.getToken();
    }

    async getToken() {
        this.showMessage(this.platform.platforms().toString());
       // if (this.isMobile())
       if (this.platform.is('android')    ||
           this.platform.is('capacitor')  ||
           this.platform.is('cordova')    ||
           this.platform.is('ios')        ||
           this.platform.is('ipad')       ||
           this.platform.is('iphone'))
      {
        console.log(' Inside IF ');

        console.log('android ' + this.platform.is('android'));
        console.log('capacitor ' + this.platform.is('capacitor'));
        console.log('cordova ' + this.platform.is('cordova'));
        console.log('ios ' + this.platform.is('ios'));
        console.log('ipad ' + this.platform.is('ipad'));
        console.log('iphone ' + this.platform.is('iphone'));

            await this.platform.ready();
            //this.http.get(this.tokenUrl, {}, {})
            this.http.get(this.tokenUrl,{},{})
                .then((res: any) => {
                    console.log(JSON.stringify(res));
                    // this.showMessage(JSON.stringify(res));
                    if (res.status === 200) {
                        this.accessToken = res.data;
                        this.init();
                        this.isInit();
                        this.setupHandler();
                        this.status = 'Ready';
                    }
                }).catch(err => {
                    console.log(JSON.stringify(err));
                    this.showMessage(JSON.stringify(err));
                });
        } else if (this.platform.is('mobileweb') ||
                   this.platform.is('pwa')) {

          console.log(' Inside ELSE ');
          console.log('mobileweb ' + this.platform.is('mobileweb'));
          console.log('pwa ' + this.platform.is('pwa'));

            this.http.get(this.tokenUrl, {}, {})
                .then((res: any) => {
                    console.log(res);
                    if (res.status === 200){
                        this.accessToken = res.data;
                        this.initPWA();
                    }
                }).catch(err => {
                    console.log(err);
                });
        }
    }

    init() {
        (<any>window).Twilio.TwilioVoiceClient.initialize(this.accessToken);
    }

    initPWA() {
        // Create a new outgoing Connection
        console.log('initPWA ' + this.accessToken);
        console.log(this.platform.platforms());
        this.device = new (<any>window).Twilio.Device(this.accessToken, {
            debug: true,
            answerOnBridge: true,
            // Set Opus as our preferred codec. Opus generally performs better, requiring less bandwidth and
            // providing better audio quality in restrained network conditions. Opus will be default in 2.0.
            codecPreferences: ["opus", "pcmu"],
        });
        console.log(this.device);

        // call is a Twilio.Call instance
        // const call = this.device.connect();


        this.addDeviceListeners(this.device);

        // // Device must be registered in order to receive incoming calls
        this.device.register();

    }

    isInit() {
        (<any>window).Twilio.TwilioVoiceClient.clientinitialized((res) => {
            console.log('init', JSON.stringify(res));
            this.showMessage('Ready to recieve calls');
        });
    }

    addDeviceListeners(device) {
        this.device.on('registered', () => {
            console.log('Twilio.Device Ready to make and receive calls!');
            this.status = 'Ready';
        });

        this.device.on('error', (error) => {
            console.log('Twilio.Device Error: ' + error.message);
            this.status = 'Error';
        });

        this.device.on('incoming', (call) => {
            if (call) {
                this.call = call;
                console.log(`Incoming call from ${call.parameters.From}`);
                this.incoming = true;
                this.from = call.parameters.From;
                this.status = 'Incoming call...';
                this.showMessage('Incoming call...');
            }
        });

        // device.audio.on('deviceChange', updateAllAudioDevices.bind(device));

        // Show audio selection UI if it is supported by the browser.
        // if (device.audio.isOutputSelectionSupported) {
        //     audioSelectionDiv.classList.remove('hide');
        // }
    }

    callFn() {
        this.call = this.device.connect();
    }


    setupHandler() {
        // Accept or reject a call - only needed on Android - iOS uses CallKit
        (<any>window).Twilio.TwilioVoiceClient.callinvitereceived(async (call) => {
            // var confirmed = confirm('Accept incoming call from ' + call.from + '?');
            this.showMessage(call);
            console.log('call Invite Received', JSON.stringify(call));
            if (call) {
                this.incoming = true;
                this.from = call.from;
                this.status = 'Incoming call...';
                this.showMessage('Incoming call...');
            }

        });

        // Handle Errors
        (<any>window).Twilio.TwilioVoiceClient.error((error) => {
            this.showMessage(error.message);
            console.log('error', JSON.stringify(error));
        });

        // Handle Call Connection
        (<any>window).Twilio.TwilioVoiceClient.calldidconnect((call) => {
            this.showMessage("Successfully established call");
            console.log('connect', JSON.stringify(call));
        });

        // Handle Call Disconnect
        (<any>window).Twilio.TwilioVoiceClient.calldiddisconnect((call) => {
            this.showMessage("Call ended");
            console.log('disconnect', JSON.stringify(call));
            this.status = 'Ready';
            this.calling = false;
            this.incoming = false;
        });

        this.showMessage("Handler established");
    }

    acceptCallInvite() {
        if (this.call) {
            this.call.accept();
            this.status = 'Call ongoing...';
            this.calling = true;
            return;
        }
        if (this.incoming) {
            (<any>window).Twilio.TwilioVoiceClient.acceptCallInvite();
            this.status = 'Call ongoing...';
            this.calling = true;
        }
    }

    rejectCallInvite() {
        if (this.call) {
            this.call.reject();
            this.status = 'Ready';
            this.showMessage('Reject call');
            this.calling = false;
            this.incoming = false;
            this.call = null;
            return;
        }
        if (this.incoming) {
            (<any>window).Twilio.TwilioVoiceClient.rejectCallInvite();
            this.status = 'Ready';
            this.showMessage('Reject call');
            this.calling = false;
            this.incoming = false;
        }
    }

    dial() {
        var params = { "To": "+15136559957" };
        console.log('params ' + JSON.stringify(params));

        if(this.platform.is('capacitor')){
          (<any>window).Twilio.TwilioVoiceClient.call(this.accessToken,params);
        }
        else {
          this.device.connect(params);
        }
    }

    disconnect() {
        if (this.call) {
            this.device.disconnectAll();
            this.status = 'Ready';
            this.calling = false;
            this.incoming = false;
            this.call = null;
            return;
        }
        (<any>window).Twilio.TwilioVoiceClient.disconnect();
        this.status = 'Ready';
        this.calling = false;
        this.incoming = false;
    }

    speaker() {
        this.speakerEnabled = !this.speakerEnabled;
        if (this.speakerEnabled) {
            (<any>window).Twilio.TwilioVoiceClient.setSpeaker('on');
        } else {
            (<any>window).Twilio.TwilioVoiceClient.setSpeaker('off');
        }
    }

    mute() {
        (<any>window).Twilio.TwilioVoiceClient.muteCall();
    }

    unmute() {
        (<any>window).Twilio.TwilioVoiceClient.unmuteCall();
    }

    async showMessage(message) {
        const toast = await this.toastCtrl.create({
            //   header: message,
            message,
            position: 'bottom',
            duration: 3000
        });

        toast.present();

    }

    isMobile() {
      console.log('isMobile ' + this.platform.is('cordova') );
      console.log('this.platform ' + this.platform.platforms());

      const platformNames = Object.keys(this.platform.platforms());

      console.log('platformNames ' + platformNames);

      // android
      // capacitor
      // cordova
      // ios
      // ipad
      // iphone
      // phablet
      // tablet
      // mobile
      // mobileweb
      // hybrid

        return this.platform.is('cordova');
    }
}
