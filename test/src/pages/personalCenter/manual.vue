<template>
    <div id="manual">
        <!-- 平台手册 -->
        <div v-if="info == 'pingtaishouce'">
            <header class="header-top row">
                <div class="left-icon start-center" @click="handleReturnHome"><van-icon color="white" size="20px" name="arrow-left"/></div>
                <div class="top-title center">平台手册</div>
                <div class="right-icon varify center"></div>
            </header>
            <div class="big-title">概述-——首页简介</div>
            
            <div class="small-title">
                （1）侧边栏：点击可完善个人资料，展示个人信息</br>
                （2）特色功能区：此版块包括平台特色功能，用户可在此版块进行征信查询、收益明细、升级等通道</br>
                （3）金融通道：平台与银行合作的功能区，用户可在此申请办理信用卡、精养代还、空卡代还等功能</br>
                （4）精品功能：平台的精品功能区，可在此办理保险、在线贷款等业务</br>
                （5）底部栏：可快速进入相应的功能页面</br>
            </div>

            <div class="big-title">升级</div>
            <div class="small-title">
                会员升级区：用户可在此页面根据自身需求选择需要升级的会员身份
            </div>

            <div class="big-title">个人中心</div>
            <div class="small-title">
                （1）个人信息区：显示个人资料。并在此修改个人资料</br>
                （2）重要功能区：用户可在此进行账户管理、生成推广海报、查看上级推荐人、积分抽奖、查看业绩排行榜、邀请好友的功能</br>
                （3） 实用工具区：用户可在此功能区查看流程说明、退款说明及使用手册</br>
            </div>

            <div class="big-title">金融圈</div>
            <div class="small-title">
                金融圈：用户在此功能区查看附近的行业精英，人脉转换为财脉。</br>
            </div>

            <div class="big-title">分享</div>
            <div class="small-title">
            （1）推广信息展示：此版块显示您的推广锁粉等粉丝信息</br>
            （2）推广信息展示：此版块为营销工具促进会员推广效率，降低营销成本</br>
            </div>

            <div class="big-title">首页</div>
            <div class="small-title">
                <div class="per-bold-content"><span class="bold-title">收益明细：</span>在平台首页特色功能区点击（收支明细）进入详情页面，可在此页面查看你的收益信息</br></div>
                <div class="per-bold-content"><span class="bold-title">我的消息：</span>在平台首页特色功能区点击（消息）进入详情页面，可查看系统公告及佣金信息等推送消息</br></div>
                <div class="per-bold-content"><span class="bold-title">征信查询：</span>在平台首页特色功能区点击（征信查询）进入详情页面，可在此页面查询大数据+运营商信用报告</br></div>
                <div class="per-bold-content"><span class="bold-title">信用卡办理：</span>在平台首页金融功能区点击（信用卡办理）进入详情页面，可在此页面申请办理信用卡</br></div>
                <div class="per-bold-content"><span class="bold-title">商户收款：</span>在平台首页金融通道功能区点击（商户收款）进入详情页面，可在此页面查看费率、交易记录等</br></div>
                <div class="per-bold-content"><span class="bold-title">我要贷款：</span>在平台首页金融通道功能区点击（我要贷款）进入详情页面，可在此页面贷款</br></div>
                <div class="per-bold-content"><span class="bold-title">信用卡管家：</span>在平台首页金融通道功能区点击（信用卡管家）进入详情页面，可在此页面设定您的还款计划</br></div>

                <div class="per-bold-content"><span class="bold-title">授权分润：</span>在平台首页精品功能区点击（授权分润）进入详情页面，可在此页面给实习会员设置分润</br></div>
                <div class="per-bold-content"><span class="bold-title">汽车保险：</span>在平台首页精品功能区点击（汽车保险）进入详情页面，可在此页面办理汽车保险</br></div>
                <div class="per-bold-content"><span class="bold-title">发圈素材：</span>在平台首页精品功能区点击（发圈素材）进入详情页面，可在此页面获取素材发朋友圈获得奖金</br></div>
                <div class="per-bold-content"><span class="bold-title">排行榜：</span>在平台首页精品功能区点击（排行榜）进入详情页面，可在此页面进行业务排名查看</br></div>
                <div class="per-bold-content"><span class="bold-title">意外险：</span>在平台首页精品功能区点击（意外险）进入详情页面，可在此页面在线办理意外险</br></div>
                <div class="per-bold-content"><span class="bold-title">提额秘籍：</span>在平台首页精品功能区点击（提额秘籍）进入详情页面，可在此页面查看信用卡提额攻略</br></div>
                <div class="per-bold-content"><span class="bold-title">共享奖金池：</span>在平台首页精品功能区点击（共享奖金池）进入详情页面，可在此页面参与奖金池奖励分配</br></div>
                <div class="per-bold-content"><span class="bold-title">积分兑换：</span>在平台首页精品功能区点击（积分兑换）进入详情页面，可在此页面进行积分兑换</br></div>
                <div class="per-bold-content"><span class="bold-title">商城：</span>在平台首页精品功能区点击（商城）进入详情页面，可在此页面进行商品上传</br></div>
                <div class="per-bold-content"><span class="bold-title">违章查询：</span>在平台首页精品功能区点击（违章查询）进入详情页面，可在此页面查询车辆违章信息</br></div>
            </div>

            <div class="big-title">个人中心</div>
            <div class="small-title">
                <div class="per-bold-content"><span class="bold-title">个人中心：</span>点击平台底部栏（个人中心）图标进入个人中心版块，此版块包含团队管理及收益、推广等功能</br></div>
                <div class="per-bold-content"><span class="bold-title">个人设置：</span>在个人信息区点击（头像）进入个人资料设置页面，在此页面修改资料及信息等</br></div>
                <div class="per-bold-content"><span class="bold-title">积分：</span>在个人中心点击（积分）进入详情页，查看个人积分情况</br></div>
                <div class="per-bold-content"><span class="bold-title">可结算：</span>在个人中心点击（可结算）进入详情页，查看个人可结算余额</br></div>
                <div class="per-bold-content"><span class="bold-title">总收益：</span>在个人中心点击（总收益）进入详情页，查看个人总收益</br></div>
                <div class="per-bold-content"><span class="bold-title">账户管理：</span>在特约服务区点击（账户管理）进入个人账户管理页面，在此页面查看账单、提现等</br></div>
                <div class="per-bold-content"><span class="bold-title">上级推荐人：</span>在个人中心特约服务区点击（上级推荐人）进入详情页面，查看并与您的上级推荐人进行沟通</br></div>
                <div class="per-bold-content"><span class="bold-title">微名片：</span>在个人中心特约服务区点击（微名片）进入详情页面，进行名片分享</br></div>
                <div class="per-bold-content"><span class="bold-title">营销课堂：</span>在个人中心特约服务区点击（营销课堂）进入详情页面，在此页面你可学习充电，更早走向金融大咖</br></div>
                <div class="per-bold-content"><span class="bold-title">商务合作：</span>在个人中心特约服务区点击（商务合作）进入详情页面，如果你想对我们的渠道资源或是您有好的资源渠道，请留下您的联系方式，我们会尽快与您联系</br></div>
                <div class="per-bold-content"><span class="bold-title">共享佣金池：</span>在个人中心特约服务区点击（共享佣金池）进入详情页面，查看奖金池奖金额度，分配</br></div>
                <div class="per-bold-content"><span class="bold-title">VIP视频：</span>在个人中心实时工具区点击（VIP视频），可观看VIP专属视频福利</br></div>
                <div class="per-bold-content"><span class="bold-title">流程说明：</span>在个人中心实时工具区点击（流程说明）进入详情页面，在此页面您可查看平台业务操作流程</br></div>
                <div class="per-bold-content"><span class="bold-title">平台手册：</span>在个人中心实时工具区点击（平台手册）进入详情页面，在此页面您可查看平台业务板块说明</br></div>
                <div class="per-bold-content"><span class="bold-title">百问百答：</span>在个人中心实时工具区点击（百问百答）进入详情页面，在此页面可为您答疑解惑</br></div>
                <div class="per-bold-content"><span class="bold-title">退换说明：</span>在个人中心实时工具区点击（退换说明）查看平台保证金退还机制，保障自身权益</br></div>
                <div class="per-bold-content"><span class="bold-title">名片夹：</span>在个人中心实时工具区点击（名片夹）进入详情页面，在此页面查看收藏的名片</br></div>
                <div class="per-bold-content"><span class="bold-title">金融圈：</span>在平台底部栏点击（金融圈）进入进入广告页面，在此页面您可添加同行精英合作共赢</br></div>
            </div>

            <div class="big-title">分享</div>
            <div class="small-title">
                <div class="per-bold-content"><span class="bold-title">分享：</span>点平台底部栏（分享）图标进入分享模块，用户可在此版块邀请好友，生成海报等</br></div>
                <div class="per-bold-content"><span class="bold-title">新闻资讯：</span>在分享页面中点击（新闻资讯）详情页面，可在文章中植入广告用以锁粉</br></div>
                <div class="per-bold-content"><span class="bold-title">推广海报圈：</span>在分享页面点击（推广海报图）进入详情页面，用户可在此生成专属推广海报</br></div>
                <div class="per-bold-content"><span class="bold-title">邀请好友：</span>在分享页面点击（邀请好友）进入详情页面，用户可在此邀请好友</br></div>
                <div class="per-bold-content"><span class="bold-title">蜂行卡包视频：</span>在分享页面点击（蜂行卡包视频）进入详情页面，用户可在此分享蜂行卡包视频</br></div>
                <div class="per-bold-content"><span class="bold-title">名片推广：</span>在分享页面点击（名片推广）进入详情页面，分享名片，快速增粉</br></div>
                <div class="per-bold-content"><span class="bold-title">生成短链接：</span>在分享页面点击（生成短链接）进入详情页面，用户可在此快速生成短链接分享链接锁粉</br></div>
                <div class="per-bold-content"><span class="bold-title">链接转化二维码：</span>在分享页面点击（链接转化二维码）进入详情页面，用户可再次快速生成二维码分享锁粉</br></div>
                <div class="per-bold-content"><span class="bold-title">分享链接：</span>在分享页面点击（分享链接）进入详情页面，用户在此生链接分享给客户引流锁粉</br></div>
                <div class="per-bold-content"><span class="bold-title">信用卡链接：</span>在分享页面点击（信用卡链接）进入详情页面，在此生成信用卡链接分享带锁粉功能</br></div>
                <div class="per-bold-content"><span class="bold-title">分享链接：</span>在分享页面点击（分享链接）进入详情页面，在此生成分享蜂行卡包链接</br></div>
                <div class="per-bold-content"><span class="bold-title">推广素材图：</span>在分享页面点击（推广素材图）进入详情页面，在此可下载各种视频和图片进行推广</br></div>
                <div class="per-bold-content"><span class="bold-title">信用卡推广图：</span>在分享页面点击（信用卡推广图）进入详情页面，生成信用卡推广图，一件锁粉</br></div>
                <div class="per-bold-content"><div class="per-bold-content"><span class="bold-title">物资下载：</span>在分享页面点击（物资下载）进入详情页面，用户可在此下载宣传物料制作易拉宝、海报等</br></div></div>
            </div>
        </div>
        <!-- 购买问题-->
        <div v-if="info == 'goumaiwenti'">
            <header class="header-top row">
                <div class="left-icon start-center" @click="handleReturnHome"><van-icon color="white" size="20px" name="arrow-left"/></div>
                <div class="top-title center">购买问题</div>
                <div class="right-icon varify center"></div>
            </header>
            <div class="big-title">关于购买</div>
            
            <div class="small-title">
                1.会员升级</br>
                目前的个人会员等级分为免费粉丝、黄金会员、钻石会员、用户可在个人中心里选择你想要升级你的会员等级，更高级别等级或者寻求合作请直接电话联系我们。欢迎您的来电。</br></br>
                2.APP中会员可通过哪些方式购买</br>
                可通过微信支付，支付宝支付等方式进行会员升级</br></br>
                3.升级会员等级后，可否退换？</br>
                APP中升级会员等级后，不可进行退换，辛苦各位在升级之前清楚会员权益及说明，以便后续顺利使用。如果有遇到特殊异常问题请不要紧张，我们会第一时间为您提供帮助。
            </div>
        </div>

        <!-- 流程说明 -->
        <div v-if="info == 'liuchengshuoming'">
            <header class="header-top row">
                <div class="left-icon start-center" @click="handleReturnHome"><van-icon color="white" size="20px" name="arrow-left"/></div>
                <div class="top-title center">流程说明</div>
                <div class="right-icon varify center"></div>
            </header>
            <div class="big-title">信用卡办理步骤：</div>
            
            <div class="small-title">
                1.进入APP首页，点击信用卡办理。</br>
                2.进入信用卡办理后，选中信用卡点免费办卡，</br>
                3.跳转至办卡中心，填写您的基本资料，点击下一步。</br>
                5.选择您所需要的卡片类型，填写基本资料，获取短信验证码，点击下一步</br>
                6.跳转提示页面，阅读并点击本人同意并确认。</br>
                7.填写详细信息点击下一步</br>
                8.确认申请后即可进入官方申请信用卡。</br>
            </div>

            <div class="big-title">商户收款操作流程：</div>
            <div class="small-title">
                1.进入APP首页，点击商户收款。</br>
                2.进入商户收款页面后，点击商户收款图标，设置金额不能低于500元，绑定到账储蓄卡和信用卡</br>
                3.当没有绑定信用卡时需先绑定信用卡，绑定后选择支付即可。</br>
                4.如果绑定一张或多张信用卡直接选择支付即可</br>
            </div>

            <div class="big-title">贷款操作流程</div>
            <div class="small-title">
                1.进入APP首页，点击我要贷款。</br>
                2.进入贷款详情页面，点击立即申请</br>
                3.选择或添加申请人信息，阅读并同意《服务协议》，点击确认。</br>
                4.确认信息无误后，等待贷款平台审核。</br>
            </div>

            <div class="big-title">信用卡管家操作流程</div>
            <div class="small-title">
                1.进入APP首页，点击信用卡管家</br>
                2.绑定信用卡</br>
                3.选择还款模式</br>
                4.创建还款计划</br>
            </div>
        </div>

        <!-- 推广问题 -->
        <div v-if="info == 'tuiguangwenti'">
            <header class="header-top row">
                <div class="left-icon start-center" @click="handleReturnHome"><van-icon color="white" size="20px" name="arrow-left"/></div>
                <div class="top-title center">推广问题</div>
                <div class="right-icon varify center"></div>
            </header>
            <div class="big-title">欢迎每位家人的推广</div>
            
            <div class="small-title">
                可在首页底部栏中点分享按钮，跳转至分享页面，生成专属特色海报进行APP推广。
                里会提供专业的营销课堂，有详细的文章内容供大家参考。
            </div>
        </div>

        <!-- 佣金问题 -->
        <div v-if="info == 'yongjinwenti'">
            <header class="header-top row">
                <div class="left-icon start-center" @click="handleReturnHome"><van-icon color="white" size="20px" name="arrow-left"/></div>
                <div class="top-title center">佣金问题</div>
                <div class="right-icon varify center"></div>
            </header>
            <div class="big-title">佣金问题</div>
            
            <div class="small-title">
                1.中所有会员使用的功能产生的费用、分润比例都是统一固定的。<br>
                2.佣金金额超过100元即可提现，到账时间1~2天
            </div>
        </div>
        <!-- 收款问题 -->
        <div v-if="info == 'shoukuanwenti'">
            <header class="header-top row">
                <div class="left-icon start-center" @click="handleReturnHome"><van-icon color="white" size="20px" name="arrow-left"/></div>
                <div class="top-title center">收款问题</div>
                <div class="right-icon varify center"></div>
            </header>
            <div class="big-title">收款问题</div>
            
            <div class="small-title">
                1.商户申请具体步骤可在操作说明查看到具体的操作流程<br>
                2.填写信息时需要特别注意一下几个问题；<br>
                （1）填写手机号要输入银行预留的手机号码<br>
                （2）填写结算户名要与真实姓名一致<br>
                （3）确认所有填写信息的真实性<br>
            </div>
        </div>

        <!-- 提出问题 -->
        <div v-if="info == 'tichuwenti'">
            <header class="header-top row">
                <div class="left-icon start-center" @click="handleReturnHome"><van-icon color="white" size="20px" name="arrow-left"/></div>
                <div class="top-title center">提出问题</div>
                <div class="right-icon varify center"></div>
            </header>
            <div class="big-title">提出问题</div>
            
            <div class="small-title">
                APP处在“小步快跑、快速迭代”的阶段，确实存在一些不完美体验。感谢你为提出建议，与一起成长。<br>
                对于已有功能的优化建议<br>
                在使用APP的过程中，如果觉得哪里不好用，或者觉得在目前的基础上还可以进一步优化。在哪个步骤或页面，觉得我们还有改进的空间。、欢迎你提出建议，我们会结合你提出的使用体验，和产品人员反馈，综合考虑大家的使用需求。<br>
                对于新功能的期待<br>
                随着时间的推移，大家可能希望APP具备更多的功能，使用更加顺畅。<br>
                APP每迭代一个新功能，都需要产品人员、美观设计人员、技术人员做出许多调整。<br>
                为了让未来的迭代更适应大家的需求，也欢迎你提出，你希望未来有哪些功能，以及为什么需要这个功能。<br>
                我们会统计给产品人员，结合大家的需求，及实现的可能性，对未来产品的不断优化。<br>
                提前感谢愿意支持的用户，对于大家提出的建议，我们保持重视。<br>
                APP在大家的监督和提醒下，一点点优化。再次感谢大家的支持！<br>
            </div>
        </div>

        <!-- 反馈bug -->
        <div v-if="info == 'fankuibug'">
            <header class="header-top row">
                <div class="left-icon start-center" @click="handleReturnHome"><van-icon color="white" size="20px" name="arrow-left"/></div>
                <div class="top-title center">反馈bug</div>
                <div class="right-icon varify center"></div>
            </header>
            <div class="big-title">反馈bug</div>
            
            <div class="small-title">
                感谢你愿意使用APP，并将使用中遇到的BUG问题反馈给我们。<br>
                反馈渠道<br>
                辛苦确认你遇到的异常情况，并保留相关截图，我们好尽快定位并解决问题。<br>
                对于文字难以表述的情况，可关注微信公众号〖上海传帮带〗，提供｛异常截图+手机号+用户昵称｝并说明情况，或者直接电联，工作人员会尽快反馈给技术人员处理，谢谢你的支持 
                感谢<br>
                提前感谢愿意支持的用户，对于大家提出的建议，我们保持重视。<br>
                APP在大家的监督和提醒下，一点点优化。再次感谢大家的支持！<br>
            </div>
        </div>

        <!-- shengji -->
        <div v-if="info == 'shengji'">
            <header class="header-top row">
                <div class="left-icon start-center" @click="handleReturnHome"><van-icon color="white" size="20px" name="arrow-left"/></div>
                <div class="top-title center">升级问题</div>
                <div class="right-icon varify center"></div>
            </header>
            <div class="big-title">升级问题</div>
            
            <div class="small-title">
                目前处于公测阶段，如果升级更新，是正常情况，APP升级之后，所有数据都可保留，请放心使用，后期上新
            如有显示登录错误，请从新登录即可；点击侧边栏左上角-退出登录，在退出页面后，重新输入登录账号和密码即可。
            </div>
        </div>

        <!-- 官方说明 -->
        <div v-if="info == 'shuoming'">
            <header class="header-top row">
                <div class="left-icon start-center" @click="handleReturnHome"><van-icon color="white" size="20px" name="arrow-left"/></div>
                <div class="top-title center">官方说明</div>
                <div class="right-icon varify center"></div>
            </header>
            <div class="big-title">官方说明</div>
            
            <div class="small-title">
                欢迎你使用为了保证你的合法权益不受到侵害，请仔细阅读以下的全部内容，自觉使用正版服务，保障自己的利益。<br>
                1.官方及工作人员不会私下要求一对一转账，不会收取任何个人服务费用，一切收费服务请以上述官方平台为准；<br>
                2.APP提供的服务中包含的标识、版面设计、文本、图片等均受著作权、商标权及相关法律保护。<br>
                3.未经APP原始权利人同意，上述内容在任何平台被直接或间接发布，使用、出于发布或使用目的的改写或再发行，或被用于其他任何商业目的，均视为侵权行为。<br>
                4.一经发现，APP将开展维权活动，通过举报侵权，发送律师函、民事诉讼、刑事控告等途径依法追究法律责任。<br>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            info: '1',
        }
    },
    methods:{
        handleReturnHome() {
            this.$router.go(-1);
        },
    },
    created(){
        console.log('测试赛',this.$route.query.info);
        this.info = this.$route.query.info;
    }
}
</script>
<style lang="less" scoped>
    #manual{
        width: 100vw;
        height: auto;
        padding-top: 90px;
        padding-bottom: 50px;
        .header-top {
            background-image: linear-gradient(156deg, #f7cf6c 0%, #fbbc36 0%, #ffa800 100%), linear-gradient(#0000ff, #0000ff);
	        background-blend-mode: normal, normal;
        }
        .big-title{
            width: 95%;
            height: auto;
             margin-left: auto;
            margin-right: auto;
            margin-top: 50px;
            font-size: 34px;
            font-weight: bold;
        }
        .small-title{
            width: 94%;
            height: auto;
            margin-left: auto;
            margin-right: auto;
            margin-top: 20px;
            font-size: 28px;
            line-height: 40px;
            letter-spacing: 3px;
            .per-bold-content{
                margin-top: 20px;
                .bold-title{
                    font-weight: bold;
                }
            }
            
        }
        .content{
            width: 92%;
            height: auto;
            margin-left: auto;
            margin-right: auto;
            margin-top: 20px;
            font-size: 26px;
            text-align: justify;
        }
    }
</style>
