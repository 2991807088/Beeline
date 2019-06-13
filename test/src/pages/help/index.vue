<template>
    <div id="page-income">
        <header class="header-top row">
            <div class="left-icon start-center" @click="handleReturnHome"><van-icon color="#333333" size="20px" name="arrow-left"/></div>
            <div class="top-title center">帮助中心</div>
            <div class="right-icon center"></div>
        </header>
        <div class="big_title start-center">常见问题</div>
        <div class="help_container">
            <div class="per_help van-hairline--bottom row">
                <div @click="handleHelpDetail('pingtaishouce')" class="help_detail van-hairline--right row">
                    <div class="icon end-center"><van-icon name="flag-o" color="#ffffff" size="32px"/></div>
                    <div class="detail">
                        <div class="title center">平台手册</div>
                        <div class="open center">点击查看</div>
                    </div>
                </div>
                <div @click="handleHelpDetail('liuchengshuoming')" class="help_detail row">
                    <div class="icon end-center"><van-icon name="flag-o" color="#ffffff" size="32px"/></div>
                    <div class="detail">
                        <div class="title center">流程说明</div>
                        <div class="open center">点击查看</div>
                    </div>
                </div>
            </div>
            <div class="per_help van-hairline--bottom row">
                <div @click="handleHelpDetail('goumaiwenti')" class="help_detail van-hairline--right row">
                    <div class="icon end-center"><van-icon name="flag-o" color="#ffffff" size="32px"/></div>
                    <div class="detail">
                        <div class="title center">购买问题</div>
                        <div class="open center">点击查看</div>
                    </div>
                </div>
                <div @click="handleHelpDetail('tuiguangwenti')" class="help_detail row">
                    <div class="icon end-center"><van-icon name="flag-o" color="#ffffff" size="32px"/></div>
                    <div class="detail">
                        <div class="title center">推广问题</div>
                        <div class="open center">点击查看</div>
                    </div>
                </div>
            </div>
            <div class="per_help van-hairline--bottom row">
                <div @click="handleHelpDetail('yongjinwenti')" class="help_detail van-hairline--right row">
                    <div class="icon end-center"><van-icon name="flag-o" color="#ffffff" size="32px"/></div>
                    <div class="detail">
                        <div class="title center">佣金问题</div>
                        <div class="open center">点击查看</div>
                    </div>
                </div>
                <div @click="handleHelpDetail('shoukuanwenti')" class="help_detail row">
                    <div class="icon end-center"><van-icon name="flag-o" color="#ffffff" size="32px"/></div>
                    <div class="detail">
                        <div class="title center">收款问题</div>
                        <div class="open center">点击查看</div>
                    </div>
                </div>
            </div>
            <div class="per_help van-hairline--bottom row">
                <div @click="handleHelpDetail('tichuwenti')" class="help_detail van-hairline--right row">
                    <div class="icon end-center"><van-icon name="flag-o" color="#ffffff" size="32px"/></div>
                    <div class="detail">
                        <div class="title center">提出问题</div>
                        <div class="open center">点击查看</div>
                    </div>
                </div>
                <div @click="handleHelpDetail('fankuibug')" class="help_detail van-hairline--right row">
                    <div class="icon end-center"><van-icon name="flag-o" color="#ffffff" size="32px"/></div>
                    <div class="detail">
                        <div class="title center">反馈BUG</div>
                        <div class="open center">点击查看</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="hot">
            <div class="title start-center">热门分类</div>
            <div @click="handleHelpDetail('shengji')" class="per_question row">
                <div class="center">
                    <span class="dot"></span>
                </div>
                <div class="problem start-center van-ellipsis van-hairline--bottom">升级之后，APP数据同步</div>
                <div class="more start-center van-hairline--bottom"><van-icon name="arrow"/></div>
            </div>
            <router-link tag="div" class="per_question row" to="/personalCenter/questionandanswers">
                <div class="center">
                    <span class="dot"></span>
                </div>
                <div class="problem start-center van-hairline--bottom">APP百问百答</div>
                <div class="more start-center van-hairline--bottom"><van-icon name="arrow"/></div>
            </router-link>
            <div @click="handleHelpDetail('shuoming')" class="per_question row">
                <div class="center">
                    <span class="dot"></span>
                </div>
                <div class="problem start-center van-hairline--bottom">APP官方声明</div>
                <div class="more start-center start-center van-hairline--bottom"><van-icon name="arrow"/></div>
            </div>
        </div>
        <div class="contact">
            <div class="title">联系我们</div>
            <div class="contact_us row">
                <div class="icon center"><van-icon name="http://fx.91dianji.com.cn/fengxing_fuwushijian_active.png"/></div>
                <div class="contact_title">服务时间:</div>
                <div class="contact_time start-center"><a href="tel:400-1059-769">周一至周日（09：00-22：00）</a></div>
            </div>
            <div class="contact_us row">
                <div class="icon center"><van-icon name="http://fx.91dianji.com.cn/fengxing_jiamengrexian_active.png"/></div>
                <div class="contact_title">加盟热线:</div>
                <div class="jiameng_rexian">
                    <span>18755291160</span>
                    <span>刘经理</span>
                </div>
                <div class="btn center"><span><a href="tel:18755291160">拨打</a></span></div>
            </div>
            <div class="contact_us row">
                <div class="icon center"><van-icon name="http://fx.91dianji.com.cn/fengxing_weixin_active.png"/></div>
                <div class="contact_title">微信号码:</div>
                <div class="contact_detail start-center" id="mobile">18755291160</div>
                <div class="btn center"><span class="test" data-clipboard-action="copy" data-clipboard-target="#mobile" @click="handleCopy('18755287073')">复制</span></div>
            </div>
            <div class="contact_us row">
                <div class="icon center"><van-icon name="http://fx.91dianji.com.cn/fengxing_zuoji_active.png"/></div>
                <div class="contact_title">客服电话:</div>
                <div class="contact_detail start-center">400-6169-609</div>
                <div class="btn center"><span><a href="tel:400-6169-609">拨打</a></span></div>
            </div>
            <div class="contact_us row">
                <div class="icon center"><van-icon name="http://fx.91dianji.com.cn/fengxing_weixin_active.png"/></div>
                <div class="contact_title">客服微信:</div>
                <div class="jiameng_rexian">
                    <span>18755287073</span>
                    <span>刘经理</span>
                </div>
                <div class="btn center"><span><a href="tel:18755287073">拨打</a></span></div>
            </div>
            <div class="contact_us row">
                <div class="icon center"><van-icon name="http://fx.91dianji.com.cn/fengxing_youxiang_active.png"/></div>
                <div class="contact_title">电子邮箱:</div>
                <div class="contact_details start-center">chuanbangdai@126.com</div>
            </div>
            <div class="contact_us row">
                <div class="icon center"><van-icon name="http://fx.91dianji.com.cn/fengxing_dizhi_active.png"/></div>
                <div class="contact_title">公司地址:</div>
                <div class="contact_details start-center">上海市宝山区泰和路2038号A座303室</div>
            </div>
        </div>
        <loading :componentload='componentload'></loading>
    </div>
