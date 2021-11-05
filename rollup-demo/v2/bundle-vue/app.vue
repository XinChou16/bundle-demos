<template>
    <div class="cnt">
        {{ cool }}
    </div>
</template>

<script>
export default {
    name: 'app',
    data: () => ({
        cool: 666
    })
}
</script>

<style lang="scss">
 .cnt {
    //  .foo {
    //      width: 9px;
    //  }
     color: aqua;
     background-color: #eee;
 }
</style>