(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-34cd9e75"],{"0b73":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"banner",style:t.cover},[a("h1",{staticClass:"banner-title"},[t._v("工具")])]),a("v-card",{staticClass:"blog-container"},[a("div",{staticStyle:{"text-align":"center"}},[a("el-button",{attrs:{type:"danger",size:"medium"},on:{click:t.generate}},[t._v(" 生成摘要标题 ")])],1),a("div",{staticStyle:{"text-align":"center","margin-top":"20px"}},[a("p",{domProps:{textContent:t._s(t.article.title)}})]),a("div",{staticStyle:{"text-align":"center","margin-top":"20px"}},[a("p",{domProps:{textContent:t._s(t.article.summary)}})]),a("div",{staticClass:"talk-wrapper",staticStyle:{"margin-top":"20px"}},[a("mavon-editor",{ref:"md",staticStyle:{height:"calc(100vh - 260px)"},attrs:{subfield:!1},model:{value:t.article.article,callback:function(e){t.$set(t.article,"article",e)},expression:"article.article"}})],1)])],1)},r=[],n=(a("4160"),a("159b"),{created:function(){},data:function(){return{article:{title:"",summary:"",article:"输入文本内容"}}},methods:{generate:function(){var t=this;this.title="",this.summary="";var e=this;this.axios.post("/flask/gentitle",e.article).then((function(e){var a=e.data;console.log(a),a.flag?(t.article.title=a.title,t.article.summary=a.summary,t.$notify.success({title:"成功",message:"自动生成标题摘要成功"})):t.$notify.error({title:"失败",message:"自动生成标题摘要失败"})}))}},computed:{cover:function(){var t="";return this.$store.state.blogInfo.pageList.forEach((function(e){"tools"==e.pageLabel&&(t=e.pageCover)})),"background: url("+t+") center center / cover no-repeat"}}}),s=n,c=(a("e8d7"),a("2877")),l=a("6544"),o=a.n(l),u=a("b0af"),d=Object(c["a"])(s,i,r,!1,null,"0ef4af23",null);e["default"]=d.exports;o()(d,{VCard:u["a"]})},"479b":function(t,e,a){},e8d7:function(t,e,a){"use strict";var i=a("479b"),r=a.n(i);r.a}}]);