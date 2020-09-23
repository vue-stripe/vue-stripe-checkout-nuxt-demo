import Vue from 'vue';
import { StripeCheckout } from 'vue-stripe-checkout';

export default () => {
  Vue.component('StripeCheckout', StripeCheckout);
};
