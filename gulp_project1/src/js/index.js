require(["./requirejs.config"], () => {
	require(["jquery","header","footer"],($)=>{
		function index(){
			this.lbt();
		}
		$.extend(index.prototype,{
			//轮播图功能
			lbt:function(){
				var index = 0;
				//鼠标移动到点上的时候添加class名current，将其兄弟的class移除
				$(".circle").on("mousemove","b",(event)=>{
					var event = event.target;
					$(event).addClass("current").siblings().removeClass("current");
					let children = $(".circle")[0].children;
					index = $(event).index();//下标与img一致
//					console.log(index)
					let img = $(".box")[0].children;
//					console.log(img[index])
					$(img[index]).show().siblings().hide();
				})
				//自动切换轮播图
				var timer = setInterval(()=>{
					let img = $(".box")[0].children;
					let children = $(".circle")[0].children;
					index++;
					if(index>5)index=0;
					$(img[index]).show().siblings().hide();
					$(children[index]).addClass("current").siblings().removeClass("current");
				},2000)
			}
		})
		new index();
	});
});
