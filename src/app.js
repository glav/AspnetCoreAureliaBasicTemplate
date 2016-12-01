export class App {
  constructor() {
    this.message = 'Basic Aurelia template';
  }

  configureRouter(config, router) {
      config.title = 'AspNetCoreAureliaApp';
      console.log('in router');
      config.map([
          { route: '', moduleId: 'resources/elements/index', title: 'Home' },
          { route: 'aureliaspa', moduleId: '???', title: 'Home' },
          { route: '/about', moduleId: 'contact-detail', name: 'contacts' }
      ]);

      this.router = router;
  }
}
