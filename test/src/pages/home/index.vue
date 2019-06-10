
<template>
    <div id="home-component">
        <div class="container">
            <div class="swipe">
                <div class="top_control row">
                    <div class="menu start-center" @click="isShow"> <van-icon name="wap-nav" />菜单</div>
                    <router-link tag="div" to="/home/systemNews" class="menu end-center"><van-icon name="volume" />&nbsp;消息</router-link>
                </div>
                <van-swipe :autoplay="3000">
                    <van-swipe-item>
                        <img src="http://sbs.91dianji.com.cn/banner01.jpg" class="per-img" />
                    </van-swipe-item>
                </van-swipe>
            </div>
            <!-- 头部四个菜单和资讯滚动模块 -->
            <div class="four_menu_marqueen">
                <div class="four_menu row">
                    <router-link tag="div" class="per_menu" :to="{path: '/home/cardCenter/progressQuery',query: {info:'https://m.youku.com/video/id_XNDE5MjE3MjYzMg==.html?spm=a2h3j.8428770.3416059.1&source=&sharetype=secondtime&from=singlemessage',title: '新手教程'}}">
                        <div class="icon center"><img src="http://sbs.91dianji.com.cn/zhengxin@2x.png"/></div>
                        <div class="title center">新人教程</div>
                    </router-link>
                    <router-link tag="div" to="/vip" class="per_menu">
                        <div class="icon center"><img src="http://sbs.91dianji.com.cn/shengji@2x.png"/></div>
                        <div class="title center">升级代理</div>
                    </router-link>
                    <router-link tag="div" to="/personalCenter/income" class="per_menu">
                        <div class="icon center"><img src="http://sbs.91dianji.com.cn/mingxi@2x.png"/></div>
                        <div class="title center">收益明细</div>
                    </router-link>
                    <router-link tag="div" class="per_menu" to="/home/totalPunch">
                        <div class="icon center"><img src="http://sbs.91dianji.com.cn/daka@2x.png"/></div>
                        <div class="title center">签到打卡</div>
                    </router-link>
                </div>
                <div class="marqueen row">
                    <div class="pannel-title row">
                        <div class="left_title">
                            <div>随便刷</div>
                            <div>资讯</div>
                        </div>
                        <div class="right_icon center"><div class="center">热门</div></div>
                    </div>
                    <div class="pannel-detail center" @click="handleContactUs">
                        <van-notice-bar text="现成为928会员，即可享有19800元代理商的相关权限，名额有限，相关内容，请联系您的专属客户经理，确认活动详情"/>
                    </div>
                </div>
            </div>
            <!-- 特色产品 -->
            <div class="big_title center"><img src="http://sbs.91dianji.com.cn/tese@2x.png"/></div>
            <div class="special_goods">
                <div class="per_special row">
                    <div class="goods banka" @click="handleIsAuth('/home/cardCenter')">
                        <div class="mini_title">办卡</div>
                        <div class="small_title">信用卡办卡</div>
                        <div class="slogan">银行办理-佣金当天结算</div>
                    </div>
                    <div class="goods shoukuan left" @click="handleIsAuth('/home/collect')">
                        <div class="mini_title">收款</div>
                        <div class="small_title">商户收款</div>
                        <div class="slogan">落地商户-快捷支付</div>
                    </div>
                </div>
                <div class="per_special top row">
                    <div class="goods daikuan" @click="handleIsAuth('/loan/detail')">
                        <div class="mini_title">贷款</div>
                        <div class="small_title">我要贷款</div>
                        <div class="slogan">实时审批-授权额度</div>
                    </div>
                    <!-- <div class="goods left daihuan" @click="searchInfo">
                        <div class="mini_title">代还</div>
                        <div class="small_title">信用卡管家</div>
                        <div class="slogan">智能还贷-一键周转</div>
                    </div> -->
                     <router-link tag="div" class="goods left daihuan" to="/home/creditHousekeeper" >
                        <div class="mini_title">代还</div>
                        <div class="small_title">信用卡管家</div>
                        <div class="slogan">智能还贷-一键周转</div>
                     </router-link>
                </div>
            </div>

            <!-- 便民服务台 -->
            <div class="reception center">
                <img src="http://sbs.91dianji.com.cn/slogan@2x.png" alt="">
            </div>
            <div class="big_title center"><img src="http://sbs.91dianji.com.cn/youxuan@2x.png"/></div>
            <div class="preferred_service">
                <router-link :to="{path: '/loan/form/myOrder',query: {info: 'http://www.jd.com',title: '商城'}}" tag="div" class="per_services shangcheng left">
                    <div class="small_title center-end">商城</div>
                    <div class="mini_title center">手机商城</div>
                </router-link>
                <router-link tag="div" :to="{path: '/loan/form/myOrder',query: {info: 'http://www.epicc.com.cn/',title: '汽车保险'}}" class="per_services baoxian left">
                    <div class="small_title center-end">汽车保险</div>
                    <div class="mini_title center">业绩优秀&nbsp;实时提现</div>
                </router-link>
                <router-link tag="div" :to="{path: '/loan/form/myOrder',query: {info: 'https://m2.weizhang8.cn/',title: '违章查询'}}" class="per_services weizhang left">
                    <div class="small_title center-end">违章查询</div>
                    <div class="mini_title center">违章查询</div>
                </router-link>
                <router-link tag="div" :to="{path: '/loan/form/myOrder',query: {info: 'http://baoxian.pingan.com',title: '意外险'}}" class="per_services fenrun">
                    <div class="small_title center-end">意外险</div>
                    <div class="mini_title center">出行安全有保障</div>
                </router-link>
            </div>

            <div class="big_title center"><img src="http://sbs.91dianji.com.cn/rexiao@2x.png"/></div>
            <div class="hotsale_product">
                <div class="row">
                    <div class="per_hotsale" @click="handleExpect">
                        <div class="icon center"><img src="http://sbs.91dianji.com.cn/account@2x.png"/></div>
                        <div class="title center">提额秘籍</div>
                    </div>
                    <router-link tag="div" to="/vip" class="per_hotsale">
                        <div class="icon center"><img src="http://sbs.91dianji.com.cn/daili@2x.png"/></div>
                        <div class="title center">升级代理</div>
                    </router-link>
                    <div class="per_hotsale" @click="handleIsAuth('/home/cardCenter')">
                        <div class="icon center"><img src="http://sbs.91dianji.com.cn/bankcard@2x.png"/></div>
                        <div class="title center">我要办卡</div>
                    </div>
                    <router-link tag="div" class="per_hotsale" to="/home/totalPunch">
                        <div class="icon center"><img src="http://sbs.91dianji.com.cn/daka@2x.png"/></div>
                        <div class="title center">签到打卡</div>
                    </router-link>
                </div>
                <div class="row">
                    <div class="per_hotsale" @click="handleExpect">
                        <div class="icon center"><img src="http://sbs.91dianji.com.cn/yongjin@2x.png"/></div>
                        <div class="title center">共享佣金池</div>
                    </div>
                    <div class="per_hotsale" @click="handleExpect">
                        <div class="icon center"><img src="http://sbs.91dianji.com.cn/jifen@2x.png"/></div>
                        <div class="title center">积分兑换</div>
                    </div>
                    <div class="per_hotsale" @click="handleExpect">
                        <div class="icon center"><img src="http://sbs.91dianji.com.cn/sucai@2x.png"/></div>
                        <div class="title center">发圈素材</div>
                    </div>
                    <div class="per_hotsale" @click="handleExpect">
                        <div class="icon center"><img src="http://sbs.91dianji.com.cn/paihang@2x.png"/></div>
                        <div class="title center">排行榜</div>
                    </div>
                </div>
                
            </div>








            <!-- 查询模块 -->
            <!-- <div class="search">
                <ul>
                    <router-link :to="{path: '/loan/form/myOrder',query: {info: 'https://www.creditchina.gov.cn/gerenxinyong/?navPage=14',title: '征信查询'}}" tag="li"> </router-link>
                    <router-link :to="{path: '/home/cardCenter/progressQuery',query: {info:'https://m.youku.com/video/id_XNDE5MjE3MjYzMg==.html?spm=a2h3j.8428770.3416059.1&source=&sharetype=secondtime&from=singlemessage',title: '新手教程'}}" tag="li">

                        <p> <van-icon name="http://sbs.91dianji.com.cn/101.png"  class="zx-search"  /></p>
                        <span>新人教程</span>
                    </router-link>
                    <router-link to="/vip" tag="li">
                         <p> <van-icon name="http://sbs.91dianji.com.cn/102.png"  class="zx-search"  /></p>
                        <p>升级代理</p>
                    </router-link>
                    <router-link to="/personalCenter/incomedetail" tag="li">
                         <p> <van-icon name="http://sbs.91dianji.com.cn/103.png"  class="zx-search"  /></p>
                        <span>收益明细</span>
                    </router-link>
                    <router-link tag="li" to="/home/totalPunch">
                        <p> <van-icon name="http://sbs.91dianji.com.cn/104.png"  class="zx-search"  /></p>
                        <span>签到打卡</span>
                    </router-link>
                </ul>
            </div> -->
            <!-- 名片咨询模块 -->
           <!-- <div class="pannel-news row">
                <div class="pannel-title center">随便刷<br/>资讯</div>
                <div class="pannel-detail center" @click="handleContactUs">
                    <van-notice-bar text="现成为993会员，即可享有19800元代理商的相关权限，名额有限，相关内容，请联系您的专属客户经理，确认活动详情。"/>
                </div>
            </div>  -->

            <!-- 信用卡模块 -->
           <!-- <div class="credit">
                <ul>
                    <li @click="handleIsAuth('/home/cardCenter')">
                        <span class="handle">
                            <van-icon name="http://sbs.91dianji.com.cn/105.png" size="40px" />
                        </span>
                        <div class="channel">
                            <h3>信用卡办理</h3>
                            <p>佣金当天结算</p>
                            <span>官方渠道</span>
                        </div>
                    </li>
                    <li @click="handleIsAuth('/home/collect')">
                        <span class="handle"> <van-icon name="http://sbs.91dianji.com.cn/106.png" size="40px" /></span>
                        <div class="channel">
                            <h3>商户收款</h3>
                            <p>快捷支付</p>
                            <span>落地商户</span>
                        </div>
                    </li>
                    <li @click="handleIsAuth('/loan/detail')">
                        <span class="handle"> <van-icon name="http://sbs.91dianji.com.cn/107.png" size="40px" /></span>
                        <div class="channel">
                            <h3>我要贷款</h3>
                            <p>实时审批&nbsp;授信额度</p>
                            <span>GO>></span>
                        </div>  
                    </li>
                     <li @click="searchInfo">
                        <span class="handle"> <van-icon name="http://sbs.91dianji.com.cn/108.png" size="40px" /></span>
                        <div class="channel">
                            <h3>信用卡管家</h3>
                            <p>落地商户空卡周转</p>
                            <span>智能还款</span>
                        </div>
                    </li>
                     <router-link tag="li" to="/home/creditHousekeeper">
                        <span class="handle"> <van-icon name="http://sbs.91dianji.com.cn/108.png" size="40px" /></span>
                        <div class="channel">
                            <h3>信用卡管家</h3>
                            <p>落地商户空卡周转</p>
                            <span>智能还款</span>
                        </div>
                     </router-link>

                </ul>
            </div>  -->
            <!-- 详情模块 -->
            <!-- <div class="details">
                <ul>
                    <li @click="handleExpect">
                        <span>
                           <van-icon name="http://sbs.91dianji.com.cn/icon_49.png" size="30px" />
                        </span>
                        <div class="detail-item">
                            <h3>授权分润</h3>
                            <p>给实习会员设置分润</p>
                        </div>
                    </li>
                    <router-link tag="li" :to="{path: '/loan/form/myOrder',query: {info: 'http://www.epicc.com.cn/',title: '汽车保险'}}">
                        <span>
                        <van-icon name="http://sbs.91dianji.com.cn/icon_50.png" size="30px" />
                        </span>
                        <div class="detail-item">
                            <h3>汽车保险</h3>
                            <p>没有中间商差价</p>
                        </div>
                    </router-link>
                    <li>
                        <span>
                           <van-icon name="http://sbs.91dianji.com.cn/icon_51.png" size="30px" />
                        </span>
                        <div class="detail-item">
                            <h3>发圈素材</h3>
                            <p>发朋友圈获得奖金</p>
                        </div>
                    </li>
                    <li @click="handleExpect">
                        <span>
                            <van-icon name="http://sbs.91dianji.com.cn/icon_52.png" size="30px" />
                        </span>
                        <div class="detail-item">
                            <h3>排行榜</h3>
                            <p>随便刷业务排名</p>
                        </div>
                    </li>
                    <router-link tag="li" :to="{path: '/loan/form/myOrder',query: {info: 'http://baoxian.pingan.com',title: '意外险'}}">
                        <span>
                            <van-icon name="http://sbs.91dianji.com.cn/icon_53.png" size="30px" />
                        </span>
                        <div class="detail-item">
                            <h3>意外险</h3>
                            <p>出行安全有保障</p>
                        </div>
                    </router-link>
                    <li>
                        <span>
                           <van-icon name="http://sbs.91dianji.com.cn/icon_60.png" size="30px" />
                        </span>
                        <div class="detail-item">
                            <h3>提额秘籍</h3>
                            <p>快速提额</p>
                        </div>
                    </li>
                    <li @click="handleExpect">
                        <span>
                            <van-icon name="http://sbs.91dianji.com.cn/icon_61.png" size="30px" />
                        </span>
                        <div class="detail-item">
                            <h3>共享奖金池</h3>
                            <p>参与奖金池奖励分配</p>
                        </div>
                    </li>
                    <li @click="handleExpect">
                        <span>
                           <van-icon name="http://sbs.91dianji.com.cn/icon_62.png" size="30px" />
                        </span>
                        <div class="detail-item">
                            <h3>给团队绑卡</h3>
                            <p>TA绑卡开通注册</p>
                        </div>
                    </li>
                    <li @click="handleExpect">
                        <span>
                           <van-icon name="http://sbs.91dianji.com.cn/icon_63.png" size="30px" />
                        </span>
                        <div class="detail-item">
                            <h3>积分兑换</h3>
                            <p>积分不失/换乐无穷</p>
                        </div>
                    </li>
                    <router-link tag="li" :to="{path: '/loan/form/myOrder',query: {info: 'http://www.jd.com',title: '商城'}}">
                        <span>
                           <van-icon name="http://sbs.91dianji.com.cn/icon_64.png" size="30px" />
                        </span>
                        <div class="detail-item">
                            <h3>商城</h3>
                            <p>商城</p>
                        </div>
                    </router-link>
                    <router-link tag="li" :to="{path: '/loan/form/myOrder',query: {info: 'https://m2.weizhang8.cn/',title: '违章查询'}}">
                        <span>
                           <van-icon name="http://sbs.91dianji.com.cn/icon_65.png" size="30px" />
                        </span>
                        <div class="detail-item">
                            <h3>违章查询</h3>
                            <p>违章查询  </p>
                        </div>
                    </router-link>
                     <li @click="handleExpect">
                        <span>
                           <van-icon name="http://sbs.91dianji.com.cn/icon_63.png" size="30px" />
                        </span>
                        <div class="detail-item">
                            <h3>卡·测评</h3>
                            <p>信用卡“体检”报告</p>
                        </div>
                    </li>
                </ul>
            </div> -->
            <!-- 客服 -->
            <!-- <div class="serve">
               <router-link tag="p" :to="{path: '/home/cardCenter/progressQuery',query: {info: 'https://kefu.easemob.com/webim/im.html?configId=9cb49ac7-e183-4e98-afbd-e5860ff3b6a0',title: '在线客服'}}"> <van-icon  name="friends" />在线客服</router-link>
            </div> -->
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
                        <router-link to="/home/customerService" tag="li">联系客服</router-link>
                        <router-link to="/home/aboutUs" tag="li">关于我们</router-link>
                        <!-- <li class="switch">声音开关
                        </li> -->
                        <router-link to="/home/accountManagement" tag="li">账户管理</router-link>
                        <!-- <router-link to="/home/clearCache" tag="li">清除缓存</router-link> -->
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
                        <p>随便刷升级了，快来体验吧！</p>
                        <div class="butt">
                            <div class="cancle" @click="showUpdate=false">取消</div>
                            <div class="upd" @click="download">更新</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div v-show="allmap" id="allmap"></div> -->
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
            // 轮播图图片
            images: [
                'http://sbs.91dianji.com.cn/banner01.jpg',
                'http://sbs.91dianji.com.cn/banner02.jpg',
                'http://sbs.91dianji.com.cn/banner03.jpg',
                'http://sbs.91dianji.com.cn/banner04.jpg',
                'http://sbs.91dianji.com.cn/banner05.jpg'
            ],
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
        handleExpect(){
            this.$toast('敬请期待')
        },
        download(){  // 更新
            // 判断android 还是ios
                var u = navigator.userAgent;
                var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
                var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
                 if(isAndroid) {
                  window.location.href=" https://www.pgyer.com/vFbf"
               } else if(isiOS) {
                  window.location.href="http://znd.hvv.dnf-w3.cn/KXxv61"
              } 

        },
        getUpdate(){ // 获取历史版本号
               axiosPost("/customer/getVersion")
               .then(res=>{
                   console.log(res)
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
                   console.log(that.versionAndroid)
                    console.log(that.versionIos)
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
        },
        // 联系客服
        handleContactUs(){
            this.$router.push('/personalCenter/contactus')
        },
        // searchInfo(){
        //     axiosPost("/creditCard/getMerchantSettled")
        //     .then(res=>{
        //         if(res.data.code==="1"){
        //             this.$router.push("/home/addCard")
        //         } else if(res.data.code==="0"){
        //             // window.location.href = res.data.data.url;
        //             storage.set('cardManager',res.data.data.url);
        //             this.$router.push({
        //                 path: '/cardManager'
        //             })
        //         }
        //     })
        //     .catch(err=>{
        //         // console.log(err,"失败");
                
        //     })
        // },
    },
    created(){
        this.nickname=this.$store.state.wechat.nickname;
        this.headimg=this.$store.state.wechat.headimg;
        this.city=this.$store.state.wechat.city;
        this.handleSearchAuths()
         this.automatic() //自动登录
         this.getUpdate() //获取版本
    }  ,
    mounted () {
        // 更新
        this.update();
    }
}
</script>

