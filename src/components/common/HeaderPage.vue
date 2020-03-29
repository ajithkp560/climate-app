<template>
    <header>
        <h1>{{ header }}</h1>
        <router-link to="/">Weather</router-link>
        <router-link to="/help">Help</router-link>
        <router-link to="/about">About</router-link>
    </header>
</template>

<script>
export default {
    name: 'HeaderPage',
    props: ['header']
}
</script>