<template>
    <div id="page-poster">
        <header class="header-top row">
            <div class="left-icon start-center" @click="goBack"><van-icon color="white" size="20px" name="arrow-left"/></div>
            <div class="top-title center">{{tip}}</div>
            <div @click="showCover" class="right-icon center">
                     <van-icon color="white" size="20px" name="weapp-nav"/>
                </div>
        </header>
        <div class="poster-canvas center"><canvas id="poster" width="375" height="667"></canvas>  </div>
        <div class="btn ">
            <!-- <div @click="handlechangeRandom" class="change center">换一换</div> -->
            <!-- <div @click="handlePrivacySettings" class="rightnow center">隐私设置</div>
            <div @click="savePoster" class="rightnow center">立即合成</div> -->
        </div>
        <div class="share" v-show="Sharewxf">
             <div class="wx">
                <!-- <van-button  class="shareBtn" @click="Sharewxf=true" type="default">分享</van-button> -->
                    <ul>
                        <li id="wxF"  @click="wxfri">
                            <p><van-icon name="http://fx.91dianji.com.cn/wx.png" size="40px"/></p>
                            <p>分享给好友</p>
                        </li>
                        <li @click="wxcir">
                            <p><van-icon color="white"  size="40px"  name="http://fx.91dianji.com.cn/pyq.png"/></p>
                            <p>分享到朋友圈</p>
                        </li>
                    </ul>
               <div class="button">
                     <van-button  size="large" @click="Sharewxf=false" type="default">取消</van-button>
               </div>
            </div>
        </div>
        <div class="load center" v-if="imgShow">
            <div v-if="showUpload" >
                <div class="loading center"><van-loading color="white" size="60px" /></div>
                <div class="title center-end">海报合成中</div>
            </div>
            <div class="imgs" v-if="!showUpload">
                <div class="savePoster center"><img :src="imgUrl" ></div>
                <div class="success center">
                    <!-- 海报生成成功，长按保存或分享 -->
                     海报生成成功
                </div>
                
            </div>
        </div>
        <loading :componentload="componentload"></loading>
    </div>

