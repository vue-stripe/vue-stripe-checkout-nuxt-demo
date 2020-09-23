<template lang="pug">
  v-app
    v-app-bar(
      color="white"
      elevation="1"
    )
      img(width="50" src="../assets/vue-stripe-logo-variant-1-small.png")
      h2 Vue Stripe Checkout | Nuxt Demo
      v-spacer
      v-btn(
        depressed
        color="primary"
        href="https://github.com/jofftiquez/vue-stripe-checkout"
      ).text-none.mr-2 Vue Stripe Checkout
      v-btn(
        depressed
        href="https://github.com/jofftiquez/vue-stripe-checkout-nuxt-demo"
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
