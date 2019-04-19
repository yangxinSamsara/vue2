<template>
    <div style="display:inline-block">
        <el-button type="success" @click="count++">你点击了{{count}}次</el-button><br>
        <slot></slot>
        <slot  name="a"></slot>
        <slot  name="b"></slot>
    </div>
</template>
<script>
export default {
    data() {
        return {
            count:1
        }
    },
}
</script>
<style>

</style>
