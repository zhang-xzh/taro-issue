import{DEFAULT_PLAYER_CONFIG}from"../common/constants.js";class Stream{constructor(t){Object.assign(this,DEFAULT_PLAYER_CONFIG,{userID:"",streamType:"",streamID:"",isVisible:!0,hasVideo:!1,hasAudio:!1,volume:0,playerContext:void 0},t)}setProperty(t){Object.assign(this,t)}reset(){this.playerContext&&(this.playerContext.stop(),this.playerContext=void 0),Object.assign(this,DEFAULT_PLAYER_CONFIG,{userID:"",streamType:"",streamID:"",isVisible:!0,hasVideo:!1,hasAudio:!1,volume:0,playerContext:void 0})}}export default Stream;