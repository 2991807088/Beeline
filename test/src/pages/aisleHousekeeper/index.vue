<template>
    <div id="aisle-housekeeper">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>信用卡管家</span>
            <span></span>
        </header>
        <div class="container">
           <div class="swipe">
                 <div class="top row">
                    <div class="avator"><img :src="headimg" alt=""></div>
                    <div class="name-code">
                        <!-- <div class="name start-center">
                            <span>{{nickname}}</span>&nbsp;&nbsp;&nbsp;
                            <span>{{vip}}</span>
                        </div>
                        <div class="unset start-center">
                           <p>推荐码：<span>{{promotioncode}}</span></p>
                         </div> -->
                          <p>{{vip}}</p>
                         <p>{{nickname}}</p>
                         <p>推荐码：<span>{{promotioncode}}</span></p>
                        
                    </div>
                     <!-- <div  class="operator end-center">
                         <span>绑卡：<span>{{cardNum}}</span>张</span>
                     </div> -->
                 </div>
               
           </div>
           <div class="bind">
               <ul>
                   <li v-for="(item, index) in cardList" :key="index">
                       <div class="top">
                          <div class="bankName">
                              <p>{{item.bankname}}</p>
                              <p>*<span>{{item.cardNo.substr(item.cardNo.length-4)}}</span></p>
                              <p>
                                  {{item.payerName.replace(1,"*")}}
                              </p>
                              <p>
                                 <!-- <van-button @click="unbinding(item)" round type="default">解绑</van-button>   -->
                                <span @click="unbinding(item)">解绑</span>
                              </p>
                          </div>
                          <div class="now">
                              <div>
                                  <p class="botton">{{amount}}</p>
                                   <router-link :to="{path:'/home/changeBill',query:{info:item}}" tag="p">账单编辑</router-link>
                              </div>
                              <div class="pay">
                                  <!-- <p class="days">16</p> -->
                                  <div>
                                      <p class="botton">还款日</p>
                                      <p><span>{{new Date().getMonth()+1}}</span>&nbsp;-&nbsp;<span>{{item.duedate}}</span></p>
                                  </div>
                              </div>
                              <p>
                                  <van-button @click="repayment(index)" class="repayment" round type="info">立即还款</van-button>
                              </p>
                          </div>
                       </div>
                       <div class="bottom"  v-if="item.repaycount !== null">
                           <ul>
                               <li>
                                   <p>{{item.realamount}}</p>
                                   <p>还款金额</p>
                               </li>
                               <!-- <li>
                                    <p v-if="item.state=='0'">待执行</p>
                                    <p v-if="item.state=='1'">已成功</p>
                                    <p v-if="item.state=='2'">已取消</p>
                                    <p v-if="item.state=='3'">进行中</p>
                                    <p v-if="item.state=='4'">失败</p>
                                    <p>还款状态</p>
                               </li> -->

                                <li>
                                   <!-- <p>{{item.repaycount}}</p> -->
                                    <p>{{item.already}}/{{item.repaycount}}</p>
                                   <p>还款进度</p>
                               </li>
                                <li>
                                   <p>{{item.poundage}}</p>
                                   <p>手续费</p>
                               </li>
                               <li>
                                
                               </li>
                           </ul>
                       </div>
                       <div v-show="showpass" @click.capture="showcover" :class="num==index?'cover':''">
                           <div  v-show="num==index"  class="pop">
                               <h3>还款方式</h3>
                                <p>请选择还款方式</p>
                                <div class="small" @click.stop="smallPass(item,'1')">
                                    <van-icon name="http://sbs.91dianji.com.cn/smalle.png" size="26px"/>
                                    <div class="middle">
                                          <p>低费率通道 <span>预留额度5%-2000</span></p>
                                          <span class="edu">还款金额为1000-30000</span>
                                    </div>
                                    <p> <van-icon name="checked" :color="colors" size="20px"/></p>
                                </div>
                                <div class="large" @click.stop="largePass(item,'2')">
                                    <van-icon name="http://sbs.91dianji.com.cn/bige.png" size="26px"/>
                                   <div class="middle">
                                        <p>大额通道&nbsp;&nbsp;<span>快速提额</span></p>
                                        <span class="edu">优质银行商户通道，推荐高净值高授信用户使用</span>
                                   </div>
                                    <p> <van-icon name="checked" :color="colorl" size="20px"/></p>
                                </div>

                                <div class="sure">
                                    <van-button size="large" @click.stop="selectPass" type="info">确定</van-button>
                                </div>
                             </div>
                       </div>
                       
                   </li>
               </ul>
           </div>
         
           <div class="plansdetail">
               <div class="plans">
                   <router-link tag="div" to="/home/creditHousekeeper/aisleHousekeeper/bindingCreditCard"  class="addcard"><van-icon name="plus" />添加信用卡</router-link>
                   <router-link tag="div" to="/home/punch" class="allplans"><van-icon name="send-gift-o" />查看全部计划</router-link>                 
               </div>

                <router-link tag="div" class="manage" to="/cancelCard"><van-icon name="card" /> 信用卡管理</router-link>
           </div>
        </div>
    </div>
