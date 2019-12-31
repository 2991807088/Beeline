
<template>
    <div id="home-component">
        <div class="header">
            <p @click="isShow">
                <van-icon  name="http://fx.91dianji.com.cn/order.png" size="24px" />
                <span>菜单</span>
            </p>
           

            <!-- <p class="menu"><van-icon  name="http://fx.91dianji.com.cn/order.png" size="24px" @click="isShow"/>菜单</p>
            
            <div class="home center"></div>
            <span class="iconfont icon-huangguan"></span> -->
            <!-- <div class="receivables row">
                 <div class="per_receivables" @click="handleIsAuth('/home/collect','1')">
                    <div class="icon center"><van-icon name="http://fx.91dianji.com.cn/zaixainshouykuan.png" size="45px"/></div>
                    <div class="title center">在线收款</div>
                </div>
                <div class="per_receivables" @click="handleIsAuth('/home/creditHousekeeper/aisleHousekeeper','3')">
                    <div class="icon center"><van-icon name="http://fx.91dianji.com.cn/zhinenghuankuan.png" size="45px"/></div>
                    <div class="title center">智能还款</div>
                </div>
            </div> -->
        </div>
        

         <div v-show="showpass" @click.self="showcover" :class="showpass?'cover':''">
            <div  class="pop">
                <h3>请选择通道</h3>
                <div class="small" @click.stop="smallPass('1')">
                    <van-icon name="http://fx.91dianji.com.cn/uz.png" size="26px"/>
                    <div class="middle">
                            <p>优质商户 </p>
                    </div>
                    <p> <van-icon name="checked" :color="paychennel=='1'?'#ffa800':'gray'" size="20px"/></p>
                </div>
                <div class="large" @click.stop="smallPass('2')">
                    <van-icon name="http://fx.91dianji.com.cn/pt.png" size="26px"/>
                    <div class="middle">
                        <p>普通商户</p>
                    </div>
                    <p> <van-icon name="checked" :color="paychennel=='2'?'#ffa800':'gray'" size="20px"/></p>
                </div>

                <div class="sure">
                    <van-button size="large" @click="handleselect" type="info">确定</van-button>
                </div>
                </div>
        </div> 


        <!-- <div class="marqueen row">
            <div class="pannel-title ">
               <p>蜂行</p>
               <p>咨询</p>
            </div>
            <router-link tag="div" class="pannel-detail center" to="/home/aboutUs">
                <van-notice-bar text="现成为998会员，即可享有19800元代理商的相关权限，名额有限，相关内容，请联系您的专属客户经理，确认活动详情"/>
            </router-link>
        </div> -->
        <!-- <div class="menus van-hairline--top">

             <div class="per_menu van-hairline--surround" @click="applycard('https://wsdev.1sta.cn/wechat/pages/wailian/wailian.html?merCode=b480446df76a4494948e3b95845db8ca','办卡中心')">
                <div class="icon center-end"><van-icon name="http://fx.91dianji.com.cn/fengxing_card.png" size="28px"/></div>
                <div class="title center">信用卡办理</div>
            </div>
            <div class="per_menu van-hairline--surround" @click="handleIsAuth('/loan/detail','4')">
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
             <div  class="per_menu van-hairline--surround"  @click="handleExpect" >
                <div class="icon center-end"><van-icon name="http://fx.91dianji.com.cn/fengxing_xinshou.png" size="28px"/></div>
                <div class="title center">新手教程</div>
            </div>
            <router-link tag="div" class="per_menu van-hairline--surround" to="/home/totalPunch">
                <div class="icon center-end"><van-icon name="http://fx.91dianji.com.cn/fengxing_qiandao.png" size="28px"/></div>
                <div class="title center">签到打卡</div>
            </router-link>
             <div  class="per_menu van-hairline--surround" @click="changeLink('http://baoxian.pingan.com','意外险')" >
                <div class="icon center-end"><van-icon name="http://fx.91dianji.com.cn/fengxing_yiwaixian.png" size="28px"/></div>
                <div class="title center">意外险</div>
            </div>
            <div  class="per_menu van-hairline--surround"  @click="changeLink('https://m2.weizhang8.cn/','违章查询')" >
                <div class="icon center-end"><van-icon name="http://fx.91dianji.com.cn/fengxing_weizhang.png" size="28px"/></div>
                <div class="title center">违章查询</div>
            </div>
             <div  class="per_menu van-hairline--surround" @click="changeLink('http://www.epicc.com.cn/','汽车保险')" >
                <div class="icon center-end"><van-icon name="http://fx.91dianji.com.cn/fengxing_qichebaoxian.png" size="28px"/></div>
                <div class="title center">汽车保险</div>
            </div>
            <div class="per_menu van-hairline--surround" @click="handleExpect">
                <div class="icon center-end"><van-icon name="http://fx.91dianji.com.cn/fengxing_jifen.png" size="28px"/></div>
                <div class="title center">积分兑换</div>
            </div>
        </div> -->
        <!-- <div class="slogan">
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
        <div class="guarantee center"><van-icon name="http://fx.91dianji.com.cn/fengxing_dun.png"/>&nbsp;账户安全由中国人寿财产保险承保</div> -->

        <!-- 主要功能 -->

        <div class="order">
            <ul>
                <li @click="handlecollect('1')">
                    <p> <van-icon name="http://fx.91dianji.com.cn/shoukuan.png" size="45px"/></p>
                    <p>在线收款</p>
                </li>
                <li @click="applycard('https://wsdev.1sta.cn/wechat/pages/wailian/wailian.html?merCode=b480446df76a4494948e3b95845db8ca','办卡中心')">
                    <p> <van-icon name="http://fx.91dianji.com.cn/banli.png" size="45px"/></p>
                    <p>信用卡办理</p>
                </li>
                <li @click="handleIsAuth('/home/creditHousekeeper/aisleHousekeeper','3')">
                    <p> <van-icon name="http://fx.91dianji.com.cn/haikuan.png" size="45px"/></p>
                    <p>信用维护</p>
                </li>
                 <router-link tag="li" :to="{path: '/personalCenter/income',query:{amountSum: amountSum}}" >
                    <p> <van-icon name="http://fx.91dianji.com.cn/shouyi.png" size="45px"/></p>
                    <p>收益明细</p>
                 </router-link>
                <router-link to="/vip" tag="li">
                    <p> <van-icon name="http://fx.91dianji.com.cn/shengji.png" size="45px"/></p>
                    <p>升级代理</p>
                </router-link>
                   <!-- <li>
                    <p> <van-icon name="http://fx.91dianji.com.cn/jiaocheng.png" size="45px"/></p>
                    <p>新人教程</p>
                </li> -->
            </ul>
        </div>

        <div class="gray"></div>

        <div class="recommend">
            <p></p>
            <p>热门推荐</p>
        </div>
        
        <div class="hot">
            <ul>
                <li @click="handlecollect('1')">
                    <p><van-icon name="http://fx.91dianji.com.cn/zxsk.png" size="50px"/></p>
                    <div>
                        <p>在线收款</p>
                        <!-- <p>落地商户</p> -->
                    </div>
                </li>
                 <li @click="handleIsAuth('/home/creditHousekeeper/aisleHousekeeper','3')">
                    <p><van-icon name="http://fx.91dianji.com.cn/znhk.png" size="50px"/></p>
                    <div>
                        <p>信用维护</p>
                        <p> </p>
                    </div>
                </li>
            </ul>
        </div>

          <div class="recommend">
            <p></p>
            <p>升级代理</p>
        </div>

        <div class="ads">
            <img src="http://fx.91dianji.com.cn/ads.png" alt="">
        </div>

         <!-- 遮盖层 -->
        <div class="container">
            
            <div class="aside-left" v-show="showAaside" @click.self="hideAside">
                <div class="info">
                    <div class="avatar">
                         <span><van-icon :name="headimg" /></span>
                         <p>{{nickname}}</p>
                    </div>
                    <ul>
                        <router-link tag="li" to="/home/systemNews">系统消息</router-link>
                         <li @click="handleAuth">实名认证</li>
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
                        <p>金蜜蜂升级了，快来体验吧！</p>
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
            updateVerson:0 , // 设备版本号
            showpass:false,
            paychennel:"",
            amountSum:""
        }
  },
   methods:{
        isShow() {
            this.showAaside=true
        },
         showcover(){
          this.showpass=false
       },
       handlecollect(type){
            this.handleAIRadarInsert(type)
             if(this.iscertification != '2'){
                //未认证
                this.$toast('请先实名认证');
            }else{
                this.showpass=true
            }
       },
         handleAuth(){
             if(this.iscertification == '2'){
                this.$router.push('/home/verified/verifiedName');
            }else{
                this.$router.push('/home/verified');
            }
        },
         handleselect(){
            //  console.log(this.paychennel)
            if(this.paychennel=="1"){
                this.$router.push("/home/receiveXH")
            } else if(this.paychennel=="2") {
                this.$router.push("/home/receivables")
            } else {
                this.$toast("请先选择通道")
            }
       },
         smallPass(i){
           this.paychennel=i
       },

        applycard(url,title){
             if(this.iscertification == '0'){
                //未认证
                this.$toast('请先实名认证');
            }else{
                this.changeLink(url,title)
                //  this.$router.push("/home/cardCenter")
            }
        },
        handlecollect(type){
            this.handleAIRadarInsert(type)
             if(this.iscertification != '2'){
                //未认证
                this.$toast('请先实名认证');
            }else{
                this.showpass=true
            }
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
                  window.location.href="  https://www.pgyer.com/9Abz "
               } else if(isiOS) {
                  window.location.href="https://wyuq.com/NR1F"
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
                    // console.log(res,"查询实名认证")
                   this.amountSum = res.data.data.amountSum;
                   this.iscertification = res.data.data.iscertification;
                   this.$store.commit('mobile',res.data.data.mobile);
                }
            }).catch(res =>{
              
            })
        },
        // AI来打行为插入
        handleAIRadarInsert(obj){
            let params = {
                type: obj
            };
            let url = '/behavior/insertBehavior';
            axiosPost(url,params).then(res =>{
               
            }).catch(res =>{
               
            })
        },
        // 判断是否实名认证
        handleIsAuth(obj,type){ 
             this.handleAIRadarInsert(type);
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
        height:28%;
        background-image:  url("http://fx.91dianji.com.cn/title.png");
        background-size: 100% ;
        background-repeat: no-repeat;
        // background-blend-mode: normal,normal;
        position: relative;
        z-index: 1;
       p{
           display: flex;
           align-items: center;
           color:#fff;
           padding-left:20px;
           padding-top:20px;
           span{
               display: inline-block;
               margin-left:10px;
           }
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
    .order{
        position: absolute;
        left:3%;
        top:20%;
        width:94%;
        z-index: 3;
        background-color: #fff;
        border-radius: 10px;
        // border:2px solid #E6E6E6;
        box-shadow: 0px 1px 10px  #DBDBDB;
        ul{
             padding:15px;
             display: flex;
             flex-wrap: wrap;
             li{
                 width:25%;
                 text-align: center;
                 padding-top:10px;
                 p{
                     &:nth-of-type(1){
                         padding:5px;
                     }
                       &:nth-of-type(1){
                         padding-top:10px;
                     }
                 }

             }
             &:nth-of-type(5),
             &:nth-of-type(6){
                 padding-top:10px;
             }
            
        }
    }
    .recommend{
        width:94%;
        margin:0 auto;
        display: flex;
        align-items: center;
        padding-top:20px;
        p{
            &:nth-of-type(1){
                height: 100px;
                width:30px;
                background-color: #E9B23F;
                margin-right:30px;
            }
            &:nth-of-type(2){
                font-weight: bold;
                font-size: 46px;
            }
        }
    }
    .ads {
        width:94%;
        margin:30px auto;
        img {
            width:100%;
        }
    }
    .hot{
        width:94%;
        margin:30px auto;
        ul{
            display: flex;
            width:100%;
            justify-content: space-between;
            li{
                width:46%;
                display: flex;
                align-items: center;
                border-radius: 10px;
                padding:15px 0px;
                &:nth-of-type(1){
                   background-image: linear-gradient(to right, #F3F0FB, #F4F8FE);
                   border:2px solid #E1EDFD;
                    box-shadow: 0px 1px 10px  #E1EDFD;
                }
                 &:nth-of-type(2){
                   background-image: linear-gradient(to right, #FDF9ED, #FEFDF2);
                   border:2px solid #EDDDCD;
                   box-shadow: 0px 1px 10px  #EDDDCD;
                }
            }
        }
    }
    .gray{
        width:100%;
        height:40px;
        background-color: #F5F5F5;
        margin-top:32%;
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
                        border:1px solid #886929;
                    }
                    >.small ,
                    .large {
                        display: flex;
                        justify-content: space-between;
                        padding-bottom: 20px;
                        align-items: center;
                        z-index: 1000;
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
            text-align: center;
            font-size: 34px;
            font-weight: bold;
            color:#F79E00;
            >p {
                &:nth-of-type(1){
                    padding-bottom: 10px;
                }
            }
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

