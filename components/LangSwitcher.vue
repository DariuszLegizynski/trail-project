<template>
    <div>
      {{$t('language.text')}}:
      <select v-model="$i18n.locale">
        <option
          v-for="lang in availableLocales"
          :key="lang.iso"
          :value="lang.code"
          @click.prevent.stop="$i18n.setLocale(lang.code)">
          {{lang.code}}
        </option>
      </select>
    </div>
</template>

<script>
export default {
  computed: {
    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  }
}
</script>