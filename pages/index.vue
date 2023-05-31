<template>
  <main>
    <h1
      class="my-8 inline-block w-full font-bold capitalize text-3xl text-center">
      Take a look at our products:
    </h1>
    <LoadingScreen class="flex-center" v-if="$fetchState.pending" />
    <article
      v-else
      class="columns-2 md:columns-3 lg:columns-4 gap-x-0"
    >
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :productid="product.id"
        :description="product.description"
        :category="product.category"
        :thumbnail="product.thumbnail"
        :brand="product.brand"
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
