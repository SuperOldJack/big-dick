/*��JS�ļ�*/
function AjaxProcesser(objID){
	this.target="";
	this.defaultStyle=false;
	this.processID="";//����ID
	this.interValID=0;//��ʱ��ID
	this.timeTick=300; //���̲�ѯʱ����
	this.frm=null;//��
	this.submit=null;//�ύ��ť\
	this.processIng=null;
	this.processBar=null;//������
	this.process=null;//����
	this.processInfo=null;//������ϸ��Ϣ
	this.uploader=null;//����iframe
	this.split=null;//�������һ���ļ��ı�ʾ
	this.appendTo=_.$(objID);//����
	this.appendTo.style.cssText="position:absolute;border:1px #005EAC solid;margin:0px;padding:1px;background-color:#eeeeee;height:auto;";
	this.files={count:0};//�ļ�����
	this.startTime=0;//�ϴ���ʼʱ��	
	this.createUploader();//����AJAX�ϴ�����
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
    this.processIng.innerHTML="��ѡ���ļ�...";
	return;
};


AjaxProcesser.prototype.addFile=function(){  //���󷽷�--���һ���ļ�
	_this=this;
	var file=document.createElement("input");//����һ���ļ���
	file.type="file";
	file.name="file" + (++this.files.count);
	file.size=40;
	if(!this.defaultStyle){file.style.cssText="height:20px;border:1px #aaaaaa solid;padding:3px 0px 1px 0px;margin:3px;";}
	this.files[file.name]=file; //��ӵ��ļ�����
	var b=document.createElement("br");
	this.frm.insertBefore(b,this.split);
	this.frm.insertBefore(file,this.split);//��ӵ���	
	var remove=document.createElement("input");//����һ���Ƴ���ť
	remove.value="�Ƴ�";
	remove.type="button";
	if(!this.defaultStyle){remove.style.cssText="height:20px;border:1px #aaaaaa solid;padding:3px 0px 1px 0px;margin:3px;";}
	remove.onclick=function(){
		_this.frm.removeChild(this.previousSibling.previousSibling);
		_this.frm.removeChild(this.previousSibling);
		_this.frm.removeChild(this);
	};
	this.frm.insertBefore(remove,this.split);//��ӵ���
};

AjaxProcesser.prototype.createUploader=function(){
	_this=this;
	
	/*����������ϸ��Ϣ��ʾ*/
	var processIng=document.createElement("div");
	processIng.style.cssText="width:406px;font-size:9pt;height:13px;border:0px #005EAC solid;margin:0px;padding:3px 0px 2px 5px;background-color:#6D84B4;color:#ffffff;font-weight:bold;";
     var _ThisClose=document.createElement("span");
     _ThisClose.style.cssText="float:right;margin-right:5px;cursor:pointer;";
     _ThisClose.innerHTML="�ر�";
     _ThisClose.onclick=function(){
        _this.appendTo.style.display="none";
     };
     processIng.appendChild(_ThisClose);
     var s=document.createElement("span");
     s.innerHTML="����";
     processIng.appendChild(s);
	this.processIng=s;
	this.appendTo.appendChild(processIng);
	
	/*����form��*/
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
	this.files[file.name]=file; //��ӵ��ļ�����
	frm.appendChild(file);//��ӵ���

	var button=document.createElement("input");//����һ����ť,�����ϴ�
	button.value="�ϴ�";
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
	frm.appendChild(button);//�Ѱ�ť��ӵ���\
	this.frm=frm;
	this.appendTo.appendChild(frm);//�ѱ���ӵ�������
	
	
	var processDiv=document.createElement("div");//�����ڶ���������������Ϣ
	processDiv.style.cssText="display:none;padding:3px;font-size:9pt;border:1px #eeeeee solid;width:400px;margin:5px 2px 2px 0px;height:auto;";
	var processBar=document.createElement("div");//����һ��������
	processBar.style.cssText="font-size:9pt;width:400px;padding:0px;margin:0px;height:auto;border:1px #dddddd solid;background-color:#ffffff;";
	var process=document.createElement("div");//��������
	process.style.cssText="font-size:9pt;text-align:center;background-color:#6D84B4;width:0px;height:13px;padding:1px 0px 0px 2px;"
	this.process=process;
	processBar.appendChild(process);//�ѽ�����ӵ�������
	this.processBar=processBar;
	processDiv.appendChild(processBar);//�ѽ�������ӵ�����
	
	var processInfo=document.createElement("div");//����������ϸ��Ϣ��ʾ
	processInfo.style.cssText="padding:2px 5px 2px 1px;font-size:9pt;"
	this.processInfo=processInfo;
	processDiv.appendChild(processInfo);//�ѽ�����ϸ��Ϣ��ʾ��ӵ�����
	
	this.processDiv=this.appendTo.appendChild(processDiv);
	_.EndragEx(processIng,_this.appendTo,0,0);
};

