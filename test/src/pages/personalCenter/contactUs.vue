<template>
    <div id="contactus">
        <header class="header-top row">
            <div class="left-icon start-center" @click="handleReturnHome"><van-icon color="white" size="20px" name="arrow-left"/></div>
            <div class="top-title center">联系我们</div>
            <div class="right-icon varify center"></div>
        </header>
        <div class="big-title">联系我们</div>
        <div class="small-title">
            公司名称：青岛宏盛和投资管理有限公司
        </div>
        <div class="small-title">
            邮箱：wangguanhui@126.com
        </div>
        <div class="small-title">
            电话：15953385222
        </div>
         <div class="small-title">
            公司地址：山东省青岛胶州市徐州路科润城上河德天经济咨询服务有限公司
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{}
    },
    methods:{
        handleReturnHome() {
            this.$router.go(-1);
        },
    }
}
</script>
<style lang="less" scoped>
    #contactus{
        width: 100vw;
        height: auto;
        padding-top: 90px;
        padding-bottom: 50px;
        .header-top {
            background-color: #ffa800; 
        }
        .big-title{
            width: 95%;
            height: auto;
             margin-left: auto;
            margin-right: auto;
            margin-top: 50px;
            font-size: 34px;
            font-weight: bold;
        }
        .small-title{
            width: 94%;
            height: auto;
            margin-left: auto;
            margin-right: auto;
            margin-top: 20px;
            font-size: 28px;
            line-height: 40px;
            letter-spacing: 3px; 
        }
    }
</style>
