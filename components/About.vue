<template>
  <div class="about">
    <a class="anchor" id="band"></a>
    <div class="row d-flex flex-column flex-lg-row justify-content-center align-items-center">
      <div class="container pt-5 pb-5 mt-5 mb-5">
        <div 
          class="about__inner row d-flex justify-content-center align-items-center"
          v-editable="blok">
          <div class="col-12 col-md-10 col-lg-6 pr-4 pl-4 pb-0">
            <img :src="blok.image.filename + '/m/'"/>
          </div>
          <div class="col-12 col-md-10 col-lg-6">
            <h2 class="mt-3 mb-2 ml-2">{{blok.headline}}</h2>
            <p class="m-2">{{blok.paragraph}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">

  .row {
    img {
      width: 100%;
    }
    h2 {
      font-family: "alvarocondensed";
    }
    p {
      font-family: Helvetica, Arial, sans-serif;
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
  }
}
</script>