</template>



<script>
import { axiosPost,axiosGet }  from '../../lib/http'   
import { bankCardAttribution } from '../../lib/bankName'
import loading from '@/components/loading'
import storage from '@/lib/storage' 
export default {
     components:{
      loading
    },
    data() {
        return {
            componentload:true,
            bankList:{},
            timerId:null,
            showCardList:false,
            nickname:"",
            vip:"",
            promotioncode:"",
            headimg:"",
            cardList:[],
            bankname:"",
            amount:"",
            num:null,
            showdis:false,
            showpass:false,
            bankcode:'',
            userId:"",
            colors:"",
            colorl:"",
            cardinfo:"",
            number:""
        }
    },
    mounted () {
        // this.amount=storage.get("amount")
    },
    methods:{
        goBack() {
            this.$router.push("/home")
        },
        // 点击遮盖层，通道隐藏
        showcover(){
            this.showdis=!this.showdis
            this.showpass=false

        },
        // 解绑信用卡
        unbinding(item){
             let that =this
             that.$dialog.confirm({
                    title: '提示',
                    message: '确定要解绑？',
                    confirmButtonText:'是',
                })
                .then(() => {
                    let data={
                       bindId:item.bindId 
                    }
                  axiosPost("/creditCard/deletedCreditCard",data) 
                  .then(function(res){
                      if(!res.data.success){
                          that.$toast({
                              message:res.data.message
                          })
                          return
                      } else {
                          that.getCardList()
                      }
                     
                  })
                  .catch(function(err){

                  })
                }).catch(() => {
                    // on cancel
                });
        },
        smallPass(info,num){
            this.colors="#007130"
            this.colorl=""
            this.showpass=true
            this.cardinfo=info
            this.number=num
        },
        largePass(info,num){
            this.colorl="#00479D"   
            this.colors=""  
            this.showpass=true
            this.cardinfo=info
            this.number=num
        },
         // 确定按钮
        selectPass(){
           if(this.number=="1"){
               this.small(this.cardinfo)
           } else if(this.number=="2"){
               this.large(this.cardinfo)
           } else {
               this.$toast("请先选择还款通道")
           }
        },

    small(i){
        this.$toast("通道维护中")
        //  axiosPost("/jftpay/getRegist")
        //     .then(res=>{
        //         if(res.data.success){    // 查询商户 成功   查绑卡

        //             console.log(res,"查询商户号成功")

        //             let chMerCode=res.data.data.chMerCode

        //             let data={
        //                 accNo:i.cardNo
        //             }
        //              axiosPost("/jftpay/getBindCard",data)  // 查询绑卡
        //              .then(res=>{
        //                   if(res.data.success){  // 绑卡成功
        //                         storage.set('channel',"1");
        //                         this.$router.push({
        //                             path:"/home/creditHousekeeper/aisleHousekeeper/repaymentChannel",
        //                             query:{
        //                             info:i
        //                         }
        //                     })  
        //                   } else {  // 去绑卡
        //                     this.$router.push({
        //                         path:"/home/smallAmountRH/rhbinding",
        //                         query:{
        //                             info:i,
        //                             chMerCode:chMerCode
        //                         }
        //                     })
        //                   }
        //              })
        //         } else {   // 查询商户 不成功  注册商户
        //                 console.log(res,"需要注册")
        //                 this.$router.push({
        //                     path:"/home/smallAmountRH",
        //                     query:{
        //                         info:i
        //                     }
        //                 })
        //         }
        //     })
      
        },

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
         // 查询大额通道是否签约
        large(i){
        //     let datas={
        //     bankCard:i.cardNo
        // }
        //     axiosPost("/scpay/bindCardExist",datas)
        //     .then(res=>{
        //         if(res.data.success){
                    
        //         // newscpay 大额
        //             let params={
        //                 bankCard: i.cardNo,
        //                 channel:"2"
        //             }
        //                 axiosPost("/newscpay/bindCardExist",params)
        //                 .then(res=>{
        //                     if(res.data.success){

                                storage.set('channel',"2");
                                        this.$router.push({
                                        path:"/home/creditHousekeeper/aisleHousekeeper/repaymentChannel",
                                        query:{
                                            info:i,
                                        }
                                    })
                            
            //                 } else {
            //                     this.$router.push({
            //                         path:"/home/smallAmountSC",
            //                         query:{
            //                             info:i,
            //                             type:"2"
            //                         }
            //                     })
            //                 }
            //             })
            //     }else {
            //         this.$router.push({
            //             path:"/home/largeAmountSC",
            //             query:{
            //                 info:i
            //             }
            //         })
            //     }
            // })
               
         } ,
     
        repayment(i){
            this.num=i
            this.showdis=true
            this.showpass=true
           
        },
        // 查询绑卡列表
        getCardList(){
             axiosPost("/creditCard/getMyCreditCard")
             .then(res=>{
                 if(res.data.success){
                     let arr= res.data.data
                     let arrXun=[]
                     arr.forEach((item,i) => {
                         if(item.bankname===undefined || item.bankname===null || item.bankname===""){
                              item.bankname=bankCardAttribution(item.cardNo).bankName
                         }
                         arrXun.push(item)
                     });
                     this.cardList=arrXun
                    //  this.cardNum=this.cardList.length
                 }
             })
             .catch(err=>{

             })
        },

         handleGetAmount(){
            let url = '/customer/getCustomer';
            let params = {
                openid:this.$store.state.wechat.openid,
            };
            axiosPost(url,params).then(res =>{
                if(res.data.success){
                    setTimeout(()=>{
                        this.componentload = false;
                    },500)
                    this.nickname = res.data.data.nickname;
                    this.headimg  = res.data.data.photo;
                    this.promotioncode  = res.data.data.promotioncode; 
                    this.ispartner = res.data.data.ispartner;

                   if(res.data.data.level == '1' ){
                        this.vip ="铜蜜蜂";
                    }else  if(res.data.data.level == '2' ){
                        this.vip = "银蜜蜂";
                    } else if(res.data.data.level=="3"){
                        this.vip="金蜜蜂"
                    }   else {
                        this.vip="免费花粉"
                    }
                }else{
                    setTimeout(()=>{
                        this.componentload = false;
                        this.$toast('查询失败')
                    },500)
                }
            }).catch(res =>{
                setTimeout(()=>{
                    this.componentload = false;
                    this.$toast('查询失败')
                },500)
            })
        }
    },
    created () {
       this.handleGetAmount()
       this.getCardList()
    }
}
</script>

