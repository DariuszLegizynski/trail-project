<template>
  <article>
    <LoadingScreen v-if="$fetchState.pending" />
    <section v-else class="p-4">
      <section class="grid grid-cols-5">
        <div v-for="(image, index) in productImages" :key="index">
          <img class="h-16 w-auto object-contain" :src="image" alt="product image" @click="selectedImageIndex = index" />
        </div>
        <div class="grid col-span-5">
          <img class="h-80 object-contain" :src="selectedImage" alt="big product image" />
        </div>
      </section>
      <section class="grid grid-cols-1 justify-items-center">
        <h1 class="text-center font-normal text-2xl pt-4">{{ product.title }}</h1>
        <span class="font-light py-4">{{ product.description }}</span>
        <p class="font-thick">{{ product.price }} €</p>
        <NuxtLink class="mt-16" to="/">&larr; Back</NuxtLink>
      </section>
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
    }
  },
}
</script>
