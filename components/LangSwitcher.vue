<template>
    <div>
      {{$t('language.text')}}:
      <select v-model="$i18n.locale">
        <option
          v-for="lang in $i18n.locales"
          :key="lang.iso"
          :value="lang.code"
        >
          {{lang.code}}
        </option>
      </select>
    </div>
</template>

<script>
export default {
  computed: {
    availableLocales() {
      console.log(this.$i18n.availableLocales)
      console.log(this.$i18n.locale)
      return this.$i18n.locales
    }
  },
  mounted() {
    console.log(this.$i18n)
  }
}
</script>