</template>
<script>
import loading from'@/components/loading'
import ClipboardJS from "clipboard";
export default {
    components: {
        loading
    },
    data(){
        return{
            componentload: true
        }
    },
    methods:{
        handleReturnHome(){
            this.$router.go(-1);
        },
        // 帮助中心
        handleHelpDetail(obj){
            console.log('obj',obj);
            this.$router.push({
                path: '/personalCenter/manual',
                query:{
                    info: obj
                }
            })
        },
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
    },
    created(){
        setTimeout(() =>{
            this.componentload = false;
        },700)
    }
}
</script>
<style lang="less" scoped>
    #page-income{
        width: 100vw;
        height: auto;
        padding-top: 90px;
        .header-top{
            background: #ffffff;
            .top-title{
                color: #333333 !important;
            }
        }
        .big_title{
            width: calc(100% - 20px);
            height: 80px;
            padding-left: 20px;
            color: #ffffff;
            font-size: 30px;
            background-image: linear-gradient(156deg, #f7cf6c 0%, #fbbc36 0%, #ffa800 100%), linear-gradient(#0000ff, #0000ff);
	        background-blend-mode: normal, normal;
        }
        .help_container{
            .per_help{
                background-image: linear-gradient(156deg, #f7cf6c 0%, #fbbc36 0%, #ffa800 100%), linear-gradient(#0000ff, #0000ff);
	            background-blend-mode: normal, normal;
                width: 100%;
                height: 120px;
                .help_detail{
                    width: 50%;
                    height: 100%;
                    .icon{
                        width: 40%;
                        height: 100%;
                    }
                    .detail{
                        width: 60%;
                        height: 100%;
                        color: #ffffff;
                        .title{
                            width: 100%;
                            height: 55%;
                            font-size: 30px;
                        }
                        .open{
                            width: 100%;
                            height: 45%;
                            font-size: 26px;
                        }
                    }
                }
            }
        }
        .hot{
            width: 90%;
            height: auto;
            margin: 20px auto auto auto;
            .title{
                width: 100%;
                height: 80px;
                font-size: 28px;
                color: #333333;
                font-weight: 600;
            }
            .per_question{
                width: 100%;
                height: 80px;
                div:nth-child(1){
                    width: 5%;
                    height: 100%;
                    .dot{
                        display: inline-block;
                        width: 20px;
                        height: 20px;
                        background-image: linear-gradient(156deg, #f7cf6c 0%, #fbbc36 0%, #ffa800 100%), linear-gradient(#0000ff, #0000ff);
	                    background-blend-mode: normal, normal;
                    }
                }
                .problem{
                    width: 88%;
                    height: 100%;
                    margin-left: 2%;
                }
                .more{
                    width: 5%;
                    height: 100%;
                }
            }
        }
        .contact{
            width: 90%;
            height: auto;
            margin: 30px auto auto auto;
            .title{
                width: 100%;
                height: 80px;
                font-size: 28px;
                color: #333333;
                font-weight: 600;
            }
            .contact_us{
                width: 100%;
                height: 60px;
                font-size: 26px;
                .icon{
                    width: 5%;
                    height: 100%;
                }
                .contact_title{
                    width: 25%;
                    height: 100%;
                    line-height: 50px;
                    text-align: center;
                }
                .contact_time{
                    width: 70%;
                    height: 100%;
                    text-align: center;
                    line-height: 50px;
                    a{
                        color: #333; 
                    }
                }

                .jiameng_rexian{
                    width: 45%;
                    height: 100%;
                    line-height: 50px;
                    display: flex;
                    display: -webkit-flex;
                    justify-content: space-between;
                    -webkit-justify-content: space-between;
                }
                .btn{
                    width: 25%;
                    height: 100%;
                    line-height: 50px;
                    color: #fff;
                    span{
                        width: 80px;
	                    height: 36px;
                        background: #005e15;
                        border-radius: 4px;
                        text-align: center;
                        line-height: 36px;
                        a{
                            color: #fff;
                        }
                    }
                }


                .contact_detail{
                    width: 45%;
                    height: 100%;
                    color: #333333;
                }
                .contact_details{
                    width: 70%;
                    height: 100%;
                    color: #333333;
                }
            }
        }
    }
</style>
