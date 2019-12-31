<template>
    <div id="receivables">
        <header>
            <p @click="goBack"><span><van-icon size="16px" name="arrow-left" /></span></p>
            <p>在线收款</p>
           <span></span> 
        </header>
        <div class="container">
            <div class="portrait">
                <div class="userimg">
                    <img :src="headimg" alt="">
                </div>
                <div class="recommend">
                    <p>
                        <span>{{nickname}}</span>
                        <span>{{lev}}</span>
                    </p>
                    <p>{{recommendedcode}}</p>
                </div>
            </div>
           
            <div class="merchant">
                <div class="pay">
                    <p class="union">
                        <span><van-icon size="30px" name="http://wy.91dianji.com.cn/up.png" /></span>
                        <span>设置金额</span>
                    </p>
                    <p>
                        <span>￥</span>
                        <input type="number" v-model="number" @input="change" placeholder="请输入金额最低200元">
                    </p>
                    <div class="card" v-show="showCard">
                        <ul>
                            <!-- <li>
                                <p>到账储蓄卡：</p>
                                <p><span>民生银行</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>5323</span></p>
                                <p class="change">更换<van-icon  name="arrow"  color="#EBB541" /></p>
                            </li> -->
                             <li>
                                <p>支付信用卡：</p>
                                <p><span>{{nick}}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{{cardnumber}}</span></p>
                                <p @click="getxycard" class="change">选择<van-icon  name="arrow"   color="#EBB541" /></p>
                              
                                <!-- <router-link tag="p" :to="{query:{type:'1',},path:'/home/receivables/cards'}"  class="change">选择<van-icon  name="arrow"   color="#EBB541" /></router-link> -->
                            </li>
                        </ul>
                    </div>
                     <p @click="showPay">
                         <span>立即支付</span>
                     </p>

                </div>
                <img src="http://wy.91dianji.com.cn/paytype.png" alt="" srcset="">
                <p>
                    <span><van-icon name="label"/></span>&nbsp;&nbsp;<b class="bold">在线收款</b>，支付通道新开户需要实名注册，信用卡应与绑定的结算卡户名要一致，<span>如出现没到账请及时更换收款储蓄卡后</span>
                     ，及时联系客服登记核查，感谢您的理解 。
                </p>
            </div>
            <div class="transaction">
                <ul>
                    <router-link tag="li" :to="{path:'/home/receivables/rate',query:{'type':'2'}}">
                        <p><span><van-icon color="#EBB541" size="26px" name="http://wy.91dianji.com.cn/dollar.png"/></span></p>
                        <div>
                            <p>我的费率</p>
                            <p>通道费率详细说明</p>
                        </div>
                    </router-link>
                    <li @click="goRecords">
                        <p><span><van-icon color="#EBB541" size="26px" name="http://wy.91dianji.com.cn/search.png"/></span></p>
                        <div>
                            <p>交易查询</p>
                            <p>交易查询详细记录</p>
                        </div>
                    </li>
                    <router-link tag="li" :to="{path:'/home/receivables/passageway',query:{type:'2'}}" >
                        <p><span><van-icon color="#EBB541" size="26px" name="http://wy.91dianji.com.cn/channel.png"/></span></p>
                        <div>
                            <p>通道说明</p>
                            <p>单笔交易限额明细</p>
                        </div>
                    </router-link>
                    <!-- <router-link tag="li" to="/home/changeCard">
                        <p><span><van-icon color="#EBB541" size="26px" name="http://wy.91dianji.com.cn/card.png" /></span></p>
                        <div>
                            <p>储蓄卡管理</p>
                            <p>修改储蓄卡信息</p>
                        </div>
                    </router-link> -->
                      <li @click="managecard">
                        <p><span><van-icon color="#EBB541" size="26px" name="http://wy.91dianji.com.cn/card.png" /></span></p>
                        <div>
                            <p>储蓄卡管理</p>
                            <p>修改储蓄卡信息</p>
                        </div>
                    </li>
                    
                </ul>
            
            </div>
             <div class="statistics">
                 <ul>
                    <!-- <router-link tag="li" :to="{path:'/home/news',query:{title:'收款示例图',url:'http://wy.91dianji.com.cn/shoukuantu.jpg'}}">
                         <span><van-icon name="column" size="20px" color="#EBB541" /></span>
                         <p><span>操作流程说明</span><span><van-icon name="arrow" /></span></p>   
                     </router-link> -->
                     <!-- <li>
                         <span><van-icon name="underway" /></span>
                         <p><span>实名认证</span> <span><van-icon name="arrow" /></span> </p>                                       
                     </li> -->
                      <!-- <li>
                         <span><van-icon name="underway" /></span>
                         <p><span>我的分润</span> <span><van-icon name="arrow" /></span> </p>                                       
                     </li> -->
                      <!-- <li @click="goRecords">
                         <span><van-icon name="underway"  size="20px" color="#EBB541"  /></span>
                         <p><span>在线收款明细</span> <span><van-icon name="arrow" /></span> </p>                                       
                     </li> -->
                      <!-- <li>
                         <span><van-icon name="underway" /></span>
                         <p><span>收款统计</span> <span><van-icon name="arrow" /></span> </p>                                       
                     </li> -->
                 </ul>
             </div>
            <footer>
                
            </footer>
             <div class="covercx" >
                    <van-popup v-model="showxy" position="right" :overlay="true">
                         <div class="action">
                             <van-button  to="/home/creditHousekeeper/aisleHousekeeper/bindingCreditCard" size="large" round type="primary">添加信用卡</van-button>
                             <van-button @click="closexy" round size="large" type="default">关闭</van-button>
                        </div>
                         <div class="cards">
                             <ul>
                                 <li @click.stop="payxy(item)" v-for="(item,index) in xylist" :key="index">
                                     <div class="bank">
                                         <p>{{item.payerName}}</p>
                                         <p>{{item.bankname}}</p>
                                     </div>
                                      <p class="cardnum">{{item.cardNo}}</p>
                                 </li>
                             </ul>
                         </div>
                    </van-popup>
             </div>
        </div>
         <loading :componentload="componentload"></loading>
    </div>
