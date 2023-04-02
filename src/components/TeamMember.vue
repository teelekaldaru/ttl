<template>
  <div class="col">
    <div class="team-player">
      <img
        :src="require(`@/assets/img/team/${member.image}`)"
        alt="Thumbnail Image"
        class="rounded-circle img-fluid img-raised"
      />
      <h4 class="title">{{ member.name }}</h4>
      <p class="description">{{ member.description }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Person } from "../domain/models/Person";

@Options({
  components: { },
  props: {
    member: {
      required: true,
      type: Object as () => Person
    }
  }
})
export default class TeamMember extends Vue {
  member!: Person;
}
</script>