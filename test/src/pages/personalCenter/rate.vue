<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-06-16 10:28:14
 * @LastEditTime : 2019-12-31 14:20:13
 * @LastEditors  : Please set LastEditors
 -->
<template>
    <div id="rate_detail">
        <div class="top">
            <div class="center" @click="handleReturn"><van-icon size="22px" name="arrow-left"/></div>
            <div class="title center">我的费率</div>
        </div>
        <div class="big_title center">当前费率</div>
        <div class="rate">
            <div class="title row">
                <div class="center">对应通道</div>
                <div class="center">对应费率</div>
            </div>
            <div class="rows row" v-if="level == '0'">
                <div class="start-center"><van-icon size="28px" name="http://fx.91dianji.com.cn/yinlian.png"/>普通通道收款费率</div>
                <div class="end-center">0.60%+3元/笔</div>
            </div>
             <div class="rows row" v-if="level == '0'">
                <div class="start-center"><van-icon size="28px" name="http://fx.91dianji.com.cn/yinlian.png"/>优质通道收款费率</div>
                <div class="end-center">0.70%+3元/笔</div>
            </div>
            <div class="rows row" v-if="level == '0'">
                <div class="start-center"><van-icon size="28px" name="http://fx.91dianji.com.cn/yinlian.png"/>小额还款费率</div>
                <div class="end-center">0.60%</div>
            </div>
             <div class="rows row" v-if="level == '0'">
                <div class="start-center"><van-icon size="28px" name="http://fx.91dianji.com.cn/yinlian.png"/>大额还款费率</div>
                <div class="end-center">0.75%</div>
            </div>

            <div class="rows row" v-if="level == '1'">
                <div class="start-center"><van-icon size="28px" name="http://fx.91dianji.com.cn/yinlian.png"/>普通通道收款费率</div>
                <div class="end-center">0.55%+2元/笔</div>
            </div>
              <div class="rows row" v-if="level == '1'">
                <div class="start-center"><van-icon size="28px" name="http://fx.91dianji.com.cn/yinlian.png"/>优质通道收款费率</div>
                <div class="end-center">0.65%+2元/笔</div>
            </div>
            <div class="rows row" v-if="level == '1'">
                <div class="start-center"><van-icon size="28px" name="http://fx.91dianji.com.cn/yinlian.png"/>小额还款费率</div>
                <div class="end-center">0.55%</div>
            </div>
             <div class="rows row" v-if="level == '1'">
                <div class="start-center"><van-icon size="28px" name="http://fx.91dianji.com.cn/yinlian.png"/>大额还款费率</div>
                <div class="end-center">0.70%</div>
            </div>

            <div class="rows row" v-if="level == '2'">
                <div class="start-center"><van-icon size="28px" name="http://fx.91dianji.com.cn/yinlian.png"/>普通通道收款费率</div>
                <div class="end-center">0.50%+2元/笔</div>
            </div>
             <div class="rows row" v-if="level == '2'">
                <div class="start-center"><van-icon size="28px" name="http://fx.91dianji.com.cn/yinlian.png"/>优质通道收款费率</div>
                <div class="end-center">0.60%+2元/笔</div>
            </div>
            <div class="rows row" v-if="level == '2'">
                <div class="start-center"><van-icon size="28px" name="http://fx.91dianji.com.cn/yinlian.png"/>小额还款费率</div>
                <div class="end-center">0.50%</div>
            </div>
            <div class="rows row" v-if="level == '2'">
                <div class="start-center"><van-icon size="28px" name="http://fx.91dianji.com.cn/yinlian.png"/>大额还款费率</div>
                <div class="end-center">0.65%</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            level: '',
            payrate: '',
            repayrate: '',
        }
    },
    methods:{
       handleReturn(){
           this.$router.go(-1);
       }
    },
    created(){
        this.level = this.$route.query.level;
        this.payrate = this.$route.query.payrate;
        this.repayrate = this.$route.query.repayrate;
    }
}
</script>
<style lang="less" scoped>
#rate_detail{
    width: 100vw;
    height: 100vh;
    .top{
        width: 100%;
        height: 80px;
        background:#ffa800;
        color: #fff;
        div:nth-child(1){
            width: 10%;
            height: 80px;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 4;
        }
        div:nth-child(2){
            width: 100%;
            height: 80px;
            font-size: 34px;
            font-weight: 700;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 3;
        }
    }
    .big_title{
            width: 100%;
            height: 80px;
            margin-top: 30px;
            font-size: 42px;
            letter-spacing: 0.4px;
            font-weight: 700;
            color: #000000;
        }
        .rate{
            width: 95%;
            height: auto;
            margin: auto;
            .title{
                width: 100%;
                height: 80px;
                >div{
                    width: 50%;
                    height: 100%;
                }
                font-size: 30px;
                color: #333333;
                line-height: 80px;
            }
            .rows{
                width: 90%;
                height: 80px;
                margin: auto;
                font-size: 28px;
                div:nth-child(1){
                    width: 70%;
                    height: 100%;
                }
                div:nth-child(2){
                    width: 30%;
                    height: 100%;
                }
            }
        }
        
    
}
</style>

