<template>
  <div class="garena-test" id="gyroContain">
    <div class="media-tip">
      <div class="media-tip-content">
        <img
          class="icon-phone"
          src="../assets/img/scape.png"
        />
        <div class="media-tip-text">
          请先旋转屏幕
        </div>
      </div>
    </div>
    <header class="page-header">
      <div class="header-wrapper">
        <gr-menu class="header-menu"></gr-menu>
        <img class="bg" src="../assets/img/bg.png" />
        <img class="logo" src="../assets/img/logo.png" />
      </div>
      <div class="header-dividing">
        <div class="divid-content">CHARACTER</div>
        <div class="dividing-line"></div>
      </div>
    </header>
    <main class="page-content">
      <div class="card" v-for="(item, index) in webData" :key="index">
        <img v-lazy="getImg(index)" class="card-bg"/>
        <div class="content">
          <h2 class="title">{{ item.imgName || "--" }}</h2>
          <p class="copy">
            {{ item.describe }}
          </p>
          <button class="btn">View More</button>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { ajax } from "../utils/https";
export default {
  name: "garena-test",
  data() {
    return {
      webData: [{}, {}],
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      ajax({
        url: "./testData/testData.json", // 相对路径
        type: "get",
        dataType: "json",
        timeout: 10000,
        success: (res) => {
          this.webData = res;
        },
        //异常处理
        error: function (e) {
          console.log(e);
        },
      });
    },
    getImg(index){
        return require(`@/assets/img/character/character${index+1}.png`)
    }
  },
};
</script>
