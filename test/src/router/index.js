import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import homeComponent from '@/pages/home'
import cardCenterComponent from '@/pages/cardCenter'
import clearCacheComponent from '@/pages/clearCache'
import businessCooperationComponent from '@/pages/businessCooperation'
import bindingPhoneComponent from '@/pages/bindingPhone'
import customerServiceComponent from '@/pages/customerService'
import aboutUsComponent from '@/pages/aboutUs'
import accountManagementComponent from '@/pages/accountManagement'
import loginComponent from '@/pages/login'
import newsComponent from '@/pages/news'
import addCardComponent from '@/pages/addCard'
import logOutComponent from '@/pages/logOut'
import insertEsiCashComponent from '@/pages/insertEsiCash'
import iframeComponent from '@/pages/insertEsiCash/iframe.vue'

import creditHousekeeperComponent from '@/pages/creditHousekeeper'
import aisleHousekeeperComponent from '@/pages/aisleHousekeeper'
import registerComponent from '@/pages/register'
import forgetPasswordComponent from '@/pages/forgetPassword'
import modifyLoginPasswordComponent from '@/pages/modifyLoginPassword'
import consultationComponent from '@/pages/consultation'
import noviceGuideComponent from '@/pages/noviceGuide'
import liftingAmountComponent from '@/pages/liftingAmount'
import myOrderComponent from '@/pages/myOrder'
import progressQueryComponent from '@/pages/progressQuery'
import receivablesComponent from '@/pages/receivables'
import transactionQueryComponent from '@/pages/transactionQuery'
import storageComponent from '@/pages/storage'
import passagewayComponent from '@/pages/passageway'
import reportExampleComponent from '@/pages/reportExample'
import rateComponent from '@/pages/rate'
import verifiedComponent from '@/pages/verified/index.vue'
import verifiedNameComponent from '@/pages/verifiedName/index.vue'
import creditDataQueryComponent from '@/pages/creditDataQuery'
import violationInquiryComponent from '@/pages/violationInquiry'
import addCarComponent from '@/pages/addCar'
import addSaveComponent from '@/pages/addSave'
import punchComponent from '@/pages/punch'
import totalPunchComponent from '@/pages/totalPunch'
import systemNewsComponent from '@/pages/systemNews'
import vipComponent from '@/pages/vip'
import personalCenterComponent from '@/pages/personalCenter'
import shareComponent from '@/pages/share'
import financialCircleComponent from '@/pages/financialCircle'
import realNameComponent from '@/pages/realName'
import creditEnquiryComponent from '@/pages/creditEnquiry'
import inviteShareComponent from '@/pages/inviteShare'
import repaymentChannelComponent from '@/pages/repaymentChannel'
import makePlanComponent from '@/pages/makePlan'
import planListComponent from '@/pages/planList'
import changeCardComponent from '@/pages/changeCard'
import recordsComponent from '@/pages/records'
import largeAmountComponent from '@/pages/largeAmount'  // 大额鉴权
import largeCardComponent from '@/pages/largeCard'
import downComponent from '@/pages/userAccountManage/down.vue' //下载


import largeZYComponent from '@/pages/largeZY'  //哲杨大额
import largeVerificateComponent from '@/pages/largeVerificate'  // 哲杨大额短信验证

import loan from '@/pages/loan'
import loandetail from '@/pages/loan/detail'
import form from '@/pages/loan/form'
// 账户管理
import userAccountManage from '@/pages/userAccountManage'
// 收益明细
import income from '@/pages/userAccountManage/Income'
// 收入明细表
import incomedetail from "@/pages/userAccountManage/incomedetail"
// 下级收入明细
import personalIncomeDetail from '@/pages/userAccountManage/personalIncomeDetail'
// 积分明细
import integralDetail from '@/pages/userAccountManage/integralDetail'
import integralCash from '@/pages/userAccountManage/integralCash'
import addcard from '@/pages/userAccountManage/addcard'
// 添加支付宝账户
import alipay from '@/pages/userAccountManage/alipay'
// 添加银行卡
import UnionPay from "@/pages/userAccountManage/UnionPay"
// 2019年4月2日14:52:41
//提现
import cashComponent from '@/pages/userAccountManage/cash'
// 提现记录
import recordComponent from "@/pages/userAccountManage/record"
import posterComponent from '@/pages/poster'
import principleComponent from '@/pages/principle'
import dataComponent from '@/pages/data'
import businessCardComponent from '@/pages/businessCard'
import creditCardLinkComponent from '@/pages/creditCardLink'
import shareLinkComponent from '@/pages/shareLink'
import promotionMaterialComponent from '@/pages/promotionMaterial'
import corporateVideoComponent from '@/pages/corporateVideo'
import adsNewsComponent from '@/pages/adsNews'
import incomeBreakdownComponent from '@/pages/incomeBreakdown'
import andLinkComponent from '@/pages/andLink'
// 支付宝支付中间页
import middleAlipay from "@/pages/vip/middle"
import applyCardComponent from '@/pages/applyCard'
// 上级推荐人
import previousComponent from '@/pages/previous'
// 绑定信用卡
import bindingCreditCardComponent from '@/pages/bindingCreditCard'
// 付款
import repaymentComponent from '@/pages/repayment'
// 商户收款
import collectComponent from '@/pages/collect'
// 开通业务
import openComponent from '@/pages/open'
// 快捷支付
import paymentComponent from '@/pages/payment'
// 第三方跳转
import url from '@/pages/home/url'
// 计划详情
import planDetailComponent from '@/pages/planDetail'


