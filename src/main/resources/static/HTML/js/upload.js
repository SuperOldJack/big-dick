	/*======================================
	下面语句使上传控件显示在上面ID为uploadContenter的Div标签
	提交URL为upload.asp保存目录为upload
	表单提交到上面name属性为AnUploader的iframe里面；
	========================================*/	
	var AjaxUp=new AjaxProcesser("uploadContenter");	
	//设置提交到的iframe名称
	AjaxUp.target="AnUploader";  	
	//上传处理页面,尽量不要更改
	AjaxUp.url="upload.asp"; 	
	//保存目录
	AjaxUp.savePath="../photo";
	
	var contenter=document.getElementById("uploadContenter");
	contenter.style.display="none"; //隐藏容器
	
	function showUploader(objID,srcElement){
		AjaxUp.reset();  //重置上传控件
		contenter.style.display="block"; //显示容器
		var ps=_.abs(srcElement);//作用--获取指定标签的绝对坐标,目的是为了把上传控件定位到按钮下面
		contenter.style.top=(ps.y + 20) + "px";  
		contenter.style.left=ps.x + "px";
		//上传成功时要执行的程序
		AjaxUp.succeed=function(files){
		    var fujian=document.getElementById(objID);
			fujian.value=AjaxUp.savePath + "/" + files[0].name;  //因为上传控件就只上传一个 文件，这里索引是0
			contenter.style.display="none";
		}
		//上传失败时要执行的程序
		AjaxUp.faild=function(msg){alert("失败原因:" + msg);contenter.style.display="none";}
	}