<template>
  <div class="hero" id="hero">
    <div class="row hero bg d-flex flex-column flex-lg-row justify-content-center align-items-center" :style="cssVars">
      <img class="logo mt-5" :src="blok.image.filename"/>
    </div>
  </div>
</template>

<style lang="scss">

  .row {
    &.hero {
      height: 95vh;
    }
    &.bg {
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
    h1 {
      font-family: "alvarocondensed";
    }
    p {
      font-family: Helvetica, Arial, sans-serif;
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