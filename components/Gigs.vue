<template>
  <div class="gigs">
    <a class="anchor" id="gigs"></a>
    <div class="gigs__inner row bluebg pt-5 pb-5 d-flex flex-column flex-lg-row justify-content-center align-items-center"
      v-editable="blok">
      <div class="container px-4">
        <h2 class="text-center mb-3">{{blok.headline}}</h2>
        <table class="table mb-2 table-dark">
          <tbody>
            <tr v-for="gig in gigList" :key="gig.date">
              <td>
                <span>{{ $moment(gig.date).format('MMM Do') }}</span>
                <br>
                {{ $moment(gig.date).format('YYYY') }}
              </td>
              <td>
                <span>{{ gig.location }}</span>
                <br>
                {{ gig.city }}
              </td>
              <td v-if="gig.tickets === 'Sold Out'" class="text-right pr-3">
                {{ gig.tickets }}
              </td>
              <td v-if="gig.tickets === 'Get Tickets'" class="text-right">
                <a v-bind:href="gig.link_to_tickets">
                  <button type="button" class="btn btn-light">{{ gig.tickets }}</button>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
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
    p, a, th, td {
      font-family: Helvetica, Arial, sans-serif;
    }
    table {
      width: 100%;
    }
    td {
      line-height: 1.2;
      vertical-align: middle;
    }
    span {
      font-weight: 600;
    }
    .table-dark {
      background-color: #181818 !important;
    }
    button:hover {
      background-color: $pink !important;
      border-color: $pink !important;
    }
  }
  .bluebg {
    background-color: $blue;
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
      gigList : this.blok.gig
    }

  }
}
</script>