// pages/component/component.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    counter: 0
  },
  handlerIncrement(){
    this.setData({
      counter:this.data.counter + 1
    })
  },
  handleTabItemClick(event){
    console.log(event.detail.index, event.detail.title)
  },
  handlerIncrementCpn(){
    // 需要给自定义组件 加class 或者 id  如果是id 则换成#
    const mysel = this.selectComponent('.sel-class');
    console.log(mysel);
    // mysel.setData({
    //   counter:mysel.data.counter + 10
    // })
    mysel.incrementCounter(10);
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
  onShareAppMessage: function () {

  }
})