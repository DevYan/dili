$(function(){	
/*
 *菜单折叠
 */
 //订单
 // $('.f-bill').click(function(){
 // 	$('.f-bill').empty()
 // 	.append($('<p><a href="订单.html">订单</></p>'))
 // 	.append($('<p><a href="如何理赔.html">如何理赔</></p>'));
 // });
 //我的
 // $('.f-my').click(function(){
 // 	$('.f-my').empty()
 // 	.append($('<p><a href="我的.html">我的</></p>'))
 // 	.append($('<p><a href="联系人.html">联系人</></p>'))
 // 	.append($('<p><a href="登录.html">登录</></p>'))
 // 	.append($('<p><a href="#">退出</></p>'));
 // });
 //酒店
 $('.f-inn').click(function(){
 	$('.inn-box').empty()
 	.append($('<p><a href="酒店介绍.html">酒店服务</></p>'))
 	.append($('<p><a href="酒店查询.html">更多酒店</></p>'))
 	.append($('<p><a href="酒店用户登录.html">酒店登录</></p>'))
 	.append($('<p><a href="登录.html">网站登录</></p>'));
 });
/*
 * 显示隐藏保险
 */
 $('.trigger').click(function(){
 	$(this).siblings('.insure-content').slideToggle();
 	$(this).toggleClass('active');
 }); 
/*
 * 加减个数
 */
 $('.insure-people .jian').click(function(){
 	var num =  $(this).siblings('.num').html();
 	if (num >= 1) {
 		$(this).siblings('.num').html(--num);
 	};
 }); 
 $('.insure-people .add').click(function(){
 	var num =  $(this).siblings('.num').html();
 	$(this).siblings('.num').html(++num);
 });
/*
 * 回退
 */
 $('.backBtn').click(function(){
 	window.history.back();
 });
/*
 * 显示隐藏密码
 */
 $('.showPwd').click(function(){
 	$('#ipdPwd').attr('type','text');
 });
 $('.hidePwd').click(function(){
 	$('#ipdPwd').attr('type','password');
 });
/*
 * 红包费
 */
 $('#num1').change(function(){
 	console.log('2222');
 })
/*
 * 计入房费
 */
 $('.yesFee').click(function(){
 	$('.innArea').show();
 });
 $('.noFee').click(function(){
 	$('.innArea').hide();
 });
/*
 * 全选
 */
 $('.selectAll').click(function(){
 	$('input[type="checkbox"]').attr('checked',true);
 });
})
