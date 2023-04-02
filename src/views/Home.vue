<template>
    <About />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import About from "./About.vue";

@Options({
    components: { About }
})
export default class Home extends Vue {}
</script>