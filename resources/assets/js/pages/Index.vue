<template>
    <el-container>
        <el-header>
            <menu_zzz></menu_zzz>
        </el-header>
        <div class="clear"></div>
        <el-main>
            <div class="index-content">
                <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="最新帖子" name="first">
                        <a href="">
                            <div class="index-content-1">
                                <img src="/images/logo.jpg" alt="" class="index-content-1-logo">
                                <span class="index-content-1-span1">博文</span>
                                <a href="/"><img src="/images/logo.jpg" alt="" class="index-content-1-tag"></a>
                                Boolean (布尔类型)学习笔记
                                <span class="span-tag">new</span>
                                <span class="span-star-time">
                                    <i class="el-icon-star-off"></i> 24 | 2分钟前
                                </span>

                            </div>
                        </a>
                        <a href="">
                            <div class="index-content-1">
                                <img src="/images/logo.jpg" alt="" class="index-content-1-logo">
                                <span class="index-content-1-span1">博文</span>
                                <a href="/"><img src="/images/logo.jpg" alt="" class="index-content-1-tag"></a>
                                Boolean (布尔类型)学习笔记
                                <span class="span-tag">new</span>
                                <span class="span-star-time">
                                    <i class="el-icon-star-off"></i> 24 | 2分钟前
                                </span>

                            </div>
                        </a>
                        <a href="">
                            <div class="index-content-1">
                                <img src="/images/logo.jpg" alt="" class="index-content-1-logo">
                                <span class="index-content-1-span1">博文</span>
                                <a href="/"><img src="/images/logo.jpg" alt="" class="index-content-1-tag"></a>
                                Boolean (布尔类型)学习笔记
                                <span class="span-tag">new</span>
                                <span class="span-star-time">
                                    <i class="el-icon-star-off"></i> 24 | 2分钟前
                                </span>

                            </div>
                        </a>
                        <a href="">
                            <div class="index-content-1">
                                <img src="/images/logo.jpg" alt="" class="index-content-1-logo">
                                <span class="index-content-1-span1">博文</span>
                                <a href="/"><img src="/images/logo.jpg" alt="" class="index-content-1-tag"></a>
                                Boolean (布尔类型)学习笔记
                                <span class="span-tag">new</span>
                                <span class="span-star-time">
                                    <i class="el-icon-star-off"></i> 24 | 2分钟前
                                </span>

                            </div>
                        </a>
                        <a href="">
                            <div class="index-content-1">
                                <img src="/images/logo.jpg" alt="" class="index-content-1-logo">
                                <span class="index-content-1-span1">博文</span>
                                <a href="/"><img src="/images/logo.jpg" alt="" class="index-content-1-tag"></a>
                                Boolean (布尔类型)学习笔记
                                <span class="span-tag">new</span>
                                <span class="span-star-time">
                                    <i class="el-icon-star-off"></i> 24 | 2分钟前
                                </span>

                            </div>
                        </a>
                        <a href="">
                            <div class="index-content-1">
                                <img src="/images/logo.jpg" alt="" class="index-content-1-logo">
                                <span class="index-content-1-span1">博文</span>
                                <a href="/"><img src="/images/logo.jpg" alt="" class="index-content-1-tag"></a>
                                Boolean (布尔类型)学习笔记
                                <span class="span-tag">new</span>
                                <span class="span-star-time">
                                    <i class="el-icon-star-off"></i> 24 | 2分钟前
                                </span>

                            </div>
                        </a>
                        <a href="">
                            <div class="index-content-1">
                                <img src="/images/logo.jpg" alt="" class="index-content-1-logo">
                                <span class="index-content-1-span1">博文</span>
                                <a href="/"><img src="/images/logo.jpg" alt="" class="index-content-1-tag"></a>
                                Boolean (布尔类型)学习笔记
                                <span class="span-tag">new</span>
                                <span class="span-star-time">
                                    <i class="el-icon-star-off"></i> 24 | 2分钟前
                                </span>

                            </div>
                        </a>
                        <a href="">
                            <div class="index-content-1">
                                <img src="/images/logo.jpg" alt="" class="index-content-1-logo">
                                <span class="index-content-1-span1">博文</span>
                                <a href="/"><img src="/images/logo.jpg" alt="" class="index-content-1-tag"></a>
                                Boolean (布尔类型)学习笔记
                                <span class="span-tag">new</span>
                                <span class="span-star-time">
                                    <i class="el-icon-star-off"></i> 24 | 2分钟前
                                </span>

                            </div>
                        </a>

                        <el-pagination
                                background
                                layout="prev, pager, next"
                                :total="1000">
                        </el-pagination>
                    </el-tab-pane>
                    <el-tab-pane label="最近评论" name="second">
                    </el-tab-pane>
                    <el-tab-pane label="最多访问" name="third">
                    </el-tab-pane>
                </el-tabs>
            </div>
        </el-main>
        <el-footer></el-footer>
    </el-container>
</template>

<style>
    .el-header {
        padding: 0;
    }
    .el-main {
        background-color:#E4E7ED;
    }
    .el-footer {
        background-color:black;
    }
    .index-content {
        width: 1000px;
        background-color: white;
        border-radius: 5px;
        margin: 10px auto;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
        padding:10px 30px;
    }
    .index-content-1{
        height: 60px;
        border-bottom:1px solid #C0C4CC;
        margin-bottom: 10px;
    }
    .index-content-1-logo {
        height:50px;
        border-radius: 25px;
    }
    .index-content-1-span1 {
        background-color: #EBEEF5;
        color: black;
        margin-left:20px;
        display:inline-block;
        height:24px;
        line-height: 24px;
        border-radius: 3px;
        padding:0px 10px;
    }
    .index-content-1-tag {
        height: 24px;
        width: 24px;
        border-radius: 3px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
        margin-left:10px;
        margin-right: 20px;
    }
    .span-tag {
        color: red;
        margin-left:30px;
    }
    .span-star-time {
        color:#606266;
        float:right;
        line-height:50px;
        display:inline-block;
    }
</style>


<script>
    import menu_zzz from './menu_zzz.vue';


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
        },
        components:{
            'menu_zzz':menu_zzz,
        }

    }
</script>