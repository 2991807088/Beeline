
<template>
    <div id="home-component">
        <div class="header">
            <van-icon class="menu" name="wap-nav" size="24px" @click="isShow"/>
            <div class="home center">首页</div>
            <span class="iconfont icon-huangguan"></span>
            <div class="receivables row">
                <div class="per_receivables" @click="handleIsAuth('/home/collect')">
                    <div class="icon center"><van-icon name="http://fx.91dianji.com.cn/zaixainshouykuan.png" size="45px"/></div>
                    <div class="title center">在线收款</div>
                </div>
                <router-link tag="div" class="per_receivables" to="/home/creditHousekeeper">
                    <div class="icon center"><van-icon name="http://fx.91dianji.com.cn/zhinenghuankuan.png" size="45px"/></div>
                    <div class="title center">智能还款</div>
                </router-link>
            </div>
        </div>
        <div class="marqueen row">
            <div class="pannel-title center">
                <img src="http://fx.91dianji.com.cn/fengxingzixun.png" alt="">
            </div>
            <router-link tag="div" class="pannel-detail center" to="/personalCenter/contactus">
                <van-notice-bar text="现成为998会员，即可享有19800元代理商的相关权限，名额有限，相关内容，请联系您的专属客户经理，确认活动详情"/>
            </router-link>
        </div>
        <div class="menus van-hairline--top">
            <div class="per_menu van-hairline--surround" @click="handleIsAuth('/home/cardCenter')">
                <div class="icon center-end"><van-icon name="http://fx.91dianji.com.cn/fengxing_card.png" size="28px"/></div>
                <div class="title center">信用卡办理</div>
            </div>
            <div class="per_menu van-hairline--surround" @click="handleIsAuth('/loan/detail')">
                <div class="icon center-end"><van-icon name="http://fx.91dianji.com.cn/fengxing_daikuan.png" size="28px"/></div>
                <div class="title center">贷款</div>
            </div>
            <div class="per_menu van-hairline--surround" @click="handleExpect">
                <div class="icon center-end"><van-icon name="http://fx.91dianji.com.cn/fengxing_tie.png" size="28px"/></div>
                <div class="title center">提额秘籍</div>
            </div>
            <div class="per_menu van-hairline--surround" @click="handleExpect">
                <div class="icon center-end"><van-icon name="http://fx.91dianji.com.cn/fengxing_quan.png" size="28px"/></div>
                <div class="title center">金融圈</div>
            </div>
            <router-link tag="div" to="/Evaluation" class="per_menu van-hairline--surround" @click="handleExpect">
                <div class="icon center-end"><van-icon name="http://fx.91dianji.com.cn/fengxing_ka.png" size="28px"/></div>
                <div class="title center">卡·测评</div>
            </router-link>
            <div class="per_menu van-hairline--surround" @click="handleExpect">
                <div class="icon center-end"><van-icon name="http://fx.91dianji.com.cn/fengxing_zhengxin.png" size="28px"/></div>
                <div class="title center">征信查询</div>
            </div>
            <!-- <router-link tag="div" class="per_menu van-hairline--surround" :to="{path: '/home/cardCenter/progressQuery',query: {info:'https://m.youku.com/video/id_XNDE5MjE3MjYzMg==.html?spm=a2h3j.8428770.3416059.1&source=&sharetype=secondtime&from=singlemessage',title: '新手教程'}}">
                <div class="icon center-end"><van-icon name="http://fx.91dianji.com.cn/fengxing_xinshou.png" size="28px"/></div>
                <div class="title center">新手教程</div>
            </router-link> -->
             <div  class="per_menu van-hairline--surround"  @click="handleExpect" >
                <div class="icon center-end"><van-icon name="http://fx.91dianji.com.cn/fengxing_xinshou.png" size="28px"/></div>
                <div class="title center">新手教程</div>
            </div>
            <router-link tag="div" class="per_menu van-hairline--surround" to="/home/totalPunch">
                <div class="icon center-end"><van-icon name="http://fx.91dianji.com.cn/fengxing_qiandao.png" size="28px"/></div>
                <div class="title center">签到打卡</div>
            </router-link>
            <!-- <router-link tag="div" class="per_menu van-hairline--surround" :to="{path: '/loan/form/myOrder',query: {info: 'http://baoxian.pingan.com',title: '意外险'}}">
                <div class="icon center-end"><van-icon name="http://fx.91dianji.com.cn/fengxing_yiwaixian.png" size="28px"/></div>
                <div class="title center">意外险</div>
            </router-link> -->
             <div  class="per_menu van-hairline--surround" @click="changeLink('http://baoxian.pingan.com','意外险')" >
                <div class="icon center-end"><van-icon name="http://fx.91dianji.com.cn/fengxing_yiwaixian.png" size="28px"/></div>
                <div class="title center">意外险</div>
            </div>
            <!-- <router-link tag="div" class="per_menu van-hairline--surround" :to="{path: '/loan/form/myOrder',query: {info: 'https://m2.weizhang8.cn/',title: '违章查询'}}">
                <div class="icon center-end"><van-icon name="http://fx.91dianji.com.cn/fengxing_weizhang.png" size="28px"/></div>
                <div class="title center">违章查询</div>
            </router-link> -->
            <div  class="per_menu van-hairline--surround"  @click="changeLink('https://m2.weizhang8.cn/','违章查询')" >
                <div class="icon center-end"><van-icon name="http://fx.91dianji.com.cn/fengxing_weizhang.png" size="28px"/></div>
                <div class="title center">违章查询</div>
            </div>
            <!-- <router-link tag="div" class="per_menu van-hairline--surround" :to="{path: '/loan/form/myOrder',query: {info: 'http://www.epicc.com.cn/',title: '汽车保险'}}">
                <div class="icon center-end"><van-icon name="http://fx.91dianji.com.cn/fengxing_qichebaoxian.png" size="28px"/></div>
                <div class="title center">汽车保险</div>
            </router-link> -->
             <div  class="per_menu van-hairline--surround" @click="changeLink('http://www.epicc.com.cn/','汽车保险')" >
                <div class="icon center-end"><van-icon name="http://fx.91dianji.com.cn/fengxing_qichebaoxian.png" size="28px"/></div>
                <div class="title center">汽车保险</div>
            </div>
            <div class="per_menu van-hairline--surround" @click="handleExpect">
                <div class="icon center-end"><van-icon name="http://fx.91dianji.com.cn/fengxing_jifen.png" size="28px"/></div>
                <div class="title center">积分兑换</div>
            </div>
        </div>
        <div class="slogan">
            <div class="container_img">
                <img class="bgs" src="http://fx.91dianji.com.cn/kayou_bgs.png" alt="">
                <div class="slogan"><img src="http://fx.91dianji.com.cn/kayou_slogan.png" alt=""></div>
                <img class="up" src="http://fx.91dianji.com.cn/kayou_up.png" alt="">
                
                 
                <div class="fangdajing_logo">
                    <div>
                        <img class="logo" src="http://fx.91dianji.com.cn/kayou_logo.png" alt="">
                        <img class="fangdajing" src="http://fx.91dianji.com.cn/BANNER@3x.png" alt="">
                    </div>
                </div>
                
            </div>
        </div>
        <div class="guarantee center"><van-icon name="http://fx.91dianji.com.cn/fengxing_dun.png"/>&nbsp;账户安全由中国人寿财产保险承保</div>
        <div class="container">
            
           
            <!-- 遮盖层 -->
            <div class="aside-left" v-show="showAaside" @click.self="hideAside">
                <div class="info">
                    <div class="avatar">
                         <span><van-icon :name="headimg" /></span>
                         <p>{{nickname}}</p>
                    </div>
                    <ul>
                        <router-link tag="li" to="/home/systemNews">系统消息</router-link>
                        <router-link tag="li" to="/home/verified">实名认证</router-link>
                        <router-link to="/home/bindingPhone" tag="li">绑定手机</router-link>
                        <router-link to="/home/aboutUs" tag="li">联系客服</router-link>
                        <router-link to="/home/aboutUs" tag="li">关于我们</router-link>
                        <router-link to="/home/accountManagement" tag="li">账户管理</router-link>
                    </ul>
                   
                      <div  @click="signOut" class="sign-out">
                        <span>退出登录</span>
                     </div> 
                </div>
            </div>
            <div @click.self="showUpdate=false" v-show="showUpdate" class="update">
                <div  class="cover">
                    <div class="version">
                       <h3>版本更新</h3>
                        <p>蜂行卡包升级了，快来体验吧！</p>
                        <div class="butt">
                            <div class="cancle" @click="showUpdate=false">取消</div>
                            <div class="upd" @click="download">更新</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footerMenu :active="active" @getChange="changeActive"></footerMenu>
        <!-- 绑定手机模块 -->
        <bindMobile></bindMobile>
    </div>
