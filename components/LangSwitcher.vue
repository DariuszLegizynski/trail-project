<template>
    <section class="py-4 px-2 flex justify-end bg-sky-400">
      <p data-cy="lang-title" class="text-gray-50 text-base">{{$t('language.text')}}:</p>
      <select id="name" v-model="$i18n.locale" data-cy="lang-change" class="bg-sky-400 text-gray-50">
        <option
          v-for="lang in $i18n.locales"
          :key="lang.iso"
          :value="lang.code"
        >
          {{lang.code}}
        </option>
      </select>
    </section>
</template>