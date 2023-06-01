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