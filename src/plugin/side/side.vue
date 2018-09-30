/**
* Created by 涂涂 on 18/9/30.
*/
<style scoped lang="less">
  /* 进入开始 */
  //滚动条样式
.scroll-style {
  &::-webkit-scrollbar {
    width: 7px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #c4c4c4;
    border-left: 2px solid transparent;
  }
  &::-webkit-scrollbar-track {
    background-color: #e5e5e5;
    border-left: 2px solid transparent;
  }
}

//flex 兼容样式
.flex-wrap {
  height: 100%;
  display: flex;
  display: -ms-flex;
  display: -webkit-flex;
  display: -moz-flex;
  flex-direction: column;
}

.flex-item {
  -webkit-flex: 1;
  -ms-flex: 1;
  -moz-box-flex: 1;
  flex: 1;
}
body,
div,
dl,
dt,
dd,
ul,
ol,
li,
h1,
h2,
h3,
h4,
h5,
h6,
pre,
form,
fieldset,
input,
textarea,
p,
blockquote,
th,
td {
  margin: 0;
  padding: 0;
}

ol,
ul {
  list-style: none
}

a {
  text-decoration: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
  font-weight: normal
}

q:before,
q:after {
  content: ''
}

// abbr
acronym {
  border: 0
}

  
  .project-mask-enter {
    animation: width-enter 0.3s;
  }

  .project-mask-out {
    animation: width-out 0.3s;
  }

  @keyframes width-out {
    0% {
      right: 0;
    }
    100% {
      right: -100%;
    }
  }

  @keyframes width-enter {
    0% {
      right: -100%;
    }
    100% {
      right: 0;
    }
  }
  .side-wrap {
    position: relative;
  }

  .side-mask {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
  }
  .side-content {
    position: fixed;
    right: 0;
    top: 0;
    background-color: #ffffff;
    height: 100vh;
    box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    .side-header {
      height: 60px;
      border-bottom: 1px solid #e5e5e5;
      box-sizing: border-box;
      flex: 0 60px;
    }
    .side-bottom {
      height: 60px;
      border-top: 1px solid #e5e5e5;
      box-sizing: border-box;
      flex: 0 60px;
    }
    .side-content-wrap {
      overflow: auto;
    }
  }
  .side-header-wrap{
    line-height: 40px;
    box-sizing: border-box;
    padding: 10px 20px;
    position: relative;
    h4{
      font-size: 14px;
      font-weight: bold;
    }
    .side-close{
      position: absolute;
      width: 60px;
      height: 60px;
      right: 20px;
      top:0;
      line-height: 60px;
      text-align: right;
      font-size: 14px;
      cursor: pointer;
      color: #2d8cf0;
    }
  }
</style>

<template>
  <div class="side-wrap" :style="{'z-index':zIndex}">
    <!--遮罩-->
    <div class="side-mask" @click="visible=false" v-show="visible" :style="mask_style"></div>
    <!--主体-->
    <transition>
      <div v-show="visible" class="side-content flex-wrap"
           :style="{'width':width+'px'}" :class="{'project-mask-enter':visible,'project-mask-out':!visible}">
        <div class="side-header">
          <slot name="header">
            <div class="side-header-wrap">
              <h4>{{title}}</h4>
              <div class="side-close" @click="closePage">关闭</div>
            </div>
          </slot>
        </div>
        <div class=" side-content-wrap flex-item scroll-style">
          <slot></slot>
        </div>
        <div class="side-bottom">
          <slot name="bottom">
            <div class="side-header-wrap">
              <div class="side-close" @click="closePage">关闭</div>
            </div>
          </slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: "side",
    data() {
      return {
        visible: this.value
      };
    },
    props: {
      value: {
        type: Boolean,
        default: true
      },
      width: {
        type: [Number, String],
        default: "400"
      },
      mask: {
        type: Boolean,
        default: true
      },
      maskStyle: {
        type: String,
        default: "dark"
      },
      zIndex: {
        type: [Number, String],
        default: 1100
      },
      title: {
        type:String,
        default:'side'
      }
    },
    mounted() {
    },
    methods: {
      //关闭页面
      closePage() {
        this.visible = false;
        this.$emit("on-close");
      }
    },
    computed: {
      //遮罩层计算
      mask_style() {
        if (this.maskStyle === "light") {
          return {backgroundColor: "rgba(255,255,255,0)"};
        } else {
          return {backgroundColor: "rgba(0,0,0,0.3)"};
        }
      }
    },
    watch: {
      value(val) {
        this.visible = val;
      },
      visible(val) {
        this.$emit("input", val);
      }
    },
    components: {}
  };
</script>
