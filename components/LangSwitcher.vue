<template>
    <div data-cy="lang-title" class="flex justify-end text-xs">
      {{$t('language.text')}}:
      <select v-model="$i18n.locale" data-cy="lang-change">
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