export default AjaxService.extend({
  session: Ember.inject.service('session'),
  host: 'http://localhost:8080',

  headers: Ember.computed('session', {
    get() {
      let headers = {};

      this.get('session').authorize('authorizer:application', (headerName, headerValue) => {
        headers[headerName] = headerValue;
      });
      return headers;
    }
  })
});
