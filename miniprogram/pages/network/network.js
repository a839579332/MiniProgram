// pages/network/network.js
import request from '../../service/network.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.get_data_origin();
    // 4.封装
    request({
      url:'http://httpbin.org/',
      data:{
      }
    }).then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })
  },
  get_data_origin(){
// wx.request({
    //   url: 'https://qq.yh31.com/tp/rm/201305301145481696.jpg',
    //   success:function(res){
    //     console.log(res)
    //   }
    // })
    // 2. get请求
    // wx.request({
    //   url: 'https://xxxx',
    //   data:{
    //     type:'sell',
    //     page: 1
    //   },
    //   success:function(res){
    //     console.log(res)
    //   }
    // })
    // 3. post 请求
    // wx.request({
    //   url: 'http://httpbin.org/post',
    //   method:'post',
    //   data:{
    //     name:'codewhy',
    //     age:18
    //   },
    //   success:function(res){
    //     console.log(res)
    //   },
    //   fail:function(err){
    //     console.log(err)
    //   },
    //   complete:function(info){
    //     console.log(info)
    //   }
    // })
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