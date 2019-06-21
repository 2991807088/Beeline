<template>
    <div id="violation-inquiry">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>提现记录</span>
            <span></span>
        </header>
        <div class="container">
           <div  v-show="showlist" class="total">
               <ul>
                   <li v-for="(item, index) in recordList" :key="index">
                       <!-- <span>提现金额：{{item.withdraw_apply_total}}</span>
                       <span>到账金额：{{item.withdraw_apply_amount}}</span>
                       <span v-if="item.status == 0">被驳回</span>
                       <span v-if="item.status == 1">待审核</span>
                       <span v-if="item.status == 3">已完成</span>
                       <span>{{item.withdraw_apply_time}}</span> -->
                       <p>提现金额：{{item.withdraw_apply_total}}</p>
                       <p>到账金额：{{item.withdraw_apply_amount}}</p>
                       <p>交易进程：<span v-if="item.status == 0">被驳回</span>
                       <span v-if="item.status == 1">待审核</span>
                       <span v-if="item.status == 3">已完成</span></p>
                       <p>交易时间：{{item.withdraw_apply_time}}</p>
                   </li>
               </ul>
           </div>
        </div>
    </div>

</template>


<script>
import storage from '@/lib/storage'
import {axiosPost} from '@/lib/http'
export default {
    data() {
        return {
            recordList:[],
            showlist:false
        }
    },
    methods:{
        goBack() {
            this.$router.go(-1);
        },
        getRecord(){
            // let that = this
            // let cid=storage.get("cid")
            // let data={
            //     cid:cid
            // }
            //  axiosPost("/customer/getWithdrawalById",data)
            //  .then(function(res){
            //      if(!res.data.success){
            //          that.$toast({
            //              message:res.data.message
            //          })
            //          return
            //      }
            //      if(res.data.data.length===0){
            //          that.$toast({
            //              message:"您还没有提现记录哦！"
            //          })
            //      } else {
            //          that.showRecord=true
            //           that.recordList=res.data.data
            //      }
            //  })
            //  .catch(function(err){
            //     that.$toast({
            //         message:"请先登录"
            //     })
                 
            //  })
            let data={
                page:'10',
                pageSize:'100'
            }
             axiosPost("/customer/getWithdrawalList",data)
             .then(res=>{
                 if(!res.data.success){
                     this.$toast({
                         message:res.data.message
                     })
                 } else {
                     if(res.data.data.data.length===0){
                         this.$toast("暂无记录")
                     } else {
                         this.showlist=true
                           this.recordList=res.data.data.data
                     }
                    //  console.log("ewoiu")
                 }

             })
             .catch(err=>{

             })

        }
    },
    created () {
       this.getRecord()   
    }
}
</script>

<style lang="less">
   #violation-inquiry {
       >header {
           background: #ffa800;
           width:100%;
           height: 86px;
           line-height: 86px;
           padding-top:10px;
           color:#fff;
           display: flex;
           position: fixed;
           font-size:28px;
           z-index:999;
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
           padding-bottom: 50px;
          >.total {
              margin:20px 30px;
              >ul {
                  border:2px solid #ffa800;
                  border-radius: 10px;
                  padding:10px;
                  >li {
                    //   display: flex;
                    //   justify-content: space-between;
                    >p {
                        padding:10px;
                    }
                      >span{
                          &:nth-of-type(1){
                              color: red;
                          }
                      }
                  }
              }
          }
       }
   }
</style>
