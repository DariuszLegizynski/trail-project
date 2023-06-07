<template>
  <section class="py-4 px-2 flex items-center justify-end bg-sky-400">
    <p data-cy="lang-title" class="text-gray-50 text-lg">
      {{ $t('language.text') }}:
    </p>
    <NuxtLink
      v-for="locale in availableLocales"
      :key="locale.code"
      data-cy="lang-change"
      class="bg-sky-400 text-gray-50"
      :to="switchLocalePath(locale.code)"
      >&nbsp;{{ locale.code }} |
    </NuxtLink>
  </section>
</template>

<script>
export default {
  computed: {
    availableLocales() {
      return this.$i18n.locales
    },
  },
}
</script>
