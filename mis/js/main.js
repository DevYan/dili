$(function(){	
/*
 *菜单折叠
 */
 var pageId = $('body').attr('data-id');
 console.log(pageId);

 $('#menu').append($(
 	'<div class="nav ' + (pageId==1?'active':'') +'">'
 		+'<a href="网站后台页面1.html">订单管理</a>'
 	+'</div>'
 	+ '<div class="nav ' + (pageId==2?'active':'') +'">'
 		+'<a href="网站后台页面3.html">酒店管理</a>'
 		+'<p class="subMenu"><a href="网站后台页面10.html">添加酒店</a></p>'
 		+'<p class="subMenu"><a href="网站后台页面4.html">编辑酒店</a></p>'
 		+'<p class="subMenu"><a href="网站后台页面15.html">暂停酒店</a></p>'
 	+'</div>'
 	+ '<div class="nav ' + (pageId==3?'active':'') +'">'
 		+'<a href="网站后台页面16.html">商品管理</a>'
 		+'<p class="subMenu"><a href="网站后台页面18.html">增加商品</a></p>'
 		+'<p class="subMenu"><a href="网站后台页面17.html">编辑商品</a></p>'
 		+'<p class="subMenu"><a href="网站后台页面20.html">下架商品</a></p>'
 	+'</div>'
 	));
/*
 * 切换显示详情
 */
 $('.trigger').click(function(){
 	$('.innBox').slideToggle();
 	$(this).toggleClass('active');
 });
})
