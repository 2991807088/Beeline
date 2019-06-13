<template>
    <div id="card_list">
        <div class="header">
            <div class="avator center"><img :src="headimg" alt=""></div>
            <div class="nickiname center">{{nickname}}</div>
            <div class="promotioncode center">推荐码: {{promotioncode}}</div>
        </div>
        <div class="credit_card">
            <div class="per_card">
                <div class="icon center-end"><van-icon size="32px" name="http://fx.91dianji.com.cn/XINYONGKA02@2x.png"/></div>
                <div class="title center">信用卡</div>
            </div>
            <div class="per_card">
                <div class="icon center-end"><van-icon size="32px" name="http://fx.91dianji.com.cn/HUANQING@2x.png"/></div>
                <div class="title center">已还清</div>
            </div>
            <div class="per_card">
                <div class="icon center-end"><van-icon size="32px" name="http://fx.91dianji.com.cn/WEIHUANQING@2x.png"/></div>
                <div class="title center">未还款</div>
            </div>
        </div>
        <div class="record_list">
            <div class="record">
                <span class="dot"></span>
                <span class="bankname">招商银行</span>
                <span class="title">还款金额</span>
                <span class="price">¥7864.39</span>
                <span class="state">还款成功</span>
                <span class="date">04-17</span>
                <span class="now">立即还款</span>
                <span class="deadline">15天后还款</span>
                <span class="deaddate">05-17</span>
                <span class="more"><van-icon name="arrow"/></span>
            </div>
        </div>
        <footerMenu :active="active" @getChange="changeActive"></footerMenu>
    </div>
</template>

<script>
import {axiosPost} from '../../lib/http.js'
import footerMenu from '@/components/footer'
export default {
     components:{
      footerMenu
  },
    data(){
        return{
            showFlag:false,
            active: 3,
            nickname: '',
            headimg: '',
            promotioncode: '',
        }
    },
    methods:{
        changeActive(obj){
        } ,
        // 查询个人设置
        handleGetAmount(){
            let url = '/customer/getCustomer';
            let params = {
                openid:this.$store.state.wechat.openid,
            };
            axiosPost(url,params).then(res =>{
                console.log('查询个人设置成功',res);
                this.nickname = res.data.data.nickname;
                this.headimg  = res.data.data.photo;
                this.promotioncode  = res.data.data.promotioncode; 
                
            }).catch(res =>{
                console.log('查询个人设置失败',res);
            })
        },
    },
    created(){
        this.handleGetAmount();
    }
    
}
</script>

<style lang="less" scoped >
  #card_list {
      width: 100%;
      height: calc(100% - 55px);
      .header{
          width: 100%;
          height: 400px;
          padding-top: 80px;
          background-image: linear-gradient(100deg, #fcc53d 0%, #ffa800 100%), linear-gradient(#4f60c8, #4f60c8);
          position: relative;
          .avator{
                width: 100%;
                height: auto;
                img{
                    width: 150px;
                    height: 150px;
                    border-radius: 50%;
                }
          }
          .nickiname{
              width: 100%;
              height: 70px;
              font-size: 30px;
              color: #ffffff;
              font-weight: 700;
          }
          .promotioncode{
              width: 100%;
              height: 40px;
              font-size: 28px;
              color: #ffffff;
          }
      }
      .credit_card{
            width: 93%;
	        height: 187px;
            background: #ffffff,;
	        box-shadow: -1.5px 7.9px 16px 0px rgba(0, 0, 0, 0.22);
            border-radius: 20px;
            border: solid 3px #ffffff;
            position: absolute;
            top: 400px;
            left: 3.5%;
            display: flex;
            display: -webkit-flex;
            justify-content: space-around;
            -webkit-justify-content: space-around;
            .per_card{
                width: calc(100% / 3);
                height: 100%;
                .icon,.title{
                    width: 100%;
                    height: 50%;
                }
            }
      }
      .record_list{
            width: 93%;
            height: auto;
            margin: 150px auto auto auto;
            .record{
                width: 100%;
                height: 250px;
                background-image: linear-gradient(100deg, rgba(157, 207, 212, 0.97) 0%, rgba(63, 139, 193, 0.97) 100%), linear-gradient(#4f60c8, #4f60c8);
                background-blend-mode: normal, normal;
                box-shadow: -1.5px 7.9px 16px 0px rgba(0, 0, 0, 0.22);
                border-radius: 20px;
                border: solid 3px #ffffff;
                position: relative;
                .dot{
                    width: 20px;
                    height: 20px;
                    background: #ffffff;
                    border-radius: 50%;
                    position: absolute;
                    top: 40px;
                    left: 40px;
                }
                .bankname{
                    font-family: SourceHanSansCN-Regular;
                    font-size: 30px;
                    font-weight: normal;
                    font-stretch: normal;
                    line-height: 38px;
                    letter-spacing: 0px;
                    color: #ffffff;
                    position: absolute;
                    top: 35px;
                    left: 70px;
                }
                .title{
                    font-size: 26px;
                    font-weight: normal;
                    font-stretch: normal;
                    line-height: 38px;
                    letter-spacing: 0px;
                    color: #ffffff;
                    position: absolute;
                    top: 100px;
                    left: 70px;
                }
                .price{
                    font-size: 26px;
                    font-weight: normal;
                    font-stretch: normal;
                    line-height: 38px;
                    letter-spacing: 0px;
                    color: #ffffff;
                    position: absolute;
                    top: 160px;
                    left: 70px;
                }
                .state{
                    font-size: 26px;
                    font-weight: normal;
                    font-stretch: normal;
                    line-height: 38px;
                    letter-spacing: 0px;
                    color: #ffffff;
                    position: absolute;
                    top: 40px;
                    right: 85px; 
                    background-image: linear-gradient(180deg, #42c61f 0%, #00601b 100%);
                    padding: 5px 15px 5px 15px;
                    border-radius: 20px;
                }
                .date{
                    font-size: 26px;
                    font-weight: normal;
                    font-stretch: normal;
                    line-height: 38px;
                    letter-spacing: 0px;
                    color: #ffffff;
                    position: absolute;
                    top: 110px;
                    right: 115px;
                }
                .now{
                    font-size: 26px;
                    font-weight: normal;
                    font-stretch: normal;
                    line-height: 38px;
                    letter-spacing: 0px;
                    color: #ffffff;
                    position: absolute;
                    top: 160px;
                    right: 90px;
                    background-color: #e0a903;
                    border-radius: 20px;
                    padding: 0px 10px 0px 10px;
                }
                .deadline{
                    font-size: 26px;
                    font-weight: normal;
                    font-stretch: normal;
                    line-height: 38px;
                    letter-spacing: 0px;
                    color: #ffffff;
                    position: absolute;
                    top: 100px;
                    left: 250px;
                }
                .deaddate{
                    font-size: 26px;
                    font-weight: normal;
                    font-stretch: normal;
                    line-height: 38px;
                    letter-spacing: 0px;
                    color: #ffffff;
                    position: absolute;
                    top: 160px;
                    left: 280px;
                }
                .more{
                    font-size: 26px;
                    font-weight: normal;
                    font-stretch: normal;
                    line-height: 38px;
                    letter-spacing: 0px;
                    color: #ffffff;
                    position: absolute;
                    top: 50px;
                    right: 30px;
                }
            }
      }

  }
</style>
