<template lang="pug">
  v-container(fill-height)
    v-row(justify="center" align="center")
      v-col(cols="12" md="10")
        v-card(outlined)
          v-card-text.text-center
            img(width="150" src="../assets/vue-stripe-logo-variant-1-small.png")
            stripe-checkout(
              ref="checkoutRef"
              :pk="pk"
              :items="items"
              :successUrl="successUrl"
              :cancelUrl="cancelUrl"
            )
              template(slot="checkout-button")
                v-btn(
                  depressed
                  large
                  color="primary"
                  :loading="loading"
                  :disabled="loading"
                  @click="checkout"
                ).text-none Nuxt Checkout Demo
</template>

<script>
import headMeta from '~/utils/head-meta';
export default {
  data () {
    this.pk = process.env.STRIPE_PK;
    return {
      loading: false,
      items: [
        {
          sku: 'sku_FdQKocNoVzznpJ',
          quantity: 1,
        },
      ],
    };
  },
  computed: {
    successUrl () {
      return process.browser ? `${window.location.origin}/sucess` : '';
    },
    cancelUrl () {
      return process.browser ? `${window.location.origin}/cancel` : '';
    },
  },
  methods: {
    checkout () {
      this.loading = true;
      this.$refs.checkoutRef.redirectToCheckout();
    },
  },
  head () {
    return headMeta({
      title: 'Vue Stripe Checkout + Nuxt.js Demo',
      description: 'A demo on how to implement vue-stripe-checkout in Nuxt.js',
      socialBanner: require('../assets/vue-stripe-logo-variant-1-small.png'),
    });
  },
};
</script>
