window.addEventListener('load', function name() {

    let mapArea = 'china'
    let app = new Vue({
        el: '#app',
        data: {
            name: 'hello',
            sites:
                [
                    ["baidu", "https://www.baidu.com", "https://www.baidu.com/favicon.ico"],

                    ["bilibili", "https://www.bilibili.com", "https://www.bilibili.com/favicon.ico"],

                    ["虎扑", "https://bbs.hupu.com", "https://bbs.hupu.com/favicon.ico"],

                    ["观察者", "https://www.guancha.cn", "https://www.guancha.cn/favicon.ico"],

                    ["google", "https://www.google.co.jp", "#"],

                    ["anyknew", "https://www.anyknew.com", "https://f0cdn.anyknew.com/web/img/icons/favicon-32x32.png"],

                    ["douyu", "https://www.douyu.com", "https://www.douyu.com/favicon.ico"],

                    ["nga", "https://bbs.nga.cn", "https://bbs.nga.cn/favicon.ico"],

                    ["douyin", "https://www.douyin.com", "https://lf1-cdn-tos.bytegoofy.com/goofy/ies/douyin_web/public/favicon.ico"],

                    ["youtube", "https://youtube.com", "#"],

                    ["逗比表情", "http://www.dbbqb.com", "http://www.dbbqb.com/logo192.png"],

                    ["优酷", "https://youku.com", "https://img.alicdn.com/tfs/TB1WeJ9Xrj1gK0jSZFuXXcrHpXa-195-195.png"]
                ]
        },
        methods: {},
        components: {},
        computed: {},
        mounted() { }
    });
    var chart = echarts.init(document.getElementById("map"));
    chart.setOption({
        series: [{
            "type": "map",
            "map": mapArea
        }]
    });


})



