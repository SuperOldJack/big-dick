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
xmlHttp.open("post","#" ,true);  
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
str = "<table boder=0 id=tbl><tr align=center><th>��Ʒ����</th><th>��Ʒ����</th><th>��Ʒ���</th><th>��λ</th><th>����</th><th>����</th><th>���</th><th>��ע</th></tr>" + xmlHttp.responseText + "</table>";
div.innerHTML = str; 
} 
} 