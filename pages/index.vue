<template>
  <main>
    <LangSwitcher />
    <h1
      class="my-8 inline-block w-full font-bold capitalize text-3xl text-center">
      {{ $t('home.hello')}}:
    </h1>
    
    <article
    v-if="products"
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
    <LoadingScreen v-else />
  </main>
</template>

<script>
import axios from 'axios'

export default {
  i18n: {
      inject: true
    },
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
