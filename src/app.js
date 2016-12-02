export class App {
  constructor() {
    //this.message = 'Basic Aurelia template';  // Note: This will override any 'this.message' in other elements.
  }

  configureRouter(config, router) {
      config.title = 'AspNetCoreAureliaApp';
      console.log('in router');
      config.map([
          { route: '', moduleId: 'resources/elements/index', title: 'Home' },
          { route: '/about', moduleId: 'resources/elements/about', name: 'About' }
      ]);

      this.router = router;
  }
}