// 百问百答
import Questionandanswers from '@/pages/personalCenter/Questionandanswers'
// 平台手册
import manual from '@/pages/personalCenter/manual'
// 商务合作
import cooperation from '@/pages/personalCenter/cooperation'
// 联系我们
import contactUs from '@/pages/personalCenter/contactUs'
// 我要贷款
import myloan from '@/pages/loan/myloan'
// 在线查询银联
import onlineComponent from '@/pages/online'
// 信用卡管家
import cardManager from '@/pages/progressQuery/cardManager'
// leida
import radar from '@/pages/financialCircle/radar'
// 卡测评
import Evaluation from '@/pages/home/Evaluation'
import help from '@/pages/help/index'
import myrate from '@/pages/personalCenter/rate'
// 信用卡推广图
import pictures from '@/pages/financialCircle/picture'
import activeComponent from '@/pages/active' // 大额激活
// AI雷达
import nextLevel from '@/pages/AIRadar/nextdetail'
import nextList from '@/pages/AIRadar/nextList'
import nextOtherList from '@/pages/AIRadar/nextOtherList'

import largeWFcardComponent from '@/pages/largeWFcard'  //WF大额绑卡
import largeWFverifyComponent from '@/pages/largeWFcard/verify'  //WF大额短信验证
import largeWFxeComponent from '@/pages/largeWFxe'  //WF小额绑卡
import largeWFxeverifyComponent from '@/pages/largeWFxe/verify'  //WF小额短信验证

const receiveXHComponent = () => import('@/pages/receiveXH')  // 收单小惠通道

const cardCXComponent = () => import('@/pages/receiveXH/cardCX.vue')  // 收单小惠通道储蓄卡管理

const payXHComponent = () => import('@/pages/receiveXH/payXH.vue')  // 收单小惠通道支付 

const signXHComponent = () => import('@/pages/receiveXH/signXH.vue')  // 收单小惠通道签约


const largeAmountHCComponent = () => import('@/pages/largeAmountHC')  //汇潮大额 注册商户

const sendmsgHCComponent = () => import('@/pages/largeAmountHC/sendmsgHC.vue')  //汇潮大额 发送短信

const uploadmsgComponent = () => import('@/pages/largeAmountHC/uploadmsg.vue')  //汇潮大额 短信验证

const cancelCard = () =>import('@/pages/aisleHousekeeper/cancelCard')

const smallAmountSCComponent = () => import('@/pages/smallAmountSC')  // sc小额

const smallSCactiveComponent = () => import('@/pages/smallAmountSC/smallSCactive.vue')  // sc小额

const largeAmountSCComponent = () => import('@/pages/largeAmountSC')  //SC大额通道 注册商户 

const sendmsgSCComponent = () => import('@/pages/largeAmountSC/sendmsgSC.vue')  //汇潮大额 发送短信

import changeBillComponent from '@/pages/changeBill'  // 换信用卡信息  


