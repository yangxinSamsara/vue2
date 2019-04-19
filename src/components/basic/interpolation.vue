<template>
    <div class="interpolation">
        <ul>
            <li v-for="(item, index) in interpolationList" :key="index">
                <h3><span class="title-pre">#</span>{{item.title}}</h3>
                <p class="output">{{item.output}}</p>
                <p class="code">{{item.code}}</p>
                <p class="data"><pre>{{item.data}}</pre></p>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
            interpolationList:[
                {
                    title:'文本',
                    output:'这里绑定msg的值：这是msg的值',
                    code:`<span>这里绑定msg的值：{{msg}}</span>`,
                    data:'data(){\n   return{\n   msg:"这是msg的值"\n   }\n }'
                },
                {
                    title:'原始HTML',
                    output:'这里是html代码，将会在页面上当做html渲染',
                    code:`<span v-html="vhtml"></span>`,
                    data:'data(){\n   return{\n   vhtml:"<span>这里是html代码，将会在页面上当做html渲染</span>"\n   }\n }'
                },
                {
                    title:'特性',
                    output:'我的id是：1',
                    code:`<span :id="dynamicId">我的id是：{{dynamicId}}</span>`,
                    data:'data(){\n   return{\n   dynamicId:"1"\n   }\n }'
                },
                {
                    title:'使用JavaScript',
                    output:'计算number+1的值：12',
                    code:`<span>计算number+1的值：{{number+1}}</span>`,
                    data:'data(){\n   return{\n   number:11\n   }\n }'
                },
            ]
        }
    }
}
</script>
<style scoped>
ul li{
    margin-bottom: 50px;
    background: #86bee6;
    border: 1px solid #000;
    padding: 5px
}
ul li p{
    background: #ccc;
    padding: 5px 10px
}
ul li span.title-pre{
    color: aqua;
    font-size: 24px
}
</style>
