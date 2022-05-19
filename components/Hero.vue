<template>
  <div class="hero" id="hero">
    <div class="row hero__inner bg d-flex flex-column flex-lg-row justify-content-center align-items-center" :style="cssVars">
      <img class="logo mt-5" :alt="blok.image.alt" :src="blok.image.filename"/>
      <a class="call-to-action p-0" rel="nofollow" :href="blok.link.url" target="_blank">
        <img class="album" :alt="blok.album_cover.alt" :src="blok.album_cover.filename + '/m/'"/>
        <h3 class="mt-2 pl-2 pr-2">{{ blok.call_to_action }}</h3>
      </a>
    </div>
  </div>
</template>

<style lang="scss">
  $blue: #BDE9F1;
  $pink: #ffb6c1;

  .hero {
    .hero__inner {
      height: 95vh;
    }
    .bg {
      background-image: var(--bg-image);
      background-size: contain;
    }
    .logo {
      height: 95vh;
      @media (max-width: 991px) {
        width: 100vw;
      }
    }
    img {
      width: 100%;
    }
    h3 {
      font-family: "alvarocondensed";
      text-align: center;
      line-height: 1;
      color: black;
      margin-bottom: 0.2rem;
    }
    .call-to-action {
      background-color: $blue;
      position: absolute;
      right: 20px;
      top: 80px;
      max-width: 15%;
      min-width: 120px;
      &:hover {
        background-color: $pink;
      }
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
      bgImage : 'url(' + this.blok.background.filename + ')'
    }
  },
  computed: {
    cssVars() {
      return {
        '--bg-image': this.bgImage
      }
    }
  }
}
</script>