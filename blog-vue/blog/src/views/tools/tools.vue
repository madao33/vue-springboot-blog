<template>
  <div>
    <!-- banner -->
    <div class="banner" :style="cover">
      <h1 class="banner-title">工具</h1>
    </div>



      <v-card class="blog-container">
          <div style="text-align:center">
              <el-button
                      type="danger"
                      size="medium"
                      @click="generate"
              >
                  生成摘要标题
              </el-button>
          </div>

          <div style="text-align: center; margin-top: 20px">
            <p v-text="article.title"></p>
          </div>

          <div style="text-align: center; margin-top: 20px">
              <p v-text="article.summary"></p>
          </div>


          <div class="talk-wrapper" style="margin-top: 20px">
              <!-- 用户信息 -->
<!--              <div class="user-info-wrapper">-->
<!--              -->

<!--              </div>-->
              <mavon-editor
                      ref="md"
                      :subfield="false"
                      v-model="article.article"
                      style="height:calc(100vh - 260px)"

              />


          </div>
          <!-- 评论 -->
      </v-card>

  </div>
</template>

<script>
export default {
  created() {
  },
  data: function() {
    return {
        article: {
        title: "",
        summary: "",
        article : "输入文本内容"
        }
    };
  },
  methods: {
      generate() {
        this.title = ""
        this.summary = ""
        const that = this;
        this.axios
            .post("/flask/gentitle", that.article)
            .then(({ data }) => {
                console.log(data);
                if (data.flag) {
                    this.article.title = data.title
                    this.article.summary = data.summary
                    this.$notify.success({
                        title: "成功",
                        message: "自动生成标题摘要成功"
                    });
                } else {
                    this.$notify.error({
                        title: "失败",
                        message: "自动生成标题摘要失败"
                    })
                }
            });
    }
  },
  computed: {
    cover() {
      var cover = "";
      this.$store.state.blogInfo.pageList.forEach(item => {
        if (item.pageLabel == "tools") {
          cover = item.pageCover;
        }
      });
      return "background: url(" + cover + ") center center / cover no-repeat";
    }
  }
};
</script>

<style scoped>
.col-xl,
.col-xl-auto,
.col-xl-12,
.col-xl-11,
.col-xl-10,
.col-xl-9,
.col-xl-8,
.col-xl-7,
.col-xl-6,
.col-xl-5,
.col-xl-4,
.col-xl-3,
.col-xl-2,
.col-xl-1,
.col-lg,
.col-lg-auto,
.col-lg-12,
.col-lg-11,
.col-lg-10,
.col-lg-9,
.col-lg-8,
.col-lg-7,
.col-lg-6,
.col-lg-5,
.col-lg-4,
.col-lg-3,
.col-lg-2,
.col-lg-1,
.col-md,
.col-md-auto,
.col-md-12,
.col-md-11,
.col-md-10,
.col-md-9,
.col-md-8,
.col-md-7,
.col-md-6,
.col-md-5,
.col-md-4,
.col-md-3,
.col-md-2,
.col-md-1,
.col-sm,
.col-sm-auto,
.col-sm-12,
.col-sm-11,
.col-sm-10,
.col-sm-9,
.col-sm-8,
.col-sm-7,
.col-sm-6,
.col-sm-5,
.col-sm-4,
.col-sm-3,
.col-sm-2,
.col-sm-1,
.col,
.col-auto,
.col-12,
.col-11,
.col-10,
.col-9,
.col-8,
.col-7,
.col-6,
.col-5,
.col-4,
.col-3,
.col-2,
.col-1 {
  width: 100%;
  padding: 2px !important;
}
.talk-item:not(:first-child) {
  margin-top: 20px;
}
.talk-item {
  padding: 16px 20px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 3px 8px 6px rgb(7 17 27 / 6%);
  transition: all 0.3s ease 0s;
}
.talk-item:hover {
  box-shadow: 0 5px 10px 8px rgb(7 17 27 / 16%);
  transform: translateY(-3px);
}
.user-info-wrapper {
  width: 100%;
  display: flex;
}
.user-avatar {
  border-radius: 50%;
}
.user-avatar {
  transition: all 0.5s;
}
.user-avatar:hover {
  transform: rotate(360deg);
}
.user-detail-wrapper {
  flex: 1;
  margin-left: 10px;
  width: 0;
}
.user-nickname {
  font-size: 15px;
  font-weight: bold;
  vertical-align: middle;
}
.user-sign {
  margin-left: 4px;
}
.time {
  color: #999;
  margin-top: 2px;
  font-size: 12px;
}
.top {
  color: #ff7242;
  margin-left: 10px;
}
.talk-content {
  margin-top: 8px;
  font-size: 14px;
  white-space: pre-line;
  word-wrap: break-word;
  word-break: break-all;
}
.talk-images {
  padding: 0 10px;
  margin-top: 8px;
}
.images-items {
  cursor: pointer;
  border-radius: 4px;
}
.talk-operation {
  margin-top: 10px;
  display: flex;
  align-items: center;
}
.talk-operation-item {
  display: flex;
  align-items: center;
  margin-right: 40px;
  font-size: 12px;
}
.operation-count {
  margin-left: 4px;
}
.load-wrapper {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.load-wrapper button {
  background-color: #49b1f5;
  color: #fff;
}
.like-btn:hover {
  color: #eb5055 !important;
}
</style>
