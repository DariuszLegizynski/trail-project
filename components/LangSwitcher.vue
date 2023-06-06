<template>
    <div class="flex justify-end text-xs">
      <p data-cy="lang-title">{{$t('language.text')}}:</p>
      <select id="name" v-model="$i18n.locale" data-cy="lang-change">
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