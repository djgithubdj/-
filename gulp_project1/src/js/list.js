require(['./requirejs.config'], () => {
	require(["jquery","template","header","footer"],($,template)=>{
		function lists(){
			this.init();
		}
		$.extend(lists.prototype,{
			init(){
				$.getJSON("http://rap2api.taobao.org/app/mock/data/763767",(data)=>{
					const html = template("listPro",{ListP:data.res_body.list});
					$("#ProductList").html(html)
				})
			}
		})
		new lists();
	});
});
