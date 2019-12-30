<template>
    <transition name="van-fade">
        <div id="loading-components" class="center" v-if="componentload">
            <div class="column">
                <div class="load center"><van-loading color="white" size="50px" /></div>
                <div class="moneybay center">金蜜蜂</div>
            </div>
        </div>    
    </transition>
</template>
<script>
export default {
    data(){
        return{
        }
    },
    props:{
        componentload:{
            type: Boolean,
            default: true
        }
    }
}
</script>
<style lang="less">
    #loading-components{
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999999;
        background: rgba(0, 0, 0, 0.5);
        .load{
            width: 100vw;
        }
        .moneybay{
            width: 100vw;
            height: 50px;
            font-size: 30px;
            color: #ffffff;
            letter-spacing: 5px;
        }
    }
</style>
