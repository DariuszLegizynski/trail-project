<template>
  <main>
    <h1
      class="p-8 sm:my-16 font-brixtonRg inline-block w-full capitalize text-3xl text-center text-sky-400"
    >
      {{ $t('home.hello') }}:
    </h1>
    <article
      v-if="products"
      ref="itemList"
      data-cy="item-list"
      class="px-4 gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
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
    <LoadingScreen v-else />
  </main>
</template>

<script>
import axios from 'axios'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default {
  name: 'IndexPage',
  async asyncData() {
    const { data } = await axios.get('https://dummyjson.com/products')
    return { products: data.products }
  },
  data() {
    return {
      products: [],
    }
  },
  mounted() {
    const refEl = this.$refs.itemList
    gsap.registerPlugin(ScrollTrigger)

    gsap.fromTo(
      refEl.children,
      { autoAlpha: 0, y: 500,  },
      {
        autoAlpha: 1,
        y: 0,
        delay: .25,
        duration: 2,
        stagger: 0.25,
      }
    )
  },
}
</script>
