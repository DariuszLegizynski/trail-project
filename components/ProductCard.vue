<template>
  <section class="card">
    <h2 class="font-bold p-4 border-b border-gray-100">{{ title }}</h2>
    <img :src="thumbnail" :alt="category" />
    <p class="text-xs p-4 leading-5">{{ description }}</p>
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
