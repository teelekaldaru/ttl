<template>
  <div class="team-player col-sm-12 col-md-6">
    <img
      :src="getImageUrl(member.image)"
      class="img-rounded img-raised"
    />
    
    <h4 class="title">{{ member.name }}</h4>
    <div class="description" v-for="(answer, question) in member.description">
      <span><b>{{ question }}</b></span>
      <span>{{ answer }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Person } from '../domain/models/Person';

export default defineComponent({
    props: {
        member: {
            required: true,
            type: Object as () => Person
        }
    },
    methods: {
        getImageUrl(image: string) {
            return new URL(`../assets/img/team/${image}`, import.meta.url).href;
        }
    }
});
</script>