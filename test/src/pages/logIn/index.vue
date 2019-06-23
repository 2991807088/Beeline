<template>
    <div id="progress-query">
        <div class="container">
           <div class="logo">
               <img src="http://fx.91dianji.com.cn/logo@2x.png" alt="">
               <span>登录</span>
           </div>
           <div class="info">
                <p>
                    <span><van-icon name="phone" size="26px"/></span>
                    <input type="number" v-model="phone" placeholder="请输入手机号码">
                    <span @click="handleClear('phone')" class="center"><van-icon name="http://fx.91dianji.com.cn/close@2x.png" color="#ffa800" size="24px"/></span>
                </p>
                <p>
                    <span><van-icon name="lock" size="26px"/></span>
                    <input type="password" v-model="password" placeholder="请输入密码">
                    <span @click="handleClear('password')" class="center"><van-icon color="#ffa800" name="http://fx.91dianji.com.cn/close@2x.png" size="24px"/></span>
                </p>
           </div>
           <div class="password">
               <p>
                    <van-checkbox class="checkbox" v-model="checked" shape="square" checked-color="#ffa800">记住密码</van-checkbox>
                    <span>&nbsp;</span>
               </p>
               <p @click="forgetPassword">忘记密码？</p>
           </div>
           <div class="button">
                <!-- <van-button @click="logInPass" class=" center" size="large" type="default">账号密码登录</van-button> -->
                <div @click="logInPass" class="log">
                    <p>登录</p>
                </div>
           </div>
            <!-- <div class="wx-login">
                <div class="logIn center">———————&nbsp;其他登录方式&nbsp;———————</div>
                <div class="wx-logo center" @click="logIn"><van-icon size="32px" name="http://fx.91dianji.com.cn/wx.png"/></div>
            </div> -->
        </div>
    </div>

</template>


<script>
import qs from 'qs'
import {axiosPost} from '@/lib/http'
import storage from '@/lib/storage'
export default {
    data() {
        return {
            radio:"1",
            checked:false,
            phone:"",
            password:"",
        }
    },

    methods:{
        // password(){
        // },
        forgetPassword() {
            this.$router.push('/forgetPassword')
        },
        register(){
             this.$router.push('/logOut')
        },
        logInPass(){
            let that=this
            if(that.phone.trim().length===0 || that.phone.trim()===""){
                that.$toast({
                    message:"请输入手机号码"
                })
                return
            }
            if(that.password.trim().length===0 || that.phone.trim()===""){
                that.$toast({
                    message:"请输入密码"
                })
                 return
            }
            let data={
                mobile:that.phone,
                password:that.password
            }
            axiosPost("/customer/login",data)
            .then(function(res){
                if(res.data.success){
                    storage.set('cid',res.data.data.id);
                    that.$store.commit('iscertification',res.data.data.iscertification);
                    that.$store.commit('level',res.data.data.level);
                    that.$store.commit('promotioncode',res.data.data.promotioncode);
                    that.$store.commit('mobile',res.data.data.mobile);
                    that.$store.commit('vip',res.data.data.vip);
                    that.$store.commit('recommendedcode',res.data.data.recommendedcode);
                    that.$store.commit('amount',res.data.data.amount);
                    that.$store.commit('openid',res.data.data.openid);
                    that.$store.commit('nickname',res.data.data.nickname);
                    that.$store.commit('headimg',res.data.data.photo);
                    that.$store.commit('ispartner',res.data.data.ispartner);
                    storage.set('openid',res.data.data.openid)
                    that.$toast('登陆成功');
                    if(that.checked){
                        storage.set('rempass',true);
                    }else{
                        // 不记住密码
                        storage.remove('username');
                        storage.remove('password');
                        storage.remove('rempass');
                    }
                     storage.set('username',that.phone);
                     storage.set('password',that.password);
                    //  setTimeout(()=>{
                         that.$router.push('/home');
                    //  },2000)
                     
                }else{
                    that.$toast({
                        message:res.data.message
                    })
                }
            })
            .catch(function(err){
                // console.log(err,"error");
                that.$toast('登录失败')  
            })
        },
        // 登录
            logIn(){
                // console.log(location.href)
                window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx13f3fb879b1f54b7&redirect_uri=http%3a%2f%2ffx.91dianji.com.cn%2f%23%2fhome&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect";
          
        },
        // 清空输入框
        handleClear(obj){
            obj == 'phone' ? this.phone = '' : this.password = '';
        }
    },

    created(){
        this.phone = storage.get('username');
        this.password = storage.get('password');
        this.checked= storage.get('rempass');
    },
}
</script>

<style lang="less">
   #progress-query {
        .container {
            width: 100%;
            height: 100%;
           .logo {
                width:80%;
                height: 350px;
                margin: 100px auto;
                position: relative;
                img {
                    width: 320px;
                    height: 320px;
                    position: absolute;
                    bottom: 0;
                    right: 0;
               }
               span{
                   position: absolute;
                    bottom: 40px;
                    left: 0;
                    font-size: 36px;
                    color: #ffa800;
                    font-weight: 700;
                    letter-spacing: 5px;
               }
            
           }
            .info {
               width:82%;
               margin:40px 9% 0px 9%;
               >p {
                   background-color: #f2f2f2;
                   color:#fff;
                   display: flex;
                   padding:13px 20px;
                   border-radius: 100px;
                   >span {
                      color: #ffa800;
                   }
                   span:nth-child(3){
                    line-height: 28px;
                   }
                   &:nth-of-type(1) {
                       margin-bottom: 40px;
                   }
                   >input {
                       border:none;
                       flex: 1;
                       color:#000;
                       background-color: #f2f2f2;
                       font-size: 28px;
                   }
                    input::-webkit-input-placeholder{
                        padding-top: 10px;
                        font-size: 26px;
                    }
               }
           }
           .password {
               width:80%;
               margin:0 auto;
               display: flex;
               justify-content: space-between;
               padding-bottom: 20px;
               margin-top: 20px;
                .van-checkbox__icon .van-icon{
                      border:1px solid #000;
                      margin-bottom: 8px !important;
                  }
               >p {
                    padding:15px 0px;
                    font-size:26px;
                    &:nth-of-type(1) {
                        display: flex;
                        padding-bottom: 20px;
                    }
                    
               }
           }
           .button {
                width:80%;
                margin:50px auto 0px auto;
                padding:0 30px;
                >.log {
                    width:100%;
                    height: 100px;
                    background-color: #ffa800;
                    border-radius: 100px;
                    >p {
                        color:#fff;
                        line-height: 100px;
                        text-align: center;
                        font-size: 30px;
                    }
                }
           }
           >.wx-login {
                width:80%;
                height: 120px;
                margin-left: 10%;
                margin-top:50px;
                .logIn{
                    width: 100%;
                    height: 45%;
                    color: #888888;
                    font-size: 28px;
                }
                .wx-logo{
                    width: 100%;
                    height: 55%;
                }
           }
       }
   }
</style>




