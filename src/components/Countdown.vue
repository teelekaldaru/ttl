<template>
  <vue-countdown :time="remainingTime" v-slot="{ days, hours, minutes, seconds }">
    Tantsulaagri alguseni on jäänud
    <div class="row">
      <div class="col">
        <h1 class="display-4">{{ days }}</h1>
        <p>päeva</p>
      </div>
      <div class="col">
        <h1 class="display-4">{{ hours }}</h1>
        <p>tundi</p>
      </div>
      <div class="col">
        <h1 class="display-4">{{ minutes }}</h1>
        <p>minutit</p>
      </div>
      <div class="col">
        <h1 class="display-4">{{ seconds }}</h1>
        <p>sekundit</p>
      </div>
    </div>
  </vue-countdown>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
    components: {}
})
export default class Countdown extends Vue {
    remainingTime: number = 0;

    mounted(): void {
        const now = new Date();
        const startTime = new Date(2023, 7, 4, 11);
        this.remainingTime = startTime.getTime() - now.getTime();
    }
}
</script>