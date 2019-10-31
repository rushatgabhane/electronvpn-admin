const UserStats = require('./models/userStats'),
      request = require('request');

require('dotenv').config({path: '.env'});

function saveUserStats() {

        request.get(`${process.env.ELECTRON_SERVER1_IP}/statusget/vpn1`, async (error, response, body) => {
            if(error) {
                console.log(error);
                return;
            }

            let sessionsSubstring = body.substring(body.indexOf('Sessions'), (body.indexOf('\n', body.indexOf('Sessions'))));
            let currentSessionCount = Number(sessionsSubstring.substring(sessionsSubstring.indexOf('|', '\n')).replace('|', '')) - 1;
    
            let usersSubstring = body.substring(body.indexOf('Users'), (body.indexOf('\n', body.indexOf('Users'))));
            let currentUserCount = Number(usersSubstring.substring(usersSubstring.indexOf('|', '\n')).replace('|', '')) - 1;
            
            try {
                let doc = await UserStats.findOneAndUpdate({_id: '5dbad4c39b41f2295c65c9b9'}, 
                    {$push: { 
                        currentUsers:{count: currentUserCount, time: Date.now()}, 
                        sessions:{count: currentSessionCount, time: Date.now()}
                    }}
                );
            } 
            catch(err) {
                console.error(err);
            }
            
            // var newStats = UserStats({
            //     server: {
            //         vpnhub: 'vpn1'
            //     },
            //     currentUsers: [{ count: currentUserCount, time: Date.now() }],
            //     sessions: [{ count: currentSessionCount, time: Date.now() }]
            // });

            // // save the user
            // newStats.save( (err) => {
            //     if (err) {
            //         console.error('err: ', err);
            //     }
            //     console.log('User created!');
            // });
              
        });
    
}

module.exports = {
    saveUserStats
}