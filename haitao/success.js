define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	require("cordova!com.justep.cordova.plugin.alipay")
	
	var Model = function(){
		this.callParent();
	};
	//完成按钮
	Model.prototype.mainBtnClick = function(event){
		/*
		1、完成按钮点击事件
		2、打开首页
		*/
		justep.Shell.fireEvent("onHomeContent",{});
		justep.Shell.showMainPage();
	};

	Model.prototype.button5Click = function(event){
            if (!navigator.alipay) {//判断app里是否有支付宝查件
			return;
		}
		var notifyUrl = location.origin;
		var tradeNo = justep.UUID.createUUID();
		var alipay = navigator.alipay;
		alipay.pay({
			"seller" : "huangyx@justep.com", // 卖家支付宝账号或对应的支付宝唯一用户号
			"subject" : "嗨淘", // 商品名称
			"body" : "嗨淘", // 商品详情
			"price" : "0.01", // 金额，单位为RMB
			"tradeNo" : tradeNo, // 唯一订单号
			"timeout" : "30m", // 超时设置 
			"notifyUrl" : notifyUrl
		}, // 服务器通知路径
		function(message) {
			var responseCode = parseInt(message);
			alert("支付成功")
		}, function(msg) {
			alert("支付失败")
		});
	};

	return Model;
});