export default new Router({
  mode:"hash",
  routes: [
    { path: '/',redirect:'/home'},
    {path:"/vip",component:vipComponent},
    {path:"/home",component:homeComponent},
    {path:"/login",component:loginComponent},
    {path:"/logOut",component:logOutComponent},  
    {path:"/register",component:registerComponent},
    {path:"/home/collect",component:collectComponent},
    {path:"/home/online",component:onlineComponent},
    {path:"/home/collect/open",component:openComponent},
    {path:"/home/collect/payment",component:paymentComponent},
    {path:"/forgetPassword",component:forgetPasswordComponent},
    {path:"/home/punch",component:punchComponent},
    {path:"/home/punch/planDetail",component:planDetailComponent},
    {path:"/home/news",component:newsComponent},
    {path:"/home/addCard",component:addCardComponent},
    {path:"/home/andLink",component:andLinkComponent}, // 安卓跳转第三方
    {path:"/home/cardCenter/applyCard",component:applyCardComponent,},
    {path:"/home/creditHousekeeper/aisleHousekeeper/bindingCreditCard",component:bindingCreditCardComponent,},
    {path:"/home/creditHousekeeper/aisleHousekeeper/repayment",component:repaymentComponent},
    {path:"/home/creditHousekeeper/aisleHousekeeper/makePlan",component:makePlanComponent},
    {path:"/home/creditHousekeeper/aisleHousekeeper/planList",component:planListComponent},
    {path:"/home/largeAmountHC",component:largeAmountHCComponent},  //汇潮大额 注册商户  
    {path:"/home/largeAmountHC/sendmsgHC",component:sendmsgHCComponent},  //汇潮大额 发送短信 
    {path:"/home/largeAmountHC/uploadmsg",component:uploadmsgComponent},  //汇潮大额 短信验证
    {path:"/home/changeCard",component:changeCardComponent},
    {path:"/home/collect/payment/records",component:recordsComponent},
    {path:"/home/creditHousekeeper",component:creditHousekeeperComponent},
    {path:"/home/creditHousekeeper/aisleHousekeeper",component:aisleHousekeeperComponent},
    {path:"/home/insertEsiCash",component:insertEsiCashComponent}, //绑定第三方信用卡
    {path:"/home/insertEsiCash/iframe",component:iframeComponent}, //绑定第三方信用卡返回页面
    {path:"/home/largeAmount",component:largeAmountComponent}, // 大额鉴权
    {path:"/home/largeCard",component:largeCardComponent},
    {path:"/home/active",component:activeComponent}, // 大额激活

    {path:"/home/changeBill",component:changeBillComponent}, //更换账单 
 
    {path:"/home/smallAmountSC",component:smallAmountSCComponent},  //sc小额
    {path:"/home/smallSCactive",component:smallSCactiveComponent},  //sc小额
    {path:"/home/largeAmountSC",component:largeAmountSCComponent},  //SC大额通道 注册商户  
    {path:"/home/largeAmountSC/sendmsgSC",component:sendmsgSCComponent},  //汇潮大额 短信验证
    {path: '/cancelCard',component: cancelCard},

    {path:"/home/largeZY",component:largeZYComponent}, //哲杨发送短信  
    {path:"/home/largeVerificate",component:largeVerificateComponent}, //哲杨短信验证

    {path:"/home/largeWFcard",component:largeWFcardComponent}, //WF大额通道绑卡
    {path:"/home/largeWFcard/verify",component:largeWFverifyComponent}, //WF大额通道验证
    {path:"/home/largeWFxe",component:largeWFxeComponent}, //WF小额通道绑卡
    {path:"/home/largeWFxe/verify",component:largeWFxeverifyComponent}, //WF小额通道绑卡

    {path:"/home/receiveXH",component:receiveXHComponent},  //收单小惠通道  
    {path:"/home/receiveXH/cardCX",component:cardCXComponent},  //收单小惠通道储蓄卡管理 
    {path:"/home/receiveXH/payXH",component:payXHComponent},  //收单小惠通道支付
    {path:"/home/receiveXH/signXH",component:signXHComponent},  //收单小惠通道签约

    {path:"/share/inviteFriends/inviteShare",component:inviteShareComponent},
    {path:"/share/poster",component:posterComponent},
    {path:"/share/promotionMaterial",component:promotionMaterialComponent},
    {path:"/share/principle",component:principleComponent},
    {path:"/share/data",component:dataComponent},
    {path:"/home/creditHousekeeper/aisleHousekeeper/repaymentChannel",component:repaymentChannelComponent},
    {path:"/share/adsNews",component:adsNewsComponent},
    {path:"/share/businessCard",component:businessCardComponent},
    {path:"/share/creditCardLink",component:creditCardLinkComponent},
    {path:"/share/shareLink",component:shareLinkComponent},
    {path:"/share/corporateVideo",component:corporateVideoComponent},
    {path:"/home/incomeBreakdown",component:incomeBreakdownComponent},
    {path:"/home/clearCache",component:clearCacheComponent},
    {path:"/home/accountManagement", component:accountManagementComponent,},
    {path:"/home/accountManagement/modifyLoginPassword", component:modifyLoginPasswordComponent,},
    {path:"/home/bindingPhone", component:bindingPhoneComponent,},
    {path:"/home/totalPunch",component:totalPunchComponent},
    {path:"/home/violationInquiry",component:violationInquiryComponent},
    {path:"/home/violationInquiry/addCar",component:addCarComponent},
    {path:"/home/violationInquiry/addCar/addSave",component:addSaveComponent},
    {path:"/home/cardCenter",component:cardCenterComponent,},
    {path:"/home/creditEnquiry",component:creditEnquiryComponent,},
    {path:"/home/systemNews",component:systemNewsComponent,},
    {path:"/home/verified",component:verifiedComponent,},
    {path:"/home/verified/verifiedName",component:verifiedNameComponent,},
    {path:"/home/bindingPhone",component:bindingPhoneComponent,},
    {path:"/home/customerService",component:customerServiceComponent,},
    {path:"/home/aboutUs",component:aboutUsComponent,},
    {path:"/loan/form/myOrder",component:myOrderComponent,},
    {path:"/home/creditEnquiry/creditDataQuery",component:creditDataQueryComponent,},
    {path:"/home/creditEnquiry/reporyExample",component:reportExampleComponent,},
    {path:"/home/cardCenter/liftingAmount",component:liftingAmountComponent,},
    {path:"/home/cardCenter/progressQuery",component:progressQueryComponent,},
    {path:"/home/cardCenter/businessCooperation",component:businessCooperationComponent,},
    {path:"/home/cardCenter/noviceGuide",component:noviceGuideComponent,},
    {path:"/home/receivables",component:receivablesComponent,},
    {path:"/home/receivables/transactionQuery",component:transactionQueryComponent,},
    {path:"/home/receivables/rate",component:rateComponent,},
    {path:"/home/receivables/passageway",component:passagewayComponent,},
    {path:"/home/receivables/storage",component:storageComponent,},
    {path:"/home/cardCenter/consultation",component:consultationComponent,},
    {path:"/personalCenter",component:personalCenterComponent},
    {path:"/share",component:shareComponent},
    {path:"/financialCircle",component:financialCircleComponent},
    {path:"/vip/realName",component:realNameComponent},
    {path: '/home/loan', component: loan},
    {path: '/loan/detail',component: loandetail},
    {path: '/loan/form',component: form},
    {path: '/ponserCenter/userAccountManage',component: userAccountManage},
    {path: '/ponserCenter/userAccountManage/down',component: downComponent}, //下载

    {path: '/personalCenter/income',component: income},
    {path: '/personalCenter/incomedetail',component: incomedetail},
    {path: '/personalCenter/incomedetail/personalIncomeDetail',component: personalIncomeDetail},
    {path: '/personalCenter/incomedetail/integralDetail',component: integralDetail},
    {path: '/personalCenter/incomedetail/integralCash',component: integralCash},
    {path: '/personalCenter/incomedetail/addcard',component: addcard},
    {path: '/personalCenter/addcard/alipay',component: alipay},
    {path: '/personalCenter/addcard/UnionPay',component: UnionPay},
    {path: '/personalCenter/incomedetail/cash',component: cashComponent},
    {path: '/middle',component: middleAlipay},
    {path: '/personalCenter/incomedetail/record',component: recordComponent},
    {path: '/personalCenter/previous',component:previousComponent},
    {path: '/personalCenter/questionandanswers',component:Questionandanswers},
    {path: '/personalCenter/manual',component:manual},
    {path: '/personalCenter/cooperation',component:cooperation},
    {path: '/personalCenter/contactus',component:contactUs},
    {path: '/loan/myloan',component:myloan},
    {path: '/url',component: url},
    {path: '/cardManager',component: cardManager},
    {path: '/radar',component: radar},
    {path: '/Evaluation',component: Evaluation},
    {path: '/help',component: help},
    {path: '/myrate',component: myrate},
    {path: '/picture',component: pictures},
    {path: '/nextLevel',component: nextLevel},
    {path: '/nextList',component: nextList},
    {path: '/nextOtherList',component: nextOtherList},
  ]
})
