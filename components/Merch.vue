<template>
  <div class="merch">
    <a class="anchor" id="merch"></a>
    <div class="merch__inner row pt-5 pb-5 d-flex flex-column flex-lg-row justify-content-center align-items-center"
      v-editable="blok">
      <div class="container">
        <h2 class="text-center mb-3">{{blok.headline}} coming soon!</h2>
        <!-- <div class="row d-flex flex-column flex-lg-row justify-content-center align-items-center">
          <div class="col-11 pt-3 col-lg-12 p-4">
            <p class="text-center">Coming soon!</p>
          </div>
        </div> -->
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