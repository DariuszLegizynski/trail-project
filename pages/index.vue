<template>
  <main>
    <h1
      class="my-8 sm:my-16 font-brixtonRg inline-block w-full capitalize text-3xl text-center text-sky-400">
      {{ $t('home.hello')}}:
    </h1>
    <article
      v-if="products"
      data-cy="item-list"
      class="px-4 columns-1 sm:columns-2 lg:columns-3 xl:columns-4 2xl:columns-5"
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

export default {
  name: 'IndexPage',
  async asyncData() {
    const {data} = await axios.get('https://dummyjson.com/products')
      return {products: data.products}
  },
  data() {
    return {
      products: [],
    }
  },
}
</script>
