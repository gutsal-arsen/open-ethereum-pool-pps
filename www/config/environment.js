/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'open-ethereum-pool',
    environment: environment,
    rootURL: '/',
    locationType: 'hash',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // API host and port
      ApiUrl: '//pps-main.ethermine.ru/',

      // HTTP mining endpoint
      HttpHost: 'http://pps-main.ethermine.ru',
      HttpPort: 8888,

      // Stratum mining endpoint
      StratumHost: 'pps-main.ethermine.ru',
      StratumPort: 8008,

      // Fee and payout details
      PoolFee: '1.5%',
      PayoutThreshold: '0.25 ETH',

      // For network hashrate (change for your favourite fork)
      BlockTime: 14.4
    }
  };

  if (environment === 'development') {
    /* Override ApiUrl just for development, while you are customizing
      frontend markup and css theme on your workstation.
    */
    ENV.APP.ApiUrl = 'http://localhost:8080/'
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  ENV.torii = {
    providers: {
      'google-oauth2-bearer': {
        apiKey: process.env.GOOGLE_API_KEY,
        redirectUri: "http://localhost:4200/oauth2callback"
      }
    }
  };	

  return ENV;
};
