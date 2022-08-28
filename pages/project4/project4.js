// pages/project4/project4.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        "myproject":[
            {
                "name":"个人简历web版本",
                "img":[
                    "https://636c-cloud1-5gepvc95934cf361-1307576047.tcb.qcloud.la/project/4-1.png?sign=169c681d96c9335ee8f0652202f754be&t=1654236853"
     
                ]
            },
            {
                "name":"海贼王动漫介绍",
                "img":[
                    "https://636c-cloud1-5gepvc95934cf361-1307576047.tcb.qcloud.la/project/4-2.png?sign=0173b4a414fb4808058a5ffde6238c0f&t=1654236834"
     
                ]
            },
            {
                "name":"单页食品制作",
                "img":[
                    "https://636c-cloud1-5gepvc95934cf361-1307576047.tcb.qcloud.la/project/4-3.png?sign=f44ba2f9badbcab4a0a149e5a51e3be2&t=1654236807"
     
                ]
            },
            {
                "name":"简易版个人备忘录",
                "img":[
                    "cloud://yun-7ggxn11lc0cf586b.7975-yun-7ggxn11lc0cf586b-1312542485/project/6.png"
     
                ]
            }
        ]
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
        let a = []
        for(let i=0;i<this.data.myproject.length;i++){
            console.log(a);
            if(this.data.myproject[i].img.length>0){
                a.push(this.data.myproject[i].img[0])
            }else{
                break;
            }
        }
        wx.previewImage({
            current: e.currentTarget.dataset.src, // 当前显示图片的 http 链接
            urls: a
             // 需要预览的图片 http 链接列表
          })
    }
})