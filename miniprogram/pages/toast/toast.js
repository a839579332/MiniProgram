// pages/toast/toast.js
Page({
  handleShowToast(){
    wx.showToast({
      title: '你好啊',
      duration: 3000,
      // 1.success 2.none 3.loading 自定义用image
      icon: 'loading',
      mask:true,
      success:function(res){

      },
      fail:function(err){

      }
    })
  },
  handleShowModal(){
    wx.showModal({  
      title: '我是标题',
      content: '我是内容',
      // 是否展示取消按钮
      // showCancel: false,
      // 修改取消按钮的文字
      cancelText: '退出',
      success:function(res){
        console.log(res);
        if(res.cancel){
          console.log('用户点击了取消按钮')
        }
        if(res.confirm){
          console.log('用户点击了确定按钮')
        }
      }
    })
  },
  
  handleShowLoading(){
    wx.showLoading({
      title: '加载ing',
      mask: true,
    })

    setTimeout(()=>{
      // 必须手动 hideLoading 才能消失
      wx.hideLoading({
        complete: (res) => {console.log(res)},
      })
    },1000)
  },

  handleShowAction(){
    wx.showActionSheet({
      itemList: ['相册','拍照'],
      itemColor: 'red',
      success:function(res){
        console.log(res);
        // switch(res.tapIndex){

        // }
      }
    })
  },
  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (options) {
    return {
      title: '你好，美丽的锅包肉',
      // 分享后  点击进入的url 有可能是详情 也有可能是首页
      path:'/miniprogram/pages/home/home',
      // 可以是本地图片 也可以是网络图片
      imageUrl: 'https://qq.yh31.com/tp/tw/201305311232454689.gif'
    }
  }
})