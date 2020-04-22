// pages/wxml/wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message:'你好小程序',
    firstname:'Kobe',
    lastname:'Bryant',
    nowTime: new Date().toLocaleString(),
    isActive: false,
    isShow: true,
    score:50,
    movies:['星际穿越','盗梦空间','大话西游'],
    nums:[
      [12,24,32],
      [122,244,322],
      [312,324,332]
    ],
    input_data: [
      { id: 1, unique: "unique1" },
      { id: 2, unique: "unique2" },
      { id: 3, unique: "unique3" },
      { id: 4, unique: "unique4" },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    setInterval(()=>{
      this.setData({
        nowTime:new Date().toLocaleString()
      })
    },1000)
  },
  handleSwitchColor(){
    this.setData({
      isActive:!this.data.isActive
    })
  },
  handleIsShow(){
    this.setData({
      isShow:!this.data.isShow
    })
  },
  handleAutoAdd(){
    this.setData({
      score:this.data.score+8
    })
  },
  numberFoFixed2(value){
    value.foFixed(2)
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