<template>
  <nav id="menu" class="navbar navbar-expand-lg navbar-dark fixed-top p-0">
    <div class="container">
      <a class="navbar-brand" href="#"><h1>A SHORT WALK TO PLUTO</h1></a>
      <b-navbar-toggle class="button" target="nav-collapse">
        <template #default="{ expanded }">
          <font-awesome-icon v-if="expanded" icon="times" />
          <font-awesome-icon v-else icon="plus" />
        </template>
      </b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto d-flex align-items-center">
          <a class="nav-link px-1 m-1" href="#">Home</a>
          <a class="nav-link px-1 m-1" href="#band">Band</a>
          <a class="nav-link px-1 m-1" href="#gigs">Shows</a>
          <a class="nav-link px-1 m-1" href="#music">Music</a>
          <a class="nav-link px-1 m-1" href="#videos">Videos</a>
          <a class="nav-link px-1 m-1" href="#contact">Contact</a>
          <a class="nav-link px-1 m-1" href="https://ashortwalktopluto.myshopify.com/">Merch</a>
          <b-navbar-nav class="px-1 is-row">
            <a class="nav-link px-1 m-1" href="https://www.facebook.com/shortwalktopluto/" target="_blank" rel="noopener noreferrer">
              <span><font-awesome-icon :icon="['fab', 'facebook']"/></span>
            </a>
            <a class="nav-link px-1 m-1" href="https://twitter.com/ASWTPOfficial" target="_blank" rel="noopener noreferrer">
              <span><font-awesome-icon :icon="['fab', 'twitter']"/></span>
            </a>
            <a class="nav-link px-1 m-1" href="https://www.instagram.com/shortwalktopluto/" target="_blank" rel="noopener noreferrer">
              <span><font-awesome-icon :icon="['fab', 'instagram']"/></span>
            </a>
          </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
    </div>
  </nav>
</template>

<style lang="scss">

  $dark: #000000;
  $pink: #ffb6c1;

  .navbar {
    background-color: $dark;
    border-bottom: 1px solid $dark;
    height: 58.25px;
    @media (max-width: 991px) {
      line-height: 1;
    }
    .navbar-brand {
      font-size: 2.5rem;
      margin-left: 0.75rem;
      h1 {
        display: inline-block;
        line-height: 0;
        &::after{
          content: '';
          display: inline-block;
          height: 2rem;
        }
      }
    }
    .button {
      border-color: $dark !important;
      svg {width: 0.875em !important;}
    }
    #nav-collapse {
      background-color: $dark;
    }
    .nav-link {
      color: white !important;
      font-size: 1rem;
      text-transform: uppercase;
      i {
        width: 30px;
      }
      @media (max-width: 991px) {
        font-size: 1rem;
      }
      &:hover {
        color: $pink !important;
      }
    }
    .is-row {
      flex-direction: row !important;
    }
  }

</style>

<script>
export default {
  name: 'Nav',
  components: { 
  }
}
</script>