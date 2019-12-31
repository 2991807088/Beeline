<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-06-16 10:28:15
 * @LastEditTime : 2019-12-31 17:58:58
 * @LastEditors  : Please set LastEditors
 -->
<template>
    <div id="rate_detail">
        <div class="top">
            <div class="center" @click="handleReturn"><van-icon size="26px" name="arrow-left"/></div>
            <div class="title center">会员权益</div>
        </div>
        <div class="header huangjin">
            <img class="avator" :src="headimg" alt="">
            <div class="level" v-if="level == '0'">免费花粉</div>
            <div class="level" v-if="level == '1'">铜蜂蜜</div>
            <!-- <div class="level" v-if="level == '2'">银蜜蜂</div> -->
            <div class="level" v-if="level == '3'">金蜜蜂</div>
            <div class="level" v-if="level == '4'">城市运营商</div>
            <img class="vip_icon" v-if="level == '0'" src="http://fx.91dianji.com.cn/fengxing_mianfeifensi_mini.png" alt="">
            <img class="vip_icon" v-if="level == '1'" src="http://fx.91dianji.com.cn/fengxing_huangjinhuiyuan_mini.png" alt="">
            <img class="vip_icon" v-if="level == '2'" src="http://fx.91dianji.com.cn/fengxing_zuanshihuiyuan_mini.png" alt="">
            <img class="vip_icon" v-if="level == '3'" src="http://fx.91dianji.com.cn/fengxing_hehuoren_mini.png" alt="">
            <img class="vip_icon" v-if="level == '4'" src="http://fx.91dianji.com.cn/fengxing_yunyingshang_mini.png" alt="">
            <div class="slogan start-center" v-if="level == '0'">免费花粉相关权益</div>
            <div class="slogan start-center" v-if="level == '1'">铜蜂蜜相关权益</div>
            <div class="slogan start-center" v-if="level == '2'">银蜜蜂相关权益</div>
            <div class="slogan start-center" v-if="level == '3'">金蜜蜂相关权益</div>
            <div class="slogan start-center" v-if="level == '4'">城市运营商相关权益</div>
        </div>
        <div v-if="level == '0'">
            <div class="big_title center">当前费率</div>
            <div class="rate">
                <div class="title row">
                    <div class="center">对应通道</div>
                    <div class="center">对应费率</div>
                </div>
                <div class="rows row">
                    <div class="start-center"><van-icon size="28px" name="http://fx.91dianji.com.cn/yinlian.png"/>普通商户收款费率</div>
                    <div class="end-center">0.60%+3元/笔</div>
                </div>
                  <div class="rows row">
                    <div class="start-center"><van-icon size="28px" name="http://fx.91dianji.com.cn/yinlian.png"/>优质商户收款费率</div>
                    <div class="end-center">0.70%+3元/笔</div>
                </div>
                <div class="rows row">
                    <div class="start-center"><van-icon size="28px" name="http://fx.91dianji.com.cn/yinlian.png"/>小额还款费率</div>
                    <div class="end-center">0.60%</div>
                </div>
                <div class="rows row">
                    <div class="start-center"><van-icon size="28px" name="http://fx.91dianji.com.cn/yinlian.png"/>大额还款费率</div>
                    <div class="end-center">0.75%</div>
                </div>
            </div>
            <div class="big_title center">推广充值奖励</div>
            <div class="rate">
                <div class="title row">
                    <div class="center">奖励条件</div>
                    <div class="center">领取条件</div>
                </div>
                <div class="rows row">
                    <div class="start-center"><van-icon size="28px" name="http://fx.91dianji.com.cn/yinlian.png"/>直推398元/个，奖100元/个</div>
                    <div class="end-center">升级任意<br/>会员可领</div>
                </div>
                <div class="rows row">
                    <div class="start-center"><van-icon size="28px" name="http://fx.91dianji.com.cn/yinlian.png"/>间推398元/个，奖70元/个</div>
                    <div class="end-center">升级任意<br/>会员可领</div>
                </div>
                <div class="rows row">
                    <div class="start-center"><van-icon size="28px" name="http://fx.91dianji.com.cn/yinlian.png"/>直推998元/个，奖100元/个</div>
                    <div class="end-center">升级银蜜蜂<br/>会员可领</div>
                </div>
                <div class="rows row">
                    <div class="start-center"><van-icon size="28px" name="http://fx.91dianji.com.cn/yinlian.png"/>间推998元/个，奖150元/个</div>
                    <div class="end-center">升级银蜜蜂<br/>会员可领</div>
                </div>
            </div>

            <div class="big_title center">推广佣金</div>
            <div class="rate">
                <div class="title row">
                    <div class="center">佣金比例</div>
                    <div class="center">领取条件</div>
                </div>
                <div class="rows row">
                    <div class="start-center"><van-icon size="28px" name="http://fx.91dianji.com.cn/yinlian.png"/>直推分润50%</div>
                    <div class="end-center">升级任意<br/>会员可领</div>
                </div>
                <div class="rows row">
                    <div class="start-center"><van-icon size="28px" name="http://fx.91dianji.com.cn/yinlian.png"/>间推分润10%</div>
                    <div class="end-center">升级任意<br/>会员可领</div>
                </div>
                <div class="rows row">
                    <div class="start-center"><van-icon size="28px" name="http://fx.91dianji.com.cn/yinlian.png"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;V3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;无</div>
                    <div class="end-center">无&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                </div>
            </div>


        </div>

        <!-- 铜蜂蜜 -->
        <div v-if="level == '1'">
            <div class="big_title center">当前费率</div>
            <div class="rate">
                <div class="title row">
                    <div class="center">对应通道</div>
                    <div class="center">对应费率</div>
                </div>
                <div class="rows row">
                    <div class="start-center"><van-icon size="28px" name="http://fx.91dianji.com.cn/yinlian.png"/>普通商户收款费率</div>
                    <div class="end-center">0.55%+2元/笔</div>
                </div>
                 <div class="rows row">
                    <div class="start-center"><van-icon size="28px" name="http://fx.91dianji.com.cn/yinlian.png"/>优质商户收款费率</div>
                    <div class="end-center">0.65%+2元/笔</div>
                </div>
                <div class="rows row">
                    <div class="start-center"><van-icon size="28px" name="http://fx.91dianji.com.cn/yinlian.png"/>小额还款费率</div>
                    <div class="end-center">0.55%</div>
                </div>
                 <div class="rows row">
                    <div class="start-center"><van-icon size="28px" name="http://fx.91dianji.com.cn/yinlian.png"/>大额还款费率</div>
                    <div class="end-center">0.70%</div>
                </div>
            </div>
            <div class="big_title center">推广充值奖励</div>
            <div class="rate">
                <div class="title row">
                    <div class="center">奖励条件</div>
                    <div class="center">领取条件</div>
                </div>
                <div class="rows row">
                    <div class="start-center"><van-icon size="28px" name="http://fx.91dianji.com.cn/yinlian.png"/>直推398元/个，奖40元/个</div>
                    <div class="end-center">可领</div>
                </div>
                <div class="rows row">
                    <div class="start-center"><van-icon size="28px" name="http://fx.91dianji.com.cn/yinlian.png"/>间推398元/个，奖70元/个</div>
                    <div class="end-center">可领</div>
                </div>
                <div class="rows row">
                    <div class="start-center"><van-icon size="28px" name="http://fx.91dianji.com.cn/yinlian.png"/>直推998元/个，奖100元/个</div>
                    <div class="end-center">升级银蜜蜂<br/>会员可领</div>
                </div>
                <div class="rows row">
                    <div class="start-center"><van-icon size="28px" name="http://fx.91dianji.com.cn/yinlian.png"/>间推998元/个，奖150元/个</div>
                    <div class="end-center">升级银蜜蜂<br/>会员可领</div>
                </div>
            </div>

            <div class="big_title center">推广佣金</div>
            <div class="rate">
                <div class="title row">
                    <div class="center">佣金比例</div>
                    <div class="center">领取条件</div>
                </div>
                <div class="rows row">
                    <div class="start-center"><van-icon size="28px" name="http://fx.91dianji.com.cn/yinlian.png"/>直推分润50%</div>
                    <div class="end-center">可领</div>
                </div>
                <div class="rows row">
                    <div class="start-center"><van-icon size="28px" name="http://fx.91dianji.com.cn/yinlian.png"/>间推分润10%</div>
                    <div class="end-center">可领</div>
                </div>
                <div class="rows row">
                    <div class="start-center"><van-icon size="28px" name="http://fx.91dianji.com.cn/yinlian.png"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;V3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;无</div>
                    <div class="end-center">无&nbsp;&nbsp;&nbsp;</div>
                </div>
            </div>


        </div>

        <!-- 银蜜蜂 -->
        <div v-if="level == '2'">
            <div class="big_title center">当前费率</div>
            <div class="rate">
                <div class="title row">
                    <div class="center">对应通道</div>
                    <div class="center">对应费率</div>
                </div>
                 <div class="rows row">
                    <div class="start-center"><van-icon size="28px" name="http://fx.91dianji.com.cn/yinlian.png"/>普通商户收款费率</div>
                    <div class="end-center">0.50%+2元/笔</div>
                </div>
                <div class="rows row">
                    <div class="start-center"><van-icon size="28px" name="http://fx.91dianji.com.cn/yinlian.png"/>优质商户收款费率</div>
                    <div class="end-center">0.60%+2元/笔</div>
                </div>
                <div class="rows row">
                    <div class="start-center"><van-icon size="28px" name="http://fx.91dianji.com.cn/yinlian.png"/>小额还款费率</div>
                    <div class="end-center">0.50%</div>
                </div>
                 <div class="rows row">
                    <div class="start-center"><van-icon size="28px" name="http://fx.91dianji.com.cn/yinlian.png"/>大额还款费率</div>
                    <div class="end-center">0.65%</div>
                </div>
            </div>
            <div class="big_title center">推广充值奖励</div>
            <div class="rate">
                <div class="title row">
                    <div class="center">奖励条件</div>
                    <div class="center">领取条件</div>
                </div>
                <div class="rows row">
                    <div class="start-center"><van-icon size="28px" name="http://fx.91dianji.com.cn/yinlian.png"/>直推398元/个，奖40元/个</div>
                    <div class="end-center">可领</div>
                </div>
                <div class="rows row">
                    <div class="start-center"><van-icon size="28px" name="http://fx.91dianji.com.cn/yinlian.png"/>间推398元/个，奖70元/个</div>
                    <div class="end-center">可领</div>
                </div>
                <div class="rows row">
                    <div class="start-center"><van-icon size="28px" name="http://fx.91dianji.com.cn/yinlian.png"/>直推998元/个，奖100元/个</div>
                    <div class="end-center">可领</div>
                </div>
                <div class="rows row">
                    <div class="start-center"><van-icon size="28px" name="http://fx.91dianji.com.cn/yinlian.png"/>间推998元/个，奖150元/个</div>
                    <div class="end-center">可领</div>
                </div>
            </div>

            <div class="big_title center">推广佣金</div>
            <div class="rate">
                <div class="title row">
                    <div class="center">佣金比例</div>
                    <div class="center">领取条件</div>
                </div>
                <div class="rows row">
                    <div class="start-center"><van-icon size="28px" name="http://fx.91dianji.com.cn/yinlian.png"/>直推分润50%</div>
                    <div class="end-center">可领</div>
                </div>
                <div class="rows row">
                    <div class="start-center"><van-icon size="28px" name="http://fx.91dianji.com.cn/yinlian.png"/>间推分润10%</div>
                    <div class="end-center">可领</div>
                </div>
                <div class="rows row">
                    <div class="start-center"><van-icon size="28px" name="http://fx.91dianji.com.cn/yinlian.png"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;V3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;无</div>
                    <div class="end-center">无&nbsp;&nbsp;&nbsp;</div>
                </div>
            </div>
        </div>

        <!-- 合伙人 -->
        <div v-if="level == '3'">
            <div class="big_title center">当前费率</div>
            <div class="rate">
                <div class="title row">
                    <div class="center">对应通道</div>
                    <div class="center">对应费率</div>
                </div>
                <div class="rows row">
                    <div class="start-center"><van-icon size="28px" name="http://fx.91dianji.com.cn/yinlian.png"/>普通商户收款费率</div>
                    <div class="end-center">对应会员等级</div>
                </div>
                  <div class="rows row">
                    <div class="start-center"><van-icon size="28px" name="http://fx.91dianji.com.cn/yinlian.png"/>优质商户收款费率</div>
                    <div class="end-center">对应会员等级</div>
                </div>
                <div class="rows row">
                    <div class="start-center"><van-icon size="28px" name="http://fx.91dianji.com.cn/yinlian.png"/>小额还款费率</div>
                    <div class="end-center">对应会员等级</div>
                </div>
                 <div class="rows row">
                    <div class="start-center"><van-icon size="28px" name="http://fx.91dianji.com.cn/yinlian.png"/>大额还款费率</div>
                    <div class="end-center">对应会员等级</div>
                </div>
            </div>
            <div class="big_title center">推广充值奖励</div>
            <div class="rate">
                <div class="title row">
                    <div class="center">奖励条件</div>
                    <div class="center">领取条件</div>
                </div>
                <div class="rows row">
                    <div class="start-center"><van-icon size="28px" name="http://fx.91dianji.com.cn/yinlian.png"/>直推398元/个，奖60元/个</div>
                    <div class="end-center">升级任意<br/>会员可领</div>
                </div>
                <div class="rows row">
                    <div class="start-center"><van-icon size="28px" name="http://fx.91dianji.com.cn/yinlian.png"/>间推398元/个，奖120元/个</div>
                    <div class="end-center">升级任意<br/>会员可领</div>
                </div>
                <div class="rows row">
                    <div class="start-center"><van-icon size="28px" name="http://fx.91dianji.com.cn/yinlian.png"/>直推998元/个，奖120元/个</div>
                    <div class="end-center">升级银蜜蜂<br/>会员可领</div>
                </div>
                <div class="rows row">
                    <div class="start-center"><van-icon size="28px" name="http://fx.91dianji.com.cn/yinlian.png"/>间推998元/个，奖200元/个</div>
                    <div class="end-center">升级银蜜蜂<br/>会员可领</div>
                </div>
            </div>

            <div class="big_title center">推广佣金</div>
            <div class="rate">
                <div class="title row">
                    <div class="center">佣金比例</div>
                    <div class="center">领取条件</div>
                </div>
                <div class="rows row">
                    <div class="start-center"><van-icon size="28px" name="http://fx.91dianji.com.cn/yinlian.png"/>直推分润&nbsp;60%</div>
                    <div class="end-center">升级任意<br/>会员可领</div>
                </div>
                <div class="rows row">
                    <div class="start-center"><van-icon size="28px" name="http://fx.91dianji.com.cn/yinlian.png"/>间推分润&nbsp;20%</div>
                    <div class="end-center">升级任意<br/>会员可领</div>
                </div>
                <div class="rows row">
                    <div class="start-center"><van-icon size="28px" name="http://fx.91dianji.com.cn/yinlian.png"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;V3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10%</div>
                    <div class="end-center">升级任意<br/>会员可领</div>
                </div>
            </div>
        </div>
        <div v-if="level == '4'">
            
            <img src="http://fx.91dianji.com.cn/yunyingshang01_01.jpg" alt="">
            <img src="http://fx.91dianji.com.cn/yunyingshang01_02.jpg" alt="">
            <img src="http://fx.91dianji.com.cn/yunyingshang01_03.jpg" alt="">
            <img src="http://fx.91dianji.com.cn/yunyingshang01_04.jpg" alt="">
            <img src="http://fx.91dianji.com.cn/yunyingshang01_05.jpg" alt="">
            <img src="http://fx.91dianji.com.cn/yunyingshang01_06.jpg" alt="">
        </div>
        
    </div>
