<template>
    <div id="cardcx">
        <!-- <header class=" head">
            <div class="center"  @click=""><van-icon color="white" size="20px" name="arrow-left"/></div>
            <div></div>
        </header> -->
        <header>
            <span @click="handleReturnHome"><van-icon name="arrow-left"/></span>
            <span>储蓄卡</span>
            <router-link tag="span" to="/personalCenter/addcard/UnionPay" >添加储蓄卡</router-link>
            
        </header>
        <div class="list">
            <ul>
                <li v-for="(item,index) in form" :key="index" >
                    <div class="cardnum">
                        <div class="color">{{item.name}}</div>
                        <div class="color">{{item.bankcardno}}</div>
                    </div>
                    <div class="cardnum">
                         <div class="color">{{item.bankname}}</div>
                         <!-- <div class="select" @click="selectCard(item)">选择</div> -->
                    </div>
                </li>
            </ul>
        </div>
      
        <div class="sure">
              <!-- <van-button type="info" @click="sure" size="large">确定</van-button> -->
        </div>
    </div>    
</template>
<script>
import { axiosPost } from '../../lib/http';
import Bank from '@/lib/bank'
import storage from '@/lib/storage' 
export default {
    data(){
        return{
            form: [],
            info:{},
            idcard:"",
            merchantno:""
        }
    },
    methods: {
        handleReturnHome(){
            this.$router.go(-1);
        },
        selectCard(card){
            this.info=card
        },
        sure(){

            if(this.info=={}){
                return this.$toast("请选择储蓄卡")
            }

             storage.set("cxcard",this.info.bankname)
            storage.set("cxcardnumber",this.info.bankcardno)
            let data={
                bank_cardno:this.info.bankcardno
            }
            axiosPost("/txstar/getTXMerchant",data)
            .then(res=>{
                if(!res.data.success){  // 注册商户
                   let datas={
                       merchant_name:this.info.name,
                       id_cardno:this.idcard,
                       phone:this.info.phone,
                       bank_cardno:this.info.bankcardno,
                   }
                   axiosPost("/txstar/insertRegister",datas)
                   .then(res=>{
                       let responce=res.data.data
                       responce=JSON.parse(responce)
                       if(res.data.success){
                           this.merchantno=res.data.data.merchantno
                           this.$router.push({
                               path:"/home/receiveXH",
                               query:{
                                 merchantno:responce.merchantno
                               }
                           })
                       } else {
                           this.$toast(res.data.message)
                       }

                   })

                } else {

                    this.merchantno=res.data.data.merchantno
                     this.$router.push({
                        path:"/home/receiveXH",
                        query:{
                            merchantno:this.merchantno
                        }
                    })

                }
            })
            .catch(err=>{
            })

         

        },

       
        // 获取身份证号码
        getIdent(){
            axiosPost("/customer/getIdentification")
            .then(res=>{
                if(res.data.success){
                    this.idcard=res.data.data.idcardnumber
                }
            })
            .catch(err=>{
            })
        },


        // 绑卡列表
        getCards(){
             axiosPost("/customer/getBankCardByOpenid") 
             .then(res=>{
                if(res.data.success) {
                   
                    if(res.data.data.length==0){
                        this.$toast("请先添加储蓄卡")
                    } else {
                        this.form=res.data.data
                    }
                }
             })
             .catch(err=>{
               this.$toast("登录超时，请重新登录")
             })
        },
       
    },
    created(){
        // this.handleDeletedCreditCard();
        this.getCards()
        this.getIdent()
    }
}
</script>
<style lang="less" scoped>
#cardcx{
     >header {
           background-color: #EBB541;
           width:100%;
           height: 86px;
           line-height: 86px;
           padding-top:10px;
           padding-right:10px;
           color:#fff;
           font-size:30px;
           display: flex;
           z-index:999;
           position: fixed;
           top:0;
           justify-content: space-between;
           box-sizing: border-box;
           >span {
               &:nth-of-type(1) {
                   margin-left: 10px;
               }
               &:nth-of-type(3) {
                   margin-right: 10px;
                   display:flex;
                   align-items: center;
               }
           }
       }
   
    .list {
        margin-top:20px;
        padding-top:96px;
        >ul {
            padding:15px;
            >li {
                box-sizing: border-box;
                margin-bottom: 30px;
                padding:30px;
                background-color: #EBB541;
                border-radius: 15px;
                .cardnum {
                    display: flex;
                    justify-content: space-between;
                    .color {
                        color:#ffff;
                        font-weight: bold;
                    }
                    .select {
                       background-color: #fff;
                       padding:8px 25px;
                       border-radius: 20px;
                       color:#EBB541;
                        
                    }
                    div {
                        &:nth-of-type(1){
                            margin-bottom: 30px;
                        }
                        &:nth-of-type(2){
                            margin-top: 15px;
                        }
                    }
                }
            }
        }
    }
    .sure {
        padding:30px;
    .van-button--info{
        background-color: #EBB541;
        font-size: 30px;
    }    
    }
    .per_card{
        width: 95%;
        height: 200px;
        margin: 30px auto auto auto;
        position: relative;
        z-index: 1;
        color: #fff;
        background: #EBB541;
        border-radius: 15px;
        .bank {
            width:100%;
            display: flex;
            justify-content: space-between;
            padding:30px 50px;
        }
        .name{
            position: absolute;
            z-index: 2;
            top: 18%;
            left: 10%;
            font-size: 36px;
            font-weight: 700;
            color: #fff;
        }
        .cardNo{
            position: absolute;
            z-index: 2;
            top: 60%;
            left: 10%;
            font-size: 32px;
            font-weight: 700;
        }
        .back{
            position: absolute;
            z-index: 2;
            bottom: 20px;
            right: 20px;
            font-size: 26px;
            text-decoration: underline;
            color: red;
        }
    }
}
</style>
