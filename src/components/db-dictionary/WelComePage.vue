<template>
    <div class="welComePageContainer" >
        <el-container>
            <el-header class="welComePagTitle">
                <i class="fa fa-lightbulb-o" style="color: #ffc800" />
                数据库字典功能使用教程
            </el-header>
            <el-main style="padding-top: 0px">
                <!-- :height="dataHeight" style="max-height: 1080px;min-height: 900px;max-width: 1920px;min-width: 1300px;" -->
                    <el-carousel interval="5000" indicator-position="outside"  id="el-carousel" :height="dataHeight"  style="width: 100%;margin-top:5vh;" >
                        <el-carousel-item v-for="(item,index) in srcList" :key="index"  :label="index+1" >
                            <el-image
                                    :src="item"
                                    style="width:100%;height: 100%"
                                    fit="fill"
                            >
                            </el-image>
                        </el-carousel-item>
                    </el-carousel>
            </el-main>
        </el-container>
        <!--<el-row>
            <el-col :span="24">

            </el-col>
        </el-row>-->
    </div>
</template>

<script>
    import Swiper from 'swiper';
    export default {
        name: "WelComePage",
        data(){
            return {
                srcList: [
                    require('../../assets/1.png'),
                    require('../../assets/2.png'),
                    require('../../assets/3.png'),
                    require('../../assets/4.png'),
                    require('../../assets/5.png'),
                    require('../../assets/6.png')
                ],
                dataHeight:"33vw",
                bannerHeight: 500,
                screenWidth: 1920,
            }
        },
        mounted() {
          /*this.setSize1();
            const that = this;
            //监听浏览器窗口大小改变
            window.addEventListener('resize', function() {
                var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
                that.screenWidth = width;
                that.setSize();
            }, false);*/
            new Swiper ('.swiper-container', {
                loop: true,
                // 如果需要分页器
                pagination: '.swiper-pagination',
                // 如果需要前进后退按钮
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                // 如果需要滚动条
                scrollbar: '.swiper-scrollbar',
            })
        },
        methods: {
            setSize1: function() {
                var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
                this.screenWidth = width;
                //图片高 / 宽  500 / 1920
                this.bannerHeight = 563 / 1900 * this.screenWidth - 50
                document.getElementById('el-carousel').style.height = this.bannerHeight + 'px';
            },
            setSize: function() {
                this.bannerHeight = 563 / 1900 * this.screenWidth - 50
                document.getElementById('el-carousel').style.height = this.bannerHeight + 'px';
            }
        }
    }
</script>
<style scoped>
.welComePageContainer{
    display: flex;
    align-items: center;
    justify-content: center;
    overflow:auto;
    width:100%;
    height: 100%;
    margin-left: 15px;
}

.welComePagTitle {
    font-family: 华文行楷;
    color: #009eff;
    font-size:3vw;
    margin-top: 5vh;

}

.el-carousel__container{
    height: 1000px;
}

img{
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
}
.el-carousel__arrow{
    
}
</style>