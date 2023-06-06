<template>
  <article>
    <section v-if="product" class="p-4">
      <section data-cy="gallery-list" class="grid justify-items-center grid-cols-5">
        <div v-for="(image, index) in productImages" :key="index">
          <img class="h-16 w-auto object-contain" :src="image" alt="product image" @click="selectedImageIndex = index" />
        </div>
        <div class="grid col-span-5">
          <img data-cy="image" class="h-80 object-contain" :src="selectedImage" alt="big product image" />
        </div>
      </section>
      <section class="grid grid-cols-1 justify-items-center">
        <h1 class="text-center font-brixtonRg text-2xl pt-4">{{ product.title }}</h1>
        <span class="font-light py-4">{{ product.description }}</span>
        <p class="font-montserrat">{{ product.price }} €</p>
        <NuxtLink data-cy="link-back" class="mt-16" :to="localePath('/')">&larr; {{$t('product.button')}}</NuxtLink>
      </section>
    </section>
    <LoadingScreen v-else />
  </article>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData({params}) {
    const {data} = await axios.get(`https://dummyjson.com/products/${params.productid}`)
      return {product: data}
  },
  data() {
    return {
      product: null,
      selectedImageIndex: 0,
    }
  },
  computed: {
    productImages() {
      return this.product.images
    },
    selectedImage() {
      return this.productImages[this.selectedImageIndex]
    }
  },
}
</script>
