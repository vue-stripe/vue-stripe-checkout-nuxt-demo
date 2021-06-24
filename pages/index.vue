<template lang="pug">
  v-container
    //- v-row(justify="center")
      v-col(cols="12" md="12").text-center
    v-row(justify="center").mt-16
      v-col(cols="12" md="12").text-center
        img(width="150" src="../assets/vue-stripe-logo-variant-1-small.png")
      v-col(cols="12" md="6")
        v-card(outlined)
          v-toolbar(flat color="#f7f7f7")
            h2 Stripe Checkout - One-time Payment
            v-spacer
            a(href="https://vuestripe.com/stripe-checkout/one-time-payment"  target="_blank") See Docs
          v-card-text.text-center
            img(width="200" src="../assets/common-sense.jpeg")
            h2 Buy common sense for $10.00
            stripe-checkout(
              ref="checkoutRef"
              mode="payment"
              :pk="pk"
              :line-items="lineItems"
              :success-url="successURL"
              :cancel-url="cancelURL"
              @loading="v => loading = v"
            )
            br
            v-alert(
              dark
              v-if="redirectState"
              :color="redirectState"
              dismissible
            ) Payment {{redirectState}}
          v-card-actions
            v-spacer
            v-btn(
              depressed
              large
              color="primary"
              :loading="loading"
              :disabled="loading"
              @click="checkout"
            ).text-none Pay $10
      v-col(cols="12" md="6")
        v-card(outlined)
          v-toolbar(flat color="#f7f7f7")
            h2 Stripe Elements - Card
            v-spacer
            a(href="https://vuestripe.com/stripe-elements/card"  target="_blank") See Docs
          v-card-text.pt-10
            stripe-element-card(
              ref="cardRef"
              :pk="pk"
              hide-postal-code
              @token="tokenCreated"
              @loading="v => loading = v"
            )
            pre {{token}}
          v-card-actions
            v-spacer
            v-btn(
              depressed
              large
              color="primary"
              :loading="loading"
              :disabled="loading"
              @click="$refs.cardRef.submit()"
            ).text-none Generate token
</template>

<script>
import headMeta from '~/utils/head-meta';

export default {
  data () {
    this.pk = process.env.STRIPE_PK;
    return {
      loading: false,
      lineItems: [
        {
          price: 'sku_FdQKocNoVzznpJ', // The id of the one-time price you created in your Stripe dashboard
          quantity: 1,
        },
      ],
      token: null,
      successURL: process.client && `${window.location.origin}${window.location.pathname}?state=success`,
      cancelURL: process.client && `${window.location.origin}${window.location.pathname}?state=error`,
      // Misc
      redirectState: '',
    };
  },
  computed: {
    queryState () {
      return process.client && (new URLSearchParams(window.location.search).get('state') || '');
    },
  },
  mounted () {
    if (this.queryState === 'success') {
      this.redirectState = 'success';
    }
    if (this.queryState === 'error') {
      this.redirectState = 'error';
    }
  },
  methods: {
    checkout () {
      this.loading = true;
      this.$refs.checkoutRef.redirectToCheckout();
    },
    tokenCreated (token) {
      this.token = token;
    },
  },
  head () {
    return headMeta({
      title: 'Vue Stripe + Nuxt.js Demo',
      description: 'A demo on how to implement Vue Stripe in Nuxt.js',
      socialBanner: require('../assets/vue-stripe-logo-variant-1-small.png'),
    });
  },
};
</script>
