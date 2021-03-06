define(function(require){
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/button/buttonGroup');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/button/radio');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/popOver/popOver');
require('$model/UI2/system/components/justep/input/input');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/haitao/order'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cI7FRja';
	this._flag_='ffcc00dde6dbc694b66999c0f6b74499';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":false,"confirmRefresh":false,"defCols":{"fAddress":{"define":"fAddress","label":"所在地区","name":"fAddress","relation":"fAddress","type":"String"},"fChoose":{"define":"fChoose","label":"选择","name":"fChoose","relation":"fChoose","rules":{"integer":true},"type":"Integer"},"fColor":{"define":"fColor","label":"颜色","name":"fColor","relation":"fColor","type":"String"},"fImg":{"define":"fImg","label":"图片","name":"fImg","relation":"fImg","type":"String"},"fNumber":{"define":"fNumber","label":"数量","name":"fNumber","relation":"fNumber","rules":{"integer":true},"type":"Integer"},"fOldPrice":{"define":"fOldPrice","label":"原价格","name":"fOldPrice","relation":"fOldPrice","rules":{"number":true},"type":"Float"},"fPostage":{"define":"fPostage","label":"邮费","name":"fPostage","relation":"fPostage","type":"String"},"fPrice":{"define":"fPrice","label":"价格","name":"fPrice","relation":"fPrice","rules":{"number":true},"type":"Float"},"fRecord":{"define":"fRecord","label":"买出数量","name":"fRecord","relation":"fRecord","rules":{"integer":true},"type":"Integer"},"fShopID":{"define":"fShopID","label":"店铺ID","name":"fShopID","relation":"fShopID","type":"String"},"fSize":{"define":"fSize","label":"尺寸","name":"fSize","relation":"fSize","type":"String"},"fSum":{"define":"fSum","label":"总价","name":"fSum","relation":"fSum","rules":{"calculate":"$row.val('fChoose')==1?$row.val('fPrice')*$row.val('fNumber'):'0'","number":true},"type":"Float"},"fTitle":{"define":"fTitle","label":"标题","name":"fTitle","relation":"fTitle","type":"String"},"id":{"define":"id","label":"id","name":"id","relation":"id","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"goodsDataCustomRefresh"},"idColumn":"id","limit":20,"xid":"goodsData"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":false,"confirmRefresh":false,"defCols":{"fConsistent":{"define":"fConsistent","label":"描述相符","name":"fConsistent","relation":"fConsistent","rules":{"number":true},"type":"Float"},"fFocusNumber":{"define":"fFocusNumber","label":"关注人数","name":"fFocusNumber","relation":"fFocusNumber","rules":{"integer":true},"type":"Integer"},"fGoodsNumber":{"define":"fGoodsNumber","label":"商品数量","name":"fGoodsNumber","relation":"fGoodsNumber","rules":{"integer":true},"type":"Integer"},"fLevel":{"define":"fLevel","label":"等级","name":"fLevel","relation":"fLevel","rules":{"integer":true},"type":"Integer"},"fService":{"define":"fService","label":"服务态度","name":"fService","relation":"fService","rules":{"number":true},"type":"Float"},"fShopImg":{"define":"fShopImg","label":"店标","name":"fShopImg","relation":"fShopImg","type":"String"},"fShopName":{"define":"fShopName","label":"店名","name":"fShopName","relation":"fShopName","type":"String"},"id":{"define":"id","label":"id","name":"id","relation":"id","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"shopDataCustomRefresh"},"idColumn":"id","limit":20,"xid":"shopData"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"fCost":{"define":"fCost","label":"费用","name":"fCost","relation":"fCost","type":"String"},"fSendName":{"define":"fSendName","label":"配送方式","name":"fSendName","relation":"fSendName","type":"String"},"fState":{"define":"fState","label":"状态","name":"fState","relation":"fState","rules":{"integer":true},"type":"Integer"},"id":{"define":"id","label":"id","name":"id","relation":"id","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"sendDataCustomRefresh"},"idColumn":"id","limit":20,"xid":"sendData"});
}}); 
return __result;});