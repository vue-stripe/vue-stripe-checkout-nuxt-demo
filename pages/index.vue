<template lang="pug">
  v-container
    v-row
      v-col
        h1 Stripe Checkout
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
              color="primary"
              @click="checkout"
            ).text-none Checkout
</template>

<script>
export default {
  data () {
    this.pk = process.env.STRIPE_PK;
    return {
      items: [
        {
          sku: 'sku_FdQKocNoVzznpJ',
          quantity: 1,
        },
      ],
      successUrl: 'http://localhost:3000',
      cancelUrl: 'http://localhost:3000',
    };
  },
  methods: {
    checkout () {
      this.$refs.checkoutRef.redirectToCheckout();
    },
  },
};
</script>
