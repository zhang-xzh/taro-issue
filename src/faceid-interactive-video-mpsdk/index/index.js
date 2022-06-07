import compareVersion from"./../components/trtc-room/utils/compare-version";Page({data:{curPage:1,cmsConfig:{},skipConfig:{},bizData:{},trtcData:{},BizToken:"",preClickBtnTime:0,isNotCamera:!0,iKnowFuncs:[],index_rule:!1,show_about_dlg:!1,indexChecked:!0,indexDisableBtn:!1,show_auth_panel:!1,authInfo:"",isInfinityDisplay:!1,failPage:{},successPage:{},failInfo:{},disableAuthPage:!1,isReady:!1},onLoad:function(o){console.log("options=>",o);const e=this;if("1"===o.curPage)this.setData({cmsConfig:wx.IVdefaultConfig,trtcData:o,curPage:1,BizToken:o.BizToken||"",disableAuthPage:o.disableAuthPage}),wx.setNavigationBarTitle({title:this.data.cmsConfig.Common.Title,success:function(){console.log("setNavigationBarTitle success!")},fail:function(o){console.log("setNavigationBarTitle failure!")}}),wx.getSystemInfo({success:o=>{const t=o.system.includes("iOS")?"ios":"android",i=o.SDKVersion,n=o.version;if(compareVersion(i,"2.10.0")<0||"ios"===t&&compareVersion(n,"7.0.4")<0||"android"===t&&compareVersion(n,"7.0.8")<0)return wx.showModal({title:"提示",content:wx.sysFailInfo.SDK_NOT_SUPPORT[1],showCancel:!1,complete:function(){wx.IVFailureFunc({BizToken:e.data.BizToken,ErrorCode:wx.sysFailInfo.SDK_NOT_SUPPORT[0],ErrorMsg:wx.sysFailInfo.SDK_NOT_SUPPORT[1]},wx.IVExtra)}})}}),"true"===o.disableAuthPage&&this.indexToNext();else{const e=wx.IVResultCode[o.code];e?this.setData({BizToken:o.BizToken,curPage:+o.curPage,failInfo:{ErrorCode:e[0],ErrorMsg:e[1]}}):this.setData({BizToken:o.BizToken,curPage:3,failInfo:{ErrorCode:wx.sysFailInfo.COMPARE_FAIL[0],ErrorMsg:wx.sysFailInfo.COMPARE_FAIL[1]}})}},onReady:function(){},onShow:function(){this.data.show_auth_panel&&setTimeout(()=>{this.isAuthOk()},500)},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},showErrorToast:function(o){this.setData({showErrorMsg:!0,err:o})},switchDialog:function(){if(this.setData({showErrorMsg:!this.data.showErrorMsg}),1===this.data.iKnowFuncs.length){this.data.iKnowFuncs.pop()()}},checkNetWork:function(o){var e=this;wx.getNetworkType({success:function(t){"none"!==t.networkType?o():(console.log("Network is none"),e.showErrorToast({ErrorCode:101,ErrorMsg:"网络异常，请稍后重试"}))},fail:function(){console.log("Get Network exception"),e.showErrorToast({ErrorCode:101,ErrorMsg:"网络异常，请稍后重试"})}})},checkRecordNetworkOk:function(o,e){wx.getNetworkType({success:function(t){"none"!==t.networkType?(console.log("network is OK"),o(t.networkType)):(console.log("Network is none"),e({ErrorCode:101,ErrorMsg:"网络异常，请稍后再试"}))},fail:function(){console.log("Get Network exception"),e({ErrorCode:101,ErrorMsg:"网络异常，请稍后再试"})}})},returnAllCheckNetWork(o){wx.getNetworkType({success:function(e){o(e.networkType)},fail:function(e){o()}})},isNotAllowClick:function(){var o=+new Date;return o-this.data.preClickBtnTime<1e3?(console.log("Click button gap < 1s, not allow exec"),!0):(this.data.preClickBtnTime=o,console.log("Click button gap > 1s, allow exec"),!1)},exitIV(o){wx.IVSuccessFunc(o,wx.IVExtra)},exitIVFail(o){o.BizToken=this.data.BizToken,wx.IVFailureFunc(o,wx.IVExtra)},switchIndexRule:function(){this.setData({index_rule:!this.data.index_rule}),this.data.index_rule&&wx.showModal({title:this.data.cmsConfig.Index.DetailTitle,content:this.data.cmsConfig.Index.ProtocolContent,showCancel:!1,complete:()=>this.setData({index_rule:!1})})},switchAboutDlg:function(){this.setData({show_about_dlg:!this.data.show_about_dlg})},checkboxChange(o){this.setData({indexDisableBtn:!this.data.indexDisableBtn})},indexToNext:async function(){if(!this.isNotAllowClick()){var o=this;this.checkNetWork(function(){o.getAuth()})}},getAuth:function(){const o=this;wx.authorize({scope:"scope.camera",success(){},fail:function(){console.log("您未允许使用摄像头权限")},complete:function(){1===o.data.curPage?wx.authorize({scope:"scope.record",success(){},fail:function(){console.log("您未允许使用录音权限")},complete:function(){console.log("开始判断是否有权限"),o.isAuthOk()}}):o.isAuthOk()}})},isAuthOk:function(){var o=this;wx.getSetting({success(e){console.log("获取授权信息成功");var t=e.authSetting["scope.record"],i=e.authSetting["scope.camera"];if(console.log("isRecordAuthOk",t),console.log("isCameraAuthOk",i),t&&i)o.setData({show_auth_panel:!1,authInfo:"摄像头、录音功能都已授权"}),o.authOkToDo(),console.log("摄像头、录音功能都已授权");else{var n="";i||(n="摄像头 "),t||(n+="录音功能"),n+="还未授权",console.log(n),o.setData({show_auth_panel:!0,authInfo:n})}},fail:function(o){console.log("获取收取信息失败",o)}})},authOkToDo(){const o=`/faceid-interactive-video-mpsdk/room/room?BizToken=${this.data.trtcData.BizToken}&debugMode=false&cloudenv=PRO`;wx.navigateTo({url:o})},successGoToNext(){this.exitIV({BizToken:this.data.BizToken,ErrorCode:wx.sysFailInfo.SUCCESS[0],ErrorMsg:wx.sysFailInfo.SUCCESS[1]})},backToIndex(){this.data.failInfo.ErrorCode?this.exitIVFail({BizToken:this.data.BizToken,ErrorCode:this.data.failInfo.ErrorCode,ErrorMsg:this.data.failInfo.ErrorMsg}):this.exitIVFail({BizToken:this.data.BizToken,ErrorCode:-999,ErrorMsg:"返回首页成功，如多次验证不通过，可将当前页面截图提供给相关工作人员排查问题 "+this.data.BizToken})}});