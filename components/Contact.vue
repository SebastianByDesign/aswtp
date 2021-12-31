<template>
  <div class="contact">
    <a class="anchor" id="contact"></a>
    <div class="row black d-flex flex-column flex-lg-row justify-content-center align-items-center">
      <div class="container">
        <div 
          class="contact__inner row p-2 d-flex flex-column flex-lg-row justify-content-center align-items-center"
          v-editable="blok">
          <div class="col-11 pt-3 col-lg-8">
            <h2 class="blue">{{blok.headline}}</h2>
            <p class="text-white">{{blok.address}}</p>
            <p><a class="text-white" :href="'mailto:' + blok.email.email">{{blok.email.email}}</a></p>
            <p><a class="text-white" :href="'tel:' + blok.phone.url">{{blok.phone.url}}</a></p>
            <ul class="p-0 m-0">
              <li>
                <a class="mr-3 text-white" href="https://www.facebook.com/shortwalktopluto/" target="_blank" rel="noopener noreferrer">
                  <span><font-awesome-icon :icon="['fab', 'facebook']"/></span>
                </a>
              </li>
              <li>
                <a class="mr-3 text-white" href="https://twitter.com/ASWTPOfficial" target="_blank" rel="noopener noreferrer">
                  <span><font-awesome-icon :icon="['fab', 'twitter']"/></span>
                </a>
              </li>
              <li>
                <a class="mr-3 text-white" href="https://www.instagram.com/shortwalktopluto/" target="_blank" rel="noopener noreferrer">
                  <span><font-awesome-icon :icon="['fab', 'instagram']"/></span>
                </a>
              </li>
            </ul>
          </div>
          <div class="col-11 col-lg-4 py-4">
            <img loading="lazy" class="logo" :alt="blok.image.alt" :src="blok.image.filename"/>
          </div>
          <div class="col-11">
            <p class="text-white text-center">©2021 A Short Walk to Pluto</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  $blue: #BDE9F1;
  $pink: #ffb6c1;

  .row {
    h2 {
      font-family: "alvarocondensed";
    }
    a, p, th, td {
      font-family: Helvetica, Arial, sans-serif;
    }
    li {
      display: inline-block;
    }
    a {
      &:hover {
        color: $pink !important;
        text-decoration: none;
      }
    }
    .logo {
      height: 30vh;
      @media (max-width: 991px) {
        width: 100%;
      }
    }
  }
  .pink{
    background-color: $pink;
  }
  .blue {
    color: $blue
  }
  .black {
    background-color: black;
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