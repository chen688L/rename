// pages/ability/ability.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        project:[
            {
               "id":1,
               "name":"闲土小程序",
               "time":"2022.04-2022.06",
               "image":"../../images/lands.png" 
            },
            {
                "id":2,
                "name":"花驿小站",
                "time":"2021.10-2021.11",
                "image":"../../images/GRflows.png" 
             },
             {
                "id":3,
                "name":"医云",
                "time":"2022.05-开发中",
                "image":"../../images/studentManage.png" 
             },
             {
                "id":4,
                "name":"静态页面开发合集",
                "time":"2020.05-2021.09",
                "image":"../../images/homework.png" 
             },
             {
                "id":5,
                "name":"UI设计-影院",
                "time":"2021.05-2021.06",
                "image":"../../images/homework.png" 
             },
        ]
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    },
    getProject(e){
        let id = e.currentTarget.dataset.id;
        if(id === 1){
            wx.navigateTo({
              url: '/pages/project1/project1',
            })
        }
        if(id === 2){
            wx.navigateTo({
              url: '/pages/project2/project2',
            })
        }
        if(id === 3){
            wx.navigateTo({
              url: '/pages/project3/project3',
            })
        }
        if(id === 4){
            wx.navigateTo({
              url: '/pages/project4/project4',
            })
        }
        if(id === 5){
          wx.navigateTo({
            url: '/pages/project5/project5',
          })
      }
    }
})