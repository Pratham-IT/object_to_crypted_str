<script setup>

import {onMounted} from "vue";
import {useStrRoute} from "@/camp/officer.js";

const strRoute = useStrRoute();
onMounted(async () => {
  await strRoute.setToRoute({name: "sujan sapkota"});
  console.log(strRoute.getObjFromRoute())
})
</script>

<template>
  <header>
    <div class="wrapper">

    </div>
  </header>

  <main>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