</template>
<script>
import bindMobile from '@/components/bindMobile'
import footerMenu from '@/components/footer'
import {axiosPost} from '@/lib/http'
import storage from '@/lib/storage'
export default {
  components:{
      footerMenu,
      bindMobile
  },
     data() {
        return {
            showAaside:false, 
            checked:true,
            active: 0,
            code: '',
            openid: '',
            access_token: '',
            refresh_token: '',
            // newaccess_token: '',
            nickname: '',
            photo: '',
            headimg:'',
            iscertification: '',
            city: '',
            longitude: '',
            latitude: '',
            showUpdate:false,
            versionAndroid:"",// 安卓版本号
            versionIos:"", // ios 版本号
            updateVerson:0  // 设备版本号
        }
  },
   methods:{
        isShow() {
            this.showAaside=true
        },
        changeLink(url,title){
            //   this.$router.push({
            //          path:"/loan/form/myOrder",
            //          query:{
            //              info:url,
            //              title:title
            //          }
            //      })

             if (!navigator.userAgent.match(/iPad|iPhone/i)){
                 this.$router.push({
                     path:"/home/andLink",
                     query:{
                         info:url,
                         title:title
                     }
                 })
             } else {
                 location.href=url
             }
        },
        handleExpect(){
            this.$toast('敬请期待')
        },
        download(){  // 更新
            // 判断android 还是ios
                var u = navigator.userAgent;
                var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
                var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
                 if(isAndroid) {
                  window.location.href="  https://www.pgyer.com/9Abz"
               } else if(isiOS) {
                  window.location.href="http://s73.nyvpy.kuaiff.cn/zoQWz3"
              } 

        },
        getUpdate(){ // 获取历史版本号
               axiosPost("/customer/getVersion")
               .then(res=>{
                //    console.log(res)
                   if(res.data.success){
                      let version=res.data.data
                      this.versionAndroid=parseFloat(version[0].version)
                      this.versionIos=parseFloat(version[1].version)
                   }
               }) 
               .catch(err=>{
                   
               })
        },
        update(){
            let that=this
              // 获取设备的版本号
              if(window.plus){  
                   that.updateVerson=parseFloat(plus.runtime.version);
                   if(that.versionAndroid>that.updateVerson || that.versionIos>that.updateVerson){
                       that.showUpdate=true
                   }
            }else{  
                document.addEventListener('plusready',function () {  
                      that.updateVerson=parseFloat(plus.runtime.version);
                         if(that.versionAndroid>that.updateVerson|| that.versionIos>that.updateVerson ){
                             that.showUpdate=true
                        }

                },false);  
            }  
        } ,
        hideAside() {
            this.showAaside=false
        },
         // 自动登录
        automatic(){
            let data={
                 mobile:storage.get('username'),
                 password:storage.get('password')
            }
             axiosPost("/customer/login",data) 
             .then(res=>{
                if(!res.data.success){
                     this.$router.push("/logIn");
                    //  this.$toast('登录失败');
                }else {
                    // console.log(res,"自动登录成功")
                     storage.set('cid',res.data.data.id);
                    this.$store.commit('iscertification',res.data.data.iscertification);
                    this.$store.commit('level',res.data.data.level);
                    this.$store.commit('promotioncode',res.data.data.promotioncode);
                    this.$store.commit('mobile',res.data.data.mobile);
                    this.$store.commit('vip',res.data.data.vip);
                    this.$store.commit('recommendedcode',res.data.data.recommendedcode);
                    this.$store.commit('amount',res.data.data.amount);
                    this.$store.commit('openid',res.data.data.openid);
                    this.$store.commit('nickname',res.data.data.nickname);
                    this.$store.commit('headimg',res.data.data.photo);
                    this.headimg=res.data.data.photo
                    this.nickname=res.data.data.nickname
                    this.$store.commit('city',res.data.data.city);
                }
             })
             .catch(err=>{

             })
        },
        signOut(){
            this.$dialog.confirm({
                    title: '提示',
                    message: '确定要退出？',
                    confirmButtonText:'是',
                })
                .then(() => {
                    let that =this
                  axiosPost("/customer/loginOut") 
                  .then(function(res){
                      if(!res.data.success){
                          that.$toast({
                              message:res.data.message
                          })
                          return
                      } else {
                          that.$router.push("/logIn")
                        //   localStorage.clear()
                        that.$router.push("/logIn")
                      }
                     
                  })
                  .catch(function(err){

                  })
                }).catch(() => {
                    // on cancel
                });
        },
        changeActive(obj){
        } ,
        // 查询实名认证
        handleSearchAuths(){
            let url = '/customer/getCustomer';
            // let url = '/customer/getCustomer';
            let params = {
                openid:this.$store.state.wechat.openid,
            };
            axiosPost(url,params).then(res =>{
                if(res.data.success){
                //    console.log('查询个人设置成功',res)
                   this.iscertification = res.data.data.iscertification;
                   this.$store.commit('mobile',res.data.data.mobile);
                }
            }).catch(res =>{
                // console.log('查询个人设置失败',res);
            })
        },
        // 判断是否实名认证
        handleIsAuth(obj){ 
            if(this.iscertification == '0'){
                //未认证
                this.$toast('请先实名认证');
            }else{
                this.$router.push(obj);
            }
        }
    },
    created(){
        this.nickname=this.$store.state.wechat.nickname;
        this.headimg=this.$store.state.wechat.headimg;
        this.city=this.$store.state.wechat.city;
        this.handleSearchAuths()
        // H5不需要自动登录
        //  this.automatic() //自动登录
        //  this.getUpdate() //获取版本
    }  ,
    mounted () {
        // 更新
        // this.update();
    }
}
</script>

