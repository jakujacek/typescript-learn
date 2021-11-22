import { BoxFactory } from './design-patterns/factory';
import { Director, clientCode } from './design-patterns/builder';

class App {
  constructor(private appName: string) {}

  init() {
    const app = document.getElementById('app');
  }

  showSomething() {}
}

const app = new App('app');
app.init();

const director = new Director();
clientCode(director);