</template>
<script>
import loading from '@/components/loading'
import storage from '@/lib/storage'
import share from '@/lib/share'
import { axiosPost,axiosGet } from '../../lib/http';
export default {
    components:{
      loading
    },
    data() {
        return {
            componentload: true,
            cur:0 ,
            showUpload:true,
            imgUrl: '',
            imgShow: false,
            url: 'http://fx.91dianji.com.cn',
            qrcode: '',
            random: '01',
            // random: null,
            shares:null,
            sharewx:null,
            Sharewxf:false,
            tip:""
        }
    },
    methods:{
        goBack() {
            this.$router.go(-1);
        },
        wxcir(){
             let that=this
            plus.share.getServices(function (s) {
                that.shares = s;
                for (var i in s) {
                    if ('weixin' == s[i].id) {
                        that.sharewx = s[i];
                    }
                }
                // console.log(JSON.stringify(that.sharewx))
                 that.sharewxCirMessage()
            }, function (e) {
                alert("获取分享服务列表失败：" + e.message);
            });
        },
        wxfri(){
             let that=this
            plus.share.getServices(function (s) {
                that.shares = s;
                for (var i in s) {
                    if ('weixin' == s[i].id) {
                        that.sharewx = s[i];
                    }
                }
                    that.shareWeixinMessage()

            }, function (e) {
                alert("获取分享服务列表失败：" + e.message);
            });
        },
        sharewxCirMessage(){
              let that=this
          that.sharewx.send(
              {
                type:'web',   
                content: "蜂行卡包综合金融服务推广平台，点滴成就未来",title:"蜂行卡包",
                thumbs:["http://fx.91dianji.com.cn/share.jpg"],
                //  thumbs:"../../assets/images/slt.jpg",
                 href: "http://fx.91dianji.com.cn/#/home?promotioncode="+that.$store.state.wechat.promotioncode, extra: { scene: "WXSceneTimeline" }}
                , function(){
                // alert("分享成功！");
            }, function(e){
                alert("分享失败："+e.message);
            });
        },
         shareWeixinMessage() {
             let that=this
             that.sharewx.send(
                 {   
                     type:'web',
                     content: "蜂行卡包综合金融服务推广平台，点滴成就未来",title:"蜂行卡包", 
                     thumbs:["http://fx.91dianji.com.cn/share.jpg"],
                    //  thumbs:["../../assets/images/slt.jpg"],
                     href: "http://fx.91dianji.com.cn/#/home?promotioncode="+that.$store.state.wechat.promotioncode,
                     extra: { scene: "WXSceneSession" } 
                 }, function () {
            // alert("分享成功！");
        }, function (e) {
            alert("分享失败：" + e.message);
        });
    },
        cancleCover(){
            this.showShare=false
        },
        
        showCover(){
           this.Sharewxf=!this.Sharewxf
        },
        // 随机数
        handlechangeRandom(){
            this.componentload = true;
            var ran = Math.ceil((Math.random())*3);
            var random = '';
            if(ran < 10){
                random = '0' + ran;
                this.random = random;
            }else{
                this.random = ran;
            }
            this.handlePoster();
        },
        handlePosterWithoutDetail(){
            this.componentload = true;
            var poster = document.getElementById("poster");
            var ctx = poster.getContext("2d");
            ctx.fillStyle = "#fff";
            ctx.fillRect(0,0,375,667);

            var bigPoster = new Image();
            
            bigPoster.src = 'http://fx.91dianji.com.cn/pop'+ this.random +'.jpg';
            bigPoster.onload = function(){
                ctx.drawImage(bigPoster,0,0,375,600);
                setTimeout(()=>{
                    this.componentload = false;
                },2000);
            };
            var qrcode = new Image();
            qrcode.src = 'http://fx.91dianji.com.cn/' + this.qrcode;
            qrcode.onload = function(){
                ctx.drawImage(qrcode,10,610,50,50);
            };
            ctx.fillStyle="#000";
            ctx.font="14px Arial";
            ctx.fillText('长按识别二维码体验更多惊喜',80,640);
            setTimeout(()=>{
                this.componentload = false;
            },2500);
        },
        handlePoster(){
            this.componentload = true;
            var poster = document.getElementById("poster");
            var ctx = poster.getContext("2d");
            ctx.fillStyle = "#fff";
            ctx.fillRect(0,0,375,667);

            var bigPoster = new Image();
            // console.log(this.random,"random")
            bigPoster.src = 'http://fx.91dianji.com.cn/pop'+ this.random +'.jpg';
            bigPoster.onload = function(){
                ctx.drawImage(bigPoster,0,0,375,600);
                setTimeout(()=>{
                    this.componentload = false;
                },2000);
            };
            
            var qrcode = new Image();
            qrcode.src = 'http://fx.91dianji.com.cn/' + this.qrcode;
            qrcode.onload = function(){
                ctx.drawImage(qrcode,300,610,50,50);
            };
            var headimg = new Image();
            var url = this.$store.state.wechat.headimg;
            var domain = url.split('/mmopen');
            headimg.src = this.url + '/wxAvator' + '/mmopen' + domain[1];
            headimg.onload = function(){
                ctx.drawImage(headimg,10,610,50,50);
            };
            ctx.fillStyle="#000";
            ctx.font="14px Arial";
            ctx.fillText(this.$store.state.wechat.nickname,80,630);
            ctx.fillText(this.$store.state.wechat.promotioncode,80,650);
            setTimeout(()=>{
                this.componentload = false;
            },3000);
        },
        savePoster(){
            this.imgShow = true;
            var poster = document.getElementById("poster");
            var dataURL = poster.toDataURL('image/png');
            this.imgUrl = dataURL;
            if(this.imgUrl != ''){
                setTimeout(() =>{
                    this.showUpload = false;
                },1000)
            }
        },
        // 先判断是否有二维码
        handleJundgeQrCode(){
            let url = '/customer/getQrcode';
            let params = {};
            axiosPost(url,params).then(res =>{
                if(res.data.success){
                    if(res.data.data === null){
                        let url = '/customer/downloadQrcode';
                        let params = {
                            code: this.$store.state.wechat.promotioncode
                        };
                        axiosPost(url,params).then(res =>{
                            if(res.data.success){
                                this.qrcode = res.data.data;
                                setTimeout(() =>{
                                    this.componentload = false;
                                },1000);
                                this.handlePoster();
                            }else{
                                this.$toast('二维码请求失败');
                            }
                        })
                    }else{
                        this.qrcode = res.data.data;
                        this.handlePoster();
                    }
                }else{
                }
            }).catch(res =>{
            })
        },
        // 隐私设置
        handlePrivacySettings(){
            this.$dialog.confirm({
                title: '提示',
                message: '确定要开启隐私设置吗？开启后将在海报中隐藏您的微信头像、昵称和推荐码等信息',
                confirmButtonText:'开启',
                cancelButtonText: '关闭',
            })
            .then(() => {
                // console.log('开启');   
               
             this.handlePosterWithoutDetail();
               
            }).catch(() => {
                // console.log('关闭');
                 this.handlePoster();
                //   console.log("catchs")
            });
        },
        shareApp(){
            let share={}
            share.info={
                id:"",
                name:"",
                head_image:"",
                introduce:""
            }
        }

    },
    created () {
        this.random=this.$route.query.num
        this.tip=this.$route.query.title
    },
    mounted(){
        this.handleJundgeQrCode();
        //  this.handlechangeRandom();
    }
}
</script>

