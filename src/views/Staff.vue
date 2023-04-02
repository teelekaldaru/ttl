<template>
  <section class="page-section portfolio" id="korraldajad">
      <div class="container">
        <h3 class="page-section-heading text-center text-secondary my-5">
          Korraldajad
        </h3>
        <div class="row justify-content-center">
          <template v-for="organizer in organizers" :key="organizer">
              <PersonDetails :name="organizer.name" />
          </template>
        </div>
        
        <br id="treenerid" />

        <h3 class="page-section-heading text-center text-secondary my-5">
          Treenerid
        </h3>
        <div class="row justify-content-center">
            <template v-for="trainer in trainers" :key="trainer">
                <PersonDetails :name="trainer.name" />
            </template>
        </div>
            
        <h3 class="page-section-heading text-center text-secondary my-5">
          Vabatahtlikud
        </h3>
        <div class="row justify-content-center">
            <template v-for="voluntee in voluntees" :key="voluntee">
                <PersonDetails :name="voluntee.name" />
            </template>
        </div>
      </div>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import PersonDetails from "../components/PersonDetails.vue";
import { Role } from "../domain/enums/Role";
import { Person } from "../domain/models/Person";

@Options({
  components: { PersonDetails }
})
export default class Staff extends Vue {
  organizers: Person[] = [];
    trainers: Person[] = [];
    voluntees: Person[] = [];

    mounted(): void {
        this.organizers = this.people.filter(p => p.role === Role.Organizer);
        this.trainers = this.people.filter(p => p.role === Role.Trainer);
        this.voluntees = this.people.filter(p => p.role === Role.Voluntee);
    }

    private people: Person[] = [
        {
            name: "Teele 1",
            description: "Organizer",
            role: Role.Organizer
        },
        {
            name: "Teele 2",
            description: "Trainer",
            role: Role.Trainer
        },
        {
            name: "Teele 3",
            description: "Voluntee",
            role: Role.Voluntee
        }
    ]
}
</script>