<template>
    <div id="page-user-AccountManage">
        <header class="header-top row">
            <div class="left-icon start-center" @click="handleReturnHome"><van-icon color="white" size="20px" name="arrow-left"/></div>
            <div class="top-title center">账户管理</div>
            <div ></div>
        </header>
        <div class="header-bottom">
            <div class="personalCenter row">
                <div class="avator center"><img :src="headimg" alt=""></div>
                <div class="name-details">
                    <div class="name-level row">
                        <div class="name start-center">{{nickname}}</div>
                        <div class="level center"><div>{{level}}</div></div>
                    </div>
                    <div class="code start-center"><div class="center">可提现金额:{{amount}}</div></div>
                </div>
            </div>
        </div>
        
         <router-link :to="{path:'/personalCenter/incomedetail/cash',query:{amount: amount}}" tag="div" class="per-menu row">
            <div class="icon start-center"><i class="iconfont icon-xianjin"></i></div>
            <div class="menu-name start-center">佣金提现</div>
            <div class="insert-icon center"><i class="iconfont icon-more"></i></div>
         </router-link>
        <router-link tag="div" to="/personalCenter/incomedetail/addcard" class="per-menu  row">
            <div class="icon start-center"><i class="iconfont icon-yinhangqia"></i></div>
            <div class="menu-name start-center">佣金提现储蓄卡</div>
            <div class="insert-icon center"><i class="iconfont icon-more"></i></div>
        </router-link>
        <router-link tag="div" class="per-menu row" :to="{path: '/personalCenter/income',query:{amountSum: amountSum}}">
            <div class="icon start-center"><i class="iconfont icon-jine"></i></div>
            <div class="menu-name start-center">收益明细</div>
            <div class="insert-icon center"><i class="iconfont icon-more"></i></div>
        </router-link>
         <!-- <router-link tag="div" class="per-menu row" to="/personalCenter/incomedetail/integralDetail">
            <div class="icon start-center"><i class="iconfont icon-xianjin"></i></div>
            <div class="menu-name start-center">积分明细</div>
            <div class="insert-icon center"><i class="iconfont icon-more"></i></div>
        </router-link> -->
         <router-link tag="div" class="per-menu row" to="/personalCenter/incomedetail/record">
            <div class="icon start-center"><i class="iconfont icon-xianjin"></i></div>
            <div class="menu-name start-center">提现记录</div>
            <div class="insert-icon center"><i class="iconfont icon-more"></i></div>
        </router-link>
        <!-- <div class="agree row">
            <div class="checkbox"><van-checkbox v-model="checked" shape="square" checked-color="rgb(133, 107, 48)"></van-checkbox></div>
            <div class="check-title">我已认真阅读<span>《金蜜蜂平台推广规范》</span>,认同平台的经营模式,并且自愿接受协议中的条款</div>
        </div> -->
    </div>
</template>
<script>
export default {
    data(){
        return{
            checked: false,
            nickname: '',
            headimg: '',
            recomcode: '',
            amount: '0.00',
            amountSum: '',
            level: '',
        }
    },
    methods:{
         // 返回首页
        handleReturnHome(){
            this.$router.go(-1);
        },
        // 更多
        handleMore(){
            this.$toast('敬请期待')
        }  
    },
    created(){
        this.$store.state.wechat.nickname == "" ? this.nickname = '姓名' : this.nickname = this.$store.state.wechat.nickname;
        this.$store.state.wechat.headimg == '' ? this.headimg = 'http://fx.91dianji.com.cn/avators.png' : this.headimg  = this.$store.state.wechat.headimg;
        this.$store.state.wechat.recommendedcode == "" ? this.recomcode = '11111111' : this.recomcode  = this.$store.state.wechat.recommendedcode; 
        this.$store.state.wechat.level == "0" ? this.level = '免费花粉' : (this.$store.state.wechat.level == "1" ? this.level = '铜蜂蜜' : this.level = '银蜜蜂');
        this.amount = this.$route.query.amount;
        this.amountSum = this.$route.query.amountSum;
    }
}
</script>
<style lang="less" scoped>
    #page-user-AccountManage{
        background: #F7F7F9;
        padding-top: 86px;
        .header-top{
            background:#f7cf6c;
            background-blend-mode: normal,normal;
        }
        .header-bottom{
        background-image: linear-gradient(180deg, #f7cf6c 0%, #ffa800 100%), linear-gradient(#2942ff, #2942ff);
        background-blend-mode: normal,normal;
            .personalCenter{
                width: 100vw;
                height:200px;
                color: white;
                .avator{
                    width: 20vw;
                    height: 100%;
                    >img{
                        width: 120px;
                        height: 120px;
                        border-radius: 50%;
                    }
                }
                .name-details{
                    width: 80vw;
                    height: 100px;
                    margin-top: 50px;
                    .name-level{
                        width: 100%;
                        height: 50%;
                        .name{
                            width: auto;
                            height: 100%;
                            font-size: 34px;
                            color: #ffffff;
                            font-weight: bold;
                        }
                        .level{
                            width: auto;
                            height: auto;
                            margin-left: 5%;
                            font-size: 26px;
                        }
                    }
                    .code{
                        width: 100%;
                        height: 50%;
                        >div{
                            width: auto;
                            height: 50%;
                            border: solid 0.02rem #ccc;
                            border-radius: 20px;
                            padding: 10px;
                        }
                    }
                }
            }
            .integral-cash{
                width: 100vw;
                height: 180px;
                color: white;
                .integral{
                    width: 50%;
                    height: 100%;
                    .can-title,.can-number{
                        width: 100%;
                        height: 50%;
                        font-size: 26px;
                    }
                }
            }
        }
        .per-menu{
            width: 100vw;
            height: 100px;
            background: white;
            .icon{
                width: 10vw;
                height: 100%;
                margin-left: 3vw;
                border-bottom: solid 1px #EDEDED;
                >i{
                    font-size: 35px;
                    color: black;
                }
            }
            .menu-name{
                width: 77vw;
                height: 100%;
                font-size: 26px;
                border-bottom: solid 1px #EDEDED;
            }
            .insert-icon{
                width: 7vw;
                height: 100%;
                border-bottom: solid 1px #EDEDED;
                >i{
                    font-size: 35px;
                    color: black;
                }
            }
        }
        .agree{
            width: 90vw;
            height: auto;
            margin-left: auto;
            margin-right: auto;
            .check-title{
                font-size: 10px;
            }
        }
    }
</style>

