/*主JS文件*/
function AjaxProcesser(objID){
	this.target="";
	this.defaultStyle=false;
	this.processID="";//进程ID
	this.interValID=0;//计时器ID
	this.timeTick=300; //进程查询时间间隔
	this.frm=null;//表单
	this.submit=null;//提交按钮\
	this.processIng=null;
	this.processBar=null;//进度条
	this.process=null;//进度
	this.processInfo=null;//进度详细信息
	this.uploader=null;//隐藏iframe
	this.split=null;//用于添加一个文件的标示
	this.appendTo=_.$(objID);//容器
	this.appendTo.style.cssText="position:absolute;border:1px #005EAC solid;margin:0px;padding:1px;background-color:#eeeeee;height:auto;";
	this.files={count:0};//文件集合
	this.startTime=0;//上传开始时间	
	this.createUploader();//创建AJAX上传对象
	this.url="";
	this.savePath="";
}

AjaxProcesser.prototype.succeed=function(a){
	return;
};

AjaxProcesser.prototype.faild=function(a){
	return;
};

AjaxProcesser.prototype.reset=function(a){
    this.processInfo.innerHTML="";
    this.processDiv.style.display="none";
    this.process.innerHTML="";
    this.process.style.width="0px";
    this.processIng.innerHTML="请选择文件...";
	return;
};


AjaxProcesser.prototype.addFile=function(){  //对象方法--添加一个文件
	_this=this;
	var file=document.createElement("input");//创建一个文件域
	file.type="file";
	file.name="file" + (++this.files.count);
	file.size=40;
	if(!this.defaultStyle){file.style.cssText="height:20px;border:1px #aaaaaa solid;padding:3px 0px 1px 0px;margin:3px;";}
	this.files[file.name]=file; //添加到文件集合
	var b=document.createElement("br");
	this.frm.insertBefore(b,this.split);
	this.frm.insertBefore(file,this.split);//添加到表单	
	var remove=document.createElement("input");//生成一个移除按钮
	remove.value="移除";
	remove.type="button";
	if(!this.defaultStyle){remove.style.cssText="height:20px;border:1px #aaaaaa solid;padding:3px 0px 1px 0px;margin:3px;";}
	remove.onclick=function(){
		_this.frm.removeChild(this.previousSibling.previousSibling);
		_this.frm.removeChild(this.previousSibling);
		_this.frm.removeChild(this);
	};
	this.frm.insertBefore(remove,this.split);//添加到表单
};

AjaxProcesser.prototype.createUploader=function(){
	_this=this;
	
	/*创建进度详细信息显示*/
	var processIng=document.createElement("div");
	processIng.style.cssText="width:406px;font-size:9pt;height:13px;border:0px #005EAC solid;margin:0px;padding:3px 0px 2px 5px;background-color:#6D84B4;color:#ffffff;font-weight:bold;";
     var _ThisClose=document.createElement("span");
     _ThisClose.style.cssText="float:right;margin-right:5px;cursor:pointer;";
     _ThisClose.innerHTML="关闭";
     _ThisClose.onclick=function(){
        _this.appendTo.style.display="none";
     };
     processIng.appendChild(_ThisClose);
     var s=document.createElement("span");
     s.innerHTML="进度";
     processIng.appendChild(s);
	this.processIng=s;
	this.appendTo.appendChild(processIng);
	
	/*创建form表单*/
	var frm=document.createElement("form");
	frm.style.cssText="margin:0px;padding:0px;";
	frm.method="post";
	frm.encoding="multipart/form-data";
	frm.target=this.target;
	var file=document.createElement("input");
	file.type="file";
	file.name="file" + (++this.files.count);
	file.size=40;
	if(!this.defaultStyle){file.style.cssText="height:20px;border:1px #aaaaaa solid;padding:3px 0px 1px 0px;margin:3px;";}
	this.files[file.name]=file; //添加到文件集合
	frm.appendChild(file);//添加到表单

	var button=document.createElement("input");//创建一个按钮,用于上传
	button.value="上传";
	button.type="button";
	if(!this.defaultStyle){button.style.cssText="height:20px;border:1px #aaaaaa solid;padding:3px 0px 1px 0px;margin:3px;";}
	button.onclick=function(){
		_this.processID="AN" + getID();
		var action="";
		action=_this.url + "?path=" + _this.savePath + "&processid=" + _this.processID;
		_this.frm.action=action;
		_this.frm.target=_this.target;
		_this.frm.submit();
		_this.startTime=Date.parse(new Date());
		_this.processDiv.style.display="block";
		_this.interValID=window.setInterval("_this.getProcess()",_this.timeTick);
	};
	frm.appendChild(button);//把按钮添加到表单\
	this.frm=frm;
	this.appendTo.appendChild(frm);//把表单添加到容器中
	
	
	var processDiv=document.createElement("div");//创建第二个容器来容纳信息
	processDiv.style.cssText="display:none;padding:3px;font-size:9pt;border:1px #eeeeee solid;width:400px;margin:5px 2px 2px 0px;height:auto;";
	var processBar=document.createElement("div");//创建一个进度条
	processBar.style.cssText="font-size:9pt;width:400px;padding:0px;margin:0px;height:auto;border:1px #dddddd solid;background-color:#ffffff;";
	var process=document.createElement("div");//创建进度
	process.style.cssText="font-size:9pt;text-align:center;background-color:#6D84B4;width:0px;height:13px;padding:1px 0px 0px 2px;"
	this.process=process;
	processBar.appendChild(process);//把进度添加到进度条
	this.processBar=processBar;
	processDiv.appendChild(processBar);//把进度条添加到容器
	
	var processInfo=document.createElement("div");//创建进度详细信息显示
	processInfo.style.cssText="padding:2px 5px 2px 1px;font-size:9pt;"
	this.processInfo=processInfo;
	processDiv.appendChild(processInfo);//把进度详细信息显示添加到容器
	
	this.processDiv=this.appendTo.appendChild(processDiv);
	_.EndragEx(processIng,_this.appendTo,0,0);
};

