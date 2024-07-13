<script setup lang="ts">
import { contributors } from '../../contributors'
</script>

<template>
  <div class="vp-doc mx-auto">
    <h2 op80 font-normal text-center>
      感谢以下所有人的贡献与参与
    </h2>
    <p op60 font-normal text-center text-sm>
      以下排名不分先后（参与或提PR ）
    </p>
  </div>
  <div text-lg max-w-200 text-center leading-7 p-10 mx-auto>
    <div flex="~ wrap gap-1" justify-center>
      <img v-for="{ avatar } of contributors" :src="avatar" rounded-full h-15 w-15 border-1 border-gray-4
        border-solid />
    </div>
    <br>
  </div>
</template>
