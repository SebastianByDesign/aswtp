<template>
  <div class="video_player">
    <a class="anchor" id="videos"></a>
    <div 
      class="video_player__inner row dark pt-5 pb-5 d-flex flex-column flex-lg-row justify-content-center align-items-center"
      v-editable="blok">
      <div class="container">
        <h2 class="text-center blue mb-3">{{blok.headline}}</h2>
        <div class="row d-flex flex-column flex-lg-row justify-content-center align-items-center">
          <div class="col-11 pt-3 col-lg-12 p-4">
            <iframe width="100%" height="415" :src="blok.link.url" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  $dark: #181818;

  .row {
    h2 {
      font-family: "alvarocondensed";
    }
  }
  .dark {
    background-color: $dark;
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
  }
}
</script>