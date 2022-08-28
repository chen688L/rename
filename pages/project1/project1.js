// pages/project1/project1.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        "myproject":{
            "ledding":"原生微信小程序",
            "afterEnd":"Node.js技术+Mysql+云托管",
            "tool":"微信开发者工具+VScode",
            "intro":
            "该项目目的为了实现盘活房屋前后的零散土地资源，化零为整，推进农村供给侧结构改革，支持闲置信息录入，可以按地点、类型进行搜索，收藏,可以在地图上查看分布图以及路线导航等功能",
            "img":[
               "cloud://yun-7ggxn11lc0cf586b.7975-yun-7ggxn11lc0cf586b-1312542485/project/1-1.jpg",
               "cloud://yun-7ggxn11lc0cf586b.7975-yun-7ggxn11lc0cf586b-1312542485/project/1-2.jpg",
               "cloud://yun-7ggxn11lc0cf586b.7975-yun-7ggxn11lc0cf586b-1312542485/project/1-3.jpg",
               "cloud://yun-7ggxn11lc0cf586b.7975-yun-7ggxn11lc0cf586b-1312542485/project/1-4.jpg",
               "cloud://yun-7ggxn11lc0cf586b.7975-yun-7ggxn11lc0cf586b-1312542485/project/1-5.jpg",
               "cloud://yun-7ggxn11lc0cf586b.7975-yun-7ggxn11lc0cf586b-1312542485/project/1-6.jpg",
               "cloud://yun-7ggxn11lc0cf586b.7975-yun-7ggxn11lc0cf586b-1312542485/project/1-7.jpg"
                
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