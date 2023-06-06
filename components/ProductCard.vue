<template>
  <NuxtLink
    data-cy="product-link"
    class="card group"
    :to="
      localeLocation({
        name: `products-productid`,
        params: { productid: productid },
      })
    "
  >
    <img
      :src="thumbnail"
      :alt="`${brand} ${category}`"
      class="margin-0-auto min-w-[300px] h-auto p-4 rounded-3xl group-hover:scale-105 transition ease-in-out"
    />
    <h2
      class="font-brixtonRg text-sky-400 text-2xl px-4 py-2 text-left group-hover:underline"
    >
      {{ title }}
    </h2>
    <p class="font-montserrat text-base px-4 py-2">{{ description }}</p>
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
      default: '',
    },
    productid: {
      type: Number,
      default: 0,
    },
  },
}
</script>