/*获取上传进程*/
AjaxProcesser.prototype.getProcess=function(){
	_this=this;
    _.Ajax({
        asc:true,
 	    method	: "get",
	    dataType: "json",
 	    url	    : "getProcess.asp?processid=" + this.processID + "&rnd=" + Math.random(),
 	    data	: "",
 	    succeed	: function(msg){
 	    if(msg==null){return;}
            var pro=_this.getInformation(msg);            //这里返回所有的上传信息,想显示那写信息可以自由决定
            var str="";
            var img="∵∴";
            if(pro.finish){img="√ ";}
            if(pro.step=="faild"){img="×";}
            _this.processIng.innerHTML= str + img + pro.alt;
            str= str + "总大小:" + reSize(pro.total);
            str= str + "&nbsp; <span style=\"color:green;\">已上传:" + reSize(pro.cur) + "</span>";
			str= str + "&nbsp; <span style=\"color:red;\">上传速度:" + pro.speed + "</span>";;
            _this.processInfo.innerHTML= str;
            _this.process.innerHTML=pro.percent;
            _this.process.style.width=Math.floor(398 * pro.process) + "px"; //显示进度
            if(pro.finish){
				_this.frm.reset();
				window.clearInterval(_this.interValID);
				if(pro.step=="faild"){
					_this.faild(pro.msg);
				}
				if(pro.step=="saved"){
					_this.succeed(pro.msg);
				}
            }
        }
    });
};

/*获取上传信息*/
AjaxProcesser.prototype.getInformation=function(info){
    //信息对象,请不要修改
    var uploadInfo={
        ID:info.ID,         //上传的进程ID
        step:info.step,     //上传进程的英文提示
        DT:info.dt,         //上传进程时间
        total:info.total,   //上传的总数据大小(字节)
        cur:info.now,       //已经上传的数据大小
        speed:reSize(parseInt(info.now/((Date.parse(new Date())-this.startTime)/1000))) + "/秒",
        process:(Math.floor((info.now / info.total) * 100) / 100),  //上传进度的小数形式,用于进度条
        percent:(Math.floor((info.now / info.total) * 10000) / 100) + "%", //进程进度的百分比形式
        alt:"",             //上传进程的中文提示
        msg:"",             //用于显示额外信息,例如错误原因等
        finish:false        //是否已经完成
    };
    /*状态说明*/
    switch(info.step){
        case "":
            uploadInfo.alt="正在初始化上传...";
            break;
        case "uploading":
            uploadInfo.alt="正在上传...";
            break;
        case "uploaded":
            uploadInfo.alt="上传完毕,服务器处理数据中...";
            break;
        case "processing":
            uploadInfo.alt="正在处理文件: " + info.description;
            break;
        case "processed":
            uploadInfo.alt="处理数据完毕,准备保存文件...";
            break;
        case "saving":
            uploadInfo.alt="正在保存文件: " + info.description;
            break;
        case "saved":
            uploadInfo.alt="文件保存完毕,上传成功!";
            uploadInfo.msg=eval("[" + info.description.substr(0,info.description.length-1) + "]")
            uploadInfo.finish=true;
            break;
        case "faild":
            uploadInfo.alt="上传失败!";
            uploadInfo.msg=info.description;
            uploadInfo.finish=true;       
            break;
        default:
            uploadInfo.alt="无此操作!";
            uploadInfo.finish=true;
    }
    return uploadInfo;
}


/*格式化数据*/
var reSize =function (num){
    var Size=parseInt(num);
    var res="";
    if(Size < 1024){
       res= Math.floor(Size * 100) /100 + "B"
    }else if(Size >= 1024 && Size < 1048576){
       res= Math.floor((Size / 1024) * 100) /100  + "KB"
    }else if(Size >= 1048576){
       res= Math.floor(((Size / 1024) / 1024) *  100) /100 + "MB"
    }
    return res;
};


/*生成上传ID*/
var getID=function (){
    var mydt=new Date();
    with(mydt){
        var y=getYear();if(y<10){y='0'+y}
        var m=getMonth()+1;if(m<10){m='0'+m}
        var d=getDate();if(d<10){d='0'+d}
        var h=getHours();if(h<10){h='0'+h}
        var mm=getMinutes();if(mm<10){mm='0'+mm}
        var s=getSeconds();if(s<10){s='0'+s}
    }
    var r="000" + Math.floor(Math.random() * 1000);
    r=r.substr(r.length-4);
    return y + m + d + h + mm + s + r;
};