</template>

<script>
import {axiosPost} from '@/lib/http'
import Bank from '@/lib/bank'
import loading from '@/components/loading'
import { bankCardAttribution } from '../../lib/bankName'

export default {
    components:{
      loading
    },
    data() {
        return {
            showTips:false,
            headimg:"",
            nickname:"",
            level:"",
            recommendedcode:"",
            info:"",
            chMerCode:"",
            number:"",
            showCard:false,
            info:"",
            flag:false,
            nick:"请选择支付信用卡",
            cardnumber:"",
            cardInfo:"",
            ordernumber:"",
            componentload:false,
            merchantno:"",
            showxy:false,
            xylist:[],
            xyinfo:{},
            chMerCode:""
        }
    },
    methods:{
        goBack () {
            this.$router.push('/home')
        },
        managecard(){
             axiosPost("/creditCard/getMemberReg")
             .then(res=>{
                 if(res.data.success){
                     this.chMerCode=res.data.data.chMerCode
                     this.$router.push({
                         path:"/home/changeCard",
                         query:{
                             chMerCode:this.chMerCode
                         }
                     })
                 } else {
                     this.$toast("请先注册商户")
                 }
             })
        },
        closexy(){
            this.showxy=false
        },
        addcard(){
            this.$router.push("/home/creditHousekeeper/aisleHousekeeper/bindingCreditCard")
        },
        payxy(info){
            this.xyinfo=info
            this.showxy=false
            this.nick=this.xyinfo.bankname
            this.cardnumber=this.xyinfo.cardNo.substr(this.xyinfo.cardNo.length-4,4)
        },
        getxycard(){
            this.showxy=true
               // 信用卡列表
            this.getcardsxy()
        },
          getcardsxy(){
             axiosPost("/creditCard/getMyCreditCard")
             .then(res=>{
                 if(res.data.success){
                     this.xylist=res.data.data
                 }
             })
        },

        change(){
              if(this.number.trim().length==0){
                  this.showCard=false
              } else {
                 this.showCard=true
              }
        },
        showPay(){
             if(this.number.trim().length==0){
                return this.$toast("请输入金额")
            } 
            if(this.nick=="请选择支付信用卡"){
                return this.$toast("请先选择支付信用卡")
            }
            this.componentload=true
            // 查询是否有商户号
            axiosPost("/creditCard/getMemberReg")
           .then(res=>{
                if(res.data.success){  //已申请商户

                // 通道一的商户号
                 this.chMerCode=res.data.data.chMerCode


                     var rand = "";
                 for(var i = 0; i < 2; i++){
                     var r = Math.floor(Math.random() * 10);
                     rand += r
                 }
                this.ordernumber= new Date().getTime()+rand
        
                function generateTimeReqestNumber() {
                        var date = new Date();
                        return date.getFullYear().toString() + pad2(date.getMonth() + 1) + pad2(date.getDate()) 
                        + pad2(date.getHours()) + pad2(date.getMinutes()) + pad2(date.getSeconds())
                    }
                        
                function pad2(n) { return n < 10 ? '0' + n : n }

                let datapay={
                    busCode:"2001",
                    orderAmount:this.number, //金额
                    realName:this.xyinfo.payerName,  //姓名
                    idCard:this.xyinfo.idCardNo, //身份证
                    accNo:this.xyinfo.cardNo, // 信用卡卡号
                    mobile:this.xyinfo.phone, // 手机号
                    orderCode:this.ordernumber, // 订单号
                    chMerCode:this.chMerCode, // 商户编号
                    orderTime:generateTimeReqestNumber()
                }  

                axiosPost("/creditCard/quickPay",datapay)
                .then(res=>{
                    if(!res.data.success){
                        setTimeout(() =>{
                            this.componentload = false;
                            this.$toast({
                            message:res.data.message
                            })
                        },1000)
                    } else {
                    let url=res.data.data.url.replace("http://localhost:8080","http://test.man-opaydev.ncfgroup.com/fusionPosp")
                            setTimeout(() =>{
                                this.componentload = false;

                                if(res.data.success){

                                    //   this.$router.push({
                                    //     path:"/loan/form/myOrder",
                                    //     query:{
                                    //             info:url,
                                    //             title:"支付"
                                    //         }
                                    // })

                                 if (!navigator.userAgent.match(/iPad|iPhone/i)){
                                    this.$router.push({
                                      path:"/loan/form/myOrder",
                                      query:{
                                        info:url,
                                        title:"支付"
                                        }
                                    })
                                } else {
                                    this.componentload=false
                                    location.href=url
                                }

                                } else {
                                    this.$toast(res.data.message)
                                }
                            },2000)
                    }
                })
                .catch(err=>{
                })
                } else { // 去注册商户
                      this.$router.push({
                      path:"/home/collect"
                  })
                  this.componentload=false
                }
           })
           
         
        },

        // showPay(){

               
        //     if(this.number.trim().length==0){
        //         return this.$toast("请输入金额")
        //     } 
        //     if(this.nick=="请选择支付信用卡"){
        //         return this.$toast("请先选择支付信用卡")
        //     }
         
        //      // 请求接口，判断用那个通道支付  
        //     let banks={
        //         cardNo:this.cardnumber,
        //         amount:this.number,
        //     }
        //     axiosPost("/creditCard/getPayChannel",banks)
        //     .then(res=>{
        //         if(!res.data.success){
        //             this.$toast(res.data.message)
        //         } else {
        //             if(res.data.data=='1') {  // 通道一的支付

        //             // 查询支付信息

        //             axiosPost("/creditCard/getMemberReg")
        //             .then(res=>{
        //                 if(res.data.success){
        //                     let name=res.data.data.accountName
        //                     let idcard=res.data.data.idCard
        //                     let mobile=res.data.data.reservedMobile
                            
        //                 } else {
                            
        //                 }
                      

        //             })


        //          var rand = "";
        //          for(var i = 0; i < 2; i++){
        //              var r = Math.floor(Math.random() * 10);
        //              rand += r
        //          }
        //         this.ordernumber= new Date().getTime()+rand
        
        //         function generateTimeReqestNumber() {
        //                 var date = new Date();
        //                 return date.getFullYear().toString() + pad2(date.getMonth() + 1) + pad2(date.getDate()) 
        //                 + pad2(date.getHours()) + pad2(date.getMinutes()) + pad2(date.getSeconds())
        //             }
                        
        //         function pad2(n) { return n < 10 ? '0' + n : n }

        //         let datapay={
        //             busCode:"2001",
        //             orderAmount:this.number, //金额
        //             realName:name,  //姓名
        //             idCard:idcard, //身份证
        //             accNo:this.cardnumber, // 信用卡卡号
        //             mobile:mobile, // 手机号
        //             orderCode:this.ordernumber, // 订单号
        //             chMerCode:this.chMerCode, // 商户编号
        //             orderTime:generateTimeReqestNumber()
        //         }  

        //         axiosPost("/creditCard/quickPay",datapay)
        //         .then(res=>{
        //             if(!res.data.success){
        //                 setTimeout(() =>{
        //                     this.componentload = false;
        //                     this.$toast({
        //                     message:res.data.message
        //                     })
        //                 },1000)
        //             } else {
        //             let url=res.data.data.url.replace("http://localhost:8080","http://test.man-opaydev.ncfgroup.com/fusionPosp")
        //                     setTimeout(() =>{
        //                         this.componentload = false;
                                
        //                     //      this.$router.push({
        //                     //     path:"/loan/form/myOrder",
        //                     //     query:{
        //                     //         info:url,
        //                     //         title:"支付"
        //                     //       }
        //                     // })
                            
        //                     if (!navigator.userAgent.match(/iPad|iPhone/i)){
        //                         this.$router.push({
        //                         path:"/loan/form/myOrder",
        //                         query:{
        //                             info:url,
        //                             title:"支付"
        //                             }
        //                             })
        //                         } else {
        //                             this.componentload=false
        //                             location.href=url
        //                         }

        //                     },1000)
                        
        //             }
        //         })
        //         .catch(err=>{
        //         })


        //             } else if(res.data.data=='2') { //通道2的支付

        //                 let datachannel={
        //                     bankcardNum:this.cardnumber,
        //                     merchantno:this.merchantno,
        //                     amount:this.number,
        //                 }
        //                 axiosPost("/jxpay/repaymentConsume",datachannel)
        //                 .then(res=>{
        //                     if(res.data.success){
        //                         this.$toast(res.data.message)
        //                     } else {
        //                         this.$toast(res.data.message)
        //                     }
        //                 })
        //             }
        //         }
        //     })

        // },

       
        // showPay(){
            
        //     //  查询商户号，若没有 商户申请，上传图片 ，若有在查询是否有绑定信用卡
        //     if(this.number.trim().length==0){
        //         return this.$toast("请输入金额")
        //     } 
        //     if(this.nick=="请选择支付信用卡"){
        //         return this.$toast("请先选择支付信用卡")
        //     }
         
        //     // 查询通道一有没有商户，如果没有去注册商户，如果有查询通道二     注：注册商户时用同一个储蓄卡
        //     // 查询通道二有没有商户，如果没有去注册商户，如果有，根据金额查询用那个通道支付
        //     // 根据返回的‘1’或者‘2’去支付


        //     axiosPost("/creditCard/getMemberReg")
        //    .then(res=>{
        //     if(res.data.success){  //已申请商户

        //         // 通道一的商户号
        //          this.chMerCode=res.data.data.chMerCode


        //         // // 通道一注册商户使用的储蓄卡,名字，卡号，身份证号
        //         let  accountNo=res.data.data.accountNo
        //         let  mobile=res.data.data.reservedMobile
        //         let  idcard=res.data.data.idCard
        //         let  name=res.data.data.accountName

        //         // 查询第二条通道是否注册
        //          let params={
        //                 bank_cardno:accountNo
        //             }
        //             axiosPost("/jxpay/getJxMerchant",params)
        //             .then(res=>{
        //                 if(!res.data.success) {

        //                     // 如果第二个通道没有注册，隐式注册

        //                     let datas={
        //                         merchant_name:name,
        //                         id_cardno:idcard,
        //                         phone:mobile,
        //                         bank_cardno:accountNo,
        //                     }
        //                     axiosPost("/jxpay/insertRegister",datas)
        //                     .then(res=>{
        //                         if(!res.data.success) {
        //                             this.$toast(res.data.message)
        //                         } else {
        //                             // 第二个通道生成的商户号
        //                             let responce=res.data.data
        //                             responce=JSON.parse(responce)
        //                             this.merchantno=responce.merchantno
        //                         }
        //                     })


        //                 } else {

        //                       // 第二个通道生成的商户号
        //                       this.merchantno=res.data.data.merchantno

        //                 }

        //                  // 请求接口，判断用那个通道支付  
        //                  let banks={
        //                      cardNo:this.cardnumber,
        //                      amount:this.number,
        //                  }
        //                  axiosPost("/creditCard/getPayChannel",banks)
        //                  .then(res=>{
        //                      if(!res.data.success){
        //                          this.$toast(res.data.message)
        //                      } else {
        //                          if(res.data.data=='1') {  // 通道一的支付


        //                          var rand = "";
        //                          for(var i = 0; i < 2; i++){
        //                                 var r = Math.floor(Math.random() * 10);
        //                                 rand += r
        //                             }
        //                         this.ordernumber= new Date().getTime()+rand
                        
        //                         function generateTimeReqestNumber() {
        //                                 var date = new Date();
        //                                 return date.getFullYear().toString() + pad2(date.getMonth() + 1) + pad2(date.getDate()) 
        //                                 + pad2(date.getHours()) + pad2(date.getMinutes()) + pad2(date.getSeconds())
        //                             }
                                        
        //                         function pad2(n) { return n < 10 ? '0' + n : n }

        //                         let datapay={
        //                             busCode:"2001",
        //                             orderAmount:this.number, //金额
        //                             realName:name,  //姓名
        //                             idCard:idcard, //身份证
        //                             accNo:this.cardnumber, // 信用卡卡号
        //                             mobile:mobile, // 手机号
        //                             orderCode:this.ordernumber, // 订单号
        //                             chMerCode:this.chMerCode, // 商户编号
        //                             orderTime:generateTimeReqestNumber()
        //                         }  

        //                         axiosPost("/creditCard/quickPay",datapay)
        //                         .then(res=>{
        //                             if(!res.data.success){
        //                                 setTimeout(() =>{
        //                                     this.componentload = false;
        //                                     this.$toast({
        //                                     message:res.data.message
        //                                     })
        //                                 },1000)
        //                             } else {
        //                             let url=res.data.data.url.replace("http://localhost:8080","http://test.man-opaydev.ncfgroup.com/fusionPosp")
        //                                     setTimeout(() =>{
        //                                         this.componentload = false;
                                                
        //                                     //      this.$router.push({
        //                                     //     path:"/loan/form/myOrder",
        //                                     //     query:{
        //                                     //         info:url,
        //                                     //         title:"支付"
        //                                     //       }
        //                                     // })
                                            
        //                                     if (!navigator.userAgent.match(/iPad|iPhone/i)){
        //                                         this.$router.push({
        //                                         path:"/loan/form/myOrder",
        //                                         query:{
        //                                             info:url,
        //                                             title:"支付"
        //                                           }
        //                                          })
        //                                         } else {
        //                                             this.componentload=false
        //                                             location.href=url
        //                                         }

        //                                     },1000)
                                        
        //                             }
        //                         })
        //                         .catch(err=>{
        //                         })


        //                          } else if(res.data.data=='2') { //通道2的支付

        //                                 let datachannel={
        //                                     bankcardNum:this.cardnumber,
        //                                     merchantno:this.merchantno,
        //                                     amount:this.number,
        //                                 }
        //                                 axiosPost("/jxpay/repaymentConsume",datachannel)
        //                                 .then(res=>{
        //                                     if(res.data.success){
        //                                         this.$toast(res.data.message)
        //                                         let responce=res.data.data
        //                                         responce=JSON.parse(responce)
        //                                         let url=responce.message

        //                                             //   this.$router.push({
        //                                             //     path:"/loan/form/myOrder",
        //                                             //     query:{
        //                                             //         info:url,
        //                                             //         title:"支付"
        //                                             //       }
        //                                             // })
                        
        //                                         if (!navigator.userAgent.match(/iPad|iPhone/i)){
        //                                             this.$router.push({
        //                                             path:"/loan/form/myOrder",
        //                                             query:{
        //                                                 info:url,
        //                                                 title:"支付"
        //                                               }
        //                                              })
        //                                             } else {
                                                    
        //                                                 location.href=url
        //                                             }

        //                                     } else {
        //                                         this.$toast(res.data.message)
        //                                     }
        //                                 })
        //                          }
        //                      }
        //                  })


        //             })




        //     // 通道一的支付

        //     //      var rand = "";
        //     //     for(var i = 0; i < 2; i++){
        //     //         var r = Math.floor(Math.random() * 10);
        //     //         rand += r
        //     //     }
        //     //    this.ordernumber= new Date().getTime()+rand
    
        //     //  function generateTimeReqestNumber() {
        //     //         var date = new Date();
        //     //         return date.getFullYear().toString() + pad2(date.getMonth() + 1) + pad2(date.getDate()) 
        //     //         + pad2(date.getHours()) + pad2(date.getMinutes()) + pad2(date.getSeconds())
        //     //     }
                    
        //     //  function pad2(n) { return n < 10 ? '0' + n : n }

        //     //  let data={
        //     //     busCode:"2001",
        //     //     orderAmount:this.number, //金额
        //     //     realName:this.cardInfo.payerName,  //姓名
        //     //     idCard:this.cardInfo.idCardNo, //身份证
        //     //     accNo:this.cardInfo.cardNo, // 卡号
        //     //     mobile:this.cardInfo.phone, // 手机号
        //     //     orderCode:this.ordernumber, // 订单号
        //     //     chMerCode:info, // 商户编号
        //     //     orderTime:generateTimeReqestNumber()
        //     // }  

        //     // axiosPost("/creditCard/quickPay",data)
        //     //  .then(res=>{
        //     //     if(!res.data.success){
        //     //         setTimeout(() =>{
        //     //             this.componentload = false;
        //     //              this.$toast({
        //     //               message:res.data.message
        //     //             })
        //     //         },1000)
        //     //     } else {
        //     //     let url=res.data.data.url.replace("http://localhost:8080","http://test.man-opaydev.ncfgroup.com/fusionPosp")
        //     //             setTimeout(() =>{
        //     //                 this.componentload = false;
                            
        //     //             //      this.$router.push({
        //     //             //     path:"/loan/form/myOrder",
        //     //             //     query:{
        //     //             //         info:url,
        //     //             //         title:"支付"
        //     //             //       }
        //     //             // })
                        
        //     //               if (!navigator.userAgent.match(/iPad|iPhone/i)){
        //     //                 this.$router.push({
        //     //                 path:"/loan/form/myOrder",
        //     //                 query:{
        //     //                     info:url,
        //     //                     title:"支付"
        //     //                   }
        //     //                  })
        //     //                 } else {
        //     //                      this.componentload=false
        //     //                      location.href=url
        //     //                 }

        //     //             },1000)
                       
        //     //        }
        //     //    })
        //     // .catch(err=>{
        //     // })

            
        //     }else {    // 通道一没有注册
                
        //          this.$router.push({
        //              path:"/home/collect"
        //          })
        //     }

        //     // 查询是否有绑定信用卡，
            
        // })
        // .catch(err=>{
        // })
 
        // },
        
        searchInfo(){
            axiosPost("/customer/getCustomer")
           .then(function(res){
                if(res.data.success){
                }
              })
           .catch(function(err){
            
        })
     },
    
       goRecords(){

         this.$router.push({
             path:"/home/collect/payment/records"
         })
       
     }

    },
    created () {
        // this.searchInfo()
        this.nickname=this.$store.state.wechat.nickname;
        this.headimg=this.$store.state.wechat.headimg;
        this.lev=this.$store.state.wechat.level;
        this.cardInfo=this.$route.query.params
        if(this.cardInfo) {
            this.showCard=true
            this.nick=this.cardInfo.bankname
            this.cardnumber=this.cardInfo.cardNo
        }
        if(this.lev=='0') {
            this.lev="免费用户"
        }  else if(this.lev=='1'){
            this.lev="初级合伙人"
        } else if(this.lev=='2'){
            this.lev="中级合伙人"
        } else if(this.lev=='3'){
            this.lev="高级合伙人"
        } else if(this.lev=='4'){
            this.lev="顶级合伙人"
        }
    },
    mounted () {
        // this.searchInfo()
    }
}
</script>

