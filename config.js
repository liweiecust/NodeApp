let configValue={
    dbAddress:"mongodb+srv://shawn:Lvkaimenmango@testcluster-rbx0l.azure.mongodb.net/test?retryWrites=true&w=majority",
    //dbAddress: 'mongodb://admin:Aspen100@hqqaeblade710.aspentech.com:28081/art_azpn',
    dbCollections: {
        // main: 'mongodb://admin:Aspen100@ds149481.mlab.com:49481/art_azpn',
        // test: 'mongodb://admin:Aspen100@ds157971.mlab.com:57971/art_azpn_test'
        main:
            'mongodb://admin:Aspen100@hqqaeblade710.aspentech.com:28081/art_azpn',
        test: 'mongodb://admin:Aspen100@ds157971.mlab.com:57971/art_azpn_test'
    },
    express: {
        port: 3000
    }
}

module.exports=configValue;