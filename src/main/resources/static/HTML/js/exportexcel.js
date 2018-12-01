// JavaScript Document
function exportExcel(tbl) { 
  var winname = window.open('', '_blank', 'top=200,width=40, height=40'); 
  var strHTML = document.all.tbl.innerHTML; 
  winname.document.open('text/html', 'replace'); 
  winname.document.writeln("<table>");
  winname.document.writeln(strHTML); 
  winname.document.writeln("</table>");
  winname.document.execCommand('saveas','','excel.xls'); 
  winname.close();
} 