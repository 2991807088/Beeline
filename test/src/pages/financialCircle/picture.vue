<template>
    <div id="card-center">
        <header>
            <p @click="goBack">
                <span>
                    <van-icon name="arrow-left" />
                </span>
            </p>
            <p>{{title}}</p>
            <p>
                <span></span>
            </p>
        </header>
        <img v-if="level == '1'" src="http://fx.91dianji.com.cn/xinyongka_tuiguang.png" alt="">
        <img v-else src="http://fx.91dianji.com.cn/tuiguang_sucai.jpg" alt="">
        <div class="tips center">tips: 请长按图片保存到手机</div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            title: '',
            level: '',
        }
    },
    methods:{
        goBack(){
            this.$router.go(-1);
        }
    },
    created() {
        console.log(this.$route.query.title);
        if(this.$route.query.title == 'tuiguang'){
            this.title = '信用卡推广';
            this.level = '1';
        }else{
            this.title = '信用卡素材';
            this.level = '2';
        }
    },
}
</script>

<style lang="less" >
#card-center {
    padding-top: 90px;
    header {
        height: 86px;
        line-height: 86px;
        width:100%;
        background: #ffa800;
        display: flex;
        justify-content: space-between;
        color:#fff;
        position:fixed;
        top: 0;
        left: 0;
        z-index:999;
        font-size:28px;
        >p {
            &:nth-of-type(1){
                margin-left:10px;
            }
            &:nth-of-type(3){
                margin-right: 10px;
            }
        }
    }
    img{
        width: 80%;
        height: auto;
        margin-top: 20px;
        margin-left: 10%;
    }
    .tips{
        width: 70%;
        height: auto;
        margin-top: 20px;
        margin-left: 15%; 
        color: #ffa800;
        font-size: 26px;
        font-weight: 700;
    }
}
</style>
