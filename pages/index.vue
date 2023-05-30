<template>
  <article class="h-screen w-full flex justify-between bg-red-50">
    <section>
      <div v-for="(product, index) in products" :key="index" class="rounded shadow p-2 bg-blue-300">
        <h2>{{product.title}}</h2>
        <img :src="product.thumbnail" :alt="product.category" />
        <span>{{product.description}}</span>
      </div>
    </section>
  </article>
</template>

<script>
import axios from "axios"

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
      const data = axios.get("https://dummyjson.com/products")
      const result = await data

      result.data.products.forEach(product => {
        this.products.push(product)
      })
    }
  }
}
</script>
