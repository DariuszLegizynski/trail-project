<template>
  <article>
    <LoadingScreen v-if="$fetchState.pending" />
    <section class="p-4" v-else>
      <section class="grid grid-cols-5">
        <div v-for="(image, index) in productImages" :key="index">
          <img :src="image" alt="product image" @click="selectedImageIndex = index" />
        </div>
        <div class="grid col-span-5">
          <img :src="selectedImage" alt="big product image" />
        </div>
      </section>
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
      selectedImageIndex: 0,
    }
  },
  async fetch() {
    await this.getSingleProduct()
  },
  computed: {
    productImages() {
      return this.product.images
    },
    selectedImage() {
      return this.productImages[this.selectedImageIndex]
    }
  },
  methods: {
    async getSingleProduct() {
      const data = axios.get(
        `https://dummyjson.com/products/${this.$route.params.productid}`
      )
      const result = await data
      this.product = result.data
    },
    toggleImage(index) {
      this.selectedImageIndex = index
    }
  },
}
</script>
