<template>
  <section class="card group">
    <img :src="thumbnail" :alt="category" class="p-2 rounded-2xl group-hover:scale-105 transition ease-in-out" />
    <h2 class="font-bold px-4 py-2 border-b border-gray-100 text-center group-hover:underline">{{ title }}</h2>
    <p class="text-xs p-4">{{ description }}</p>
  </section>
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
  },
}
</script>
