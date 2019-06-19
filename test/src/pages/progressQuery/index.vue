<template>
    <div id="progress-query">
        <header class="header-top row">
            <div class="left-icon start-center" @click="goBack"><van-icon color="white" size="20px" name="arrow-left"/></div>
            <div class="top-title center">{{title}}</div>
            <div class="right-icon center"></div>
        </header>
        <iframe class="iframe"  :src="url" frameborder="0" target="_self"></iframe>
         <!-- <div class="container">
            <div class="box" >　
            　  <iframe class="iframe"  :src="url" frameborder="0" target="_self"></iframe>
            </div>
        </div> -->
    </div>

</template>
 

<script>
export default {
    data() {
        return {
            url:"",
            title:"",
             type: null
        }
    },
    methods:{
        goBack() {
            // plus.webview.close( "yinlian")
            this.$router.push("/home")
        },
       
        webview(){
            if(window.plus){  
             var yinlian= plus.webview.create(this.url, "yinlian");  
               yinlian.setStyle({
                   width:"100%",
                   top:"40px",
                   left:"0px",
                  right:"0px",
                  bottom:"10px",
                  scalable: true,
                  margin:"auto",
               })
                yinlian.show()
            }else{  
                document.addEventListener('plusready',function () {  
                         var yinlian= plus.webview.create(this.url, "yinlian");  
                            yinlian.setStyle({
                                width:"100%",
                                top:"40px",
                                left:"0px",
                                right:"0px",
                                margin:"auto",
                        })
                            yinlian.show()
                },false);  
            }  
        }
    },
    mounted () {

    },
    
    created(){
        this.url=this.$route.query.info
         this.title=this.$route.query.title
        //  this.webview();
        //   var u = navigator.userAgent;
        // var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
        // if(isAndroid){
        // 　　this.type = true
        // }else{
        // 　　this.type = false
        // }
    }
}
</script>

<style lang="less">
   #progress-query{
       header {
            background-image: linear-gradient(180deg, #f7cf6c 0%, #ffa800 100%), linear-gradient(#2942ff, #2942ff);
        background-blend-mode: normal,normal;
       }
        .iframe{
            // width:1px;
            // min-width: 100%;
            // *width:100%;
            width:100%;
            height: 100% !important;
            }
      
        //    .box {
        //         overflow: auto;
        //         -webkit-overflow-scrolling:touch;
        //         width:100%;
        //         height: 100%;
        //         
        //    }
         
      

    
   }
</style>