<style lang="less">
   #page-poster{
       position: relative;
       width: 100vw;
       padding-top: 100px;
       height: calc(100vh - 100px);
       background: #F2F2F2;
       .header-top {
            background:#ffa800 #ffa800;
        }
       .poster-canvas{
           width: 100%;
           height: 970px;
           #poster{
                transform: scale(0.6);
                margin-top: -20px;
            }   
       }
       .btn{
           width: 88vw;
           height: 100px;
           margin-left: auto;
           margin-right: auto;
           font-size: 28px;
           margin-top: -50px;
           display: flex;
            display: -webkit-flex;
            justify-content: space-between;
            -webkit-justify-content: space-between;
           .change{
               width: 40%;
               height: 100%;
               background-image: linear-gradient(180deg, #f7cf6c 0%, #ffa800 100%), linear-gradient(#2942ff, #2942ff);
        background-blend-mode: normal,normal;
               color: #ffffff;
               border-radius: 20px;
           }
           .rightnow{
               width: 40%;
               height: 100%;
               margin-left: 5%;
                background-image: linear-gradient(180deg, #f7cf6c 0%, #ffa800 100%), linear-gradient(#2942ff, #2942ff);
        background-blend-mode: normal,normal;
                color: #ffffff;
                border-radius: 20px;
            }
       }
       .share {
                .shareBtn {
                    margin:100px 0px 50px 100px;
                    width:100px;
                    text-align: center;
                }
                ul{
                    padding-top:50px;
                    display: flex;
                    justify-content: space-between;
                    box-sizing: border-box;
                    >li {
                        width:50%;
                        box-sizing: border-box;
                        text-align: center;
                        >p {
                            &:nth-of-type(2){
                                // color:#fff;
                                padding:20px;
                            }
                        }
                    }
                }
                .button {
                    padding:20px 30px;

                }
              
            }
       .load{
           width: 100vw;
           height: 100vh;
           position: fixed;
           top: 0;
           left: 0;
           z-index: 2;
           background: rgba(0, 0, 0, 0.5);
           .loading{
               width: 100vw;
               height: 100px;
           }
           .title{
               width: 100vw;
               height: 80px;
               font-size: 28px;
               color: #ffffff;
           }
           .imgs{
               width: 100vw;
               height: 100vh;
               background: rgba(0, 0, 0, 0.8);
               .savePoster{
                   width: 100vw;
                   height: auto;
                   margin: 100px auto auto auto;
                   >img{
                       width: 450px;
                       height: 800.4px;
                   }
               }
               .success{
                   width: 100vw;
                   height: 100px;
                   color: #ffffff;
                   font-size: 28px;
                  
                     
               }
           }
       }
        >.cover {
            z-index:1000;
            background-color: rgba(0, 0, 0, 0.1);
            position: fixed;
            top:0px;
            bottom:0px;
            left:0px;
            right:0px;
            >div{
                position: fixed;
                bottom:0;
                left:0px;
                right:0px;
                padding:15px;
                >ul{
                    background-color: #fff;
                    border-radius:20px;
                    display: flex;
                    margin-bottom: 15px;
                    >li {
                        width:20%;
                        text-align: center;
                        >p {
                            &:nth-of-type(2){
                                padding-top:10px;
                                padding-bottom: 10px;
                            }
                            &:nth-of-type(1){
                                font-size: 40px;
                            }
                        }
                    }
                }
               
                >.cancle {
                    //  margin:10px;
                     .van-button--default{
                        background-color: #fff;
                        color:#000;
                        margin-bottom:40px;
                        border-radius: 15px;
                  }
                }
            }
        }
         .van-dialog .van-button {
                /* border: 0; */
                border: 1px solid #ffa800;
            }
   }
</style>
