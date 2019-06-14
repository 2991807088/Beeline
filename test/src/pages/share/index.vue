<template>
    <div id="card_list">
        <div class="header">
            <div class="avator center"><img :src="headimg" alt=""></div>
            <div class="nickiname center">{{nickname}}</div>
            <div class="promotioncode center">推荐码: {{promotioncode}}</div>
        </div>
        <div class="credit_card">
            <div class="per_card" @click="getCard">
                <div class="icon center-end"><van-icon size="32px" name="http://fx.91dianji.com.cn/XINYONGKA02@2x.png"/></div>
                <div class="title center">信用卡</div>
            </div>
            <div class="per_card" @click="completed('1')">
                <div class="icon center-end"><van-icon size="32px" name="http://fx.91dianji.com.cn/HUANQING@2x.png"/></div>
                <div class="title center">已还清</div>
            </div>
            <div class="per_card" @click="completed('')">
                <div class="icon center-end"><van-icon size="32px" name="http://fx.91dianji.com.cn/WEIHUANQING@2x.png"/></div>
                <div class="title center">未还款</div>
            </div>
        </div>
        <!-- <div  v-show="showpayment" class="record_list">
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
        </div> -->
        <!-- 还款成功 -->
        <div v-show="showcompleted" class="waiting">
          <ul>
              <li  @click="goPlanDetail(info.id,info.bankNick,info.cardNo,info.payerName)" v-for="(info,index) in datas" :key="index">
                  <div class="top">
                      <p><span>*</span>{{info.cardNo.substr(info.cardNo.length-4)}}</p>
                      <p>{{info.payerName}}</p>
                      <p>本期账单：￥<span>{{info.realamount}}</span></p>
                  </div>
                  <div class="middle">
                      <div class="m-left">
                          <p>{{info.bankNick}}</p>
                          <!-- <p>等待执行：2019/5/17:14:33:37</p> -->
                      </div>
                      <div class="m-right">
                           <p>执行状态</p>
                           <!-- <p v-if="info.state=='1'">还款成功</p> -->
                           <p v-if="info.state=='0'">待执行</p>
                           <p v-if="info.state=='1'">已成功</p>
                           <p v-if="info.state=='2'">已取消</p>
                           <p v-if="info.state=='3'">进行中</p>
                           <p v-if="info.state=='4'">失败</p>
                          <!-- <van-button @click.self="stopPlan(item.id)" type="default" round>停止计划</van-button> -->
                      </div>
                  </div>
                  <div class="bottom">
                      <ul>
                          <li>
                              <p>{{info.poundage}}</p>
                              <p>手续费</p>
                          </li>
                            <li>
                              <p>{{info.repaycount}}</p>
                              <p>还款笔数</p>
                          </li>
                      </ul>
                  </div>
              </li>
          </ul>
      </div>
      <!-- 信用卡列表 -->
        <div v-show="showList" class="cardlist">
            <ul>
                 <li v-for="(item, index) in cardList" :key="index">
                       <div class="top">
                          <div class="bankName">
                              <p>{{item.bankNick}}</p>
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
                                   <p>本期账单</p>
                              </div>
                              <div class="pay">
                                  <!-- <p class="days">16</p> -->
                                  <div>
                                      <p class="botton">还款日</p>
                                      <!-- <p><span>{{String(new Date().getMonth()+1)+-&nbsp;+item.duedate}}</span></p> -->
                                      <p><span>{{new Date().getMonth()+1}}</span>&nbsp;-&nbsp;<span>{{item.duedate}}</span></p>
                                  </div>
                              </div>
                              <p>
                                  <van-button @click="repayment(index)" round type="info">立即还款</van-button>
                              </p>
                          </div>
                       </div>
                       <div class="bottom">
                           <ul>
                               <li>
                                   <p>{{item.realamount}}</p>
                                    <p>还款金额</p>
                               </li>
                               <li>
                                    <p v-if="item.state=='0'">待执行</p>
                                    <p v-if="item.state=='1'">已成功</p>
                                    <p v-if="item.state=='2'">已取消</p>
                                    <p v-if="item.state=='3'">进行中</p>
                                    <p v-if="item.state=='4'">失败</p>
                                    <p>还款状态</p>
                               </li>
                                <li>
                                   <p>{{item.repaycount}}</p>
                                   <p>还款笔数</p>
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
                                <div class="small" @click.stop="smallPass(item)">
                                    <van-icon name="http://sbs.91dianji.com.cn/xiaoe.png" size="40px"/>
                                    <p>小额通道</p>
                                    <p> <van-icon name="arrow" size="30px"/></p>
                                </div>
                                <!-- <div class="large" @click.stop="largePass(item)">
                                        <van-icon name="http://sbs.91dianji.com.cn/dae.png" size="40px"/>
                                        <p>大额通道</p>
                                        <p> <van-icon name="arrow" size="30px"/></p>
                                </div> -->
                             </div>
                       </div>
                       
                   </li>
            </ul>
        </div>

         <div class="detail">
                <van-button  plain to="/home/creditHousekeeper/aisleHousekeeper/bindingCreditCard" size="normal" type="default">添加信用卡</van-button>
                <van-button plain to="/home/punch" size="normal" type="default">查看全部计划</van-button>
           </div>

        <footerMenu :active="active" @getChange="changeActive"></footerMenu>
    </div>
