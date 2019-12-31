<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-06-16 10:28:15
 * @LastEditTime: 2019-08-15 18:19:56
 * @LastEditors: Please set LastEditors
 -->
<template>
    <div id="page_vip">
        <div class="header">
            <div class="vip_icon center">
                <img v-if="level == '0' && ispartner == '0'" src="http://fx.91dianji.com.cn/fengxing_mianfeifensi_top.png" alt="">
                <img v-if="level == '1' && ispartner == '0'" src="http://fx.91dianji.com.cn/fengxing_huangjinhuiyuan_top.png" alt="">
                <img v-if="level == '2' && ispartner == '0'" src="http://fx.91dianji.com.cn/fengxing_zuanshihuiyuan_top.png" alt="">
                <img v-if="ispartner == '1'" src="http://fx.91dianji.com.cn/fengxing_hehuoren_top.png" alt="">
                </div>
            <div class="vip_title center">
                <span v-if="level == '0' && ispartner == '0'">免费粉丝</span>
                <span v-if="level == '1' && ispartner == '0'">黄金会员</span>
                <span v-if="level == '2' && ispartner == '0'">钻石会员</span>
                <span v-if="ispartner == '1'">城市合伙人</span>
            </div>
        </div>
        <div class="level">
            <img v-if="level == '0' && ispartner == '0'" src="http://fx.91dianji.com.cn/mianfeifensi_jindu.png" alt="">
            <img v-if="level == '1' && ispartner == '0'" src="http://fx.91dianji.com.cn/huangjinhuiyuan_jindu.png" alt="">
            <img v-if="level == '2' && ispartner == '0'" src="http://fx.91dianji.com.cn/zuanshihuiyuan_jindu.png" alt="">
            <img v-if="ispartner == '1'" src="http://fx.91dianji.com.cn/hehuorenjindu_jindu.png" alt="">
            
        </div>
        <div class="goods_list">
            <div class="per_goods fensi" id="level0">
                <div class="icon"><img src="http://fx.91dianji.com.cn/fengxing_mianfeifensi_mini.png" alt=""></div>
                <div class="title">免费粉丝</div>
                <div class="price">¥0.00</div>
                <div class="nowlevel" v-if="level == '0' && ispartner == '0'">当前等级</div>
                <div class="detail center" @click="handleSeeDetail('0')">查看明细</div>
                <div class="desc">
                    <div>推广佣金比例</div>
                    <div>直接-50%</div>
                    <div>间推-10%</div>
                    <div>升级会员可提现</div>
                </div>
            </div>
            <div class="per_goods huangjin" id="level1">
                <div class="icon"><img src="http://fx.91dianji.com.cn/fengxing_huangjinhuiyuan_mini.png" alt=""></div>
                <div class="title">黄金会员</div>
                <div class="price">¥398.00</div>
                <div class="nowlevel" v-if="level == '1' && ispartner == '0'">当前等级</div>
                <div class="upgrade center" v-if="level == '0'" @click="handleOneClickUp('398','5')">一键升级</div>
                <div class="upgrade_dine center" v-if="level == '2'" @click="handleOneClickUp('none','5')">一键升级</div>
                <div class="detail center" @click="handleSeeDetail('1')">查看明细</div>
                <div class="desc">
                    <div>推广佣金比例</div>
                    <div>直接-50%</div>
                    <div>间推-10%</div>
                    <div>满100元可提现</div>
                </div>
            </div>
            <div class="per_goods zuanshi" id="level2">
                <div class="icon"><img src="http://fx.91dianji.com.cn/fengxing_zuanshihuiyuan_mini.png" alt=""></div>
                <div class="title">钻石会员</div>
                <div class="price">¥998.00</div>
                <div class="nowlevel" v-if="level == '2' && ispartner == '0'">当前等级</div>
                <div class="upgrade center" v-if="level != '2'" @click="handleOneClickUp('998','6')">一键升级</div>
                <!-- <div class="upgrade_dine center" v-if="ispartner == '1'" @click="handleOneClickUp('none')">一键升级</div> -->
                <div class="detail center" @click="handleSeeDetail('2')">查看明细</div>
                <div class="desc">
                    <div>推广佣金比例</div>
                    <div>直接-50%</div>
                    <div>间推-10%</div>
                    <div>满100元可提现</div>
                </div>
            </div>
            <div class="per_goods hehuoren" id="level3">
                <div class="icon"><img src="http://fx.91dianji.com.cn/fengxing_hehuoren_mini.png" alt=""></div>
                <div class="title">城市合伙人</div>
                <div class="price">¥19800.00</div>
                <div class="nowlevel" v-if="ispartner == '1'">当前等级</div>
                <div class="upgrade center" v-if="ispartner != '1'" @click="handleContactUs('7')">联系我们</div>
                <div class="detail center" @click="handleSeeDetail('3')">查看明细</div>
                <div class="desc">
                    <div>推广佣金比例</div>
                    <div>直接-60%</div>
                    <div>间推-20%</div>
                    <div>V3-10%</div>
                </div>
            </div>
            <div class="per_goods yunyingshang" id="level4">
                <div class="icon"><img src="http://fx.91dianji.com.cn/fengxing_yunyingshang_mini.png" alt=""></div>
                <div class="title">城市运营商</div>
                <div class="price">¥28000.00——¥188000.00</div>
                <div class="upgrade center" @click="handleContactUs('8')">联系我们</div>
                <div class="detail center" @click="handleSeeDetail('4')">查看明细</div>
                <div class="desc">
                    <div>品牌独立</div>
                    <div>市场定价权</div>
                    <div>利润100%</div>
                    <div>招商加盟</div>
                </div>
            </div>
        </div>

        <!-- 联系我们 -->
        <transition name="van-fade">
            <div class="contactus center" v-if="contactus" @click="handleCloseContactUs">
                <div class="fade">
                    <div class="title start-center">联系我们</div>
                    <div class="per_detail row">
                       <div class="start-center"><van-icon size="22px" name="http://fx.91dianji.com.cn/fengxing_fuwushijian.png"/></div>
                        <div class="start-center">服务时间： 周一至周日（09：00-22：00）</div>
                        <div></div>
                    </div>
                    <div class="per_detail row" @click="handleATRadarInsert('11')">
                        <div class="start-center"><van-icon size="22px" name="http://fx.91dianji.com.cn/fengxing_dianhua.png"/></div>
                        <div class="start-center">加盟热线：18755291160 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;张经理 </div>
                        <div class="btn center">
                            <span><a href="tel:18755291160">拨打</a></span>
                        </div>
                    </div>
                    <div class="per_detail row" @click="handleATRadarInsert('13')">
                        <div class="start-center"><van-icon size="22px" name="http://fx.91dianji.com.cn/fengxing_weixin.png"/></div>
                        <div class="start-center">微&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;信：18755291160 </div>
                        <div  class="btn center">
                            <span @click="handleCopy('18755291160')">复制</span>
                        </div>
                    </div>
                    <div class="per_detail row" @click="handleATRadarInsert('12')">
                        <div class="start-center"><van-icon size="22px" name="http://fx.91dianji.com.cn/fengxing_zuoji.png"/></div>
                        <div class="start-center">客服电话：400-6169-609  </div>
                        <div  class="btn center">
                            <span><a href="tel:400-6169-609">拨打</a></span>
                        </div>
                    </div>
                    <div class="per_detail row" @click="handleATRadarInsert('13')">
                       <div class="start-center"> <van-icon size="22px" name="http://fx.91dianji.com.cn/fengxing_weixin.png"/></div>
                        <div class="start-center" id="mobile">客服微信：18755287073&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;张经理</div>
                        <div  class="btn center">
                            <span class="test" data-clipboard-action="copy" data-clipboard-target="#mobile" @click="handleCopy('18755287073')">复制</span>
                        </div>
                    </div>

                </div>
            </div>
        </transition>
        
        <transition name="van-slide-down">
            <div class="buy-detail" v-if="pup2">
                <div class="recom row">
                    <div class="avator end-center"><img :src="recomheadimg" alt=""></div>
                    <div class="recom-detail">
                        <div class="recom-title start-center">上级推荐人</div>
                        <div class="recom-name start-center">{{recomname}}</div>
                        <div class="recom-code start-center">推荐码:{{recomcode}}</div>
                    </div>
                    <div class="recom-info center">
                        <div class="mini-info center">
                            Hi!,{{recomname}}邀请您成为创业合伙人，蜂行卡包大舞台等你来创造奇迹
                        </div>
                    </div>
                </div>
                <div class="price center">¥{{price}}</div>
                <div class="per-title row">
                    <div class="goods-title start-center">商品名称</div>
                    <div class="goods-detail start-center">{{goodsname}}</div>
                </div>
                <div class="per-title row">
                    <div class="goods-title start-center">付款类型</div>
                    <div class="goods-detail start-center">在线支付</div>
                </div>
                <div class="per-title row">
                    <div class="goods-title start-center">付款方式</div>
                    <div class="goods-detail row">
                        <div class="paytype center" :class="{'wechatpay': paytype == 'wechat'}" @click="handlePayType('wechat')">
                            <svg class="icon payicon" aria-hidden="true">
                                <use xlink:href="#icon-wechatpay"></use>
                            </svg>
                            微信支付
                        </div>
                        <div class="paytypes center" :class="{'alipay': paytype == 'alipay'}" @click="handlePayType('alipay')">
                            <svg class="icon payicon" aria-hidden="true">
                                <use xlink:href="#icon-alipay"></use>
                            </svg>
                            支付宝支付
                        </div>
                    </div>
                </div>
                <div class="per-title row">
                    <div class="goods-title start-center">推荐码</div>
                    <div class="goods-detail start-center">{{recomcode}}</div>
                </div>
                <div class="per-title row">
                    <div class="goods-title start-center">上级推荐人</div>
                    <div class="goods-detail start-center">{{recomname}}</div>
                </div>
                <div class="buybtn row">
                    <van-button type="info" class="cancel" @click="handleBuyCancel">取消支付</van-button>
                    <van-button type="info" class="submit" @click="handleBuyNow">立即支付</van-button>
                </div>
            </div>
        </transition>
        <footerMenu :active="active" @getChange="changeActive"></footerMenu>
    </div>
