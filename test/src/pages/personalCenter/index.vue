<template>
    <div id="personal_center">
        <div class="header">
            <div class="top row">
                <router-link tag="div" to="/register" class="setting start-center"><van-icon name="http://fx.91dianji.com.cn/fengxing_set_top.png" size="22px"/></router-link>
                <div class="title center">我的</div>
                <router-link tag="div" to="/home/aboutUs" class="services end-center" @click="handleExpect"><van-icon name="http://fx.91dianji.com.cn/fengxing_services.png" size="22px"/></router-link>
            </div>
            <div class="middle">
                <div class="avator center" v-if="level != '0'">
                    <!-- <img v-if="level == '1'" src="http://fx.91dianji.com.cn/fengxing_huangjin_icon.png" alt="">
                    <img v-if="level == '2'" src="http://fx.91dianji.com.cn/fengxing_zuanshi_icon.png" alt=""> -->
                     <img :src="vipimg" alt="">
                    <!-- <img :src="headimg" alt=""> -->
                </div>
                <div class="avator center" v-else>
                    <img class="headimg" :src="headimg" alt="">
                </div>
                <div class="nickname center">{{nickname}}</div>
                <div class="promotioncode center">推荐码: {{promotioncode}}</div>
            </div>
            <div class="bottom row">
                <div class="detail">
                    <div class="title van-hairline--right center">收益</div>
                    <div class="number van-hairline--right center">¥{{amountSum}}</div>
                </div>
                <div class="detail">
                    <div class="title van-hairline--right center">余额</div>
                    <div class="number van-hairline--right center">¥{{amount}}</div>
                </div>
                <div class="detail">
                    <div class="title center">分佣</div>
                    <div class="number center">¥{{commission}}</div>
                </div>
            </div>
        </div>
        <div class="upgrade">
            <div class="icon center"><van-icon size="24px" name="http://fx.91dianji.com.cn/fengxing_dunpai.png"/></div>
            <div class="title center">升级钻石会员，享更多会员权益</div>
            <router-link tag="div" to="/vip" class="now center"><div class="center">立即升级</div></router-link>
        </div>
        <div class="menus">
            <router-link tag="div" to="/home/verified" class="per_menu">
                <div class="icon center"><van-icon name="http://fx.91dianji.com.cn/fengxing_renzheng.png" size="24px"/></div>
                <div class="title start-center van-hairline--bottom">实名认证</div>
                <div class="state end-center van-hairline--bottom">{{iscertification}}</div>
                <div class="more end-center van-hairline--bottom"><van-icon name="arrow"/></div>
            </router-link>
            
            <router-link tag="div" to="/ponserCenter/userAccountManage/down" class="per_menu">
                <div class="icon center"><van-icon name="http://fx.91dianji.com.cn/down.png" size="24px"/></div>
                <div class="title start-center">客户端下载</div>
                <div class="state end-center"></div>
                <div class="more end-center"><van-icon name="arrow"/></div>
            </router-link>
            <div class="kong"></div>
            <router-link tag="div" :to="{path: '/ponserCenter/userAccountManage',query: {amount: amount,amountSum: amountSum}}" class="per_menu">
                <div class="icon center"><van-icon name="http://fx.91dianji.com.cn/fengxing_zhanghu.png" size="24px"/></div>
                <div class="title start-center van-hairline--bottom">我的账户</div>
                <div class="state end-center van-hairline--bottom"></div>
                <div class="more end-center van-hairline--bottom"><van-icon name="arrow"/></div>
            </router-link>
            <div @click="handleMyRate" class="per_menu">
                <div class="icon center"><van-icon name="http://fx.91dianji.com.cn/fengxing_feilv.png" size="24px"/></div>
                <div class="title start-center van-hairline--bottom">我的费率</div>
                <div class="state end-center van-hairline--bottom"></div>
                <div class="more end-center van-hairline--bottom"><van-icon name="arrow"/></div>
            </div>
            <router-link tag="div" to="/register" class="per_menu">
                <div class="icon center"><van-icon name="http://fx.91dianji.com.cn/fengxing_shezhi@2x.png" size="24px"/></div>
                <div class="title start-center">设置</div>
                <div class="state end-center"></div>
                <div class="more end-center"><van-icon name="arrow"/></div>
            </router-link>

            <div class="kong"></div>

            <router-link tag="div" to="/help" class="per_menu">
                <div class="icon center"><van-icon name="http://fx.91dianji.com.cn/fengxing_help.png" size="24px"/></div>
                <div class="title start-center van-hairline--bottom">帮助中心</div>
                <div class="state end-center van-hairline--bottom"></div>
                <div class="more end-center van-hairline--bottom"><van-icon name="arrow"/></div>
            </router-link>
        </div>
        <!-- <div class="per-list row">
            <router-link tag="div" class="per-menu-list line" to="/personalCenter/previous">
                <div class="menu-icon center"><van-icon name="http://sbs.91dianji.com.cn/304.png" size="24px" color="#dab17b"/></div>
                <div class="per-menu-title center">上级推荐人</div>
            </router-link>
        </div> -->
        <footerMenu :active="active" @getChange="changeActive"></footerMenu>
    </div>
</template>

