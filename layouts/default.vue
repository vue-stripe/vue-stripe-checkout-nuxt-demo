<template lang="pug">
  v-app#app
    v-app-bar(
      color="white"
      flat
      absolute
      app
    )
      img(width="50" src="../assets/vue-stripe-logo-variant-1-small.png")
      h2 Vue Stripe | Nuxt Demo
      v-spacer
      v-btn(
        depressed
        color="primary"
        href="https://github.com/vue-stripe/vue-stripe"
      ).text-none.mr-2 Vue Stripe
      v-btn(
        depressed
        href="https://github.com/vue-stripe/vue-stripe-checkout-nuxt-demo"
      ).text-none GitHub
    nuxt
</template>

<script>
export default {
  data () {
    return {};
  },
};
</script>
