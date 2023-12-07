import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { ar } from 'vuetify/locale'
export default defineNuxtPlugin((app) => {
    const vuetify = createVuetify({
        // ... your configuration

        locale: {
            locale: 'ar',
            messages: { ar },
          },
    })
    app.vueApp.use(vuetify)
})