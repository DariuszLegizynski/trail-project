<template>
  <article>
    <h1
      class="my-8 sm:my-16 font-brixtonRg inline-block w-full capitalize text-4xl text-center text-sky-400">
      {{ $t('product.hello')}}:
    </h1>
    <section v-if="product" class="py-2 px-4 sm:p-4 md:grid md:grid-cols-2">
      <section data-cy="gallery-list" class="grid gap-x-4 grid-cols-5 sm:gap-x-0 sm:gap-y-2 sm:grid-cols-1">
        <div class="col-span-1 sm:grid sm:justify-items-center sm:grid-cols-5">
          <div v-for="(image, index) in productImages" :key="index">
            <img class="h-16 w-auto object-contain" :src="image" alt="product image" @click="selectedImageIndex = index" />
          </div>
        </div>
        <div class="grid col-span-4 sm:justify-items-center sm:col-span-5">
          <img data-cy="image" class="h-80 object-contain" :src="selectedImage" alt="big product image" />
        </div>
      </section>
      <section class="grid grid-cols-1 justify-items-start md:mt-16">
        <h1 class="font-brixtonRg text-sky-400 text-3xl pt-8">{{ product.title }}</h1>
        <span class="font-montserrat py-4 text-lg">{{ product.description }}</span>
        <p class="font-montserrat font-bold text-2xl">{{ product.price }} €</p>
        <NuxtLink data-cy="link-back" class="margin-0-auto pt-8 text-xl font-semibold sm:pt-16 md:pt-32" :to="localePath('/')">&larr; {{$t('product.button')}}</NuxtLink>
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