</template>

<script>
import storage from '@/lib/storage'
import footerMenu from '@/components/footer'
import { axiosPost } from '../../lib/http'
import ClipboardJS from "clipboard";
export default {
    components: {
        footerMenu
    },
    data(){
        return{
            active: 3,
            ShowDiamonds:false,
            ShowGold: false,
            showRule:false,
            pup1: false,
            pup2: false,
            price: '',
            level: '0',
            value: 5,
            value1:2, 
            paytype: 'wechat',
            orderid: '',
            recomname: '',
            recomcode: '',
            recomheadimg: '',
            nickname: '',
            ispartner: '0',
            contactus: false,
            goodsname: '',
        }
    },
    methods:{
        handleCopy(data){
            var that = this;
            var clipboard = new ClipboardJS('.test');
            //成功回调
            clipboard.on('success', function(e) {
                that.$toast('复制成功'); 
                e.clearSelection();
            });
            //失败回调
            clipboard.on('error', function(e) {
                that.$toast('复制失败');
            });
        },
         // 返回首页
        handleReturnHome(){
            this.$router.push({
                path:'/ponserCenter/userAccountManage'
            })
        },
        // 更多
        handleMore(){
            this.$toast('敬请期待');
        },
        changeActive(obj){
        },
        // 钻石会员权益说明
        isShowDiamonds(){
             this.ShowDiamonds = true
        },
        // 白金会员权益说明
        isShowGold(){
             this.ShowGold = true
        },
        isShowRule(){
            this.showRule=true
        },
        // 会员充值
        handleVip(obj){
            this.price = obj;
            obj == '998' ? this.level = '蜂行卡包钻石会员' : this.level = '蜂行卡包黄金会员';
            this.pup1 = true;
            
        },
        // 取消订单
        handleCancelOrder(){
            this.pup1 = false;
        },
        // 确认购买，也就是下单
        handleBuy(){
            this.pup1 = false;
            this.pup2 = true;
            let name = '';
            if(this.price == '998'){
                name = '蜂行卡包钻石会员';
            }else{
                name = '蜂行卡包黄金会员'
            }
            let url = '/order/insertOrder';
            let params = {
                amount: this.price,
                name: name
            };
            axiosPost(url,params).then(res =>{
                if(res.data.success){
                    this.orderid = res.data.data.orderid;
                    // 请求上级推荐人
                    let url = '/customer/getCustomerUP';
                    let params = {
                        recommendedcode: this.$store.state.wechat.recommendedcode
                    };
                    axiosPost(url,params).then(res =>{
                        if(res.data.success){
                            this.recomname = res.data.data.nickname;
                            this.recomcode = res.data.data.promotioncode;
                            this.recomheadimg = res.data.data.photo;
                        }
                    }).catch(res =>{
                    })
                }
            }).catch(res =>{
            })
        },
        // 选择支付方式
        handlePayType(obj){
            this.paytype = obj;
        },
        // 取消支付
        handleBuyCancel(){
            this.pup1 = false;
            this.pup2 = false;
        },
        // 立即购买
        handleBuyNow(){
            // 首先判断选择哪一种支付方式
            if(this.paytype == 'alipay'){
                // 支付宝支付
                var ua = navigator.userAgent.toLowerCase();
                if(ua.match(/MicroMessenger/i)=="micromessenger") {
                    window.location.href="http://fx.91dianji.com.cn/pay.htm?orderid="+ this.orderid + '&openid='+ this.$store.state.wechat.openid
                         
                } else {
                    // 非微信浏览器
                    window.location.href="http://fx.91dianji.com.cn/pay.htm?orderid="+ this.orderid
                } 
            }else{
                var  params = {
                    orderid: this.orderid,
                    trade_type: 'JSAPI',
                    openid: storage.get('openid')
                };
                var url = '/order/wxPayH5';
                axiosPost(url,params).then(res =>{
                        var radom = Math.random().toString(36).substr(2);
                        var tmp = Date.parse( new Date() ).toString();
                        tmp = tmp.substr(0,10);
                        wx.chooseWXPay({
                            timestamp: res.data.timeStamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
                            nonceStr: res.data.nonceStr, // 支付签名随机串，不长于 32 位
                            package: res.data.package, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\*\*\*）
                            signType: 'MD5', // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
                            paySign: res.data.paySign, // 支付签名
                            success: function (res) {
                            }
                        });
                    }).catch(res =>{
                        // console.log('失败',res);
                    })
            }
        },
        // 查看明细
        handleSeeDetail(obj){
            this.$router.push({
                path: '/middle',
                query: {
                    level: obj
                }
            })
        },
        // 查询个人信息
         handlePersonalDetail(){
            let data={
                openid: storage.get('openid'),
            }
            axiosPost("/customer/getCustomer",data)
            .then(res =>{
                this.level = res.data.data.level;
                this.ispartner = res.data.data.ispartner;
            })
            .catch(res =>{
                this.$toast('查询失败');
            })
        },
        // 一键升级
        handleOneClickUp(obj,type){
            // console.log('一键升级',obj);
            this.handleAIRadarInsert(type);
            if(obj == 'none'){
                this.$toast('您已升级过该等级会员');
            }else{
                this.price = obj;
                this.pup2 = true;
                obj == '998' ? this.goodsname = '钻石会员' : this.goodsname = '黄金会员';
                let url = '/order/insertOrder';
                let params = {
                    amount: this.price,
                    name: this.goodsname
                };
                axiosPost(url,params).then(res =>{
                    // console.log('下单成功',res);
                    this.orderid = res.data.data.orderid;  
                }).catch(res =>{
                    // console.log('下单失败',res);
                })
            }
        },
        // 联系我们
        handleContactUs(type){
            this.handleAIRadarInsert(type);
            this.contactus = true;
        },
        // 关闭联系我们
        handleCloseContactUs(){
            this.contactus = false;
        },
        // 查询上级
        handleCustomerUP(){
            let params = {
                recommendedcode: storage.get('code')
            };
            axiosPost('/customer/getCustomerUP',params).then(res =>{
                this.recomname = res.data.data.nickname;
                this.recomcode = res.data.data.promotioncode;
                this.recomheadimg = res.data.data.photo;
            }).catch(res =>{
                // console.log('上级查询失败',res);
            })
        },
        Tocontone(){
             document.querySelector("#level0").scrollIntoView(true);
        },
         Toconttwo(){
             document.querySelector("#level1").scrollIntoView(true);
        },
         Tocontthree(){
             document.querySelector("#level2").scrollIntoView(true);
        },
         Tocontfour(){
             document.querySelector("#level3").scrollIntoView(true);
        },
         Tocontfive(){
             document.querySelector("#level4").scrollIntoView(true);
        },
        // AI来打行为插入
        handleAIRadarInsert(obj){
            let params = {
                type: obj
            };
            let url = '/behavior/insertBehavior';
            axiosPost(url,params).then(res =>{
                console.log('插入成功',res);
            }).catch(res =>{
                console.log('插入失败',res);
            })
        },
    },
    created(){
        this.handleCustomerUP();
        this.handlePersonalDetail();
    },
    mounted(){
        //  console.log(this.$route.query.num,'num')
        if(this.$route.query.num=="0"){
            
                this.Tocontone()
        } else if(this.$route.query.num=="1"){
                this.Toconttwo()
        }else if(this.$route.query.num=="2"){
                 this.Tocontthree()
        }else if(this.$route.query.num=="3"){
                 this.Tocontfour()
        }else if(this.$route.query.num=="4"){
            // console.log('num')
              this.Tocontfive()
        }
        // console.log(this.$route.query.num,'num')
    }
}
</script>

