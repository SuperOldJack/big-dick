function showitem(id,name)
{
	return("<table width='100%' cellspacing='0' cellpadding='2' border='0'><tr valign=middle  onMouseOver='onColor(this);' onMouseOut='offColor(this);'><td align='left' class='grayLine2'>&nbsp;<img src='../images/menu_dot.jpg'>&nbsp;<a href='"+id+"' target='main'>"+name+"</a></td></tr></table>")

}
function switchoutlookBar(number)
{
	var i = outlookbar.opentitle;
	outlookbar.opentitle=number;
	var id1,id2,id1b,id2b
	if (number!=i && outlooksmoothstat==0){
	if (number!=-1)
		{
			if (i==-1)
				{
				id2="blankdiv";
				id2b="blankdiv";}
			else{
				id2="outlookdiv"+i;
				id2b="outlookdivin"+i;
				document.all("outlooktitle"+i).style.border="0px outset";
				document.all("outlooktitle"+i).style.background="#89C1E4";
				document.all("outlooktitle"+i).style.backgroundImage="url(../images/listbar.jpg)";
				document.all("outlooktitle"+i).style.color="#fff";
				document.all("outlooktitle"+i).style.textalign="left";
				}
			id1="outlookdiv"+number
			id1b="outlookdivin"+number
			document.all("outlooktitle"+number).style.border="0px outset";
			document.all("outlooktitle"+number).style.background="#3399FF";
			document.all("outlooktitle"+number).style.backgroundImage="url(../images/listbar.jpg)";
			document.all("outlooktitle"+number).style.color="#fff";
			document.all("outlooktitle"+number).style.textalign="center";
			smoothout(id1,id2,id1b,id2b,0);
		}
	else
		{
			document.all("blankdiv").style.display="";
			document.all("blankdiv").sryle.height="100%";
			document.all("outlookdiv"+i).style.display="none";
			document.all("outlookdiv"+i).style.height="0%";
			document.all("outlooktitle"+i).style.border="1px solid navy";
			document.all("outlooktitle"+i).style.background="#E0DCC5";
			document.all("outlooktitle"+i).style.color="white";
			document.all("outlooktitle"+i).style.textalign="left";
		}
	}
			
}

function smoothout(id1,id2,id1b,id2b,stat)
{
	if(stat==0){
		tempinnertext1=document.all(id1b).innerHTML;
		tempinnertext2=document.all(id2b).innerHTML;
		document.all(id1b).innerHTML="";
		document.all(id2b).innerHTML="";
		outlooksmoothstat=1;
		document.all(id1b).style.overflow="hidden";
		document.all(id2b).style.overflow="hidden";
		document.all(id1).style.height="0%";
		document.all(id1).style.display="";
		setTimeout("smoothout('"+id1+"','"+id2+"','"+id1b+"','"+id2b+"',"+outlookbar.inc+")",outlookbar.timedalay);
	}
	else
	{
		stat+=outlookbar.inc;
		if (stat>100)
			stat=100;
		document.all(id1).style.height=stat+"%";
		document.all(id2).style.height=(100-stat)+"%";
		if (stat<100) 
			setTimeout("smoothout('"+id1+"','"+id2+"','"+id1b+"','"+id2b+"',"+stat+")",outlookbar.timedalay);
		else
			{
			document.all(id1b).innerHTML=tempinnertext1;
			document.all(id2b).innerHTML=tempinnertext2;
			outlooksmoothstat=0;
			document.all(id1b).style.overflow="auto";
			document.all(id2).style.display="none";
			}
	}
}

