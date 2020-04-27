import request from './service/network'
const TOKEN = 'token'

App({
  globalData:{
    token:''
  },
  onLaunch:function(){
    // 1.先从缓存中取出token 如果没有 再去服务器申请
    const token = wx.getStorageSync(TOKEN);
    // 2.判断token是否有值
    if(token && token.length!=0){
      // 已经有token 验证是否过期
      this.check_token(token);
    }else{
      this.login();
    }
    
  },
  check_token(token){
    wx.request({
      url: 'xxxx',
      method:'post',
      header:{
        token:token
      },
      success:function(res){
        console.log(res)
      },
      fail:function(err){
        console.log(err)
      }
    })
  },
  login(){
    wx.login({
      // code 只有五分钟有效期
      success:((res)=>{
        console.log(res);
        // 获取code
        const code = res.code;
        // 传给服务器 请求token 接口
        // 接口地址 /login 请求方式 post 参数列表 code 返回值 token
        wx.request({
          url: 'http://httpbin.org/',
          data:{
            code:code
          },
          method:'post',
          success:(res) => {
            console.log(res)
            // 造假 token
            res.data = {'token':'23hjdhu32ugssdf421'};
            const token = res.data.token;
            console.log('假-token',token)
            // 存在globalData  但是小程序关闭 则清空
            this.globalData.token = token;
            // 存在本地 异步
            // wx.setStorage({
            //   data: data,
            //   key: 'key',
            // })
            // 存在本地 同步
            wx.setStorageSync(TOKEN, token);
            // 开发界面中有 Storage 可以查看是否存贮

          }
        })
        // request({
        //   url:'http://httpbin.org/',
        //   method:'post',
        // })

      })
    })
  }
})