<script>
import loading from '@/components/loading'
import footerMenu from '@/components/footer'
import {axiosPost} from '../../lib/http.js'
import storage from '@/lib/storage'
export default {
    components:{
      footerMenu,
    },
    data(){
        return {
            active:2,
            nickname: '',
            headimg: 'http://img2.imgtn.bdimg.com/it/u=1000195578,2796948806&fm=11&gp=0.jpg',
            promotioncode: '********',
            iscertification: '未认证',
            amount: '',
            amountSum: '',
            commission: '',
            level: '',
            payrate: '',
            repayrate: '',
            vipimg:""
        }
    },
    methods:{
        // 尽请期待
        handleExpect(){
            this.$toast('敬请期待')
        },
        changeActive(obj){
        },
        // 查询个人设置
        handleGetAmount(){
            let url = '/customer/getCustomer';
            let params = {
                openid:this.$store.state.wechat.openid,
            };
            axiosPost(url,params).then(res =>{
                this.nickname = res.data.data.nickname;
                this.headimg  = res.data.data.photo;
                this.promotioncode  = res.data.data.promotioncode; 
                this.amount = res.data.data.amount;
                this.amountSum = res.data.data.amountSum;
                this.commission = res.data.data.commission;
                this.level = res.data.data.level;
                if(this.level=='1'){
                    this.vipimg="http://fx.91dianji.com.cn/fengxing_huangjin_icon.png"
                }
                if(this.level=='2'){
                     this.vipimg="http://fx.91dianji.com.cn/fengxing_zuanshi_icon.png"
                }
                this.payrate = res.data.data.payrate;
                this.repayrate = res.data.data.repayrate;
                res.data.data.iscertification == '0' ? this.iscertification = '未认证' : ( res.data.data.iscertification == '1' ? this.iscertification = '审核中' : (res.data.data.iscertification == '2' ? this.iscertification = '认证成功' : this.iscertification = '认证失败，请重试')); 
            }).catch(res =>{
                // console.log('查询个人设置失败',res);
            })
        },
        // 我的费率
        handleMyRate(){
            this.$router.push({
                path: '/myrate',
                query:{
                    payrate: this.payrate,
                    repayrate: this.repayrate,
                    level: this.level
                }
            })
        }
    },
    created(){
        this.handleGetAmount();
    }
}
</script>

<style lang="less" scoped>
#personal_center{
    width: 100vw;
    height: calc(100vh - 100px);
    position: relative;
    .header{
        width: 100%;
        height: 43%;
        background-image: linear-gradient(180deg, #f7cf6c 0%, #ffa800 100%), linear-gradient(#2942ff, #2942ff);
        background-blend-mode: normal,normal;
        position: relative;
        .top{
            width: 96%;
            height: 8%;
            padding-top: 2%;
            margin-left: auto;
            margin-right: auto;
            color: #fff;
            .setting,.services{
                width: 20%;
                height: 100%;
            }
            .title{
                width: 60%;
                font-size: 40px;
                height: 100%;

            }
        }
        .middle{
            width: 100%;
            height: 50%;
            padding-top: 2%;
            .avator{
                width: 300px;
                margin-left: auto;
                margin-right: auto;
                height: 160px;
                position: relative;
                z-index: 3;
                img{
                     width: auto;
                    height: 160px;
                    position: absolute;
                    z-index: 4;
                }
                img:nth-child(1){
                    width: auto;
                    height: 160px;
                    position: absolute;
                    z-index: 4;
                }
                img:nth-child(2){
                    width: 100px;
                    height: auto;
                    border-radius: 50%;
                    position: absolute;
                    z-index: 4;
                    top: 41px;
                    left: 95px;
                }
                .headimg{
                    width: 140px;
                    height: 140px;
                    border-radius: 50%;
                }
            }
            .nickname{
                width: 100%;
                height: auto;
                padding:15px 0px;
                font-size: 32px;
                color: #ffffff;
                font-weight: 700;
            }
            .promotioncode{
                color: #333333;
                width: 100%;
                height: 50px;
                background: url('http://fx.91dianji.com.cn/fengxing_promotioncode.png') center center no-repeat;
                background-size: 290px 60px;
            }
        }
        .bottom{
            width: 85%;
            height: calc(38% - 20px);
            border-top: solid 1px #ffffff;
            margin-left: auto;
            margin-right: auto;
            margin-top: 20px;
            .detail{
                width: calc(100% / 3);
                height: 60%;
                .title{
                    width: 100%;
                    height: 40%;
                    margin-top: 18px;
                    font-size: 28px;
                }
                .number{
                    width: 100%;
                    height: 40%;
                    font-size: 26px;
                    color: #ffffff;
                }
            }
        }
    }
    .upgrade{
        width: 90%;
        height: 100px;
        background-image: linear-gradient(90deg, #f5e8d4 0%, #f3cb7c 100%);
        border-radius: 10px;
        position: absolute;
        left: 5%;
        top: 40%;
        display: flex;
        display: -webkit-flex;
        justify-content: space-around;
        -webkit-justify-content: space-around;
        .icon{
            width: auto;
            height: 100%;
            line-height: 100px;
        }
        .title{
            width: auto;
            height: 100%;
            line-height: 100px;
            font-size: 26px;
        }
        .now{
            width: auto;
            height: 100%;
            div{
                height: 50%;
                background: #000000;
                padding-left: 10px;
                padding-right: 10px;
                font-size: 26px;
                color: #ffffff;
                border-radius: 50px;
            }
        }
    }
    .menus{
        width: 100%;
        height: calc((57vh - 150px));
        margin-top: 80px;
        .kong{
            width: 100%;
            height: 12px;
            background: #f5f5f5;
        }
        .per_menu{
            width: 95%;
            height: calc((100% - 24px) / 6);
            margin-left: auto;
            margin-right: auto;
            display: flex;
            justify-content: space-between;
            .icon{
                width: 15%;
                height: 100%;
            }
            .title{
                width: 55%;
                height: 100%;
                font-size: 32px;
                color: #333333;
            }
            .state{
                width: 25%;
                height: 100%;
                font-size: 28px;
                color: #999999;
            }
            .more{
                width: 5%;
                height: 100%; 
                color: #666666;
            }
        }
    }
}
</style>