function getOutLine()
{
	outline="<table "+outlookbar.otherclass+">";
	for (i=0;i<(outlookbar.titlelist.length);i++)
		{
			outline+="<tr><td name=outlooktitle"+i+" id=outlooktitle"+i+" ";		
			if (i!=outlookbar.opentitle) 
				outline+=" align=center class='header' style='cursor:hand;background-color:#89C1E4;color:#fff;height:32;border:0 outset; background-Image:url(../images/listbar.jpg)' ";
			else
				outline+=" align=center class='header' style='cursor:hand;background-color:#3399FF;color:#fff;height:32;border:0 outset; background-Image:url(../images/listbar.jpg)' ";
			outline+=outlookbar.titlelist[i].otherclass
			outline+=" onclick='switchoutlookBar("+i+")'><span class=header><b>";
			outline+=outlookbar.titlelist[i].title+"</b></span></td></tr>";
			outline+="<tr><td name=outlookdiv"+i+" valign=top align=center  id=outlookdiv"+i+" style='width:100%"
			if (i!=outlookbar.opentitle) 
				outline+=";display:none;height:0%;";
			else
				outline+=";display:;height:100%;";
			outline+="'><div name=outlookdivin"+i+" id=outlookdivin"+i+" style='overflow:auto;width:100%;height:100%'>";
			for (j=0;j<outlookbar.itemlist[i].length;j++)
				outline+=showitem(outlookbar.itemlist[i][j].key,outlookbar.itemlist[i][j].title);
			outline+="</div></td></tr>"
		}
	outline+="<tr><td name=blankdiv valign=top align=center  id=blankdiv style='height:100%;width:100%:"
	if (outlookbar.opentitle!=-1) 
				outline+=";display:none;";
			else
				outline+=";display:;";
	outline+="'><div style='overflow:auto;width:100%;height:100%'>";
	outline+="</div></td></tr>"
	
	outline+="</table>"
	return outline

}


function show()
{
	var outline;
	outline="<div id=outLookBarDiv name=outLookBarDiv style='width=100%;height:100%'>"
	outline+=outlookbar.getOutLine();
	outline+="</div>"
	document.write(outline);
}

function theitem(intitle,instate,inkey)
{
	this.state=instate;
	this.otherclass=" ";
	this.key=inkey;
	this.title=intitle;
}

function addtitle(intitle)
{
	outlookbar.itemlist[outlookbar.titlelist.length]=new Array();
	outlookbar.titlelist[outlookbar.titlelist.length]=new theitem(intitle,1,0);
	return(outlookbar.titlelist.length-1);
}

function additem(intitle,parentid,inkey)
{
	if (parentid>=0 && parentid<=outlookbar.titlelist.length)
	{
		outlookbar.itemlist[parentid][outlookbar.itemlist[parentid].length]=new theitem(intitle,2,inkey);
		outlookbar.itemlist[parentid][outlookbar.itemlist[parentid].length-1].otherclass=" nowrap align=left style='backgroundColor:blue;height:5' ";
		return(outlookbar.itemlist[parentid].length-1);
	}
	else
		additem=-1;
}

function outlook()
{
	this.titlelist=new Array();
	this.itemlist=new Array();
	this.divstyle="style='height:100%;width:100%;overflow:auto' align=center";
	this.otherclass="border=0 cellspacing='0' cellpadding='0' style='height:100%;width:100%'valign=middle align=center ";
	this.addtitle=addtitle;
	this.additem=additem;
	this.starttitle=-0;
	this.show=show;
	this.getOutLine=getOutLine;
	this.opentitle=this.starttitle;
	this.reflesh=outreflesh;
	this.timedelay=50;
	this.inc=6;
	
}

function outreflesh()
{
	document.all("outLookBarDiv").innerHTML=outlookbar.getOutLine();
}

function locatefold(foldname)
{
	for (var i=0;i<outlookbar.titlelist.length;i++)
		if(foldname==outlookbar.titlelist[i].title)
			{
				 outlookbar.starttitle=i;
				 outlookbar.opentitle=i;
			}
	
}

var outlookbar=new outlook();
var tempinnertext1,tempinnertext2,outlooksmoothstat
outlooksmoothstat = 0;

function cwin()
{if(parent.search.cols!='185,*')
{parent.search.cols='185,*';
}
else{parent.search.cols='0,*';
}}