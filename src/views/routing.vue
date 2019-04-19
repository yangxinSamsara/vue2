<template>
  <div >
    <Header></Header>
    <div class="content">
      <ul>
        <li>
          <h3>
            <span class="title-pre">#</span>
            <span>动态路由匹配</span>
          </h3>
          <h4>新闻列表</h4>
          <div class="news-content">
              <article v-for="(anew, index) in news" :key="index">
                  <h5>
                      <!-- 命名路由 -->
                      <router-link :to="{name:'detail',params:{id:anew.id}}">{{anew.title}}</router-link>
                      </h5>
                  <p>{{anew.content}}</p>
              </article>
          </div>
        </li>
         <li>
          <h3>
            <span class="title-pre">#</span>
            <span>编程式导航</span>
          </h3>
          <!-- 注意rules，prop设置校验的字段名 -->
          <el-form :model="form" :rules="rules" ref="demoForm" label-width="80px">
            <el-form-item label="姓名：" prop="name">
                <el-input style="width:auto" v-model="form.name" placeholder="请输入姓名"></el-input>
            </el-form-item>
             <el-form-item label="邮箱：" prop="email">
                <el-input style="width:auto" v-model="form.email" placeholder="请输入邮箱"></el-input>
            </el-form-item>
            <el-button type="primary" @click="submit('demoForm')">提交</el-button>
            <el-button  @click="resetForm('demoForm')">重置</el-button>
          </el-form>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Header from "@/components/header.vue";
export default {
  data() {
    return {
        news:[
            {
                id:0,
                title:'新闻标题11111',
                content:'11111内容，11111内容，11111内容，11111内容，11111内容，11111内容，11111内容，11111内容，11111内容，11111内容11111内容，11111内容，11111内容，11111内容，11111内容。'
            },
            {
                id:1,
                title:'新闻标题22222',
                content:'22222内容，22222内容，22222内容，22222内容，22222内容。'
            },
            {
                id:2,
                title:'新闻标题33333',
                content:'33333内容，33333内容，33333内容，33333内容，33333内容。'
            }
        ],
        form:{
            name:'',
            email:''
        },
        rules:{
            name:[
                {required:true,message:'请输入姓名',trigger:'blur'},
                {min:3,max:10,message:'长度在3到5个字符',trigger:'blur'}
            ],
            email:[
                {required:true,message:'请输入邮箱地址',trigger:'blur'},
                {type:'email',message:'请输入正确的邮箱地址',trigger:['blur','change']}
            ]
        }
    };
  },
  components: { Header },
  methods: {
      submit(formName){
          this.$refs[formName].validate((valid)=>{
              if(valid){
                  this.$message({
                      message:'提交成功',
                      type:'success',
                      duration:1000
                  });
                setTimeout(() => {
                    this.$router.push({
                        path:'/success',
                        query:{
                            name:this.form.name,
                            email:this.form.email
                        }
                    })
                }, 500);
              }else{
                  this.$message({
                      message:'提交失败',
                      type:'error',
                      duration:1000
                  });
                  return false;
              }
          })
      },
      resetForm(formName){
          this.$refs[formName].resetFields()
      }
  },
};
</script>
<style scoped>
ul li {
  margin-bottom: 50px;
  background: #86bee6;
  border: 1px solid #000;
  padding: 5px;
}
ul li p {
  background: #ccc;
  padding: 5px 10px;
}
ul li span.title-pre {
  color: aqua;
  font-size: 24px;
}
.news-content{
    background: #fff;
}
.news-content article{
    border: 1px dotted darkcyan;
    cursor: pointer;
}
.news-content article h5{
    padding: 5px;
    margin: 0;
    font-weight: bold
}
.news-content article h5 a{
    text-decoration: none;
    color: #000;
}
.news-content article p{
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
    word-wrap: break-word;
    white-space: nowrap;
    margin: 5px;
    background: #fff
}
</style>
