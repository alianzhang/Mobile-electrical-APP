<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" class="main13" component="$UI/system/components/justep/window/window"
  design="device:mobile;" xid="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;left:118px;top:71px;" onLoad="modelLoad" onActive="modelActive"><div component="$UI/system/components/justep/data/baasData" autoLoad="false" xid="userData" idColumn="fID" autoNew="true" queryAction="queryHaitao_user" tableName="haitao_user" url="/qb/haitao" saveAction="saveHaitao_user">
   <column label="col3" name="fID" type="String" xid="default13"></column>
  <column label="col0" name="fName" type="String" xid="default10"></column>
  <column label="col1" name="fPhoneNumber" type="String" xid="default11"></column>
  <column label="col2" name="fAddress" type="String" xid="default12"></column>
  <filter name="userFilter" xid="filter1">fID = :user</filter>
  <filter name="filter0" xid="filter3"></filter>
  <filter name="userFilter" xid="filter5"><![CDATA[fID = :user]]></filter></div></div>  
    
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel1">
   <div class="x-panel-top" xid="top1"></div>
   <div class="x-panel-content" xid="content3"><div component="$UI/system/components/justep/contents/contents" class="x-contents x-full" active="0" xid="contents2">
   <div class="x-contents-content" xid="ownContent" onActive="ownContentActive"><div xid="photoDiv" style="height:128px;width:128px;margin:5px auto;">
   <img alt="" xid="photoImage" height="100%" style="width:100%;"></img></div>
  <div class="panel panel-default x-card" xid="div11">
   <div class="panel-heading clearfix" xid="div12">
    <h3 class="panel-title pull-left" xid="h33"><![CDATA[联系方式]]></h3></div> 
   <div class="modal-body" xid="div13">
    <form class="form-horizontal" xid="form3">
     <div class="form-group" xid="formGroup7">
      <label class="col-xs-3 control-label" style="word-spacing:20px;padding-top: 12px;" xid="controlLabel7" bind-text=' $model.userData.label("fName")'>姓名</label>
      <div class="col-xs-9" xid="col7">
       <input component="$UI/system/components/justep/input/input" class="form-control x-edit" xid="input9" bind-ref="userData.ref('fName')"></input></div> </div> 
     <div class="form-group" xid="formGroup8">
      <label class="col-xs-3 control-label" style="word-spacing:20px;padding-top: 12px;" xid="controlLabel8" bind-text=' $model.userData.label("fPhoneNumber")'>电话</label>
      <div class="col-xs-9" xid="col8">
       <input component="$UI/system/components/justep/input/input" class="form-control x-edit" xid="input8" bind-ref="userData.ref('fPhoneNumber')"></input></div> </div> 
     <div class="form-group" xid="formGroup9">
      <label class="col-xs-3 control-label" style="word-spacing:20px;padding-top: 12px;" xid="controlLabel9" bind-text=' $model.userData.label("fAddress")'>地址</label>
      <div class="col-xs-9" xid="col9">
       <div class="input-group" component="$UI/system/components/bootstrap/inputGroup/inputGroup" xid="inputGroup2">
        <input type="text" class="form-control" component="$UI/system/components/justep/input/input" xid="input5" bind-ref="userData.ref('fAddress')"></input>
        <div class="input-group-btn" xid="div14">
         <a component="$UI/system/components/justep/button/button" class="btn btn-link" label=" 定位" xid="location" onClick="locationClick" icon="icon-android-location">
          <i xid="i13" class="icon-android-location"></i>
          <span xid="span19">定位</span></a> </div> </div> </div> </div> </form> </div> 
   <div class="panel-footer clearfix" xid="div15">
    <a component="$UI/system/components/justep/button/button" class="btn btn-success btn-sm" label="保存用户信息" xid="saveUserBtn" onClick="saveUserBtnClick" style="float: right;width:100px;">
     <i xid="i2"></i>
     <span xid="span1">保存用户信息</span></a> </div> </div></div></div></div>
   <div class="x-panel-bottom" xid="bottom1"></div></div></div>
