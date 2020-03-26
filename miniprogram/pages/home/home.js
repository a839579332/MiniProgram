// pages/home/home.js
Page({
  subBtnClick(){
    this.setData({
      counter: this.data.counter - 1
    })
  },
  /**
   *  + 点击事件处理
   */
  addBtnClick(){
    console.log("按钮被点击了");
    // 界面不会发生变化
    // this.data.counter += 1;
    this.setData({
      counter: this.data.counter + 1
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    username:'咸松林',
    age:28,
    students:[
      {id:110, name:'kobe', age:30},
      {id:111, name:'james', age:33},
      {id:112, name:'simith', age:27},
      {id:113, name:'branch', age:29}
    ],
    counter:0
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