</template>

<script>
import {axiosPost} from '../../lib/http.js'
import footerMenu from '@/components/footer'
import { bankCardAttribution } from '../../lib/bankName'
import storage from '@/lib/storage'
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
            // showpayment:false,
            cardList:[],
             showpass:false,
              showdis:false,
              num:null,
              amount:"",
              showList:true,
              datas:[],
              showcompleted:false
         }
    },
    methods:{
        changeActive(obj){
        } ,
         // 点击遮盖层，通道隐藏
        showcover(){
            this.showdis=!this.showdis
            this.showpass=false
        },
        // 获取主计划和子计划
        goPlanDetail(id,bankName,name,nick){
            this.$router.push({
                path:"/home/punch/planDetail",
                query:{
                    id:id,
                    bankName:bankName,
                    name:name,
                    nick:nick
                }
            })
        },
        // 已完成 和未完成功列表
        completed(s){
            this.showList=false
            this.showcompleted=true
             let data={
                page:"1",
                pageSize:"100",
                state:s
            }
              axiosPost("/creditCard/getMainPlan",data)
              .then(res=>{
                //   console.log(s)
                if(res.data.success){
                    if(res.data.data.data.length==0){
                        this.$toast("暂无数据")
                         this.showcompleted=false
                    } else {
                        let arr= res.data.data.data
                         let arrXun=[]
                      arr.forEach((item,i) => {
                         item.bankNick=bankCardAttribution(item.cardNo).bankName
                          arrXun.push(item)
                            if(s=="" && item.state== "1"){
                                 arrXun.remove(i)
                            } 
                     });
                     this.datas=arrXun
                    }
                } else {
                     this.$toast({
                          message:res.data.message
                      })
                }
              })
              .catch(err=>{
                //   if(!err.data.success){
                //       this.$toast({
                //           message:res.data.message
                //       })
                //   }
                //   console.log(err)
              })

        },
        // 获取卡列表
        getCard(){
            this.showcompleted=false
            this.showList=true
            
             axiosPost("/creditCard/getMyCreditCard")
             .then(res=>{
                 if(res.data.success){
                     let arr= res.data.data
                     let arrXun=[]
                     arr.forEach((item,i) => {
                         item.bankNick=bankCardAttribution(item.cardNo).bankName
                         arrXun.push(item)
                     });
                     this.cardList=arrXun
                    //  this.cardNum=this.cardList.length
                 }
             })
             .catch(err=>{

             })

        },
         // 查询大额通道是否签约
        largePass(i){
             let data={
               bindId:i.bindId 
            }
             axiosPost("/vtdcreditCard/getEnterNet",data)
             .then(res=>{
                //  if(!res.data.success  ){
                //      this.$toast({
                //          message:res.data.message
                //      })
                //  } 
                //  else
                  if( !res.data.success  ){
                     this.$router.push({
                         path:"/home/largeAmount",
                         query:{
                             info:i
                          }
                     })
                 } else  {
                     if(res.data.data.user_no && res.data.data.state==="0"){
                     this.$router.push({
                         path:"/home/active",
                         query:{
                             user:res.data.data.user_no,
                             info:i
                         }
                     })

                 }else {
                      storage.set('channel',"2");
                    //   let planList=res.data.data
                     this.$router.push({
                         path:"/home/creditHousekeeper/aisleHousekeeper/repaymentChannel",
                         query:{
                            //  list:planList,
                            //  area:this.area,
                             info:i
                         }
                     })
                   }
                 } 
             })
             .catch(err=>{
                //  if(!err.data.success){
                //       this.$router.push({
                //         path:"/home/largeAmount",
                //        query:{
                //             info:i
                //        }
                //     })
                //  }
                 
             })
        },
         // 查询小额通道是否签约
        smallPass(i){
            let data={
               bindId:i.bindId 
            }
             axiosPost("/creditCard/getEsicashExist",data)
             .then(res=>{
                 if(res.data.success){
                      storage.set('channel',"1")
                       this.$router.push({
                         path:"/home/creditHousekeeper/aisleHousekeeper/repaymentChannel",
                         query:{
                             info:i
                          }
                     })
                     console.log("1023")
                 } else {
                      this.$router.push({
                        path:"/home/insertEsiCash",
                        query:{info:i}
                     })
                 }
                //  console.log(res,"res   success")
                      
             })
             .catch(err=>{
                 console.dir(err)
                 
                //  if(!err.data.success){
                //      
                //  }
             })
        },
         repayment(i){
            this.num=i
            // this.showPass=true
            // this.showdis=true
            this.showpass=true
            // 查询小额通道签约
            // let data={
            //    bindId:i.bindId 
            // }
            //  axiosPost("/creditCard/getEsicashExist",data)
            //  .then(res=>{
            //      if(!res.data.success){
            //          this.$router.push({
            //              path:"/home/insertEsiCash",
            //              query:{info:i}
            //          })
            //      } else {
            //           let planList=res.data.data
            //          this.$router.push({
            //              path:"/home/creditHousekeeper/aisleHousekeeper/repaymentChannel",
            //              query:{ 
            //                 //  list:planList,
            //                 //  area:this.area,
            //                 //  item:i
            //                 info:i
            //              }
            //          })
            //      }
                 
            //  })
            //  .catch(err=>{
                 
            //  })
            // this.$router.push({
            //     path:"/home/creditHousekeeper/aisleHousekeeper/repaymentChannel",
            //     query:{
            //         info:item
            //     }
            // })
        },
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
        // 查询个人设置
        handleGetAmount(){
            let url = '/customer/getCustomer';
            let params = {
                openid:this.$store.state.wechat.openid,
            };
            axiosPost(url,params).then(res =>{
                // console.log('查询个人设置成功',res);
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
        this.getCard()
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
       .waiting {
           margin-top:150px;
                   >ul{
                       padding:15px;
                       >li {
                        //   border:2px solid #ccc;
                        //   background-color:#4AA3E2;
                          color:#fff;
                          border-radius: 10px;
                          box-sizing: border-box;
                        margin-bottom: 15px;
                        // background-image:url("http://sbs.91dianji.com.cn/big2.png");
                        background-color: #ffa800;
                        background-repeat: no-repeat;
                        height: 350px;
                        background-size:100%;
                        padding:10px;

                          >.top {
                            //  padding-top:13px;
                             height:20px !important;
                              padding:20px 5px 20px 10px;
                              display: flex;
                              justify-content: space-around;
                              margin:0px !important;
                          }
                          >.middle{
                               display: flex;
                              justify-content: space-around;
                              margin-top:20px;
                              >.m-left {
                                  >p {
                                      &:nth-of-type(1){
                                          margin-bottom: 15px;
                                      }
                                  }
                              }
                              >.m-right{
                                  >p {
                                      &:nth-of-type(1){
                                          padding-bottom: 10px;
                                      }
                                      &:nth-of-type(2){
                                          margin:10px 0px;
                                      }
                                  }
                                  .sign-out {
                                       margin-top:20px;
                                        .van-dialog,
                                        .van-dialog__message,
                                        .van-button {
                                            font-size: 30px;
                                        }
                                         .van-button .van-button--default .van-button--large .van-dialog__confirm .van-hairline--left{
                                            height:70px;
                                        }
                                         .van-dialog .van-button{
                                            height: 80px;
                                        }
                                         .van-button--default{
                                            background-color: #ffa800;
                                        }

                                  }

                                  
                              }
                          }
                          >.bottom {
                              margin-top:30px;
                              >ul{
                                  display: flex;
                                  padding:20px 5px;
                                //   background-color: rgba(0, 0, 0, .1);
                                  >li {
                                      padding-top:20px;
                                      width:33%;
                                      text-align: center;
                                      >p {
                                          &:nth-of-type(1){
                                              padding-bottom: 10px;
                                          }
                                      }
                                  }
                              }
                          }
                       }
                   }
               }
      .credit_card{
            width: 93%;
	        height: 187px;
            background: #ffffff;
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
      .cardlist {
          margin-top:150px;
          padding:10px;
          >ul {
              padding:15px;
              box-sizing: border-box;
               >li {
                      position: relative;
                      width:100%;
                      border-radius: 10px;
                      background-color: #fcc53d;
                      .van-button--info {
                          background-color: #fff;
                        //   border-color: #fcc53d;
                        border-color: #ffa800;
                          color:#ffa800;
                      }
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
                          top:40%;
                          left:6%;
                          width: 600px;
                          padding:10px;
                          background-color: #fff;
                          border:1px solid #ccc;
                            z-index: 999;
                          >.small ,
                           .large {
                              display: flex;
                              justify-content: space-between;
                              padding-bottom: 20px;
                              align-items: center;
                              z-index: 999;
                              background-color: #fff;
                              >p {
                                  font-size: 32px;
                                  color:#ffa800;
                                  font-weight: bold;
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
                      
                    //   border:2px solid #ccc;
                    //   background-color:#4AA3E2;
                      color:#fff;
                      padding:10px;
                       box-sizing: border-box;
                       margin-bottom: 15px;
                    //    background-image:url("http://sbs.91dianji.com.cn/big2.png");
                        height: 350px;
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
                              >li {
                                  text-align: center;
                                  margin-bottom: 15px;
                                  color:#000;
                                      padding-bottom: 13px;
                                  .van-icon--image {
                                      font-size: 40px;
                                  }
                                  >p {
                                      color:#fff;
                                      &:nth-of-type(1){
                                          margin-top:20px;
                                          margin-bottom:10px;
                                      }
                                      &:nth-of-type(2){
                                          margin-bottom: 20px;
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
                          .botton {
                              margin-bottom: 10px;

                          }
                      }
                  }
            //   >li {
                //   border:2px solid #ccc;
                //   border-radius: 10px;
                //   padding:30px;
                //   font-weight: bold;
                //   >div {
                //       display: flex;
                //       justify-content: space-between;
                //       padding-bottom: 20px;
                //   }
                //   >p {
                //       text-align: center;
                //       padding:15px 0px;
                //    }
            //   }
          }
      }
      .detail {
               box-sizing: border-box;
               margin-left: 50px;
               margin-top:150px;
               padding:0 20px;
               display: flex;
               margin-bottom: 50px;
               justify-content: space-between;
               >button {
                   &:nth-of-type(1){
                       margin-right:20px;
                   }
               }
               .van-button--default {
                   height:60px;
                   font-size: 30px;
                   background-color: #ffa800;
               }
           }

  }
</style>
