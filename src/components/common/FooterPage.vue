<template>
    <footer>
        <p>Created by {{ author }}</p>
    </footer>
</template>

<script>
export default {
    name: 'FooterPage',
    props: ['author']
}
</script>