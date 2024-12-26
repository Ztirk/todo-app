import './assets/main.css'

import { createApp } from 'vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faBars } from '@fortawesome/free-solid-svg-icons'

import firebaseApp from './functions/firebaseFunc'

firebaseApp

/* add icons to the library */
library.add(faUserSecret)
library.add(faBars)

// @ts-ignore
import App from '@/App.vue'

const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App)

app.use(vuetify).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
