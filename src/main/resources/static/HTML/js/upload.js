	/*======================================
	�������ʹ�ϴ��ؼ���ʾ������IDΪuploadContenter��Div��ǩ
	�ύURLΪupload.asp����Ŀ¼Ϊupload
	���ύ������name����ΪAnUploader��iframe���棻
	========================================*/	
	var AjaxUp=new AjaxProcesser("uploadContenter");	
	//�����ύ����iframe����
	AjaxUp.target="AnUploader";  	
	//�ϴ�����ҳ��,������Ҫ����
	AjaxUp.url="upload.asp"; 	
	//����Ŀ¼
	AjaxUp.savePath="../photo";
	
	var contenter=document.getElementById("uploadContenter");
	contenter.style.display="none"; //��������
	
	function showUploader(objID,srcElement){
		AjaxUp.reset();  //�����ϴ��ؼ�
		contenter.style.display="block"; //��ʾ����
		var ps=_.abs(srcElement);//����--��ȡָ����ǩ�ľ�������,Ŀ����Ϊ�˰��ϴ��ؼ���λ����ť����
		contenter.style.top=(ps.y + 20) + "px";  
		contenter.style.left=ps.x + "px";
		//�ϴ��ɹ�ʱҪִ�еĳ���
		AjaxUp.succeed=function(files){
		    var fujian=document.getElementById(objID);
			fujian.value=AjaxUp.savePath + "/" + files[0].name;  //��Ϊ�ϴ��ؼ���ֻ�ϴ�һ�� �ļ�������������0
			contenter.style.display="none";
		}
		//�ϴ�ʧ��ʱҪִ�еĳ���
		AjaxUp.faild=function(msg){alert("ʧ��ԭ��:" + msg);contenter.style.display="none";}
	}