<style lang="less">
   #receivables {
       >header {
           height: 86px;
           line-height: 86px;
           width:100%;
           padding-top:10px;
           font-size:28px;
            background-color: #EBB541;
           display: flex;
           justify-content: space-between;
           color:#fff;
           z-index:999;
           padding:0 10px;
           box-sizing: border-box;
       }
       >.container {
           background-color:#ECF0F3; 
            .covercx {
               .action {
                   margin-top:30px;
                   margin-bottom: 20px;
                //     display: flex;
                //    justify-content: space-around;
                   .van-button--primary {
                       background-color: #EBB541;
                       border:1px solid #EBB541;
                        font-size: 34px;
                        height:90px;
                        line-height: 90px;
                   }
                   .van-button--default {
                       margin-top:30px;
                       background-color: #ccc;
                       border:1px solid #ccc;
                       font-size: 34px;
                        height:90px;
                        line-height: 90px;

                   }

               }
            .van-popup--right {
                padding:15px;
                top:51%;
                right:0;
                left:0;
                bottom:-100%;
            }
           .cards {
                width:100%;
                margin-top:15px;
                height:100%;
                ul {
                    width:100%;
                    height:100%;
                    overflow-y: scroll;
                    padding-bottom: 30px;
                    li {
                        height: 320px;
                        margin-bottom: 20px;
                        margin-left: auto;
                        margin-right: auto;
                        border-radius: 20px;
                        background: url('http://wy.91dianji.com.cn/bgc5.jpg') center center no-repeat;
                        background-size: 100% 100%;
                        color:#fff;
                        font-weight: bold;
                        padding:30px;
                        .cardnum {
                            margin-top:100px;
                        }
                        .bank  {
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                        }
                       
                    }
                }
            }
        }
           >.portrait {
               background-color:#EBB541; 
               color:#eee;
               display: flex;
               padding-left:40px;
                justify-content: space-between;
                padding-top:20px;
                height: 400px;
                .userimg {
                    width:120px;
                    height:120px;
                    >img {
                        width:100%;
                        border-radius: 50%;
                    }
                }
                >.recommend {
                    margin-left:20px;
                    flex:1;
                    >p {
                        &:nth-of-type(1) {
                            font-size: 36px;
                        }
                        &:nth-of-type(2) {
                            color:#ddd;
                            margin-top:30px;
                            margin-bottom:20px;
                            font-size: 20px;
                        }
                    }
                }
                >p {
                    &:nth-of-type(2) {
                        margin-top:50px;
                    }
                }
           }
           >.merchant {
               background-color: #ECF0F3;
               padding-top:20px;
               position: relative;
               >.pay {
                   width:92%;
                   background-color:#fff;
                   position: absolute;
                   top:-280px;
                   left:0px;
                   margin:20px;
                   border-radius: 10px;
                   box-shadow: 0px 1px 2px 3px  #ccc;
                   .union {
                       display:flex;
                       align-items: center;
                   }
                   .card {
                      ul{
                          li{
                              display: flex;
                              padding:10px 15px;
                              justify-content: space-between;
                              align-items: center;
                              div {
                                  flex:1;
                                  padding-left: 20px;
                                  >p {
                                      &:nth-of-type(2){
                                          padding:10px 0px;
                                      }
                                  }
                              }
                              .change {
                                  color:#EBB541;
                              }
                          }
                      }  
                   }
                   >P{
                       &:nth-of-type(1){
                           margin-top:40px;
                           font-size:30px;
                           color:#000;
                            padding-left:30px;
                       }
                       &:nth-of-type(2){
                           margin-top:30px;
                           margin-bottom:30px;
                           font-size: 30px;
                            padding-left:30px;
                           >span {
                               font-weight: bold;
                           }
                           >input {
                               border:0px;
                                color:#000;
                           }
                       }
                       &:nth-of-type(3){
                           background-color:#EBB541; 
                           color:#fff;
                           text-align: center;
                           padding-top:20px;
                           width:90%;
                           margin:0 auto;
                           padding-bottom: 30px;
                           border-radius: 10px;
                           margin-bottom: 20px;
                           font-size: 38px;
                       }
                   }
               }
               >p {
                   line-height:40px;
                   padding-bottom: 20px;
                   color:#C3C7CA;
                   padding-left: 20px;
                   padding-right: 20px;
                   >span{
                       &:nth-of-type(1){
                           color: #ED7930;
                       }
                       &:nth-of-type(2){
                           color:#9E6A14;
                       }
                   }
                   >.bold {
                       font-weight: bold;
                   }
               }
           }
           >.transaction {
               position: relative;
               >ul{
                   display: flex;
                   flex-wrap: wrap;
                   border-bottom: 1px solid #ccc;
                   background-color: #fff;
                   >li {
                       box-sizing: border-box;
                       width:50%;
                       border-top:1px solid #ccc;
                       display: flex;
                       justify-content: center;
                       padding-top:30px;
                       padding-bottom:30px;
                       >p {
                           margin-right:10px;
                           margin-top:20px;
                       }
                       >div {
                           > p {
                               &:nth-of-type(1) {
                                   font-size:30px;
                                   color:#000;
                                   margin-bottom:20px;
                               }
                               &:nth-of-type(2) {
                                   color:#ccc;
                                   font-size:28px;
                               }
                           }
                       }
                       &:nth-of-type(1),
                       &:nth-of-type(3) {
                           border-right: 1px solid #ccc;
                       }
                   }
               }
               >.tips {
                   width:96%;
                   margin-left:20px;
                    position: absolute;
                    top:0px;
                    left:0px;
                    z-index:99;
                    border:1px solid #ccc;
                    >p {
                        background-color: #E1E1E1;
                        text-align: center;
                        padding-top:20px;
                        padding-bottom: 20px;
                        font-size: 30px;
                        font-weight: bold;
                        border-bottom: 1px solid #ccc;
                        border-top:2px solid #544628;
                    }
                    >div {
                        background-color:#fff; 
                        padding: 30px 20px;
                        border-bottom: 1px solid #ccc;
                        border-left: 1px solid #ccc;
                        >p {
                            line-height: 40px;
                            &:nth-of-type(2) {
                                margin:10px 20px;
                                color:#958D6B;
                                font-weight: bold;
                            }
                            &:nth-of-type(3) {
                                display: flex;
                                justify-content: space-around;
                                >span {
                                    border:3px solid #ccc;
                                    padding:10px 30px;
                                    border-radius:30px;
                                    &:nth-of-type(2) {
                                        background-color:#A06914;
                                        color:#fff; 
                                    }
                                }
                            }
                        }
                    }
               }
           }
           >.statistics {
               margin-top:20px;
               background-color: #fff;
               margin-bottom: 100px;
               >ul{
                   padding:0 20px;
                   >li {
                       display: flex;
                       justify-content: space-between;
                       align-items: center;
                       padding:30px 10px;
                       border-bottom: 1px solid #ccc;
                       >p {
                           display: flex;
                           margin-left:10px;
                           flex: 1;
                           justify-content: space-between;
                       }
                   }
               }
           }
       }
   }
</style>
