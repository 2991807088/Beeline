<template>
    <div id="andLink">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>{{title}}</span>
            <span></span>
        </header>
       
         <iframe class="iframe"  :src="url" frameborder="0" target="_self"></iframe>
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
            this.$router.go(-1);
        },
       
        webview(){
            if(window.plus){  
                 var yinlian= plus.webview.create(this.url, "yinlian",{
                     width:"100%",
                     top:"40px",
                     left:"0px",
                     right:"0px",
                      bottom:"10px",
                  });  
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
        },
    },
    created(){
        this.url=this.$route.query.info;
        this.title=this.$route.query.title;
        // this.webview();
    },
    mounted () {
       
    }
}
</script>

<style lang="less">
   #andLink{
       height: 100%;
       >header {
            background-color: #ffa800;
           width:100%;
           height: 86px;
           line-height: 86px;
           padding-top:10px;
           color:#fff;
           z-index:999;
           font-size:34px;
           display: flex;
           position: fixed;
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
        .iframe{
            width:100%;
            height: 100% !important;
                 }
   }
</style>
