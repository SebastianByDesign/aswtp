<template>
  <div class="music_player">
    <a class="anchor" id="music"></a>
    <div 
      class="music_player__inner row pt-5 pb-5 d-flex flex-column flex-lg-row justify-content-center align-items-center"
      v-editable="blok">
      <div class="container">
        <h2 class="text-center blue mb-3">{{blok.headline}}</h2>
        <div class="row d-flex flex-column flex-lg-row justify-content-center align-items-center">
          <div class="col-12 px-4 pt-3 bg-light col-lg-8">
            <div class="row d-flex flex-column flex-lg-row justify-content-center align-items-center">
              <div class="col-12 col-lg-3">
                <a rel="nofollow" :href="blok.link.url" target="_blank"><img :alt="blok.album_cover.alt" :src="blok.album_cover.filename + '/m/'"/></a>
              </div>
              <div class="col-12 col-lg-9">
                <p class="mb-0"><strong>{{ currentAudioName || audioList[0].song_title }}</strong></p>
                <p class="mb-0">{{blok.album_name}}</p>
                <audio-player class="p-0"
                  ref="audioPlayer"
                  :audio-list="audioList.map(elm => elm.mp3.filename)"
                  :before-play="handleBeforePlay"
                  theme-color="#000000"
                  :showPlaybackRate="false"
                  :showVolumeButton="false"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="row d-flex flex-column flex-lg-row justify-content-center align-items-center">
          <div class="col-12 px-4 bg-light col-lg-8 mb-2">
            <table class="table mb-2">
              <tbody>
                <tr v-for="song in audioList" :key="song.song_number" class="bg-light">
                  <th scope="row">{{ song.song_number }}</th>
                  <td>{{ song.song_title }}</td>
                  <td class="text-right">{{ song.song_length }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">

  .music_player__inner {
    background-color: #181818;
    h2 {
      color: white;
    }
    img {
      width: 100%;
    }
  }
  
</style>

<script>

export default {
  props: {
    blok: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      currentAudioName: '',
      audioList : this.blok.song_list
    }
  },
  methods: {
    handleBeforePlay(next) {
      this.currentAudioName = this.audioList[this.$refs.audioPlayer.currentPlayIndex].song_title
      next()
    }
  }
}
</script>