<style lang="less" scope>
   #aisle-housekeeper{
       >header {
           background-color: #ffa800;
           width:100%;
           height: 86px;
           line-height: 86px;
           padding-top:10px;
           color:#fff;
           z-index:999;
           display: flex;
           position: fixed;
           font-size: 28px;
           justify-content: space-between;
           >span {
               &:nth-of-type(1) {
                   margin-left: 10px;
               }
               &:nth-of-type(3) {
                   margin-right: 10px;
               }
           }
       }
       >.container {
           padding-top:96px;
           width:100%;
           overflow-x: hidden;
           box-sizing: border-box;
        // margin-top:96px;
           padding-bottom: 50px;
           .van-button--normal {
               font-size: 34px;
           }
           >.swipe {
               width:100%;
            //    height:200px;
               font-size: 22px;
               margin-bottom:15px;
               box-sizing: border-box;
               .top{
                    height: 120px;
                    padding:15px 40px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                     background: linear-gradient(to bottom ,rgb(228, 200, 137), #8C6E2A );
                     border:1px solid #8C6E2A;
                    // background-color: #A89749;
                    // box-sizing: border-box;
                    color:#fff;
                    margin:20px;
                    border-radius: 15px;
                    box-shadow:1px 12px 3px #ccc ;
              .avator{
                  height: 120px;
                  width:  120px;
                  box-sizing: border-box;
                  >img{
                      width: 100%;
                      border-radius: 50%;
                  }
              }
            
              .name-code{
                 flex:1;
                  height: 100%;
                  margin-top:10px;
                //   margin-left:15px;
                padding-left:30px;
                  >p {
                      font-weight: bold;
                      &:nth-of-type(2){
                        padding:15px 0px;
                      }
                  }
                 
                  .name{
                      height: 50px;
                      margin-top: 10px;
                      font-size: 40px;
                      font-weight: 700;
                       color:#000;
                  }
                  .unset{
                      width: 100%;
                      height: 50px;
                      margin-top: 5px;
                      font-size: 28px;
                      color:#000; 
                      >div{
                        width: auto;
                        border: solid 0.02rem #ccc;
                        border-radius: 20px; 
                        padding: 5px 20px;
                      }

                  }
              }
          }
          .operator {
              margin-right:30px;
          }
           }
            .bind {
                box-sizing: border-box;
                 justify-content: space-between;
                 height: 850px;
                  overflow-y: scroll;
              >ul{
                  padding:30px;
                   justify-content: space-between;
                //    overflow-y: scroll;
                  >li {
                      position: relative;
                      width:100%;
                      .cover {
                          position: fixed;
                          top:0px;
                          bottom: 0px;
                          left:0px;
                          right:0px;
                          background-color: rgba(0, 0, 0, .5);
                          z-index: 99;
                          .pop {
                          position: absolute;
                          top:26%;
                          left:9%;
                          width: 600px;
                          padding:10px;
                          background-color: #fff;
                          border:1px solid #ccc;
                          color:#000;
                          z-index: 999;
                          border-radius: 15px;
                          h3 {
                              text-align: center;
                              font-weight: bold;
                              font-size: 34px;
                              padding:30px 0px 15px 0px;
                          }
                          >p {
                              text-align: center;
                              padding:18px 0px;
                              border-bottom: 1px solid #ccc;
                              color:#808080;
                          }
                          .sure {
                              padding:30px;
                          }
                          .van-button--info {
                                background: linear-gradient(to right,#D8B56D, #886929 );
                                height: 80px;
                                line-height: 80px;
                                color:#fff;
                          }
                          >.small ,
                           .large {
                              display: flex;
                              justify-content: space-between;
                              padding-bottom: 20px;
                              align-items: center;
                              z-index: 999;
                              background-color: #fff;
                              padding:15px;
                              .middle {
                                  flex:1;
                                  padding-left:20px;
                                  padding-bottom: 10px;
                                  span {
                                      font-size: 24px;
                                  }
                                  .edu {
                                      color:#BCB291;
                                      background-color: rgba(223, 219, 191, .2);
                                      line-height: 38px;
                                  }
                              }
                              p {
                                  font-size: 32px;
                                  font-weight: bold;
                                  padding: 25px 0;
                                  span{
                                      font-weight: normal;
                                      font-size: 26px;
                                      color:#808080;
                                  }
                              }
                          }
                          .small {
                              border-bottom: 1px solid #ccc;
                          }
                           .large {
                               margin-top:5px;
                           }
                      }
                      }
                      color:#fff;
                      padding:10px;
                       box-sizing: border-box;
                       margin-bottom: 15px;
                    //    background-image:url("http://sbs.91dianji.com.cn/gd.jpg");
                     &:nth-of-type(10n+1){
                         background-image: url("http://sbs.91dianji.com.cn/bgc5.jpg")
                     }
                      &:nth-of-type(10n+2){
                         background-image: url("http://sbs.91dianji.com.cn/bgc6.jpg")
                     }
                     &:nth-of-type(10n+3){
                         background-image: url("http://sbs.91dianji.com.cn/bgc3.jpg")
                     }
                      &:nth-of-type(10n+4){
                         background-image: url("http://sbs.91dianji.com.cn/bgc7.jpg")
                     }
                      &:nth-of-type(10n+5){
                         background-image: url("http://sbs.91dianji.com.cn/bgc8.jpg")
                     }
                      &:nth-of-type(10n+6){
                         background-image: url("http://sbs.91dianji.com.cn/bgc9.jpg")
                     }
                      &:nth-of-type(10n+7){
                         background-image: url("http://sbs.91dianji.com.cn/bgc2.jpg")
                     }
                      &:nth-of-type(10n+8){
                         background-image: url("http://sbs.91dianji.com.cn/bgc1.jpg")
                     }
                      &:nth-of-type(10n+9){
                         background-image: url("http://sbs.91dianji.com.cn/bgc4.jpg")
                     }
                      &:nth-of-type(10n+10){
                         background-image: url("http://sbs.91dianji.com.cn/bgc10.jpg")
                     }
                        height: 410px;
                        background-repeat: no-repeat;
                       background-size:100%;
                       >.top {
                           padding-bottom: 150px;
                           padding-top:10px;
                           .bankName {
                          display: flex;
                          justify-content: space-around;
                          align-items: center;
                          margin-bottom: 15px;
                          margin-top:8px;
                            .van-dialog .van-button{
                                height: 80px;
                              }
                            .van-dialog .van-button {
                                 border: 1px solid #ffa800;
                                }
                            .van-dialog,
                            .van-dialog__message,
                            .van-button {
                                font-size: 30px;
                            }
                             .van-button--default{
                                    background-color: #ffa800;
                                }
                             .van-button .van-button--default .van-button--large .van-dialog__confirm .van-hairline--left{
                                height:70px;
                            }
                        }
                          }
                      .bottom {
                          position: absolute;
                          bottom: 0px;
                          left:0px;
                          right:0px;
                        //   background-color: rgba(0, 0, 0, .2);
                          >ul{
                              display: flex;
                              justify-content: space-around;
                              align-items: center;
                              >li {
                                  width:25%;
                                  text-align: center;
                                  margin-bottom: 15px;
                                  color:#000;
                                  padding-bottom: 30px;
                                  border-radius: 10px;
                                  padding-top:50px;
                                  box-sizing: border-box;
                                  .van-icon--image {
                                      font-size: 40px;
                                  }
                                  >p {
                                      color:#fff;
                                      &:nth-of-type(1){
                                          margin-top:30px;
                                        padding:10px 0;
                                        // margin-bottom: 15px;
                                      }
                                      &:nth-of-type(2){
                                          margin-top:15px;
                                          padding-top:30px;
                                      }
                                  }
                                   &:nth-of-type(2){
                                       >p:nth-child(1){
                                        background: -webkit-gradient(linear, left top, right top, from(#D3B773), color-stop(170%, #553400));
                                        background: linear-gradient(to right, #D3B773 0%, #553400 170%);
                                        border-radius: 15px;
                                     }
                                  }
                              }
                          }
                      }
                      .now {
                          display: flex;
                          justify-content: space-around;
                          align-items: center;
                          padding-top:40px;
                          >.pay {
                              display: flex;
                              >.days {
                                  font-size: 38px;
                                  font-weight: bold;
                                  margin-right: 10px;
                                  margin-top:10px;
                              }
                          }
                          .repayment {
                            //   padding:5px 10px;
                            height: 60px;
                            background: linear-gradient(to right,#D9B36C,#876A26  );
                            border:1px solid  #876A26;
                            // color:#593303;
                            color:#fff;
                            font-size: 24px;
                          }
                          .botton {
                              margin-bottom: 10px;
                          }
                      }
                  }
              }
          }
           >.plan {
               margin:20px;
               >p {
                   >span {
                   &:nth-of-type(1){
                        display:line-block;
                        width:5px;
                        background-color:#A89749; 
                   }
                 }
               }
           }
           >.example {
               margin:20px;
               >img {
                   width:100%;
               }
           }
           >.plansdetail {
            //    width: 88%;
            //    height: auto;
            //    margin: auto;
            //    display: flex;
            //    display: -webkit-flex;
            //    justify-content: space-between;
            //    -webkit-justify-content: space-between;
            // position: fixed;
            // bottom:0;
            // right:30px;
            // left:30px;
            width:100%;
            box-sizing: border-box;
            padding:0 20px;
            margin-top:30px;
            .plans {
                width:100%;
                display: flex;
                justify-content: space-between;
                .allplans,
                .addcard {
                    font-size: 32px;
                }
                div {
                    width:49%;
                    text-align: center;
                    background-color: #ccc;
                    padding:16px 0px;
                    border-right: 1% dotted #fff;
                    background-color: #ccc;
                    color:#D2AD66;
                    border-radius: 20px;
                    padding:25px 0px;
                }
                .addcard {
                     border-right: 1px dotted #fff;
                }
            }
            .manage {
                width:100%;
                margin-top:25px;
                padding:15px 0px;
                text-align: center;
                background-color: #ccc;
                color:#D2AD66;
                 border-radius: 20px;
                 font-size: 32px;
                 padding:25px 0px;
            }
           }
       }
   }
</style>
