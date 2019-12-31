<template>
    <div id="footer-com">
         <footer class="foot">
            <van-tabbar v-model="nowactive" active-color="#fdba38" >
                    <van-tabbar-item  to="/home" >
                        <span>首页</span>
                        <img
                        slot="icon"
                        slot-scope="props"
                        :src="props.active ? icon.active : icon.normal"
                        >
                    </van-tabbar-item>
                    <!-- <van-tabbar-item  to="/share">
                        <span>卡包</span>
                        <img
                        slot="icon"
                        slot-scope="props"
                        :src="props.active ? icon.shareActive : icon.shareNomal"
                        >
                    </van-tabbar-item> -->
                   
                    <van-tabbar-item to="/vip" >
                        <span>VIP</span>
                        <img
                        slot="icon"
                        slot-scope="props"
                        :src="props.active ? icon.vipActive : icon.vipNomal"
                        >
                    </van-tabbar-item>

                   <van-tabbar-item to="/personalCenter" >
                         <span>我的</span>
                        <img
                        slot="icon"
                        slot-scope="props"
                        :src="props.active ? icon.personActive : icon.personNomal"
                        >
                    </van-tabbar-item>

                    <van-tabbar-item  to="/financialCircle">
                        <span>AI雷达</span>
                        <img
                        slot="icon"
                        slot-scope="props"
                        :src="props.active ? icon.circleActive : icon.circleNomal"
                        > 
                    </van-tabbar-item>
            </van-tabbar>




        </footer>
    </div>
</template>
<script>
export default {
    data(){
        return{
            nowactive: this.active ,
             icon: {
                normal: 'http://fx.91dianji.com.cn/fengxing_home.png',
                active: 'http://fx.91dianji.com.cn/fengxing_home_active.png',
                vipActive:'http://fx.91dianji.com.cn/fengxing_vips_active.png',
                vipNomal:'http://fx.91dianji.com.cn/fengxing_vips.png',
                personActive:'http://fx.91dianji.com.cn/fengxing_personal_active.png',
                personNomal:'http://fx.91dianji.com.cn/fengxing_personal.png',
                 shareActive:'http://fx.91dianji.com.cn/fengxing_cardCenter_active.png',
                shareNomal:'http://fx.91dianji.com.cn/fengxing_cardCenter.png',
                circleActive:'http://fx.91dianji.com.cn/fengxing_radar_active.png',
                circleNomal:'http://fx.91dianji.com.cn/fengxing_radar.png',
            }
        }
    },
    props:{
        active: {
            type: Number,
            default: 0
        }
    },
    methods:{
        handleChange(){
            this.$emit('getChange',this.nowactive);
        }
    }
}
</script>
<style lang="less">
    #footer-com{
        .foot{
            z-index:99;
            background: #cccccc;
        }
        .van-tabbar {
            height: 100px;
            background: #f2f2f2;
        }
        .van-tabbar-item{
            font-size: 22px;
        }
         .van-tabbar-item__icon{
            font-size: 44px  !important;
            margin-bottom: 14px !important;
        }
        .van-tabbar-item__icon img {
            height: 40px;
        }
        
    }
</style>
