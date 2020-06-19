<template>
    <div id="edit">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>User Age: {{ userAge }}</p>
        <button @click="editAge">Edit Age</button>
    </div>
</template>

<script>
export default {
     props: ['userAge'],
      methods: {
        editAge() {
            this.userAge = 30;
            thisw.$emit('ageWasEdited', this.userAge);
        }
    },
    name:'edit',
    data: () => ({

    })
}
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
