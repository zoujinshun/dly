<template>
        <el-menu
                :default-active="activeIndex2"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
                <el-menu-item>
                    <img src="/images/logo.jpg" alt="首页"  width="50px">
                </el-menu-item>
                <el-menu-item index="1">首页</el-menu-item>
                <el-submenu index="3">
                    <template slot="title">技术博文</template>
                    <el-submenu index="3-1">
                        <template slot="title">web前端</template>
                        <el-menu-item index="3-1-1">html</el-menu-item>
                        <el-menu-item index="3-1-2">css</el-menu-item>
                        <el-menu-item index="3-1-3">javascript</el-menu-item>
                        <el-menu-item index="3-1-4">jquery</el-menu-item>
                        <el-menu-item index="3-1-4">vue</el-menu-item>
                    </el-submenu>
                    <el-submenu index="3-2">
                        <template slot="title">后端</template>
                        <el-menu-item index="3-2-1">php</el-menu-item>
                        <el-menu-item index="3-2-2">golang</el-menu-item>
                        <el-menu-item index="3-2-3">node.js</el-menu-item>
                    </el-submenu>
                    <el-submenu index="3-3">
                        <template slot="title">运维</template>
                        <el-menu-item index="3-3-1">linux</el-menu-item>
                        <el-menu-item index="3-3-2">nginx</el-menu-item>
                        <el-menu-item index="3-3-3">docker</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-menu-item index="4">音乐</el-menu-item>
                <el-menu-item index="5">影视</el-menu-item>
                <el-menu-item index="6">日记</el-menu-item>
                <el-menu-item index="7">关于作者</el-menu-item>
                <el-menu-item index="8" class="el-menu-item-login" style="float: right">登录</el-menu-item>
        </el-menu>
</template>
<style>
    .el-menu-demo {
        border-top: #2fa360 2px solid;
        padding: 0px 15%;
        width:100%;
        position:fixed;
        opacity:1.0;
        z-index: 99;
    }
    .el-menu-item {
        padding:0px 40px;
    }
</style>
<script>
    export default {
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1'
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>