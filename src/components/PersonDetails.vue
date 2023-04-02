<template>

</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: { },
  props: {
    name: String
  }
})
export default class PersonDetails extends Vue {
  name!: string;
}
</script>