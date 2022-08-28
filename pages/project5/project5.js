// pages/project1/project1.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        "myproject":{
            "img":[
               "cloud://yun-7ggxn11lc0cf586b.7975-yun-7ggxn11lc0cf586b-1312542485/project/4-1.png",
               "cloud://yun-7ggxn11lc0cf586b.7975-yun-7ggxn11lc0cf586b-1312542485/project/4-2.png",
               "cloud://yun-7ggxn11lc0cf586b.7975-yun-7ggxn11lc0cf586b-1312542485/project/4-3.png",
               "cloud://yun-7ggxn11lc0cf586b.7975-yun-7ggxn11lc0cf586b-1312542485/project/4-4.png",
               "cloud://yun-7ggxn11lc0cf586b.7975-yun-7ggxn11lc0cf586b-1312542485/project/4-5.png",
               "cloud://yun-7ggxn11lc0cf586b.7975-yun-7ggxn11lc0cf586b-1312542485/project/4-6.png",
               "cloud://yun-7ggxn11lc0cf586b.7975-yun-7ggxn11lc0cf586b-1312542485/project/4-7.png"
                
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