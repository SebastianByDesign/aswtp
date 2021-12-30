<template>
  <div class="music_player">
    <a class="anchor" id="music"></a>
    <div 
      class="music_player__inner row dark pt-5 pb-5 d-flex flex-column flex-lg-row justify-content-center align-items-center"
      v-editable="blok">
      <div class="container">
        <h2 class="text-center blue mb-3">{{blok.headline}}</h2>
        <div class="row d-flex flex-column flex-lg-row justify-content-center align-items-center">
          <div class="col-11 pt-3 bg-light col-lg-8">
            <div class="row d-flex flex-column flex-lg-row justify-content-center align-items-center">
              <div class="col-11 col-lg-3">
                <a rel="nofollow" :href="blok.link.url" target="_blank"><img :src="blok.album_cover.filename + '/m/'"/></a>
              </div>
              <div class="col-11 col-lg-9">
                <p class="mt-1 mb-0"><strong>{{ currentAudioName || audioList[0].song_title }}</strong></p>
                <p>{{blok.album_name}}</p>
                <audio-player class="pr-1 pl-1 pb-1"
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
          <div class="col-11 bg-light col-lg-8 mb-2">
            <table class="table mb-2">
              <tbody>
                <tr class="bg-light">
                  <th scope="row">{{ audioList[0].song_number }}</th>
                  <td>{{ audioList[0].song_title }}</td>
                  <td class="text-right">{{ audioList[0].song_length }}</td>
                </tr>
                <tr class="bg-light">
                  <th scope="row">{{ audioList[1].song_number }}</th>
                  <td>{{ audioList[1].song_title }}</td>
                  <td class="text-right">{{ audioList[1].song_length }}</td>
                </tr>
                <tr class="bg-light">
                  <th scope="row">{{ audioList[2].song_number }}</th>
                  <td>{{ audioList[2].song_title }}</td>
                  <td class="text-right">{{ audioList[2].song_length }}</td>
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

  .row {
    $dark: #181818;
    img {
      width: 100%;
    }
    h2 {
      font-family: "alvarocondensed";
    }
    p {
      font-family: Helvetica, Arial, sans-serif;
    }
    .dark {
      background-color: $dark;
    }
  }
  .anchor {
    display: block;
    position: relative;
    top: -50px;
    visibility: hidden;
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