/*��ȡ�ϴ�����*/
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
            var pro=_this.getInformation(msg);            //���ﷵ�����е��ϴ���Ϣ,����ʾ��д��Ϣ�������ɾ���
            var str="";
            var img="�ߡ�";
            if(pro.finish){img="�� ";}
            if(pro.step=="faild"){img="��";}
            _this.processIng.innerHTML= str + img + pro.alt;
            str= str + "�ܴ�С:" + reSize(pro.total);
            str= str + "&nbsp; <span style=\"color:green;\">���ϴ�:" + reSize(pro.cur) + "</span>";
			str= str + "&nbsp; <span style=\"color:red;\">�ϴ��ٶ�:" + pro.speed + "</span>";;
            _this.processInfo.innerHTML= str;
            _this.process.innerHTML=pro.percent;
            _this.process.style.width=Math.floor(398 * pro.process) + "px"; //��ʾ����
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

/*��ȡ�ϴ���Ϣ*/
AjaxProcesser.prototype.getInformation=function(info){
    //��Ϣ����,�벻Ҫ�޸�
    var uploadInfo={
        ID:info.ID,         //�ϴ��Ľ���ID
        step:info.step,     //�ϴ����̵�Ӣ����ʾ
        DT:info.dt,         //�ϴ�����ʱ��
        total:info.total,   //�ϴ��������ݴ�С(�ֽ�)
        cur:info.now,       //�Ѿ��ϴ������ݴ�С
        speed:reSize(parseInt(info.now/((Date.parse(new Date())-this.startTime)/1000))) + "/��",
        process:(Math.floor((info.now / info.total) * 100) / 100),  //�ϴ����ȵ�С����ʽ,���ڽ�����
        percent:(Math.floor((info.now / info.total) * 10000) / 100) + "%", //���̽��ȵİٷֱ���ʽ
        alt:"",             //�ϴ����̵�������ʾ
        msg:"",             //������ʾ������Ϣ,�������ԭ���
        finish:false        //�Ƿ��Ѿ����
    };
    /*״̬˵��*/
    switch(info.step){
        case "":
            uploadInfo.alt="���ڳ�ʼ���ϴ�...";
            break;
        case "uploading":
            uploadInfo.alt="�����ϴ�...";
            break;
        case "uploaded":
            uploadInfo.alt="�ϴ����,����������������...";
            break;
        case "processing":
            uploadInfo.alt="���ڴ����ļ�: " + info.description;
            break;
        case "processed":
            uploadInfo.alt="�����������,׼�������ļ�...";
            break;
        case "saving":
            uploadInfo.alt="���ڱ����ļ�: " + info.description;
            break;
        case "saved":
            uploadInfo.alt="�ļ��������,�ϴ��ɹ�!";
            uploadInfo.msg=eval("[" + info.description.substr(0,info.description.length-1) + "]")
            uploadInfo.finish=true;
            break;
        case "faild":
            uploadInfo.alt="�ϴ�ʧ��!";
            uploadInfo.msg=info.description;
            uploadInfo.finish=true;       
            break;
        default:
            uploadInfo.alt="�޴˲���!";
            uploadInfo.finish=true;
    }
    return uploadInfo;
}


/*��ʽ������*/
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


/*�����ϴ�ID*/
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