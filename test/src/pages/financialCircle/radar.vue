<template>
    <div id="radar_detail">
        <div class="header">
            <div class="return start-center" @click="handleReturn"><van-icon size="24px" name="arrow-left"/></div>
            <div class="title center">AI雷达</div>
            <div class="data">昨日关键数据</div>
            <div class="form column">
                <div class="top">
                    <div class="row">
                        <div class="per_detail">
                            <div class="nember center-end">235</div>
                            <div class="titles center">活跃用户</div>
                        </div>
                        <div class="per_detail">
                            <div class="nember center-end">235</div>
                            <div class="titles center">活跃用户</div>
                        </div>
                        <div class="per_detail">
                            <div class="nember center-end">235</div>
                            <div class="titles center">活跃用户</div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="per_detail">
                            <div class="nember center-end">235</div>
                            <div class="titles center">活跃用户</div>
                        </div>
                        <div class="per_detail">
                            <div class="nember center-end">235</div>
                            <div class="titles center">活跃用户</div>
                        </div>
                        <div class="per_detail">
                            <div class="nember center-end">235</div>
                            <div class="titles center">活跃用户</div>
                        </div>
                    </div>
                </div>
                <div class="bottom van-hairline--top">
                    <span>详情数据</span>
                    <van-icon class="detail" size="16px" name="arrow"/>
                </div>
            </div>
        </div>
        <div class="line_menu">
            <div class="per_menu row">
                <div class="icon start-center"><van-icon size="26px" name="http://fx.91dianji.com.cn/fengxing_renwu.png"/></div>
                <div class="title">
                    <div class="small start-center">任务</div>
                    <div class="slogan start-center">高效管理自己的销售计划</div>
                </div>
                <div class="more center"><van-icon size="20px" name="arrow"/></div>
            </div>
            <div class="per_menu row">
                <div class="icon start-center"><van-icon size="26px" name="http://fx.91dianji.com.cn/fengxing_shangji.png"/></div>
                <div class="title">
                    <div class="small start-center">商机</div>
                    <div class="slogan start-center">把握机会成交就在眼前</div>
                </div>
                <div class="more center"><van-icon size="20px" name="arrow"/></div>
            </div>
        </div>
        <div class="my_app">
            <div class="title start-center">我的应用</div>
            <div class="app">
                <div class="per_app">
                    <div class="icon center"><van-icon size="40px" name="http://fx.91dianji.com.cn/fengxing_form.png"/></div>
                    <div class="title center">客户表单</div>
                </div>
                <div class="per_app">
                    <div class="icon center"><van-icon size="40px" name="http://fx.91dianji.com.cn/fengxing_aibaobiao.png"/></div>
                    <div class="title center">AI报表</div>
                </div>
                <div class="per_app">
                    <div class="icon center"><van-icon size="40px" name="http://fx.91dianji.com.cn/fengxing_myteam.png"/></div>
                    <div class="title center">我的团队</div>
                </div>
                <div class="per_app">
                    <div class="icon center"><van-icon size="40px" name="http://fx.91dianji.com.cn/fengxing_paihang.png"/></div>
                    <div class="title center">销售排行</div>
                </div>
                <div class="per_app">
                    <div class="icon center"><van-icon size="40px" name="http://fx.91dianji.com.cn/fengxing_zixun.png"/></div>
                    <div class="title center">AI雷达资讯</div>
                </div>
                <div class="per_app">
                    <div class="icon center"><van-icon size="40px" name="http://fx.91dianji.com.cn/fengxing_jianjie.png"/></div>
                    <div class="title center">AI雷达简介</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{}
    },
    methods: {
        handleReturn(){
            this.$router.go(-1);
        }
    }
}
</script>
<style lang="less" scoped>
    #radar_detail{
        width: 100vw;
        height: auto;
        .header{
            width: 100%;
            height: 333px;
            background-image: linear-gradient(124deg, #f7cf6c 0%, #fbbc36 34%, #ffa800 100%), linear-gradient(0deg, #ff8a3d 0%, #f05a36 100%);
            background-blend-mode: normal, normal;
            position: relative;
            z-index: 1;
            .return{
                width: 10%;
                height: 80px;
                color: #fff;
                position: absolute;
                left: 10px;
                top: 0px;
                z-index: 2;
            }
            .title{
                width: 100%;
                height: 80px;
                color: #fff;
                position: absolute;
                left: 0px;
                top: 0px;
                z-index: 1;  
                font-size: 36px;
                font-weight: 700;
            }
            .data{
                width: auto;
                height: 80px;
                color: #fff;
                position: absolute;
                left: 25px;
                top: 100px;
                z-index: 2;  
                font-size: 30px;
            }
            .form{
                width: 90%;
                height: 349px;
                background:#fff;
                box-shadow: 4px 6.9px 16px 0px rgba(0, 0, 0, 0.22);
                border-radius: 20px;
                border: solid 3px #ffffff;
                position: absolute;
                left: 5%;
                top: 180px;
                z-index: 3;  
                .top{
                    width: 100%;
                    height: 80%;
                    .row{
                        width: 100%;
                        height: 50%;
                        .per_detail{
                            width: calc(100% / 3);
                            height: 100%;
                            .nember{
                                width: 100%;
                                height: 50%;
                                font-size: 36px;
                                color: #333;
                            }
                            .titles{
                                width: 100%;
                                height: 50%;
                                font-size: 26px;
                                color: #666666;
                            }
                        }
                    }
                }
                .bottom{
                    width: 90%;
                    height: 20%;
                    margin-left: auto;
                    margin-right: auto;
                    display: flex;
                    display: -webkit-flex;
                    justify-content: space-between;
                    align-items: center;
                    span{
                        color: #ffa800;
                        font-size: 24px;
                    }
                    .detail{
                        color: #ffa800;
                    }
                }
            }
        }
        .line_menu{
            margin-top: 250px;
            .per_menu{
                width: 90%;
                height: 70px;
                padding-bottom: 20px;
                margin-left: auto;
                margin-right: auto;
                margin-top: 20px;
                border-bottom: solid 1px rgba(54, 46, 43, 0.1);
                .icon{
                    width: 15%;
                    height: 100%;
                }
                .title{
                    width: 80%;
                    height: 100%;
                    font-size: 28px;
                    color: #333333;
                    .small{
                        width: 100%;
                        height: 50%;
                    }
                    .slogan{
                        width: 100%;
                        height: 50%;
                        font-size: 24px;
                        color: #666;
                    }
                }
                .more{
                    width: 5%;
                    height: 100%;
                    color: #666;
                }
            }
        }
        .my_app{
            width: 90%;
            height: auto;
            margin-left: auto;
            margin-right: auto;
            .title{
                width: 100%;
                height: 80px;
                
            }
            .app{
                display: flex;
                display: -webkit-flex;
                flex-wrap: wrap;
                -webkit-flex-wrap: wrap;
                .per_app{
                    width: calc(100% / 3);
                    height: 150px;
                    margin-top: 25px;
                    .icon{
                        width: 100%;
                        height: auto;
                        padding: 5px 0px 5px 0px;
                    }
                    .title{
                        width: 100%;
                        height: 70px;
                        // border: solid 1px red;
                        color: #333333;
                        font-size: 26px;
                    }
                }
            }
        }
    }
</style>
