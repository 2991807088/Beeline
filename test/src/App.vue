<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>

<script>
import {axiosPost,axiosGet} from '@/lib/http'
import storage from '@/lib/storage'
export default {
  name: 'App',
  data(){
    return {
      active:0,
      code: '',
      openid: '',
    }
  },
  methods:{
     // 微信授权
    handleOauth(){
        location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx6ebccdf81027eb46&redirect_uri=http%3a%2f%2ffx.91dianji.com.cn%2f%23%2fhome&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect"
    },
    // 获取url参数
    GetUrlParam(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if(r != null) return decodeURI(r[2]);
        return null;
    },
    // 获取access_token
    handleAccessToken(){
        let url = 'http://fx.91dianji.com.cn/wxApi/sns/oauth2/access_token?appid=wx6ebccdf81027eb46&secret=a63831156ef69f98caf3ed3bbcca5eb6&code='+this.code+'&grant_type=authorization_code';
        axiosGet(url).then(res =>{
            storage.set('access_token',res.data.access_token); 
            storage.set('openid',res.data.openid);
            // 继续请求昵称头像等信息
            let url = 'http://fx.91dianji.com.cn/wxApi/sns/userinfo?access_token='+ storage.get('access_token') +'&openid='+ res.data.openid +'&lang=zh_CN';
            axiosGet(url).then(res =>{
                this.$store.commit('openid',res.data.openid);
                this.$store.commit('nickname',res.data.nickname);
                this.$store.commit('headimg',res.data.headimgurl);
                // 判断openid是否注册过
                let params = {
                  openid: res.data.openid
                };
                let url = '/customer/getOpenidIsExist' // 生产环境
                axiosPost(url,params).then(res =>{
                  if(res.data.data == '0'){
                    // 未注册
                    let params = {
                      nickname: this.$store.state.wechat.nickname,
                      openid:   this.$store.state.wechat.openid,
                      photo:    this.$store.state.wechat.headimg,
                      recommendedcode: storage.get('recommendedcode')
                    }
                    let url = '/customer/registered';
                    axiosPost(url,params)
                    .then(res =>{
                      if(res.data.success){
                        storage.set('openid',this.$store.state.wechat.openid)
                        // 登录
                        this.handleLoginByWechat();
                      }else{
                        this.$toast('注册失败了');
                      }
                    })
                    .catch(res =>{
                    })
                  }else{
                    // 已注册
                    this.handleLoginByWechat();
                  }
                  
                }).catch(res =>{
                })
            }).catch(res =>{
            })
        }).catch(res =>{
        })
    },
    // 微信登录
    handleLoginByWechat(){
      let params = {
        openid: storage.get('openid')
      }
      let url = '/customer/loginByWechat';
      axiosPost(url,params).then(res =>{
          if(res.data.success){
            storage.set('cid',res.data.data.id);
            storage.set('openid',res.data.data.openid);
            storage.set('promotioncode',res.data.data.promotioncode)
            this.$store.commit('iscertification',res.data.data.iscertification);
            this.$store.commit('level',res.data.data.level);
            this.$store.commit('promotioncode',res.data.data.promotioncode);
            this.$store.commit('mobile',res.data.data.mobile);
            this.$store.commit('vip',res.data.data.vip);
            this.$store.commit('recommendedcode',res.data.data.recommendedcode);
            this.$store.commit('amount',res.data.data.amount);
            this.$store.commit('headimg',res.data.data.photo);
            this.$store.commit('nickname',res.data.data.nickname);
            this.$store.commit('openid',res.data.data.openid);
            this.$store.commit('city',res.data.data.city);
            this.$store.commit('ispartner',res.data.data.ispartner);
            this.$router.push('/home');
            this.$toast('登陆成功');
          }else{
            this.$toast('登陆失败');
          }
      }).catch(res =>{
          this.$toast('登陆失败');
      })
    }
  },
  created(){
      // 首先判断是否存储了openid
      if(storage.get('openid') != '' && storage.get('openid') !== null){
        // 已经注册过，可直接登录，无需再次授权
        this.handleLoginByWechat();
      }else{
        // 拿不到openid，需要授权登录
        if(this.$router.currentRoute.query.promotioncode != '' && typeof(this.$router.currentRoute.query.promotioncode) != 'undefined'){
          storage.set('recommendedcode',this.$router.currentRoute.query.promotioncode);
        }
        // 判断是否是微信浏览器
        var ua = navigator.userAgent.toLowerCase();
        if(ua.match(/MicroMessenger/i)=="micromessenger") {
          // 微信浏览器
          if(this.GetUrlParam('code') === null){
          // 未授权
            this.handleOauth();
          }else{
          // 已授权
            this.code = this.GetUrlParam('code');
            this.handleAccessToken();
          }
        }else{
          // 非微信浏览器
        }  
      }
  },
  mounted(){
    // js-sdk的access_token 
    let url = 'http://fx.91dianji.com.cn/wxApi/cgi-bin/token?grant_type=client_credential&appid=wx6ebccdf81027eb46&secret=a63831156ef69f98caf3ed3bbcca5eb6';
    axiosGet(url).then(res =>{
      let url = 'http://fx.91dianji.com.cn/wxApi/cgi-bin/ticket/getticket?access_token='+ res.data.access_token +'&type=jsapi';
      axiosGet(url).then(res =>{
        storage.set('ticket',res.data.ticket);
        // 请求签名信息
        var jsapi_ticket = storage.get('ticket');
        var radom = Math.random().toString(36).substr(2);
        var timestamp = (new Date()).getTime();
        var url = window.location.href;
        
        let posturl = '/customer/getSignature';
        let params = {
          jsapi_ticket: jsapi_ticket,
          url: url,
          noncestr: radom,
          timestamp: timestamp
        };
        axiosPost(posturl,params).then(res =>{
          wx.config({
              debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
              appId: 'wx6ebccdf81027eb46', // 必填，公众号的唯一标识
              timestamp: timestamp, // 必填，生成签名的时间戳
              nonceStr: radom, // 必填，生成签名的随机串
              signature: res.data.data.signature,// 必填，签名
              jsApiList: [
                'updateAppMessageShareData',
                'updateTimelineShareData',
                'chooseWXPay'
              ] // 必填，需要使用的JS接口列表
          });
          wx.ready(function(){
            // 分享给朋友
              wx.updateAppMessageShareData({ 
                  title: '综合金融服务推广平台', // 分享标题
                  desc: '点滴成就未来', // 分享描述
                  link: 'http://fx.91dianji.com.cn/#/home?promotioncode=' + storage.get('promotioncode'), // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                  imgUrl: 'http://fx.91dianji.com.cn/share.png', // 分享图标
                  success: function (res) {
                  }
              });
              // 分享到朋友圈
              wx.updateTimelineShareData({ 
                  title: '综合金融服务推广平台', // 分享标题
                  desc: '点滴成就未来', // 分享描述
                  link: 'http://fx.91dianji.com.cn/#/home?promotioncode=' + storage.get('promotioncode'), // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                  imgUrl: 'http://fx.91dianji.com.cn/share.png', // 分享图标
                  success: function (res) {
                    
                  }
              });
          });
          wx.error(function(res){
    
          });
        }).catch(res =>{
        })

      }).catch(res =>{
      })
    }).catch(res =>{
    })
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
   height:100%;
  width:100%;
}
</style>
