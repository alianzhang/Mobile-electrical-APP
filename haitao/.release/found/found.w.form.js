define(function(require){
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/button/buttonGroup');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/contents/contents');
require('$model/UI2/system/components/justep/scrollView/scrollView');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/contents/content');
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/input/input');
require('$model/UI2/system/components/justep/popOver/popOver');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/haitao/found'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cvm6vQv';
	this._flag_='19bd928830e6d46c5803ebffb7bc58e6';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":false,"autoNew":false,"confirmDelete":true,"confirmRefresh":true,"defCols":{"fImg":{"define":"fImg","label":"图片","name":"fImg","relation":"fImg","type":"String"},"fPostage":{"define":"fPostage","label":"邮费","name":"fPostage","relation":"fPostage","type":"String"},"fPrice":{"define":"fPrice","label":"价格","name":"fPrice","relation":"fPrice","rules":{"number":true},"type":"Float"},"fRecord":{"define":"fRecord","label":"月销量","name":"fRecord","relation":"fRecord","rules":{"integer":true},"type":"Integer"},"fShopID":{"define":"fShopID","label":"店铺ID","name":"fShopID","relation":"fShopID","type":"String"},"fTitle":{"define":"fTitle","label":"标题","name":"fTitle","relation":"fTitle","type":"String"},"id":{"define":"id","label":"id","name":"id","relation":"id","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"goodsDataCustomRefresh"},"idColumn":"id","limit":20,"xid":"goodsData"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"fName":{"define":"fName","label":"名称","name":"fName","relation":"fName","type":"String"},"fState":{"define":"fState","label":"状态","name":"fState","relation":"fState","rules":{"integer":true},"type":"Integer"},"id":{"define":"id","label":"id","name":"id","relation":"id","type":"String"}},"directDelete":false,"events":{},"idColumn":"id","initData":"[{\"id\":\"1\",\"fName\":\"综合排序\",\"fState\":1},{\"id\":\"2\",\"fName\":\"价格升序\",\"fState\":0},{\"id\":\"3\",\"fName\":\"价格降序\",\"fState\":0}]","limit":20,"xid":"conditionData"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"fName":{"define":"fName","label":"名称","name":"fName","relation":"fName","type":"String"},"fState":{"define":"fState","label":"状态","name":"fState","relation":"fState","rules":{"integer":true},"type":"Integer"},"id":{"define":"id","label":"id","name":"id","relation":"id","type":"String"}},"directDelete":false,"events":{},"idColumn":"id","initData":"[{\"id\":\"1\",\"fName\":\"免运费\",\"fState\":0},{\"id\":\"2\",\"fName\":\"九块九\",\"fState\":0},{\"id\":\"3\",\"fName\":\"超级返\",\"fState\":0},{\"id\":\"4\",\"fName\":\"团购\",\"fState\":0}]","limit":20,"xid":"discountData"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"fName":{"define":"fName","label":"名称","name":"fName","relation":"fName","type":"String"},"fState":{"define":"fState","label":"状态","name":"fState","relation":"fState","rules":{"integer":true},"type":"Integer"},"id":{"define":"id","label":"id","name":"id","relation":"id","type":"String"}},"directDelete":false,"events":{},"idColumn":"id","initData":"[{\"id\":\"1\",\"fName\":\"3C数码配件\",\"fState\":0},{\"id\":\"2\",\"fName\":\"品牌男士\",\"fState\":0},{\"id\":\"3\",\"fName\":\"精品女装\",\"fState\":0}]","limit":20,"xid":"classData"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"isBack":{"define":"isBack","label":"是否显示","name":"isBack","relation":"isBack","type":"String"}},"directDelete":false,"events":{},"idColumn":"isBack","initData":"[{\"isBack\":\"1\"}]","limit":20,"xid":"backData"});
}}); 
return __result;});