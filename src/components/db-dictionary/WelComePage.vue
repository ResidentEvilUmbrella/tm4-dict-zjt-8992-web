<template>
    <div class="welComePageContainer" >
           <div>
               <el-row>
                   <el-col :span="24" class="welComePagTitle" style="text-align: center;">
                       <i class="fa fa-lightbulb-o" style="color: #ffc800" />
                       数据库字典功能使用教程
                   </el-col>
               </el-row>
               <el-container>
                   <el-main>
                       <el-carousel indicator-position="outside"  id="el-carousel"  :height="dataHeight" style="width:1350px;">
                           <el-carousel-item v-for="item in srcList" :key="item"  >
                               <!--<img :src="item.src" height="902" width="1920"/>-->
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
    </div>
</template>

<script>
    export default {
        name: "WelComePage",
        data(){
            return {
                srcList: [
                    require('../../assets/1.png'),
                    require('../../assets/2.png'),
                    require('../../assets/3.png'),
                    require('../../assets/4.png'),
                    require('../../assets/5.png')
                ],
                dataHeight:"780px",
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
    display: flex;
    align-items: center;
    justify-content: center;
    width:100%;
    height: 100%;
    margin-left: 15px;
}

.welComePagTitle {
    font-family: 华文行楷;
    font-size: 40px;
    color: #009eff;
}

.el-carousel__container{
    height: 1000px;
}


</style>