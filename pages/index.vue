<template>
  <main>
    <h1
      class="my-8 inline-block w-full text-dark font-bold capitalize text-3xl text-center">
      Take a look at our products:
    </h1>
    <article
      class="columns-2 md:columns-3 lg:columns-4"
    >
      <ProductCard
        v-for="(product, index) in products"
        :key="index"
        :description="product.description"
        :category="product.category"
        :thumbnail="product.thumbnail"
        :title="product.title"
      />
    </article>
  </main>
</template>

<script>
import axios from 'axios'

export default {
  name: 'IndexPage',
  data() {
    return {
      products: [],
    }
  },
  async fetch() {
    await this.getProducts()
  },
  methods: {
    async getProducts() {
      const data = axios.get('https://dummyjson.com/products')
      const result = await data

      result.data.products.forEach((product) => {
        this.products.push(product)
      })
    },
  },
}
</script>
