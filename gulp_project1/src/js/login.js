require(['./requirejs.config'], () => {
	require(["jquery", "header", "footer"], () => {
		class Tab{
			constructor() {
				this.init();
			}
			// 绑定事件
			init() {
				$(".switch a").on("click", function(){
					$(".form").eq($(this).index()).addClass("ac").siblings().removeClass("ac");
				});
			}
		}
		return new Tab();
	});
});



//登录
var flag = false;
			var input = $("");
			var str;
			$("#change").onclick = function(){
				var arr = ['0','1','3','4','5','6','7','8','9','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
				str = "";
				var strlen = 4;
				for(var i = 0; i < strlen; i++){
					var num = Math.floor(Math.random()*arr.length);
					str += arr[num];
				}
				var aCo = $("");
				aCo.value = str;
			}
			$("").onclick = function(){
				var user = input[0].value;
				var reg = /^[0-9 a-zA-Z_]{4,20}$/;
				if(reg.test(user) === false){
					alert("用户名不正确");
					flag = false;
				}else{
					flag = true;
				}
				
				var psw = input[1].value;
				var reg = /^.{6,32}$/;
				if(reg.test(psw) === false){
					alert("密码长度要大于6位数");
					flag = false;
				}else{
					flag = true;
				}
				var yan = $("#");
				if(yan.value.toLowerCase() == str.toLowerCase()){
					flag = true;
				}else{
					alert("验证码错误");
					flag = false;
				}
				if(flag){
					alert("登录成功");
				}else{
					alert("登录失败");
				}
			}
		$("").onsubmit = function(event){
			event.preventDefault();
			var _username = $("#user").value,
				_password = $("#psw").value;
			var status = $("#che").checked;	
			if(status){
				cookie("username",_username, {expires:10});
				cookie("password",_password, {expires:10});
			}else{
				removeCookie("username");
				removeCookie("password");
			}
		}
		

//注册

<script type="text/javascript">
		var input = QFTools.$("input");
		var btn = QFTools.$("button")[0];
		var login = QFTools.$("#login");
		var flag = false;
		btn.onclick = function(){
            var user = input[0].value;
			var reg=/^[0-9 a-zA-Z_]{1,}$/;    
			if(reg.test(user)===false){
			    alert("用户名不正确");
				flag = false;
			    }else{
			    	flag = true;
			    }
            
			var psw = input[1].value;
			reg = /^.{6,}$/
			if(reg.test(psw)===false){
			    alert("密码长度要大于6位");
				flag = false;
			    }
			    else{
			    	flag = true;
			    }

			var psw1 = input[2].value;
			if(psw!==psw1){
			    alert("请输入相同密码");
				flag = false;
			    }else{
			    	flag = true;
			    }

			var pNum = input[3].value;
			reg = /^1[35789]\d{9}$/
			if(reg.test(pNum)===false){
			    alert("请输入正确的手机号");
				flag = false;
			    }else{
			    	flag = true;
			    }

			var pNum = input[4].value;
			reg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/
			if(reg.test(pNum)===false){
			    alert("请输入正确的邮箱");
				flag = false;
			    }else{
			    	flag = true;
			    }

            if(flag){
            alert("注册成功") 	
            }   

		}