<template>
    <div id="radar">
        <div class="header">
            <div class="title center">AI雷达</div>
            <div class="more center" @click="handleExpect">
                <!-- <van-icon name="weapp-nav" size="28px"/> -->
                </div>
            <div class="AI start-center"><van-icon size="20px" name="aim"/>&nbsp;AI雷达</div>
            <div class="Analysis end-center" @click="handleExpect">数据分析&nbsp; <van-icon size="20px" name="http://fx.91dianji.com.cn/fengxing_jiantou.png"/></div>
            <router-link tag="div" to="/radar" class="circle center">
                <img src="http://fx.91dianji.com.cn/AI@2x.png" alt="">
                <img src="http://fx.91dianji.com.cn/leida@2x.png" class="logo" alt="">
                <p>蜂行雷达</p>
            </router-link>
            <div class="btn">
                <div class="center" @click="handleExpect">AI报表</div>
                <div class="center" @click="handleExpect">客户表单</div>
            </div>
        </div>
        <div class="menus">
            <!-- <router-link tag="div" to="/share/poster" class="per_menu row">
                <div class="icon center"><van-icon size="24px" name="http://fx.91dianji.com.cn/fengxing_poster.png"/></div>
                <div class="title start-center van-hairline--bottom">海报分享</div>
                <div class="more center van-hairline--bottom"><van-icon size="20px" name="arrow"/></div>
            </router-link>
            <router-link tag="div" :to="{path: '/picture',query: {title: 'tuiguang'}}" class="per_menu row">
                <div class="icon center"><van-icon size="24px" name="http://fx.91dianji.com.cn/fengxing_tuiguang.png"/></div>
                <div class="title start-center van-hairline--bottom">信用卡图推广</div>
                <div class="more center van-hairline--bottom"><van-icon size="20px" name="arrow"/></div>
            </router-link>       
            <router-link tag="div" :to="{path: '/picture',query: {title: 'sucai'}}" class="per_menu row">
                <div class="icon center"><van-icon size="24px" name="http://fx.91dianji.com.cn/fengxing_sucai.png"/></div>
                <div class="title start-center van-hairline--bottom">推广素材图</div>
                <div class="more center van-hairline--bottom"><van-icon size="20px" name="arrow"/></div>
            </router-link> -->
            <router-link tag="div" :to="{path: '/share/poster',query: {title: '海报分享',num:'01'}}" class="per_menu row">
                <div class="icon center"><van-icon size="24px" name="http://fx.91dianji.com.cn/fengxing_poster.png"/></div>
                <div class="title start-center van-hairline--bottom">海报分享</div>
                <div class="more center van-hairline--bottom"><van-icon size="20px" name="arrow"/></div>
            </router-link>
             <router-link tag="div" :to="{path: '/share/poster',query: {title: '信用卡图推广',num:'02'}}" class="per_menu row">
                <div class="icon center"><van-icon size="24px" name="http://fx.91dianji.com.cn/fengxing_poster.png"/></div>
                <div class="title start-center van-hairline--bottom">信用卡图推广</div>
                <div class="more center van-hairline--bottom"><van-icon size="20px" name="arrow"/></div>
            </router-link>
             <router-link tag="div" :to="{path: '/share/poster',query: {title: '推广素材图',num:'03'}}" class="per_menu row">
                <div class="icon center"><van-icon size="24px" name="http://fx.91dianji.com.cn/fengxing_poster.png"/></div>
                <div class="title start-center van-hairline--bottom">信用卡图推广</div>
                <div class="more center van-hairline--bottom"><van-icon size="20px" name="arrow"/></div>
            </router-link>
        </div>
        <footerMenu :active="active" @getChange="changeActive"></footerMenu>
    </div>
</template>

<script>
import footerMenu from '@/components/footer'
export default {
    data(){
        return{
            active: 4,
        }
    },
    components: {
        footerMenu
    },
    methods: {
         // 获取更多
        handleExpect(){
            this.$toast("敬请期待")
        },
        changeActive(obj){
            // console.log('obj', obj);
        }
    }
}
</script>

<style lang="less" scoped>
    #radar{
        width: 100vw;
        height: calc(100vh - 100px);
        overflow-y: scroll;
        overflow-x: hidden;
        .header{
            width: 100%;
            height: 980px;
            background: #ffa800;
            position: relative;
            z-index: 1;
            .title{
                width: 100%;
                height: 80px;
                position: absolute;
                top: 0;
                left: 0;
                z-index: 2;
                font-size: 34px;
                color: #ffffff;
                font-weight: 700;
            }
            .more{
                width: 15%;
                height: 80px;
                position: absolute;
                top: 0;
                right: 0;
                z-index: 3;
                color: #ffffff;
            }
            .AI{
                width: auto;
                height: 80px;
                position: absolute;
                top: 80px;
                left: 20px;
                z-index: 3;
                color: #ffffff; 
                font-size: 26px;
            }
            .Analysis{
                width: auto;
                height: 80px;
                position: absolute;
                top: 80px;
                right: 20px;
                z-index: 3;
                color: #ffffff; 
                font-size: 26px;
            }
            .circle{
                width: 100%;
                height: auto;
                position: absolute;
                top: 160px;
                right: 0px;
                z-index: 3;
                >p {
                    position: absolute;
                    top:63%;
                    right:43%;
                    color:#fff;
                }
                img:nth-child(1){
                    width: 90%;
                    height: auto;
                    animation: myMove1 4s linear infinite normal;
                    -webkit-animation: myMove1 4s linear infinite normal;
                }
                img:nth-child(2){
                    width: 144px;
                    height: auto;
                    position: absolute;
                    z-index: 2;
                    top: 264.5px;
                    left:41%;
                }
                @keyframes myMove1 {
                    from {transform: rotate(360deg);}
                    to {transform: rotate(0deg);}
                }
                
                @-webkit-keyframes myMove1 {
                    from {transform: rotate(360deg);}
                    to {transform: rotate(0deg);}
                }
                .logo{
                        // width: 20vw;
                        // height: auto;
                        // position: absolute;
                        // top: 35vw;
                        // left: 35vw;
                        z-index: 4;
                        animation:  bling 1s linear infinite;
                        -webkit-animation:  bling 1s linear infinite;
                    }
                    @keyframes bling {
                        0%{
                            transform: scale(0.8);
                        }
                        50%{
                            transform: scale(1);
                        }
                        100%{
                            transform: scale(0.8);
                        }
                    }
            }
            .btn{
                width: 100%;
                height: auto;
                position: absolute;
                bottom: 20px;
                right: 0px;
                z-index: 3;
                display: flex;
                display: -webkit-flex;
                justify-content: space-around;
                div:nth-child(1){
                    width: 40%;
                    height: 90px;
                    background-color: #e99f04;
                    border-radius: 45px;
                    color: #ffffff;
                    font-size: 30px;
                    font-weight: 700;
                }
                div:nth-child(2){
                    width: 40%;
                    height: 90px;
                    background-color: #bc8331;
                    border-radius: 45px;
                    color: #ffffff;
                    font-size: 30px;
                    font-weight: 700;
                }
            }
        }    
        .menus{
            width: 100%;
            height: auto;
            .per_menu{
                width: 100%;
                height: 90px;
                .icon{
                    width: 15%;
                    height: 100%;
                }
                .title{
                    width: 75%;
                    height: 100%;
                    font-size: 30px;
                    color: #333333;
                }
                .more{
                    width: 10%;
                    height: 100%;
                    color: #ccc;
                }
            }
        }                                                                                                                                                            
    }
</style>
