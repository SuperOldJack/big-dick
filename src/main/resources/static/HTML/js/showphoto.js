// JavaScript Document
document.write("<span id='hintdiv' style='display:none;position:absolute;z-index:500;'></span>");
function showhint(obj,title,info,genres,img)
{
    var top=obj.offsetTop;
    var showtype="up";
    var topimg="";
    var bottomimg="";
    var hintimg=img;
    var   oObj   =   event.srcElement;
	if (img == "") {
	  hintimg = "../photo/NoPic.jpg";	
	}
    if(oObj.tagName.toLowerCase()   ==   "td")
    {
      var   oTr   =   oObj.parentNode;
     if(!oTr.tag)   oTr.style.backgroundColor   =   "#E1E9FD";
    }
	title="<b>"+title+"</b>";
	info="<br>"+info;
	genres="<br>"+"<b>"+genres+"</b>";
    if(top<200)
    {
        showtype="down";
        topimg="";
        bottomimg="";
    }
    showhintinfo(obj,0,0,title,info,genres,0,showtype,topimg,bottomimg,hintimg);
}
function showhintinfo(obj, objleftoffset,objtopoffset, title, info ,genres, objheight, showtype ,topimg,bottomimg,hintimg)
{
    //var p = getposition1(obj);
    if((showtype==null)||(showtype ==""))
    {
        showtype =="up";
    }
    var html=" <div style='position:absolute; visibility: visible; width:161px;z-index:101;'> <p style='margin:0; padding:0;'></p> <div style='overflow:hidden; zoom:1; border-left:1px solid #000000; border-right:1px solid #000000; border-top:1px solid #000000;border-bottom:1px solid #000000;padding:3px 5px; text-align:left; word-break:break-all;letter-break:break-all;font: 12px/160% Tahoma, Verdana,snas-serif; color:#333333; background:#FFFFFF no-repeat;margin-top:5px;margin-bottom:5px;'> <span id='hintinfoup' style='font-size:12px;color:#003D7B'>"+title+"</span> <img style='float:left;margin:3 3px 3 3px;' src='"+hintimg+"' /> <span id='hintinfoup' style='font-size:11px'>"+info+genres+"</span> </div> <p style='margin:0; padding:0;'> </p> </div> <iframe id='hintiframe' style='position:absolute;z-index:50;width:166px;scrolling:none;' frameborder='0'></iframe>";//提示框里的布局样式
	document.getElementById("hintdiv").innerHTML=html;
    document.getElementById('hintdiv').style.display='block';
    document.getElementById('hintiframe').style.height= objheight + "px";
	document.getElementById("hintdiv").style.top=event.clientY+20+document.body.scrollTop;
    document.getElementById("hintdiv").style.left=event.clientX+20+document.body.scrollLeft;

}
    
function hidehintinfo()
{
var   oObj   =   event.srcElement;
if(oObj.tagName.toLowerCase()   ==   "td") 
{
var   oTr   =   oObj.parentNode;
if(!oTr.tag)   oTr.style.backgroundColor   =   "";
}
    document.getElementById('hintdiv').style.display='none';
//    document.getElementById('hintdivdown').style.display='none';
}
function getposition1(obj)
{
 document.getElementById("hintdiv").style.top=event.clientY+20+document.body.scrollTop;
 document.getElementById("hintdiv").style.left=event.clientX+20+document.body.scrollLeft;
}

function getPosition(o)
{
    var temp={};
    temp.left=temp.right=temp.top=temp.bottom=0;
    var oWidth=o.offsetWith,oHeight=o.offsetheight;
    while(o!=document.body)
    {
        temp.left+=o.offsetLeft;
        temp.top+=o.offsetTop;
        var border=parseInt(o.offsetParent.currentStyle.borderWidth);
        if(border)
        {
            temp.left+=border;
            temp.top+=border;
        }
        o=o.offsetParent;
    }
    temp.right=temp.left+oWidth;
    temp.bottom=temp.top+temp.oHeight;
    return temp;
}