<template>
  <NuxtLink :to="{name: `products-productid___${$i18n.locale}`, params: { productid: productid}}">
    <section class="card group">
      <img :src="thumbnail" :alt="`${brand} ${category}`" class="margin-0-auto p-2 rounded-2xl group-hover:scale-105 transition ease-in-out" />
      <h2 class="font-leight text-xs px-4 py-2 text-left group-hover:underline">{{ title }}</h2>
      <p class="font-thin text-xs px-4 py-2">{{ description }}</p>
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
  mounted() {
  console.log(this.$i18n.locale)
}
}
</script>
