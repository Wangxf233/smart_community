<template>
    <div>
        <svg :style="{ width, height }">
            <use :xlink:href="prefix + name" :fill="color"></use>
        </svg>
    </div>
</template>

<script setup lang="ts">
//接受父组件传递过来的参数
defineProps({
    //xlink:href属性前缀
    prefix: {
        type: String,
        default: '#icon-'
    },
    name: String,
    color:
    {
        type: String,
        default: ''
    },
    //接受父组件传递过来的图标的宽度
    width: {
        type: String,
        default: '16px'
    },
    //接受父组件传递过来的图标的高度
    height: {
        type: String,
        default: '16px'
    }
})
</script>

<style lang="scss" scoped></style>