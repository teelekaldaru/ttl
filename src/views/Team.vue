<template>
    <TeamMembers title="Korraldajad" :members="organizers"/>
    <TeamMembers title="Treenerid" :members="trainers" />
    <TeamMembers title="Vabatahtlikud" :members="voluntees" />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import TeamMembers from "../components/TeamMembers.vue";
import { Role } from "../domain/enums/Role";
import { Person } from "../domain/models/Person";

@Options({
    components: { TeamMembers }
})
export default class Team extends Vue {
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
            name: "Eliise Lindre",
            description: "You can write here details about one of your team members. You can give more details about what they do. Feel free to add some for people to be able to them outside the site.",
            role: Role.Organizer,
            image: "profile.png"
        },
        {
            name: "Lisanne Lindre",
            description: "You can write here details about one of your team members. You can give more details about what they do. Feel free to add some for people to be able to them outside the site.",
            role: Role.Organizer,
            image: "profile.png"
        },
        {
            name: "Marta",
            description: "You can write here details about one of your team members. You can give more details about what they do. Feel free to add some for people to be able to them outside the site.",
            role: Role.Trainer,
            image: "profile.png"
        },
        {
            name: "Elerin",
            description: "You can write here details about one of your team members. You can give more details about what they do. Feel free to add some for people to be able to them outside the site.",
            role: Role.Trainer,
            image: "profile.png"
        },
        {
            name: "Lisette",
            description: "You can write here details about one of your team members. You can give more details about what they do. Feel free to add some for people to be able to them outside the site.",
            role: Role.Trainer,
            image: "profile.png"
        },
        {
            name: "Moona",
            description: "You can write here details about one of your team members. You can give more details about what they do. Feel free to add some for people to be able to them outside the site.",
            role: Role.Trainer,
            image: "profile.png"
        },
        {
            name: "Caroline",
            description: "You can write here details about one of your team members. You can give more details about what they do. Feel free to add some for people to be able to them outside the site.",
            role: Role.Trainer,
            image: "profile.png"
        },
        {
            name: "Marii",
            description: "You can write here details about one of your team members. You can give more details about what they do. Feel free to add some for people to be able to them outside the site.",
            role: Role.Trainer,
            image: "profile.png"
        },
        {
            name: "Kärt",
            description: "You can write here details about one of your team members. You can give more details about what they do. Feel free to add some for people to be able to them outside the site.",
            role: Role.Voluntee,
            image: "profile.png"
        },
        {
            name: "Elis",
            description: "You can write here details about one of your team members. You can give more details about what they do. Feel free to add some for people to be able to them outside the site.",
            role: Role.Voluntee,
            image: "profile.png"
        },
        {
            name: "Adriana",
            description: "You can write here details about one of your team members. You can give more details about what they do. Feel free to add some for people to be able to them outside the site.",
            role: Role.Voluntee,
            image: "profile.png"
        },
        {
            name: "Britten",
            description: "You can write here details about one of your team members. You can give more details about what they do. Feel free to add some for people to be able to them outside the site.",
            role: Role.Voluntee,
            image: "profile.png"
        },
        {
            name: "Elina Kaska",
            description: "You can write here details about one of your team members. You can give more details about what they do. Feel free to add some for people to be able to them outside the site.",
            role: Role.Voluntee,
            image: "profile.png"
        },
        {
            name: "Liis Tomasov",
            description: "You can write here details about one of your team members. You can give more details about what they do. Feel free to add some for people to be able to them outside the site.",
            role: Role.Voluntee,
            image: "profile.png"
        },
        {
            name: "Sten",
            description: "You can write here details about one of your team members. You can give more details about what they do. Feel free to add some for people to be able to them outside the site.",
            role: Role.Voluntee,
            image: "profile.png"
        },
        {
            name: "Riho",
            description: "You can write here details about one of your team members. You can give more details about what they do. Feel free to add some for people to be able to them outside the site.",
            role: Role.Voluntee,
            image: "profile.png"
        }
    ]
    }
</script>