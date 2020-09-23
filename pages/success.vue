<template lang="pug">
  v-container(fill-height)
    v-row(justify="center" align="center")
      v-col(cols="12" md="10")
        v-card(outlined)
          v-card-text.text-center
            h1 Success Page
          v-card-actions
            v-spacer
            v-btn(
              depressed
              large
              color="primary"
              to="/"
            ).text-none Back to home
</template>