</template>
<script>
export default {
    data(){
        return{
            level: '0',
            headimg: '',
        }
    },
    methods:{
       handleReturn(){
           this.$router.push({
               path:"/vip",
               query:{
                   num:this.level
               }
           })
        // console.log(this.level)
       }
    },
    created(){
        this.headimg = this.$store.state.wechat.headimg;
        this.level = this.$route.query.level;
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
        div:nth-child(1){
            width: 10%;
            height: 80px;
            color: #333;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 4;
        }
        div:nth-child(2){
            width: 100%;
            height: 80px;
            color: #000;
            font-size: 34px;
            font-weight: 700;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 3;
        }
    }
    .header{
        width: 93%;
        height: 336px;
        background-blend-mode: normal, normal;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.22);
        border-radius: 20px;
        border: solid 3px #ffffff;
        margin-left: auto;
        margin-right: auto;
        margin-top: 40px;
        position: relative;
        z-index: 1;
        .avator{
            width: 100px;
            height: 100px;
            border-radius: 50%;
            position: absolute;
            z-index: 2;
            top: 30px;
            left: 30px;
        }
        .level{
            font-size: 36px;
            color: #ffffff;
            font-weight: 700;
            position: absolute;
            z-index: 2;
            top: 60px;
            left: 145px;
        }
        .vip_icon{
            width: 113px;
            height: auto;
            position: absolute;
            z-index: 2;
            top: 20px;
            right: 30px;
        }
        .slogan{
            width: 95%;
            padding-left: 5%;
            height: 85px;
            background: rgba(0, 0, 0, 0.18);
            position: absolute;
            z-index: 2;
            left: 0px;
            bottom: 0px;
            color: #ffffff;
            font-size: 26px;
        }
    }
    .fensi{
        background-image: linear-gradient(100deg, #fe7d64 0%, #ff3f2b 100%), linear-gradient(#4f60c8, #4f60c8);
    }
    .huangjin{
        background-image: linear-gradient(100deg, #bb8e6b 0%, #9b6130 100%), linear-gradient(#4f60c8, #4f60c8);
    }
    .zuanshi{
        background-image: linear-gradient(100deg, #ebc25c 0%, #d89423 100%), linear-gradient(#4f60c8, #4f60c8);
    }
    .hehuoren{
        background-image: linear-gradient(100deg, #fea563 0%, #ff872f 50%, #ff6d00 100%), linear-gradient(#4f60c8, #4f60c8);
    }
    .yunyingshang{
        background-image: linear-gradient(100deg, #fcc53d 0%, #ffa800 100%), linear-gradient(#4f60c8, #4f60c8);
    }
    div:nth-child(3){
        >img{
            width: 100%;
            height: auto;
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
}
</style>

