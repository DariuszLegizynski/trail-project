<template>
  <NuxtLink :to="{name: 'products-productid', params: { productid: productid}}">
    <section class="card group">
      <img :src="thumbnail" :alt="`${brand} ${category}`" class="margin-0-auto p-2 rounded-2xl group-hover:scale-105 transition ease-in-out" />
      <h2 class="font-leight text-xs px-4 py-2 text-left group-hover:underline">{{ title }}</h2>
      <p class="font-thin text-xs p-4">{{ description }}</p>
  </section>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    description: {
      type: String,
      default: '',
    },
    thumbnail: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    category: {
      type: String,
      default: '',
    },
    brand: {
      type: String,
      default: "",
    },
    productid: {
      type: Number,
      default: 0,
    }
  },
}
</script>
