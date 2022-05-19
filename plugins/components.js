import Vue from 'vue'
import Page from '~/components/Page.vue'
import About from '~/components/About.vue'
import Gigs from '~/components/Gigs.vue'
import Video from '~/components/Video.vue'
import Contact from '~/components/Contact.vue'
import Music from '~/components/Music.vue'
import Hero from '~/components/Hero.vue'

Vue.component('about', About)
Vue.component('page', Page)
Vue.component('gig_list', Gigs)
Vue.component('video_player', Video)
Vue.component('contact', Contact)
Vue.component('music_player', Music)
Vue.component('hero', Hero)