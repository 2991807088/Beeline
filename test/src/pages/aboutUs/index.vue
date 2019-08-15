<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-06-16 10:28:13
 * @LastEditTime: 2019-08-15 17:24:02
 * @LastEditors: Please set LastEditors
 -->
<template>
    <div id="customerService">
        <header class="header-top row">
            <div class="left-icon start-center" @click="goBack"><van-icon color="white" size="20px" name="arrow-left"/></div>
            <div class="top-title center">关于我们</div>
            <div class="right-icon varify center"></div>
        </header>
        <div class="logo center"><img src="http://fx.91dianji.com.cn/logo.png"/></div>
        <div class="container">
            <div class="title start-center">联系我们</div>
            <div class="contact_us row">
                <div class="icon center"><van-icon name="http://fx.91dianji.com.cn/fengxing_fuwushijian.png"/></div>
                <div class="contact_title">服务时间:</div>
                <div class="contact_time start-center">周一至周日（09：00-22：00）</div>
            </div>
            <div class="contact_us row">
                <div class="icon center"><van-icon name="http://fx.91dianji.com.cn/fengxing_dianhua.png"/></div>
                <div class="contact_title">加盟热线:</div>
                <div class="jiameng_rexian">
                    <span>18221188860</span>
                    <span>张经理</span>
                </div>
                <div class="btn center">
                    <span><a href="tel:18221188860">拨打</a></span>
                </div>
            </div>
            <div class="contact_us row">
                <div class="icon center"><van-icon name="http://fx.91dianji.com.cn/fengxing_weixin.png"/></div>
                <div class="contact_title">微信号码:</div>
                <div class="contact_detail start-center" id="mobile">18221188860</div>
                <div class="btn center">
                    <span class="test" data-clipboard-action="copy" data-clipboard-target="#mobile" @click="handleCopy('18221188860')">复制</span>
                </div>
            </div>
            <div class="contact_us row">
                <div class="icon center"><van-icon name="http://fx.91dianji.com.cn/fengxing_zuoji.png"/></div>
                <div class="contact_title">客服电话:</div>
                <div class="contact_detail start-center">18221188860</div>
                <div class="btn center">
                    <span><a href="tel:18221188860">拨打</a></span>
                </div>
            </div>
            <div class="contact_us row">
                <div class="icon center"><van-icon name="http://fx.91dianji.com.cn/fengxing_weixin.png"/></div>
                <div class="contact_title">客服微信:</div>
                <div class="jiameng_rexian">
                    <span>18221188860</span>
                    <span>张经理</span>
                </div>
                <div class="btn center">
                   <span><a href="tel:18755287073">拨打</a></span>
                </div>
            </div>
        </div>
    </div>

</template>


<script>
import ClipboardJS from "clipboard";
export default {
    data() {
        return {

        }
    },
    methods:{
        goBack() {
            this.$router.go(-1);
        },
        // fuzhi
        handleCopy(data){
            var that = this;
            var clipboard = new ClipboardJS('.test');
            //成功回调
            clipboard.on('success', function(e) {
                that.$toast('复制成功');
                console.info('Action:', e.action);
                console.info('Text:', e.text);
                console.info('Trigger:', e.trigger);  
                e.clearSelection();
            });
            //失败回调
            clipboard.on('error', function(e) {
                console.error('Action:', e.action);
                console.error('Trigger:', e.trigger);
                that.$toast('复制失败');
            });
        }
    }
}
</script>

<style lang="less">
   #customerService {
       .logo{
            width: 100%;
            height: auto;
            margin-top: 100px;
            margin-bottom:50px;
            img{
                margin: auto;
                width: 60%;
                height: auto;
            }
        }
       .container {
            width: 87%;
            margin: auto;
            height: 551px;
            background-image: linear-gradient(180deg, #f7cf6c 0%, #ffa800 100%), linear-gradient(#ffffff, #ffffff);
            background-blend-mode: normal, normal;
            border-radius: 10px;
            border: solid 1px #ffffff;
            .title{
                width: 80%;
                height: 80px;
                margin: 20px auto auto auto;
                border-bottom: solid 1px #fff;
                color: #ffffff;
                font-size: 32px;
                font-weight: 700;
            }
            .contact_us{
                width: 95%;
                height: 80px;
                margin-left: auto;
                margin-right: auto;
                font-size: 28px;
                color: #ffffff;
                .icon{
                    width: 5%;
                    height: 100%;
                }
                .contact_title{
                    width: 25%;
                    height: 100%;
                    line-height: 80px;
                    text-align: center;
                }
                .contact_time{
                    width: 70%;
                    height: 100%;
                    text-align: center;
                    line-height: 80px;
                    a{
                        color: #ffffff; 
                    }
                }

                .jiameng_rexian{
                    width: 45%;
                    height: 100%;
                    line-height: 80px;
                    display: flex;
                    display: -webkit-flex;
                    justify-content: space-between;
                    -webkit-justify-content: space-between;
                }
                .btn{
                    width: 25%;
                    height: 100%;
                    line-height: 80px;
                    span{
                        display: inline-block;
                        width: 80px;
                        height: 36px;
                        text-align: center;
                        line-height: 36px;
                        background: #005e15;
                        border-radius: 4px;
                        a{
                            color: #fff;
                        }
                    }
                }


                .contact_detail{
                    width: 45%;
                    height: 100%;
                }
                .contact_details{
                    width: 70%;
                    height: 100%;
                }
            }
       }
   }
</style>
