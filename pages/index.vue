<template>
  <main class="test">
    <article class="mt-8 grid lg:grid-cols-6 gap-10">
      <section v-for="(product, index) in products" :key="index" class="card">
        <ProductCard :description="product.description" :category="product.category" :thumbnail="product.thumbnail" :title="product.title" />
        </section>
    </article>
  </main>
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