<style lang="less" >
#home-component {
    width: 100vw;
    height: calc(100vh - 100px);
    overflow-y: scroll;
    position: relative;
    .header{
        width: 100%;
        height: 28%;
        background-image: linear-gradient(90deg, #f7cf6c 0%, #ffa800 100%), linear-gradient(#2942ff, #2942ff);
        background-blend-mode: normal,normal;
        position: relative;
        z-index: 1;
        .home{
            width: 100%;
            color:#ffffff;
            position: absolute;
            z-index: 2;
            top: 22px;
            font-family: SourceHanSansCN-Medium;
            font-size: 36px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 28.8px;
            letter-spacing: 0px;
            color: #ffffff;
        }
        .menu{
            position: absolute;
            top: 10px;
            left: 10px;
            z-index: 3;
            color: #ffffff;
        }
        .receivables{
            width: 100%;
            height: 67%;
            position: absolute;
            bottom: 0px;
            left: 0px;
            .per_receivables{
                width: 50%;
                height: 100%;
                .icon{
                    width: 100%;
                    height: 60%;
                    color: #ffffff;
                }
                .title{
                    width: 100%;
                    height: 40%;
                    font-family: SourceHanSansCN-Medium;
                    font-size: 30px;
                    color: #ffffff;
                }
            }
        }
    }
    .marqueen{ 
        width: 100%;
        height: 8%;
        position: absolute;
        top: 28%;
        left: 0px;
        z-index: 4;
        box-shadow: 0px 0px 20px 5px #cccccc;
        .pannel-title{
            width: 20%;
            height: 70%;
            border-right: solid 4px #ffa800;
            margin-top: 15px;
            img{
                width: 85px;
                height: 85px;
            }
        }
        .pannel-detail{
            width: 80%;
            height: 100%;
            color: #333333;
            font-size: 28px;
            animation: pannleRoll 1s ease-in-out;
        }
        @keyframes pannelRoll {
        0% {
            transform: translateX(200px);
                -webkit-transform: translateX(200px);
            }
            100% {
                transform: translateX(-100%);
                -webkit-transform: translateX(-100%);
            }
        }
        
    }
    .menus{
        width: 100%;
        height: 40%;
        position: absolute;
        top: 36%;
        left: 0px;
        display: flex;
        display: -webkit-flex;
        flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
        .per_menu{
            width: 25%;
            height: calc(100% / 3);
            .icon{
                width: 100%;
                height: 60%;
            }
            .title{
                width: 100%;
                height: 40%;
                font-size: 24px;
                color: #383737;
            }
        }
    }
    .slogan{
        width: 100%;
        height: 20%;
        position: absolute;
        top: 76%;
        left: 0px;
        .container_img{
            width: 100%;
            height: 100%;
            position: relative;
            z-index: 1;
            overflow: hidden;
            .bgs{
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
                z-index: 2;
                border: solid 1px black;
            }
            .fangdajing_logo{
                width: 60%;
                height: 100%;
                position: absolute;
                right: 0;
                top: 0;
                div{
                    width: 100%;
                    height: 100%;
                    position: relative;
                    .fangdajing{
                        width: auto;
                        height: 100%;
                        position: absolute;
                        left: 0px;
                        top: 0px;
                        z-index: 6;
                    }
                    .logo{
                        width: auto;
                        height: 75%;
                        position: absolute;
                        left: 38px;
                        top: 8%;
                        z-index: 7;
                    }
                }
            }
            .slogan{
                width: 100%;
                height: auto;
                background: rgba(0, 0, 0, 0.3);
                position: absolute;
                right: 0;
                top: 36%;
                z-index: 7; 
                text-align: right;
                img{
                    width: 90%;
                    margin-right: 1%;
                }
            }
            .up{
                width: 300px;
                height: auto;
                position: absolute;
                left: 0;
                bottom: -32%;
                z-index: 6; 
            }
        }
    }
    .guarantee{
        width: 100%;
        height: 4%;
        position: absolute;
        top: 96%;
        left: 0px;
    }
    .container {
        // position: relative;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        .update {
            position: absolute;
            top:0;
            bottom:0;
            left:0;
            right:0;
            background-color: rgba(0, 0, 0, .2);
            >.cover {
                width:600px;
                height: 400px;
                z-index: 99;
                position: absolute;
                top:30%;
                left:10%;
                border-radius: 15px;
                >.version {
                    background-color: #fff;
                    padding:10px;
                        height: 400px;
                    box-sizing: border-box;
                    border-radius: 15px;
                    >h3 {
                        margin-top:20px;
                        text-align: center;
                        font-size: 34px;
                        color:#ffa800;
                        padding:20px 0px;
                        font-weight: bolder;
                    }
                    >p {
                        margin-top:20px;
                        text-align: center;
                    }
                    >.butt {
                        display: flex;
                        justify-content: space-between;
                        height: 80px;
                        >div {
                            margin-top:90px;
                            width:49%;
                            height: 100%;
                            border:1px solid #ccc;
                            line-height: 80px;
                            text-align: center;
                            &.upd {
                                background-color: #ffa800;
                                color:#fff;
                            }
                        }
                    }
                    
                }
            }

        }
        >.aside-left {
                width: 100%;
                height: 100%;
                position: fixed;
                overflow: visible;
                top:0px;
                right:0px;
                bottom: 0px;
                left:0px;
                z-index: 999;
                color:#fff;
                text-align: center;
                >.info {
                    width:50%;
                    height: 100%;
                    overflow-y: scroll;
                    background-image: linear-gradient(180deg, #f7cf6c 0%, #ffa800 100%), linear-gradient(#2942ff, #2942ff);
                    background-blend-mode: normal,normal;
                    position: fixed;
                    top:0px;
                    right: 0px;
                    left:0px;
                    bottom: 0px;
                    padding-bottom: 20px;
                    z-index: 999;
                   animation: menus 1s ease-in-out;
                   -webkit-animation: menus 1s ease-in-out;
                    >.avatar {
                        padding-top:50px;
                        >span {
                            font-size:100px;
                        }
                        >p {
                            margin-top:20px;
                            margin-bottom:80px;
                        }
                    }
                    >ul{
                        margin-left:100px;
                        margin-right:100px;
                        >li {
                            border-top:3px dashed #ccc;
                            padding:50px 10px;
                            font-size: 28px;
                             &.switch {
                             >p {
                                 margin-top:-5px;
                             }
                          }
                        }
                    }
                    >.sign-out {
                        margin-top:20px;
                         >span{
                            border:2px solid #fff;
                           background-color:#f7cf6c;
                           padding:30px 60px;
                           border-radius: 10px;
                         }
                    }
                    .van-dialog .van-button {
                        /* border: 0; */
                        border: 1px solid #f7cf6c;
                    }

                    .van-dialog,
                    .van-dialog__message,
                    .van-button {
                        font-size: 30px;
                    }
                }
                .van-button .van-button--default .van-button--large .van-dialog__confirm .van-hairline--left{
                    height:70px;
                }
         }
        @keyframes menus{
            from{
                position: fixed;
                left: -100%;
            }
            to{
                position: fixed;
                left: -0%;
            }
        }
    }
}
</style>

