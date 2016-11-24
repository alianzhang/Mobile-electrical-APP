define(function(require){
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/button/buttonGroup');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/contents/contents');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/contents/content');
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/bootstrap/row/row');
require('$model/UI2/system/components/bootstrap/carousel/carousel');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/popOver/popOver');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/haitao/detail'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='c22myYr';
	this._flag_='0bfbe00eed98a69c8513caf006dd870c';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"fImgUrl":{"define":"fImgUrl","label":"图片","name":"fImgUrl","relation":"fImgUrl","type":"String"},"id":{"define":"id","label":"id","name":"id","relation":"id","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"imgDataCustomRefresh"},"idColumn":"id","limit":20,"xid":"imgData"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"fContent":{"define":"fContent","label":"评论内容","name":"fContent","relation":"fContent","type":"String"},"fDate":{"define":"fDate","label":"评论日期","name":"fDate","relation":"fDate","rules":{"date":true},"type":"Date"},"fScore":{"define":"fScore","label":"评分","name":"fScore","relation":"fScore","rules":{"number":true},"type":"Float"},"fUserImg":{"define":"fUserImg","label":"用户头像","name":"fUserImg","relation":"fUserImg","type":"String"},"fUserName":{"define":"fUserName","label":"用户名","name":"fUserName","relation":"fUserName","type":"String"},"id":{"define":"id","label":"id","name":"id","relation":"id","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"commentsDataCustomRefresh"},"idColumn":"id","limit":20,"xid":"commentsData"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"fAddress":{"define":"fAddress","label":"所在地区","name":"fAddress","relation":"fAddress","type":"String"},"fCommentsNumber":{"define":"fCommentsNumber","label":"评价数量","name":"fCommentsNumber","relation":"fCommentsNumber","rules":{"calculate":"$model.commentsData.count()"},"type":"String"},"fDetail":{"define":"fDetail","label":"详情","name":"fDetail","relation":"fDetail","type":"String"},"fImg":{"define":"fImg","label":"图片","name":"fImg","relation":"fImg","type":"String"},"fOldPrice":{"define":"fOldPrice","label":"原价格","name":"fOldPrice","relation":"fOldPrice","rules":{"number":true},"type":"Float"},"fPostage":{"define":"fPostage","label":"邮费","name":"fPostage","relation":"fPostage","type":"String"},"fPrice":{"define":"fPrice","label":"价格","name":"fPrice","relation":"fPrice","rules":{"number":true},"type":"Float"},"fRecord":{"define":"fRecord","label":"买出数量","name":"fRecord","relation":"fRecord","rules":{"integer":true},"type":"Integer"},"fTitle":{"define":"fTitle","label":"标题","name":"fTitle","relation":"fTitle","type":"String"},"id":{"define":"id","label":"id","name":"id","relation":"id","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"goodsDataCustomRefresh"},"idColumn":"id","limit":20,"xid":"goodsData"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"fConsistent":{"define":"fConsistent","label":"描述相符","name":"fConsistent","relation":"fConsistent","rules":{"number":true},"type":"Float"},"fFocusNumber":{"define":"fFocusNumber","label":"关注人数","name":"fFocusNumber","relation":"fFocusNumber","rules":{"integer":true},"type":"Integer"},"fGoodsNumber":{"define":"fGoodsNumber","label":"商品数量","name":"fGoodsNumber","relation":"fGoodsNumber","rules":{"integer":true},"type":"Integer"},"fLevel":{"define":"fLevel","label":"等级","name":"fLevel","relation":"fLevel","rules":{"integer":true},"type":"Integer"},"fService":{"define":"fService","label":"服务态度","name":"fService","relation":"fService","rules":{"number":true},"type":"Float"},"fShopImg":{"define":"fShopImg","label":"店标","name":"fShopImg","relation":"fShopImg","type":"String"},"fShopName":{"define":"fShopName","label":"店名","name":"fShopName","relation":"fShopName","type":"String"},"id":{"define":"id","name":"id","relation":"id","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"shopDataCustomRefresh"},"idColumn":"id","limit":20,"xid":"shopData"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"fGoodsID":{"define":"fGoodsID","label":"商品ID","name":"fGoodsID","relation":"fGoodsID","type":"String"},"fName":{"define":"fName","label":"参数名","name":"fName","relation":"fName","type":"String"},"fParameter":{"define":"fParameter","label":"参数","name":"fParameter","relation":"fParameter","type":"String"},"id":{"define":"id","name":"id","relation":"id","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"parameterDataCustomRefresh"},"idColumn":"id","limit":20,"xid":"parameterData"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"fColor":{"define":"fColor","label":"颜色","name":"fColor","relation":"fColor","type":"String"},"fGoodID":{"define":"fGoodID","label":"商品ID","name":"fGoodID","relation":"fGoodID","type":"String"},"fState":{"define":"fState","label":"状态","name":"fState","relation":"fState","rules":{"integer":true},"type":"Integer"},"id":{"define":"id","label":"id","name":"id","relation":"id","type":"String"}},"directDelete":false,"events":{},"idColumn":"id","initData":"[{\"id\":\"1\",\"fGoodID\":\"1\",\"fColor\":\"少女粉\",\"fState\":0},{\"id\":\"2\",\"fGoodID\":\"1\",\"fColor\":\"水晶蓝\",\"fState\":0},{\"id\":\"3\",\"fGoodID\":\"1\",\"fColor\":\"象牙白\",\"fState\":0},{\"id\":\"4\",\"fGoodID\":\"1\",\"fColor\":\"气质黑\",\"fState\":0},{\"id\":\"5\",\"fGoodID\":\"1\",\"fColor\":\"浅米色\",\"fState\":0},{\"id\":\"6\",\"fGoodID\":\"1\",\"fColor\":\"35\",\"fState\":0},{\"id\":\"7\",\"fGoodID\":\"1\",\"fColor\":\"36\",\"fState\":0},{\"id\":\"8\",\"fGoodID\":\"1\",\"fColor\":\"37\",\"fState\":0},{\"id\":\"9\",\"fGoodID\":\"1\",\"fColor\":\"38\",\"fState\":0}]","limit":20,"xid":"colorData"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"state":{"define":"state","label":"显示状态","name":"state","relation":"state","rules":{"integer":true},"type":"Integer"}},"directDelete":false,"events":{},"idColumn":"state","initData":"[{\"state\":0}]","limit":20,"xid":"stateData"});
}}); 
return __result;});