webpackJsonp([13],{CNd5:function(t,e,a){"use strict";function n(t){a("L5kQ")}Object.defineProperty(e,"__esModule",{value:!0});var i=a("woOf"),l=a.n(i),o=a("bGai"),r=a("X2Oc"),s=null,d={CRUD_SIMPLE:{id:0,name:"简单增删改页面"},CRUD_TABLE:{id:1,name:"简单增删改页面"},CRUD_TREEANDTABLE:{id:2,name:"表格增删改页面"},CRUD_TREE:{id:3,name:"表格&树增删改页面"}},c=[[{name:"pollingPlanDate",type:"select",span:6,label:"生成表",model:12,dataUrl:"/generator/table/list",textField:"tableName",valField:"tableName",onChange:function(t){console.log(t),s.$refs.dynamicSearch.setFormData({title:t.tableComment}),s.$http.apiPost("/generator/table/columns",{tableName:t.tableName}).then(function(t){console.log(t.data.rows),t.data.rows.forEach(function(t,e){t.id=e,t.name=r.a.camelCase(t.columnName),s.$refs.table.insertOrUpdateData(t),s.$refs.tableEdit.insertOrUpdateData(t),s.$refs.tableSearch.insertOrUpdateData(t)})})}},{name:"pageTypeList",type:"radio",span:12,label:"页面模板",data:function(){var t=[];for(var e in l()(d))t.push({label:d[e].name,id:d[e].id});return t}(),onChange:function(t){s.pageType=t}}]],p=[[{name:"height",type:"number",span:4,label:"高度"},{name:"pageSize",type:"number",span:4,label:"每页数量",value:20}]],m=[[{name:"title",type:"text",span:4,label:"标题"},{name:"height",type:"number",span:4,label:"高度"},{name:"pageSize",type:"number",span:4,label:"每页数量",value:20}]],b=[[{name:"height",type:"number",span:4,label:"高度"},{name:"pageSize",type:"number",span:4,label:"每页数量",value:20}]],y={selection:[],param:{},height:400,columns:[{key:"ordinalPosition",title:"排序",width:80},{key:"columnName",title:"数据库字段",width:200},{key:"name",title:"字段名",width:200},{key:"dataType",title:"数据库字段类型",width:160},{key:"columnComment",title:"标题",width:260},{key:"columnType",title:"显示类型",width:120},{key:"columnType",title:"枚举数据",width:120},{key:"",title:"操作",width:120,render:function(t,e){var a=e.row;return t("div",null,[t("i-button",{props:{size:"small"},on:{click:function(){s.$refs.detailPopupEdit.open({title:"编辑选项设备",postUrl:null},a)}}},"编辑")," ",t("i-button",{props:{size:"small"},on:{click:function(){console.log(e),s.$refs.table.delData(e.index)}}},"删除")])}}]},u={selection:[],param:{},height:400,columns:[{key:"ordinalPosition",title:"排序",width:80},{key:"columnName",title:"数据库字段",width:200},{key:"name",title:"字段名",width:200},{key:"dataType",title:"数据库字段类型",width:160},{key:"columnComment",title:"标题",width:260},{key:"columnType",title:"显示类型",width:120},{key:"columnType",title:"枚举数据",width:120},{key:"",title:"操作",width:120,render:function(t,e){var a=e.row;return t("div",null,[t("i-button",{props:{size:"small"},on:{click:function(){s.$refs.detailPopupEdit.open({title:"编辑选项设备",postUrl:null},a)}}},"编辑")," ",t("i-button",{props:{size:"small"},on:{click:function(){console.log(e),s.$refs.tableEdit.delData(e.index)}}},"删除")])}}]},h={selection:[],param:{},height:400,columns:[{key:"ordinalPosition",title:"排序",width:80},{key:"span",title:"分格数量",width:200},{key:"name",title:"字段名",width:200},{key:"dataType",title:"数据库字段类型",width:160},{key:"columnComment",title:"标题",width:260},{key:"columnType",title:"显示类型",width:120},{key:"columnType",title:"枚举数据",width:120},{key:"",title:"操作",width:120,render:function(t,e){var a=e.row;return t("div",null,[t("i-button",{props:{size:"small"},on:{click:function(){s.$refs.detailPopupEdit.open({title:"编辑选项设备",postUrl:null},a)}}},"编辑")," ",t("i-button",{props:{size:"small"},on:{click:function(){console.log(e),s.$refs.tableSearch.delData(e.index)}}},"删除")])}}]},f={data:function(){return{dbTable:null,PageTypeList:d,pageType:-1,pageOptions:{},tableOptions:y,generatorOtioons:c,tableEditOptions:u,tableSearchOptions:h,dynamic1:p,dynamic2:m,dynamic3:b}},computed:{},methods:{},mounted:function(){s=this},components:{DataSelect:o.d,LocalTable:o.j,FormDynamic:o.g}},g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-view main-view-full",staticStyle:{"padding-top":"50px"}},[a("row",{staticStyle:{height:"700px"}},[a("i-col",{attrs:{span:"18"}},[a("formDynamic",{ref:"dynamic",attrs:{data:t.generatorOtioons,"label-width":100}}),t._v(" "),a("Tabs",[a("TabPane",{attrs:{label:"表格参数",name:"t1",disabled:2!=t.pageType&&3!=t.pageType}},[a("formDynamic",{ref:"dynamic",attrs:{data:t.dynamic1,"label-width":100}}),t._v(" "),a("LocalTable",{ref:"table",attrs:{tableOptions:t.tableOptions}})],1),t._v(" "),a("TabPane",{attrs:{label:"搜索参数",name:"t2",disabled:0==t.pageType}},[a("formDynamic",{ref:"dynamicSearch",attrs:{data:t.dynamic2,"label-width":100}}),t._v(" "),a("LocalTable",{ref:"tableSearch",attrs:{tableOptions:t.tableSearchOptions}})],1),t._v(" "),a("TabPane",{attrs:{label:"表格表单参数",name:"t3"}},[a("formDynamic",{ref:"dynamic3",attrs:{data:t.dynamic3,"label-width":100}}),t._v(" "),a("LocalTable",{ref:"tableEdit",attrs:{tableOptions:t.tableEditOptions}})],1),t._v(" "),a("TabPane",{attrs:{label:"树参数",name:"t4",disabled:3!=t.pageType&&4!=t.pageType}},[a("formDynamic",{ref:"dynamic3",attrs:{data:t.dynamic3,"label-width":100}}),t._v(" "),a("LocalTable",{ref:"tableEdit",attrs:{tableOptions:t.tableEditOptions}})],1),t._v(" "),a("TabPane",{attrs:{label:"树表单参数",name:"t4",disabled:3!=t.pageType&&4!=t.pageType}},[a("formDynamic",{ref:"dynamic3",attrs:{data:t.dynamic3,"label-width":100}}),t._v(" "),a("LocalTable",{ref:"tableEdit",attrs:{tableOptions:t.tableEditOptions}})],1)],1)],1),t._v(" "),a("i-col",{attrs:{span:"6"}})],1),t._v(" "),a("row",[a("i-col",{attrs:{span:"24"}},[a("i-button",{attrs:{type:"ghost",icon:"android-archive"},on:{click:t.toggleLocation}},[t._v("\n        生成代码\n      ")]),t._v(" "),a("i-button",{attrs:{type:"ghost",icon:"folder"},on:{click:t.toggleLocation}},[t._v("\n        保 存\n      ")]),t._v(" "),a("i-button",{attrs:{type:"ghost",icon:"eye"},on:{click:t.toggleLocation}},[t._v("\n        预 览\n      ")])],1)],1)],1)},w=[],v={render:g,staticRenderFns:w},T=v,k=a("VU/8"),_=n,O=k(f,T,!1,_,"data-v-37ee948a",null);e.default=O.exports},Goqd:function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,"",""])},L5kQ:function(t,e,a){var n=a("Goqd");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("3d97b2cc",n,!0,{})}});