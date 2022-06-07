const defaultConfig={Common:{Title:"视频互动审核",IsShowLogo:!0,Flow:["1v1"],RedirectUrl:"/clearCookie",NavTitle:"视频互动审核",IsWxNative:!1,IsHideIndexWhenNative:!1,LivenessMode:0},Index:{ProtocolTitle:"尊敬的用户您好：",DetailTitle:"协议详情",Detail:"欢迎使用视频互动审核服务，为了保障您的合法权益，请您务必审慎阅读，充分理解协议条款内容。在您选择并同意本协议之后，即表示您已详细阅读如下条款，并同意服务提供者及腾讯使用并传送相关数据用于业务办理。",ProtocolContent:"    本服务由腾讯实名核身技术方案“腾讯云”提供技术支持。您在接受本服务的过程中，您同意并授权腾讯获取您的手机摄像头权限，在视频互动过程中进行活体检测、截取您的脸部图像和认证视频，从而实现您的身份验证。 上述信息属于涉及个人敏感信息，如您拒绝提供上述信息，您的业务办理机构将无法为您提供相应业务，但不影响其为您提供其他服务。 如您使用不成功，请确保您已经按照要求正确使用本服务，或者向为您办理业务的机构咨询其他办理渠道。 因本须知引起的或者与本须知有关的任何纠纷均适用中华人民共和国大陆/内地地区法律，并由【深圳市南山区】法院管辖。",BusinessName:"视频互动审核",isHideTipsLogo:!0,NextBtn:"发起视频",IsGetLocation:!0},Guide:{tips:"视频互动审核提示",guidCont1:"开启声音以便听清提示",guidCont2:"拍摄中保持正脸在屏幕中",guidCont3:"拍摄中不要晃动手机",guidCont4:"避免强光和背光",loading:"正在发起视频中，请稍后..."},Fail:{IsShowQuitBtn:!1,ExitBtnText:"退出",RetryBtnText:"重新发起",CustomFailInfo:{}},Success:{SubTipsName:"验证成功",SuccessTips:"审核通过",AutoSkip:!1}},sysFailInfo={SUCCESS:[0,"审核通过"],PARAM_ERROR:[1,"参数异常，请联系工作人员"],SDK_ERROR:[2,"SDK异常，请联系工作人员"],ENTER_ROOM_FAIL:[3,"无法发起视频，请退出重新验证"],SDK_NOT_SUPPORT:[4,"您的小程序版本过低，请更新微信后重新验证"],LOCAL_LEAVE:[100,"您已主动退出"],LIVE_FAIL:[110,"活体检测未通过，请您按照提示规范动作"],DETECT_MASK:[111,"检测到有口罩，请摘掉口罩后重新验证"],DETECT_LIMITED:[112,"检测失败次数达到上限，请重试"],NETWORK_ERROR:[199,"网络异常，请您保持在良好的网络环境下进行验证"],SYSTEM_ERROR:[200,"系统错误，请重新验证"],TIMEOUT:[201,"您未验证成功，请按照规范重新验证"],ROOM_TIMEOUT:[202,"房间超时，服务端已主动退出"],ENGINE_ERROR:[300,"引擎超时，请稍后重新验证"],NAME_ERROR:[301,"姓名有误，请确认后重新验证"],IDCARD_ERROR:[302,"身份证号有误，请确认后重新验证"],NO_INFO:[303,"未查询到身份信息，请确认后重新验证"],NOT_MATCH:[304,"姓名和身份证号不匹配，请核实身份后重新验证"],LOW_QUILITY:[305,"权威数据源照片模糊，请通过其他渠道验证"],NO_FACE:[306,"脸部未完整露出，请保持正脸面对屏幕"],COMPARE_FAIL:[307,"系统无法判断为同一人，请您确认身份后重新验证"],MULTI_FACE:[308,"检测到多张人脸，请保持验证视频中只有本人"],LOW_PIXEL:[309,"视频像素太低无法检测，请更换手机进行验证"],LIB_UPDATE:[310,"权威数据源升级中，请稍后重新验证"],WRONG_IMAGE:[311,"视频提取照片出错，请重新验证或更换手机进行验证"]},resultCode={0:sysFailInfo.SUCCESS,3:sysFailInfo.ENTER_ROOM_FAIL,100:sysFailInfo.LOCAL_LEAVE,199:sysFailInfo.NETWORK_ERROR,201:sysFailInfo.TIMEOUT,"-1":sysFailInfo.SYSTEM_ERROR,"-2":sysFailInfo.NAME_ERROR,"-3":sysFailInfo.IDCARD_ERROR,"-4":sysFailInfo.WRONG_IMAGE,"-5":sysFailInfo.NO_INFO,"-6":sysFailInfo.NO_INFO,"-7":sysFailInfo.NOT_MATCH,"-8":sysFailInfo.NO_INFO,"-10":sysFailInfo.LOW_QUILITY,"-11":sysFailInfo.NO_FACE,"-13":sysFailInfo.MULTI_FACE,"-14":sysFailInfo.NO_FACE,"-15":sysFailInfo.LOW_PIXEL,"-18":sysFailInfo.LIB_UPDATE,"-100":sysFailInfo.LIVE_FAIL,"-101":sysFailInfo.LIVE_FAIL,"-102":sysFailInfo.LIVE_FAIL,"-103":sysFailInfo.LIVE_FAIL,"-200":sysFailInfo.LIVE_FAIL,"-300":sysFailInfo.NO_FACE,"-301":sysFailInfo.MULTI_FACE,"-302":sysFailInfo.DETECT_MASK,"-400":sysFailInfo.DETECT_LIMITED,"-401":sysFailInfo.ROOM_TIMEOUT};module.exports={sysFailInfo:sysFailInfo,defaultConfig:defaultConfig,resultCode:resultCode};