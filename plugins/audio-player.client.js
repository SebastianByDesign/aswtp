import Vue from 'vue'

import AudioPlayer from '@liripeng/vue-audio-player'
import '@liripeng/vue-audio-player/lib/vue-audio-player.css'

Vue.use(AudioPlayer)
Vue.component('audio-player', AudioPlayer)