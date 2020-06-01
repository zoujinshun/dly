<template>
    <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="最新帖子" name="first">最新评论</el-tab-pane>
        <el-tab-pane label="最近评论" name="second">最新博文</el-tab-pane>
        <el-tab-pane label="最多访问" name="third">最多访问</el-tab-pane>
    </el-tabs>
</template>
<script>
    export default {
        data() {
            return {
                activeName: 'first'
            };
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            }
        }
    };
</script>