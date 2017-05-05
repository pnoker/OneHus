//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  changeName:function(){
    var that = this
    var text = ''
    if(this.data.motto != 'World'){
      text = 'World'
    }else{
      text = this.data.userInfo.nickName
    }
    that.setData({
      motto: text  
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
