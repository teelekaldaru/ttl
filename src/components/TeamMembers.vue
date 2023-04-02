<template>
    <section class="page-section section-team text-center" id="meeskond">
      <div class="container">
        <h3 class="page-section-heading text-center text-secondary" id="korraldajad">
          {{ title }}
        </h3>
        <div class="team">
          <div class="row">
            <template v-for="member in members" :key="member">
              <TeamMember :member="member" />
            </template>
          </div>
        </div>
      </div>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Person } from "../domain/models/Person";
import TeamMember from "./TeamMember.vue";

@Options({
  components: { TeamMember },
  props: {
    title: String,
    members: {
      required: true,
      type: Object as () => Person[]
    }
  }
})
export default class TeamMembers extends Vue {
  title!: string;
  members!: Person[];  
}
</script>