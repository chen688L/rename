// pages/project2/project2.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        "myproject":{
            "ledding":"Vue+Element UI",
            "afterEnd":"Node.js技术+Mysql",
            "tool":"VScode",
            "intro":
            "后端使用Koa框架，前端使用Vue，对网站用户和商品进行后台管理，产品更新维护，为用户提供完整的花束售卖流程",
            "img":[
                "https://636c-cloud1-5gepvc95934cf361-1307576047.tcb.qcloud.la/project/2-1.png?sign=8d000e0858b63593d93c93e66b00cbe0&t=1654225633",
                "https://636c-cloud1-5gepvc95934cf361-1307576047.tcb.qcloud.la/project/2-2.jpg?sign=89469b08411d46b2e7547a6e011cfdda&t=1654225660",
                "https://636c-cloud1-5gepvc95934cf361-1307576047.tcb.qcloud.la/project/2-3.jpg?sign=9ef4ca688c52e7e472b15d2de39bd65c&t=1654225672"
            ]
        }
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    },
    preview(e){
        wx.previewImage({
            current: e.currentTarget.dataset.src, // 当前显示图片的 http 链接
            urls: this.data.myproject.img
             // 需要预览的图片 http 链接列表
          })
    }
})