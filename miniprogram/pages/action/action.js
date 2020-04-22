// pages/action/action.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titles:['衣服','鞋子','帽子']
  },
  handleTap(){
    console.log("点击按钮")
  },
  handleTouchStart(){
    console.log("handleTouchStart")
  },
  handleTouchMove(){
    console.log("handleTouchMove")
  },
  handleTouchEnd(){
    console.log("handleTouchEnd")
  },
  handleTap(){
    console.log("handleTap")
  },
  handleLongpress(){
    console.log("handleLongpress")
  },
  handleEventTap(event){
    console.log("事件触发",event)
  },
  handleItemClick(event){
    // console.log("选项触发",event)
    var dataset = event.currentTarget.dataset;
    console.log(dataset.item, dataset.index)
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