<style lang="less" >
   #home-component {
        width: 100vw;
        padding-bottom: 60px;
        .container {
            padding-bottom:96px;
            overflow-x: hidden;
            position: relative;
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
                            color:#29305C;
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
                                    background-color: #29305C;
                                    color:#fff;
                                }
                            }
                        }
                        
                    }
                }

            }
            .swipe {
                height: 390px;
                .top_control{
                    width: 96%;
                    padding-left: 2%;
                    padding-right: 2%;
                    height: 50px;
                    position: absolute;
                    top: 0;
                    left: 0;
                    z-index: 2;
                    color: #ffffff;
                    font-size: 28px;
                    .menu{
                        width: 50%;
                        height: 100%;
                    }
                }
                .per-img{
                    width: 100vw;
                    height: 390px;
                }
            }
            .four_menu_marqueen{
                width: 100%;
                height: auto;
                padding-top: 30px;
                .four_menu{
                    width: 100%;
                    height: 150px;
                    .per_menu{
                        width: 25%;
                        height: 100%;
                        .icon{
                            width: 100%;
                            height: 70%;
                            font-size: 80px;
                            >img{
                                width: 60px;
                                height: 60px;
                            }
                        }
                        .title{
                            width: 100%;
                            height: 30%;
                            font-size: 24px;
                        }
                    }
                }
                .marqueen{
                    width: 90.8vw;
                    height: 100px;
                    margin-top: 30px;
                    margin-left: auto;
                    margin-right: auto;
                    box-shadow: 0px 0px 15px 2px #cccccc;
                    .pannel-title{
                        width: 30%;
                        height: 100%;
                        color: #29305c;
                        font-weight: bold;
                        font-size: 32px;
                        letter-spacing: 5px;
                        line-height: 48px;
                        .left_title{
                            width: 65%;
                            height: 100%;
                            font-style: oblique;
                            div:nth-child(1){
                                width: 90%;
                                padding-left: 5%;
                                padding-right: 5%;
                                height: 50%;
                                text-align-last:justify;
                                text-align:justify;
                                text-justify:distribute-all-lines; 
                            }
                            div:nth-child(2){
                                width: 90%;
                                padding-left: 5%;
                                padding-right: 5%;
                                height: 50%;
                                text-align-last:justify;
                                text-align:justify;
                                text-justify:distribute-all-lines; 
                            }
                        }
                        .right_icon{
                            width: 35%;
                            height: 100%;
                            div{
                                width: 90%;
                                margin-left: auto;
                                margin-right: auto;
                                height: 30px;
                                border: solid 1px #999;
                                font-size: 22px;

                            }
                        }
                    }
                    .pannel-detail{
                        width: 70%;
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
            }
            .reception{
                width: 94%;
                height: auto;
                margin: 20px auto auto auto;
                img{
                    width: 100%;
                    height: auto;
                }
            }
            .big_title{
                width: 100%;
                height: 100px;
                color: #29305C;
                font-size: 32px;
                font-weight: 900;
                margin-top: 20px;
                img{
                    width: 25%;
                    height: auto;
                }
            }
            .special_goods{
                width: 90.8vw;
                height: auto;
                margin-left: auto;
                margin-right: auto;
                .top{
                    margin-top: 20px;
                }
                .banka{
                    background: url('http://sbs.91dianji.com.cn/banka@2x.jpg')
                }
                .shoukuan{
                    background: url('http://sbs.91dianji.com.cn/shoukuan@2x.jpg')
                }
                .daikuan{
                    background: url('http://sbs.91dianji.com.cn/daikuan@2x.jpg')
                }
                .daihuan{
                    background: url('http://sbs.91dianji.com.cn/daihuan@2x.jpg')
                }
                .per_special{
                    width: 100%;
                    height: auto;
                    .left{
                        margin-left: 2%;
                    }
                    .goods{
                        width: 49%;
                        height: 190px;
                        position: relative;
                        .mini_title{
                            width: 100px;
                            height: 50px;
                            text-align: center;
                            line-height: 50px;
                            background: #29305C;
                            font-size: 32px;
                            position: absolute;
                            top: 20px;
                            left: 0px;
                            color: #ffffff;
                            border: solid 1px #ffffff;
                            border-top-right-radius: 15px;
                            border-bottom-right-radius: 15px;
                        }
                        .small_title{
                            font-size: 36px;
                            color: #333333;
                            position: absolute;
                            top: 90px;
                            left: 30px;
                            font-weight: 700;
                        }
                        .slogan{
                            font-size: 28px;
                            color: #333333;
                            position: absolute;
                            top: 140px;
                            left: 30px;
                        }
                    }
                }
            }
            .preferred_service{
                width: 90.8vw;
                height: 164px;
                overflow-x: scroll;
                white-space: nowrap;
                overflow-y: hidden;
                margin-left: auto;
                margin-right: auto;
                .left{
                    margin-left: 10px;
                }
                .per_services{
                    display: inline-block;
                    width: 250px;
                    height: 100%;
                    border-radius: 15px;
                    .small_title{
                        width: 100%;
                        height: 45%;
                        font-size: 32px;
                        color: #ffffff;
                    }
                    .mini_title{
                        width: 100%;
                        height: 40%;
                         font-size: 28px;
                        color: #ffffff;
                    }
                }
                .fenrun{
                    background: url('http://sbs.91dianji.com.cn/bg01.png') center center no-repeat;
                }
                .baoxian{
                    background: url('http://sbs.91dianji.com.cn/bg02.png') center center no-repeat;
                }
                .weizhang{
                    background: url('http://sbs.91dianji.com.cn/bg03.png') center center no-repeat;
                }
                .shangcheng{
                    background: url('http://sbs.91dianji.com.cn/bg04.png') center center no-repeat;
                }
            }
            .hotsale_product{
                width: 90.8vw;
                height: auto;
                // border: solid 1px red;
                margin-left: auto;
                margin-right: auto;
                box-shadow: 0px 0px 15px 2px #cccccc;
                .per_hotsale{
                    width: 25%;
                    height: 150px;
                    padding-top: 20px;
                    .icon{
                        width: 100%;
                        height: 60%;
                        font-size: 70px;
                        >img{
                            width: 60px;
                            height: 60px;
                        }
                    }
                    .title{
                        width: 100%;
                        height: 40%;
                        font-size: 26px;
                    }
                }
            }

            .pannel-news{
                width: 98vw;
                height: 150px;
                margin-top:50px;
                margin-left: auto;
                margin-right: auto;
                // background-image: -webkit-linear-gradient(0deg, #4965AE, #7189C4);
                .pannel-title{
                    width: 20%;
                    height: 100%;
                    color: white;
                    font-weight: bold;
                    font-size: 38px;
                    letter-spacing: 5px;
                    line-height: 48px;
                }
                .pannel-detail{
                    width: 80%;
                    height: 100%;
                    color: white;
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
       
        >.credit {
            margin-top:20px;
            background-color: #fff;
            >ul {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-around;
                padding:10px;
                list-style: none;
                >li {
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    width:47%;
                    border: 2px solid #ccc;
                    border-radius:10px;
                    padding-bottom:20px;
                    padding-top:35px;
                    margin-top:10px;
                    background-color:#FAFAFA;
                    >.handle {
                        color:#CF9C5D;
                        font-size: 60px;
                        margin-left: 10px;
                        margin-top:30px;
                    }
                    >.channel {
                        text-align: left;
                        flex:1;
                        margin-left:20px;
                        >h3 {
                            font-size:30px;
                            font-weight: bolder;
                        }
                        >p {
                            font-size:28px;
                            margin-top:10px;
                            margin-bottom:10px;
                            color:#29305C;
                        }
                        >span {
                            color:#29305C;
                            background-color:#E8ECF7;
                            border-radius:15px;
                            padding:5px 20px;
                            font-size: 28px;
                            margin-bottom: 10px;
                        }
                    }
                }
            }
        }   
        >.details {
            margin-top:10px;
            border-top:1px solid #ccc;
            background-color: #fff;
            padding-bottom:100px;
            margin-bottom: 50px;
            >ul{
                display: flex;
                flex-wrap: wrap;
                >li {
                    width:50%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    border-bottom: 1px solid #ccc;
                    border-right: 1px solid #ccc;
                    box-sizing: border-box;
                    >span {
                        margin-left: 40px;
                        font-size: 40px;
                        color:#CF9C5D;
                    }
                    >.detail-item {
                        margin-left:10px;
                        flex:1;
                        >h3 {
                            font-weight: bolder;
                            font-size: 30px;
                            margin-top:30px;
                            margin-bottom: 20px;
                        }
                        >p {
                            font-size:30px;
                            margin-bottom: 20px;
                            color:#666;
                        }
                    }
                }
            }
        }
         >.serve {
            //  background-color: red;
             margin-bottom: 50px;
             padding:20px 20px 50px 30px;
             font-size:34px;
             color:#29305C;

        }
        >.aside-left {
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, .4);
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
                    background-color: #29305C;
                    position: fixed;
                    top:0px;
                    right: 0px;
                    left:0px;
                    bottom: 0px;
                    padding-bottom: 20px;
                    z-index: 999;
                   
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
                        // margin-bottom:20px;
                         >span{
                            border:2px solid #fff;
                           background-color:#29305C;
                           padding:30px 60px;
                           border-radius: 10px;
                         }
                    }
                    .van-dialog .van-button {
                        /* border: 0; */
                        border: 1px solid #29305C;
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
          .van-dialog .van-button{
             height: 80px;
         }
         .van-button--default{
             background-color: #29305C;
         }
          .van-dialog .van-button {
                border: 1px solid #29305C;
            }
        
     }
   }
</style>