<style lang="less" scoped>
#page_vip{
    width: 100vw;
    height: calc(100vh - 100px);
    overflow-y: scroll;
    .header{
        width: 100%;
	    height: 460px;
        background-image: linear-gradient(180deg, #f7cf6c 0%, #fdba38 100%), linear-gradient(#2942ff, #2942ff);
        background-blend-mode: normal, normal;
        .vip_icon{
            width: 100%;
            height: 73%;
            padding-top: 2%;
            img{
                width: 170px;
                height: auto;
            }
        }
        .vip_title{
            width: 100%;
            height: 25%;
            >span{
                display: inline-block;
                width: 260px;
                height: 80px;
                background: url('http://fx.91dianji.com.cn/fengxing_vipbg.png') center center no-repeat;
                background-size: contain;
                text-align: center;
                line-height: 80px;
                font-size: 26px;
                font-weight: normal;
                font-stretch: normal;
                letter-spacing: 1.2px;
                color: #ffffff;
            }
        }
    }
    .level{
        width: 100%;
	    height: 120px;
        background-image: linear-gradient(180deg, #f7cf6c 0%, #fdba38 100%), linear-gradient(#2942ff, #2942ff);
        background-blend-mode: normal, normal;
        img{
            width: 100%;
            height: auto;
        }
    }
    .goods_list{
        width: 100%;
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
        .per_goods{
            width: 95%;
            height: 350px;
            margin-left: auto;
            margin-right: auto;
            background-blend-mode: normal, normal;
            box-shadow: -7.3px 3.3px 16px 0px rgba(0, 0, 0, 0.22);
            border-radius: 20px;
            border: solid 3px #ffffff;
            margin-top: 20px;
            position: relative;
            .icon{
                width: 100px;
                height: 200px;
                position: absolute;
                top: 20px;
                left: 30px;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .title{
                position: absolute;
                right: 30px;
                top: 50px;
                color: #ffffff;
                font-size: 32px;
            }
            .price{
                position: absolute;
                right: 30px;
                top: 110px;
                color: #ffffff;
                font-size: 32px;
            }
            // 一键升级可点击
            .upgrade{
                width: 160px;
                height: 54px;
                padding: 7px;
                position: absolute;
                right: 220px;
                top: 160px;
                text-align: center;
                line-height: 100px;
                color: #333333;
                font-size: 28px;
                background: url('http://fx.91dianji.com.cn/fengxing_up.png') center center no-repeat;
                background-size: 100% 100%;
            }
            // 一键升级禁用
            .upgrade_dine{
                width: 160px;
                height: 54px;
                padding: 7px;
                position: absolute;
                right: 220px;
                top: 160px;
                text-align: center;
                line-height: 100px;
                color: #333333;
                font-size: 28px;
                background: url('http://fx.91dianji.com.cn/fengxing_jinyong.png') center center no-repeat;
                background-size: 100% 100%;
            }
            .nowlevel{
                width: 160px;
                height: 90px;
                text-align: center;
                line-height: 100px;
                padding: 7px;
                position: absolute;
                right: 220px;
                top: 138px;
                color: #000;
                font-size: 28px;
                background: url('http://fx.91dianji.com.cn/fengxing_nowlevel.png') center center no-repeat;
                background-size: 100% 100%;
            }
            // 合伙人以及运营商的当前等级
            .nowlevel_special{
                width: 160px;
                height: 90px;
                text-align: center;
                line-height: 100px;
                padding: 7px;
                position: absolute;
                left: 150px;
                top: 138px;
                color: #000;
                font-size: 28px;
                background: url('http://fx.91dianji.com.cn/fengxing_nowlevel.png') center center no-repeat;
                background-size: 100% 100%;
            }
            .detail{
                width: 160px;
                height: 54px;
                padding: 10px;
                position: absolute;
                right: 30px;
                top: 155px;
                color: #000;
                font-size: 28px;
                background: url('http://fx.91dianji.com.cn/fengxing_mingxi_icon@2x.png') center center no-repeat;
                background-size: 100% 100%;
            }
            .desc{
                width: 100%;
                height: 100px;
                background: rgba(0, 0, 0, 0.18);
                position: absolute;
                left: 0px;
                bottom: 0px;
                display: flex;
                display: -webkit-flex;
                justify-content: space-around;
                -webkit-justify-content: space-around;
                >div{
                    height: 100%;
                    color: #ffffff;
                    font-size: 26px;
                    line-height: 100px;
                }
            }
        }
    }
    .contactus{
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 5;
        background: rgba(0, 0, 0, 0.3);
        .fade{
            width: 87%;
            height: 551px;
            background-image: linear-gradient(#434460, #434460), linear-gradient(#ffffff, #ffffff);
            background-blend-mode: normal, normal;
            border-radius: 10px;
            border: solid 1px #ffffff;
            .title{
                width: 80%;
                height: 80px;
                border-bottom: solid 1px #fff;
                margin: 40px auto auto auto;
                color: #fff;
                font-size: 34px;
                font-weight: 700;
            }
            .per_detail{
                width: 90%;
                height: 80px;
                margin: auto;
                color: #fff;
                font-size: 26px;
                div:nth-child(1){
                    width: 10%;
                    height: 100%;
                }
                div:nth-child(2){
                    width: 80%;
                    height: 100%;
                }
                .btn{
                    span{
                        width: 80px;
                        height: 36px;
                        background-color: #005e15;
                        border-radius: 4px;
                        text-align: center;
                        line-height: 36px;
                        a{
                            color: #fff;
                        }
                    }
                }
            }
        }
    }
    .buy-detail{
         width: 100%;
         height: 100%;
         position: fixed;
         z-index: 10000;
         top: 0;
         left: 0;
         background: #ffffff;
        
         .recom{
             width: 100%;
             height: 150px;
             border-bottom: solid 1px #ccc;
             .avator{
                 width: 15%;
                 height: 100%;
                 >img{
                     width: 80px;
                     height: 80px;
                     border-radius: 50%;
                 }
             }
             .recom-detail{
                 width: 33%;
                 height: 100%;
                 padding-left: 2%;
                 .recom-title{
                     width: 100%;
                     height: 25%;
                     margin-top: 8%;
                     color: #333;
                     font-size: 24px;
                 }
                 .recom-name{
                     width: 100%;
                     height: 25%;
                     font-size: 20px;
                 }
                 .recom-code{
                     width: 100%;
                     height: 25%;
                     color: #333;
                     font-size: 24px;
                 }
             }
             .recom-info{
                 width: 50%;
                 height: 100%;
                 .mini-info{
                     width: 80%;
                     height: 70%;
                     background: #CAF788;
                     padding: 5%;
                     text-align: justify; 
                     font-size: 22px;

                 }
             }
         }
        .price{
            width: 100%;
            height: 150px;
            font-weight: bold;
            font-size: 50px;
        }
        .per-title{
            width: 100%;
            height: 100px;
            border-bottom: solid 1px #ddd;
            .goods-title{
                width: 25%;
                height: 100%;
                margin-left: 5%;
                font-size: 32px;
                color: #333;
            }
            .goods-detail{
                width: 75%;
                height: 100%;
                font-size: 28px;
                .alipay{
                    border: solid 1.2px #ffa800;
                }
                .wechatpay{
                    border: solid 1.2px #09BB07;
                }
                .paytype{
                    width: 40%;
                    height: 70%;
                    padding-left: 15px;
                    padding-right: 15px;
                    margin-top: 15px;
                    border-radius: 50px;
                    .payicon{
                        font-size: 40px;
                        padding-right: 10px;
                    }
                }
                .paytypes{
                    width: 40%;
                    height: 70%;
                    margin-left: 5%;
                    padding-left: 15px;
                    padding-right: 15px;
                    margin-top: 15px;
                    border-radius: 50px;
                    .payicon{
                        font-size: 40px;
                        padding-right: 10px;
                    }
                }
            }
        }
        .buybtn{
            width: 80%;
            height: 100px;
            margin-left: auto;
            margin-right: auto;
            margin-top: 100px;
            .cancel{
                width: 40%;
                height: 100%;
                background: #ddd;
                border: none;
                font-size: 30px;
            }
            .submit{
                width: 40%;
                height: 100%;
                background: #ffa800;
                color:#ffffff;
                font-size: 36px;
                font-weight: bold;
                margin-left: 20%;
                border: none;
                font-size: 30px;
            }
        }
     }
}
 
</style>
