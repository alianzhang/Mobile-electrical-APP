define(function(require){
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/contents/content');
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/data/baasData');
require('$model/UI2/system/components/justep/contents/contents');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/bootstrap/inputGroup/inputGroup');
require('$model/UI2/system/components/justep/input/input');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/haitao/user'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cMNjQfy';
	this._flag_='52122d1fe31d0216e23b6742b3db8db3';
	this.callParent(contextUrl);
 var __BaasData__ = require("$UI/system/components/justep/data/baasData");new __BaasData__(this,{"autoLoad":false,"autoNew":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"fAddress":{"define":"fAddress","label":"col2","name":"fAddress","relation":"fAddress","type":"String"},"fID":{"define":"fID","label":"col3","name":"fID","relation":"fID","type":"String"},"fName":{"define":"fName","label":"col0","name":"fName","relation":"fName","type":"String"},"fPhoneNumber":{"define":"fPhoneNumber","label":"col1","name":"fPhoneNumber","relation":"fPhoneNumber","type":"String"}},"directDelete":false,"events":{},"filters":{"filter0":"","userFilter":"fID = :user"},"idColumn":"fID","limit":20,"queryAction":"queryHaitao_user","saveAction":"saveHaitao_user","tableName":"haitao_user","url":"/qb/haitao","xid":"userData"});
}}); 
return __result;});