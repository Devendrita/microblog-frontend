import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

yarn add rox-browser
yarn add @types/rox-browser

import Rox from 'rox-browser';

const flags = {
  enableTutorial: new Rox.Flag(),
  titleColors: new Rox.RoxString('White', ['White', 'Blue', 'Green', 'Yellow']),
  titleSize: new Rox.RoxNumber(12, [14, 18, 24])
};

async function initPlatform() {
  const options = {  };

  // Register the flags
  Rox.register('', flags);

  // Setup connection with the feature management environment key
  await Rox.setup('8e5f3402-a531-4b85-94cb-a6802750458c', options);

  // Boolean flag example
  if (flags.enableTutorial.isEnabled()) {
    console.log('enableTutorial flag is true');
    // TODO:  Put your code here that needs to be gated
  }

   // RoxString flag example
  console.log('Title color is ' + flags.titleColors.getValue());

  // RoxNumber flag example
  console.log('Title size is ' + flags.titleSize.getValue());
}

initPlatform().then(function() {
  console.log('Done loading CloudBees platform');
});
