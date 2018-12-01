// JavaScript Documentrt    
var xmlHttp = createXmlHttpRequest();  

function createXmlHttpRequest()    
{    
 var xmlhttp = null;    
 try    
 {    
   xmlhttp = XMLHttpRequest();    
  }    
  catch(e1)    
  {    
    try    
    {    
       xmlhttp = new ActiveXObject("MSXML2.XMLHTTP");    
    }    
    catch(e2)    
    {    
       try    
       {    
         xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");    
        }    
         catch(e3)    
       {    
         xmlhttp = false;    
             
       }    
    }    
  }    
  return xmlhttp;    
}    
  
function change_key()    
{    
if (xmlHttp.readyState == 4 || xmlHttp.readyState == 0)    
{    
var str = document.getElementById("temp1").value;    
window.location.reload;   
xmlHttp.open("post","../action/search_allbill.asp?key=" + str ,true);  
xmlHttp.onreadystatechange = handSearchRequest;    
xmlHttp.send(null);
if (document.getElementById("temp1").value == '')
{
document.getElementById("search_suggest").className = 'none'; 
} 
else
{
document.getElementById("search_suggest").className = 'block'; 	
}
}    
}     


function handSearchRequest()    
{    
if (xmlHttp.readyState == 4)    
{    
var div = document.getElementById("search_suggest"); 
var str = "";
str = "<table boder=0 id=tbl><tr align=center><th>货品编码</th><th>货品名称</th><th>货品规格</th><th>单位</th><th>数量</th><th>单价</th><th>金额</th><th>备注</th></tr>" + xmlHttp.responseText + "</table>";
div.innerHTML = str; 
} 
} 