<template>
  <article>
    <LoadingScreen v-if="$fetchState.pending" />
    <section v-else>
      <h1>{{ product.title }}</h1>
      <span>{{ product.description }}</span>
      <p>{{ product.price }}</p>
      <p>{{ product.brand }}</p>
      <p>{{ product.category }}</p>
      <NuxtLink to="/">Back</NuxtLink>
    </section>
  </article>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      product: null,
    }
  },
  async fetch() {
    await this.getSingleProduct()
  },
  fetchDelay: 1000,
  methods: {
    async getSingleProduct() {
      const data = axios.get(
        `https://dummyjson.com/products/${this.$route.params.productid}`
      )
      const result = await data
      this.product = result.data
    },
  },
}
</script>
