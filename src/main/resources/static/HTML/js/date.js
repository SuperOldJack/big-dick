var DS_x,DS_y;

function dateSelector() //构造dateSelector对象，用来实现一个日历形式的日期输入框。 
{ 
var myDate=new Date(); 
this.year=myDate.getFullYear(); //定义year属性，年份，默认值为当前系统年份。 
this.month=myDate.getMonth()+1; //定义month属性，月份，默认值为当前系统月份。 
this.date=myDate.getDate(); //定义date属性，日，默认值为当前系统的日。 
this.inputName=''; //定义inputName属性，即输入框的name，默认值为空。注意：在同一页中出现多个日期输入框，不能有重复的name！ 
this.display=display; //定义display方法，用来显示日期输入框。 
}

function display() //定义dateSelector的display方法，它将实现一个日历形式的日期选择框。 
{
var week=new Array('日','一','二','三','四','五','六'); 

document.write("<style type=text/css>"); 
document.write(" .ds_font td,span { font: normal 12px 宋体; color: #000000; }"); 
document.write(" .ds_border { border: 1px solid #000000; cursor: hand; background-color: #DDDDDD }"); 
document.write(" .ds_border2 { border: 1px solid #000000; cursor: hand; background-color: #DDDDDD }"); 
document.write("</style>"); 
document.write("<input size=10 style='text-align:center;' id='DS_"+this.inputName+"' name='"+this.inputName+"' value='"+this.year+"-"+this.month+"-"+this.date+"' title=双击可进行编缉 ondblclick='this.readOnly=false;this.focus()' onblur='this.readOnly=true' readonly>"); 
document.write("<button style='width:60px;height:20px;font-size:12px;margin:1px;' type=button onclick=this.nextSibling.style.display='block'>选择日期</button>"); 
document.write("<div style='position:absolute;display:none;text-align:center;width:0px;height:0px;overflow:visible' onselectstart='return false;'>"); 
document.write(" <div style='position:absolute;left:-60px;top:20px;width:142px;height:165px;background-color:#F6F6F6;border:1px solid #245B7D;' class=ds_font>"); 
document.write(" <table cellpadding=0 cellspacing=1 width=140 height=20 bgcolor=#CEDAE7 onmousedown='DS_x=event.x-parentNode.style.pixelLeft;DS_y=event.y-parentNode.style.pixelTop;setCapture();' onmouseup='releaseCapture();' onmousemove='dsMove(this.parentNode)' style='cursor:move;'>"); 
document.write(" <tr align=center>"); 
document.write(" <td width=12% onmouseover=this.className='ds_border' onmouseout=this.className='' onclick=subYear(this) title='减小年份'><<</td>"); 
document.write(" <td width=12% onmouseover=this.className='ds_border' onmouseout=this.className='' onclick=subMonth(this) title='减小月份'><</td>"); 
document.write(" <td width=52%><b>"+this.year+"</b><b>年</b><b>"+this.month+"</b><b>月</b></td>"); 
document.write(" <td width=12% onmouseover=this.className='ds_border' onmouseout=this.className='' onclick=addMonth(this) title='增加月份'>></td>"); 
document.write(" <td width=12% onmouseover=this.className='ds_border' onmouseout=this.className='' onclick=addYear(this) title='增加年份'>>></td>"); 
document.write(" </tr>"); 
document.write(" </table>"); 

document.write(" <table cellpadding=0 cellspacing=0 width=140 height=20 onmousedown='DS_x=event.x-parentNode.style.pixelLeft;DS_y=event.y-parentNode.style.pixelTop;setCapture();' onmouseup='releaseCapture();' onmousemove='dsMove(this.parentNode)' style='cursor:move;'>"); 
document.write(" <tr align=center>"); 
for(i=0;i<7;i++) 
document.write(" <td>"+week[i]+"</td>"); 
document.write(" </tr>"); 
document.write(" </table>"); 

document.write(" <table cellpadding=0 cellspacing=2 width=140 bgcolor=#EEEEEE>"); 
for(i=0;i<6;i++) 
{ 
document.write(" <tr align=center>"); 
for(j=0;j<7;j++) 
document.write(" <td width=10% height=16 onmouseover=if(this.innerText!=''&&this.className!='ds_border2')this.className='ds_border' onmouseout=if(this.className!='ds_border2')this.className='' onclick=getValue(this,document.all('DS_"+this.inputName+"'))></td>"); 
document.write(" </tr>"); 
} 
document.write(" </table>"); 

document.write(" <span style=cursor:hand onclick=this.parentNode.parentNode.style.display='none'>【关闭】</span>"); 
document.write(" </div>"); 
document.write("</div>"); 

dateShow(document.all("DS_"+this.inputName).nextSibling.nextSibling.childNodes[0].childNodes[2],this.year,this.month) 
}

function subYear(obj) //减小年份 
{
var myObj=obj.parentNode.parentNode.parentNode.cells[2].childNodes; 
myObj[0].innerHTML=eval(myObj[0].innerHTML)-1; 
dateShow(obj.parentNode.parentNode.parentNode.nextSibling.nextSibling,eval(myObj[0].innerHTML),eval(myObj[2].innerHTML)) 
} 

function addYear(obj) //增加年份 
{ 
var myObj=obj.parentNode.parentNode.parentNode.cells[2].childNodes; 
myObj[0].innerHTML=eval(myObj[0].innerHTML)+1; 
dateShow(obj.parentNode.parentNode.parentNode.nextSibling.nextSibling,eval(myObj[0].innerHTML),eval(myObj[2].innerHTML)) 
} 

function subMonth(obj) //减小月份 
{ 
var myObj=obj.parentNode.parentNode.parentNode.cells[2].childNodes; 
var month=eval(myObj[2].innerHTML)-1; 
if(month==0) 
{ 
month=12; 
subYear(obj); 
} 
myObj[2].innerHTML=month; 
dateShow(obj.parentNode.parentNode.parentNode.nextSibling.nextSibling,eval(myObj[0].innerHTML),eval(myObj[2].innerHTML)) 
} 

function addMonth(obj) //增加月份 
{ 
var myObj=obj.parentNode.parentNode.parentNode.cells[2].childNodes; 
var month=eval(myObj[2].innerHTML)+1; 
if(month==13) 
{ 
month=1; 
addYear(obj); 
} 
myObj[2].innerHTML=month; 
dateShow(obj.parentNode.parentNode.parentNode.nextSibling.nextSibling,eval(myObj[0].innerHTML),eval(myObj[2].innerHTML)) 
} 

function dateShow(obj,year,month) //显示各月份的日 
{ 
var myDate=new Date(year,month-1,1); 
var today=new Date(); 
var day=myDate.getDay(); 
var selectDate=obj.parentNode.parentNode.previousSibling.previousSibling.value.split('-'); 
var length; 
switch(month) 
{ 
case 1: 
case 3: 
case 5: 
case 7: 
case 8: 
case 10: 
case 12: 
length=31; 
break; 
case 4: 
case 6: 
case 9: 
case 11: 
length=30; 
break; 
case 2: 
if((year%4==0)&&(year%100!=0)||(year%400==0)) 
length=29; 
else 
length=28; 
} 
for(i=0;i<obj.cells.length;i++) 
{ 
obj.cells[i].innerHTML=''; 
obj.cells[i].style.color=''; 
obj.cells[i].className=''; 
} 
for(i=0;i<length;i++) 
{ 
obj.cells[i+day].innerHTML=(i+1); 
if(year==today.getFullYear()&&(month-1)==today.getMonth()&&(i+1)==today.getDate()) 
obj.cells[i+day].style.color='red'; 
if(year==eval(selectDate[0])&&month==eval(selectDate[1])&&(i+1)==eval(selectDate[2])) 
obj.cells[i+day].className='ds_border2'; 
} 
} 

function getValue(obj,inputObj) //把选择的日期传给输入框 
{ 
var myObj=inputObj.nextSibling.nextSibling.childNodes[0].childNodes[0].cells[2].childNodes; 
if(obj.innerHTML) 
inputObj.value=myObj[0].innerHTML+"-"+myObj[2].innerHTML+"-"+obj.innerHTML; 
inputObj.nextSibling.nextSibling.style.display='none'; 
for(i=0;i<obj.parentNode.parentNode.parentNode.cells.length;i++) 
obj.parentNode.parentNode.parentNode.cells[i].className=''; 
obj.className='ds_border2' 
} 

function dsMove(obj) //实现层的拖移 
{ 
if(event.button==1) 
{ 
var X=obj.clientLeft; 
var Y=obj.clientTop; 
obj.style.pixelLeft=X+(event.x-DS_x); 
obj.style.pixelTop=Y+(event.y-DS_y); 
}
}
//=================================
var s_tiannet_turn_base = "height:16px;font-size:9pt;color:white;border:0 solid #CCCCCC;cursor:hand;background-color:#2650A6;";
//翻年、月等的按钮
var s_tiannet_turn = "width:28px;" + s_tiannet_turn_base;
//关闭、清空等按钮样式
var s_tiannet_turn2 = "width:22px;" + s_tiannet_turn_base;
//年选择下拉框
var s_tiannet_select = "width:64px;display:none;";
//月、时、分选择下拉框
var s_tiannet_select2 = "width:46px;display:none;";
//日期选择控件体的样式
var s_tiannet_body = "width:150;background-color:#2650A6;display:none;z-index:9998;position:absolute;" +
"border-left:1 solid #CCCCCC;border-top:1 solid #CCCCCC;border-right:1 solid #999999;border-bottom:1 solid #999999;";
//显示日的td的样式
var s_tiannet_day = "width:21px;height:20px;background-color:#D8F0FC;font-size:10pt;";
//字体样式
var s_tiannet_font = "color:#FFCC00;font-size:9pt;cursor:hand;";
//链接的样式
var s_tiannet_link = "text-decoration:none;font-size:9pt;color:#2650A6;";
//横线
var s_tiannet_line = "border-bottom:1 solid #6699CC";
//------------------ 变量定义 ---------------------------//
var tiannetYearSt = 1950;//可选择的开始年份
var tiannetYearEnd = 2100;//可选择的结束年份
var tiannetDateNow = new Date();
var tiannetYear = tiannetDateNow.getFullYear(); //定义年的变量的初始值
var tiannetMonth = tiannetDateNow.getMonth()+1; //定义月的变量的初始值
var tiannetDay = tiannetDateNow.getDate();
var tiannetHour = 8;//tiannetDateNow.getHours();
var tiannetMinute = 0;//tiannetDateNow.getMinutes();
var tiannetArrDay=new Array(42);          //定义写日期的数组
var tiannetDateSplit = "-";     //日期的分隔符号
var tiannetDateTimeSplit = " ";    //日期与时间之间的分隔符
var tiannetTimeSplit = ":";     //时间的分隔符号
var tiannetOutObject;      //接收日期时间的对象
var arrTiannetHide = new Array();//被强制隐藏的标签
var m_bolShowHour = false;//是否显示小时
var m_bolShowMinute = false;//是否显示分钟

var m_aMonHead = new Array(12);         //定义阳历中每个月的最大天数
    m_aMonHead[0] = 31; m_aMonHead[1] = 28; m_aMonHead[2] = 31; m_aMonHead[3] = 30; m_aMonHead[4] = 31; m_aMonHead[5] = 30;
    m_aMonHead[6] = 31; m_aMonHead[7] = 31; m_aMonHead[8] = 30; m_aMonHead[9] = 31; m_aMonHead[10] = 30; m_aMonHead[11] = 31;
// ---------------------- 用户可调用的函数 -----------------------------//
//用户主调函数－只选择日期
function setDay(obj){
tiannetOutObject = obj;
//如果标签中有值，则将日期初始化为当前值
var strValue = tiannetTrim(tiannetOutObject.value);
if( strValue != "" ){
tiannetInitDate(strValue);
}
tiannetPopCalendar();
}
//用户主调函数－选择日期和小时
function setDayH(obj){
tiannetOutObject = obj;
m_bolShowHour = true;
//如果标签中有值，则将日期和小时初始化为当前值
var strValue = tiannetTrim(tiannetOutObject.value);
if( strValue != "" ){
tiannetInitDate(strValue.substring(0,10));
var hour = strValue.substring(11,13);
if( hour < 10 ) tiannetHour = hour.substring(1,2);
}
tiannetPopCalendar();
}
//用户主调函数－选择日期和小时及分钟
function setDayHM(obj){
tiannetOutObject = obj;
m_bolShowHour = true;
m_bolShowMinute = true;
//如果标签中有值，则将日期和小时及分钟初始化为当前值
var strValue = tiannetTrim(tiannetOutObject.value);
if( strValue != "" ){
tiannetInitDate(strValue.substring(0,10));
var time = strValue.substring(11,16);
var arr = time.split(tiannetTimeSplit);
tiannetHour = arr[0];
tiannetMinute = arr[1];
if( tiannetHour < 10 ) tiannetHour = tiannetHour.substring(1,2);
if( tiannetMinute < 10 ) tiannetMinute = tiannetMinute.substring(1,2);
}
tiannetPopCalendar();
}
//设置开始日期和结束日期
function setYearPeriod(intDateBeg,intDateEnd){
tiannetYearSt = intDateBeg;
tiannetYearEnd = intDateEnd;
}
//设置日期分隔符。默认为"-"
function setDateSplit(strDateSplit){
tiannetDateSplit = strDateSplit;
}
//设置日期与时间之间的分隔符。默认为" "
function setDateTimeSplit(strDateTimeSplit){
tiannetDateTimeSplit = strDateTimeSplit;
}
//设置时间分隔符。默认为":"
function setTimeSplit(strTimeSplit){
tiannetTimeSplit = strTimeSplit;
}
//设置分隔符
function setSplit(strDateSplit,strDateTimeSplit,strTimeSplit){
tiannetDateSplit(strDateSplit);
tiannetDateTimeSplit(strDateTimeSplit);
tiannetTimeSplit(strTimeSplit);
}
//设置默认的日期。格式为：YYYY-MM-DD
function setDefaultDate(strDate){
tiannetYear = strDate.substring(0,4);
tiannetMonth = strDate.substring(5,7);
tiannetDay = strDate.substring(8,10);
}
//设置默认的时间。格式为：HH24:MI
function setDefaultTime(strTime){
tiannetHour = strTime.substring(0,2);
tiannetMinute = strTime.substring(3,5);
}
// ---------------------- end 用户可调用的函数 -----------------------------//
//------------------ begin 页面显示部分 ---------------------------//
var weekName = new Array("日","一","二","三","四","五","六");
document.write('<div id="divTiannetDate" style="'+s_tiannet_body+'">');
document.write('<div align="center" id="divTiannetDateText" Author="tiannet" style="padding-top:2px;">');
document.write('<span id="tiannetYearHead" Author="tiannet" style="'+s_tiannet_font+'" '+
    'onclick="spanYearCEvent();">&nbsp;年</span>');
document.write('<select id="selTianYear" style="'+s_tiannet_select+'" Author="tiannet" '+
    ' onChange="tiannetYear=this.value;tiannetSetDay(tiannetYear,tiannetMonth);document.all.tiannetYearHead.style.display=\'\';'+
    'this.style.display=\'none\';">');
for(var i=tiannetYearSt;i <= tiannetYearEnd;i ++){
document.writeln('<option value="' + i + '">' + i + '年</option>');
}
document.write('</select>');
document.write('<span id="tiannetMonthHead" Author="tiannet" style="'+s_tiannet_font+'" '+
    'onclick="spanMonthCEvent();">&nbsp;&nbsp;月</span>');
document.write('<select id="selTianMonth" style="'+s_tiannet_select2+'" Author="tiannet" '+
    'onChange="tiannetMonth=this.value;tiannetSetDay(tiannetYear,tiannetMonth);document.all.tiannetMonthHead.style.display=\'\';'+
    'this.style.display=\'none\';">');
for(var i=1;i <= 12;i ++){
document.writeln('<option value="' + i + '">' + i + '月</option>');
}
document.write('</select>');
//document.write('</div>');
//document.write('<div align="center" id="divTiannetTimeText" Author="tiannet">');
document.write('<span id="tiannetHourHead" Author="tiannet" style="'+s_tiannet_font+'display:none;" '+
    'onclick="spanHourCEvent();">&nbsp;时</span>');
document.write('<select id="selTianHour" style="'+s_tiannet_select2+'display:none;" Author="tiannet" '+
    ' onChange="tiannetHour=this.value;tiannetWriteHead();document.all.tiannetHourHead.style.display=\'\';' +
    'this.style.display=\'none\';">');
for(var i=1;i <= 24;i ++){
document.writeln('<option value="' + i + '">' + i + '时</option>');
}
document.write('</select>');
document.write('<span id="tiannetMinuteHead" Author="tiannet" style="'+s_tiannet_font+'display:none;" '+
    'onclick="spanMinuteCEvent();">&nbsp;&nbsp;分</span>');
document.write('<select id="selTianMinute" style="'+s_tiannet_select2+'display:none;" Author="tiannet" '+
    ' onChange="tiannetMinute=this.value;tiannetWriteHead();document.all.tiannetMinuteHead.style.display=\'\';'+
    'this.style.display=\'none\';">');
for(var i=1;i <= 60;i ++){
document.writeln('<option value="' + i + '">' + i + '分</option>');
}
document.write('</select>');
document.write('</div>');
//输出一条横线
document.write('<div style="'+s_tiannet_line+'"></div>');
document.write('<div align="center" id="divTiannetTurn" style="border:0;" Author="tiannet">');
document.write('<input type="button" style="'+s_tiannet_turn+'" value="年↑" title="上一年" onClick="tiannetPrevYear();">');
document.write('<input type="button" style="'+s_tiannet_turn+'" value="年↓" title="下一年" onClick="tiannetNextYear();">&nbsp;');
document.write('<input type="button" style="'+s_tiannet_turn+'" value="月↑" title="上一月" onClick="tiannetPrevMonth();">');
document.write('<input type="button" style="'+s_tiannet_turn+'" value="月↓" title="下一月" onClick="tiannetNextMonth();">');
document.write('</div>');
//输出一条横线
document.write('<div style="'+s_tiannet_line+'"></div>');
document.write('<table border=0 cellspacing=0 cellpadding=0 bgcolor=white onselectstart="return false">');
document.write(' <tr style="background-color:#2650A6;font-size:10pt;color:white;height:22px;" Author="tiannet">');
for(var i =0;i < weekName.length;i ++){
//输出星期
document.write('<td width="21" align="center" Author="tiannet">' + weekName[i] + '</td>');
}
document.write(' </tr>');
document.write('</table>');
//输出天的选择
document.write('<table border=0 cellspacing=1 cellpadding=0 bgcolor=white onselectstart="return false">');
var n = 0;
for (var i=0;i<5;i++) { 
document.write (' <tr align=center id="trTiannetDay' + i + '" >');
for (var j=0;j<7;j++){
document.write('<td align="center" id="tdTiannetDay' + n + '" '+
    'onClick="tiannetDay=this.innerText;tiannetSetValue(true);" ' 
   +' style="' + s_tiannet_day + '">&nbsp;</td>');
n ++;
}
document.write (' </tr>');
}
document.write (' <tr align=center id="trTiannetDay5" >');
document.write('<td align="center" id="tdTiannetDay35" onClick="tiannetDay=this.innerText;tiannetSetValue(true);" ' 
    +' style="' + s_tiannet_day + '">&nbsp;</td>');
document.write('<td align="center" id="tdTiannetDay36" onClick="tiannetDay=this.innerText;tiannetSetValue(true);" ' 
    +' style="' + s_tiannet_day + '">&nbsp;</td>');
document.write('<td align="right" colspan="5"><a href="javascript:tiannetClear();" style="' + s_tiannet_link + '">清空</a>'+
    '&nbsp;<a href="javascript:tiannetHideControl();" style="' + s_tiannet_link + '">关闭</a>' +
    '&nbsp;<a href="javascript:tiannetSetValue(true);" style="' + s_tiannet_link + '">确定</a>&nbsp;' +
    '</td>');
document.write (' </tr>');
document.write('</table>');
document.write('</div>');
//------------------ end 页面显示部分 ---------------------------//
//------------------ 显示日期时间的span标签响应事件 ---------------------------//
//单击年份span标签响应
function spanYearCEvent(){
hideElementsById(new Array("selTianYear","tiannetMonthHead"),false);
if(m_bolShowHour) hideElementsById(new Array("tiannetHourHead"),false);
if(m_bolShowMinute) hideElementsById(new Array("tiannetMinuteHead"),false);
hideElementsById(new Array("tiannetYearHead","selTianMonth","selTianHour","selTianMinute"),true);
}
//单击月份span标签响应
function spanMonthCEvent(){
hideElementsById(new Array("selTianMonth","tiannetYearHead"),false);
if(m_bolShowHour) hideElementsById(new Array("tiannetHourHead"),false);
if(m_bolShowMinute) hideElementsById(new Array("tiannetMinuteHead"),false);
hideElementsById(new Array("tiannetMonthHead","selTianYear","selTianHour","selTianMinute"),true);
}
//单击小时span标签响应
function spanHourCEvent(){
hideElementsById(new Array("tiannetYearHead","tiannetMonthHead"),false);
if(m_bolShowHour) hideElementsById(new Array("selTianHour"),false);
if(m_bolShowMinute) hideElementsById(new Array("tiannetMinuteHead"),false);
hideElementsById(new Array("tiannetHourHead","selTianYear","selTianMonth","selTianMinute"),true);
}
//单击分钟span标签响应
function spanMinuteCEvent(){
hideElementsById(new Array("tiannetYearHead","tiannetMonthHead"),false);
if(m_bolShowHour) hideElementsById(new Array("tiannetHourHead"),false);
if(m_bolShowMinute) hideElementsById(new Array("selTianMinute"),false);
hideElementsById(new Array("tiannetMinuteHead","selTianYear","selTianMonth","selTianHour"),true);
}
//根据标签id隐藏或显示标签
function hideElementsById(arrId,bolHide){
var strDisplay = "";
if(bolHide) strDisplay = "none";
for(var i = 0;i < arrId.length;i ++){
var obj = document.getElementById(arrId[i]);
obj.style.display = strDisplay;
}
}
//------------------ end 显示日期时间的span标签响应事件 ---------------------------//
//判断某年是否为闰年
function isPinYear(year){
var bolRet = false;
if (0==year%4&&((year%100!=0)||(year%400==0))) {
bolRet = true;
}
return bolRet;
}
//得到一个月的天数，闰年为29天
function getMonthCount(year,month){
var c=m_aMonHead[month-1];
if((month==2)&&isPinYear(year)) c++;
return c;
}
//重新设置当前的日。主要是防止在翻年、翻月时，当前日大于当月的最大日
function setRealDayCount() {
if( tiannetDay > getMonthCount(tiannetYear,tiannetMonth) ) {
//如果当前的日大于当月的最大日，则取当月最大日
tiannetDay = getMonthCount(tiannetYear,tiannetMonth);
}
}
//在个位数前加零
//function addZero(value){
//if(value < 10 ){
//value = "0" + value;
//}
//return value;
//}
//取出空格
function tiannetTrim(str) {
return str.replace(/(^\s*)|(\s*$)/g,"");
}
//为select创建一个option
function createOption(objSelect,value,text){
var option = document.createElement("OPTION");
option.value = value;
option.text = text;
objSelect.options.add(option);
}
//往前翻 Year
function tiannetPrevYear() {
if(tiannetYear > 999 && tiannetYear <10000){tiannetYear--;}
else{alert("年份超出范围（1000-9999）！");}
tiannetSetDay(tiannetYear,tiannetMonth);
//如果年份小于允许的最小年份，则创建对应的option
if( tiannetYear < tiannetYearSt ) {
tiannetYearSt = tiannetYear;
createOption(document.all.selTianYear,tiannetYear,tiannetYear + "年");
}
checkSelect(document.all.selTianYear,tiannetYear);
tiannetWriteHead();
}
//往后翻 Year
function tiannetNextYear() {
if(tiannetYear > 999 && tiannetYear <10000){tiannetYear++;}
else{alert("年份超出范围（1000-9999）！");return;}
tiannetSetDay(tiannetYear,tiannetMonth);
//如果年份超过允许的最大年份，则创建对应的option
if( tiannetYear > tiannetYearEnd ) {
tiannetYearEnd = tiannetYear;
createOption(document.all.selTianYear,tiannetYear,tiannetYear + "年");
}
checkSelect(document.all.selTianYear,tiannetYear);
tiannetWriteHead();
}
//选择今天
function tiannetToday() {
tiannetYear = tiannetDateNow.getFullYear();
tiannetMonth = tiannetDateNow.getMonth()+1;
tiannetDay = tiannetDateNow.getDate();
tiannetSetValue(true);
//tiannetSetDay(tiannetYear,tiannetMonth);
//selectObject();
}
//往前翻月份
function tiannetPrevMonth() {
if(tiannetMonth>1){tiannetMonth--}else{tiannetYear--;tiannetMonth=12;}
tiannetSetDay(tiannetYear,tiannetMonth);
checkSelect(document.all.selTianMonth,tiannetMonth);
tiannetWriteHead();
}
//往后翻月份
function tiannetNextMonth() {
if(tiannetMonth==12){tiannetYear++;tiannetMonth=1}else{tiannetMonth++}
tiannetSetDay(tiannetYear,tiannetMonth);
checkSelect(document.all.selTianMonth,tiannetMonth);
tiannetWriteHead();
}
//向span标签中写入年、月、时、分等数据
function tiannetWriteHead(){
document.all.tiannetYearHead.innerText = tiannetYear + "年";
document.all.tiannetMonthHead.innerText = tiannetMonth + "月";
if( m_bolShowHour ) document.all.tiannetHourHead.innerText = " "+tiannetHour + "时";
if( m_bolShowMinute ) document.all.tiannetMinuteHead.innerText = tiannetMinute + "分";
tiannetSetValue(false);//给文本框赋值，但不隐藏本控件
}
//设置显示天
function tiannetSetDay(yy,mm) {

setRealDayCount();//设置当月真实的日
tiannetWriteHead();
var strDateFont1 = "", strDateFont2 = "" //处理日期显示的风格
for (var i = 0; i < 37; i++){tiannetArrDay[i]=""}; //将显示框的内容全部清空
var day1 = 1;
var firstday = new Date(yy,mm-1,1).getDay(); //某月第一天的星期几
for (var i = firstday; day1 < getMonthCount(yy,mm)+1; i++){
tiannetArrDay[i]=day1;day1++;
}
//如果用于显示日的最后一行的第一个单元格的值为空，则隐藏整行。
//if(tiannetArrDay[35] == ""){
// document.all.trTiannetDay5.style.display = "none";
//} else {
// document.all.trTiannetDay5.style.display = "";
//}
for (var i = 0; i < 37; i++){ 
var da = eval("document.all.tdTiannetDay"+i)     //书写新的一个月的日期星期排列
if (tiannetArrDay[i]!="") { 
   //判断是否为周末，如果是周末，则改为红色字体
   if(i % 7 == 0 || (i+1) % 7 == 0){
   strDateFont1 = "<font color=#f0000>"
   strDateFont2 = "</font>"
   } else {
    strDateFont1 = "";
    strDateFont2 = ""
   }
   da.innerHTML = strDateFont1 + tiannetArrDay[i] + strDateFont2;
   //如果是当前选择的天，则改变颜色
   if(tiannetArrDay[i] == tiannetDay ) {
    da.style.backgroundColor = "#CCCCCC";
   } else {
    da.style.backgroundColor = "#EFEFEF";
   }
   da.style.cursor="hand"
} else {
   da.innerHTML="";da.style.backgroundColor="";da.style.cursor="default"
}
}//end for
tiannetSetValue(false);//给文本框赋值，但不隐藏本控件
}//end function tiannetSetDay
//根据option的值选中option
function checkSelect(objSelect,selectValue) {
var count = parseInt(objSelect.length);
if( selectValue < 10 && selectValue.toString().length == 2) {
selectValue = selectValue.substring(1,2);
}
for(var i = 0;i < count;i ++){
if(objSelect.options[i].value == selectValue){
   objSelect.selectedIndex = i;
   break;
}
}//for
}
//选中年、月、时、分等下拉框
function selectObject(){
//如果年份小于允许的最小年份，则创建对应的option
if( tiannetYear < tiannetYearSt ) {
for( var i = tiannetYear;i < tiannetYearSt;i ++ ){
   createOption(document.all.selTianYear,i,i + "年");
}
tiannetYearSt = tiannetYear;
}
//如果年份超过允许的最大年份，则创建对应的option
if( tiannetYear > tiannetYearEnd ) {
for( var i = tiannetYearEnd+1;i <= tiannetYear;i ++ ){
   createOption(document.all.selTianYear,i,i + "年");
}
tiannetYearEnd = tiannetYear;
}
checkSelect(document.all.selTianYear,tiannetYear);
checkSelect(document.all.selTianMonth,tiannetMonth);
if( m_bolShowHour ) checkSelect(document.all.selTianHour,tiannetHour);
if( m_bolShowMinute ) checkSelect(document.all.selTianMinute,tiannetMinute);
}
//给接受日期时间的控件赋值
//参数bolHideControl - 是否隐藏控件
function tiannetSetValue(bolHideControl){
var value = "";
if( !tiannetDay || tiannetDay == "" ){
tiannetOutObject.value = value;
return;
}
var mm = tiannetMonth;
var day = tiannetDay;
if( mm < 10 && mm.toString().length == 1) mm = "0" + mm;
if( day < 10 && day.toString().length == 1) day = "0" + day;
value = tiannetYear + tiannetDateSplit + mm + tiannetDateSplit + day;
if( m_bolShowHour ){
var hour = tiannetHour;
if( hour < 10 && hour.toString().length == 1 ) hour = "0" + hour;
value += tiannetDateTimeSplit + hour;
}
if( m_bolShowMinute ){
var minute = tiannetMinute;
if( minute < 10 && minute.toString().length == 1 ) minute = "0" + minute;
value += tiannetTimeSplit + minute;
}
tiannetOutObject.value = value;
//document.all.divTiannetDate.style.display = "none";
if( bolHideControl ) {
tiannetHideControl();
}
}
//是否显示时间
function showTime(){
if( !m_bolShowHour && m_bolShowMinute){
alert("如果要选择分钟，则必须可以选择小时！");
return;
}
hideElementsById(new Array("tiannetHourHead","selTianHour","tiannetMinuteHead","selTianMinute"),true);
if( m_bolShowHour ){
//显示小时
hideElementsById(new Array("tiannetHourHead"),false);
}
if( m_bolShowMinute ){
//显示分钟
hideElementsById(new Array("tiannetMinuteHead"),false);
}
}
//弹出显示日历选择控件，以让用户选择
function tiannetPopCalendar(){
//隐藏下拉框，显示相对应的head
hideElementsById(new Array("selTianYear","selTianMonth","selTianHour","selTianMinute"),true);
hideElementsById(new Array("tiannetYearHead","tiannetMonthHead","tiannetHourHead","tiannetMinuteHead"),false);
tiannetSetDay(tiannetYear,tiannetMonth);
tiannetWriteHead();
showTime();
var dads = document.all.divTiannetDate.style;
var iX, iY;

var h = document.all.divTiannetDate.offsetHeight;
var w = document.all.divTiannetDate.offsetWidth;
//计算left
if (window.event.x + h > document.body.offsetWidth - 10    )
iX = window.event.x - h - 5 ;
else
iX = window.event.x + 5; 
if (iX <0) 
iX=0;
//计算top
iY = window.event.y;
if (window.event.y + w > document.body.offsetHeight - 10   )
iY = document.body.scrollTop + document.body.offsetHeight - w - 5 ;
else
iY = document.body.scrollTop +window.event.y + 5; 
if (iY <0) 
iY=0;
dads.left = iX;
dads.top = iY;
tiannetShowControl();
selectObject();
}
//隐藏日历控件(同时显示被强制隐藏的标签)
function tiannetHideControl(){
document.all.divTiannetDate.style.display = "none";
tiannetShowObject();
arrTiannetHide = new Array();//将被隐藏的标签对象清空
}
//显示日历控件(同时隐藏会遮挡的标签)
function tiannetShowControl(){
document.all.divTiannetDate.style.display = "";
tiannetHideObject("SELECT");
tiannetHideObject("OBJECT");
}
//根据标签名称隐藏标签。如会遮住控件的select，object
function tiannetHideObject(strTagName) {

x = document.all.divTiannetDate.offsetLeft;
y = document.all.divTiannetDate.offsetTop;
h = document.all.divTiannetDate.offsetHeight;
w = document.all.divTiannetDate.offsetWidth;

for (var i = 0; i < document.all.tags(strTagName).length; i++)
{

var obj = document.all.tags(strTagName)[i];
if (! obj || ! obj.offsetParent)
   continue;
// 获取元素对于BODY标记的相对坐标
var objLeft   = obj.offsetLeft;
var objTop    = obj.offsetTop;
var objHeight = obj.offsetHeight;
var objWidth = obj.offsetWidth;
var objParent = obj.offsetParent;

while (objParent.tagName.toUpperCase() != "BODY"){
   objLeft += objParent.offsetLeft;
   objTop   += objParent.offsetTop;
   objParent = objParent.offsetParent;
}
//alert("控件左端:" + x + "select左端" + (objLeft + objWidth) + "控件底部:" + (y+h) + "select高:" + objTop);

var bolHide = true;
if( obj.style.display == "none" || obj.style.visibility == "hidden" || obj.getAttribute("Author") == "tiannet" ){
   //如果标签本身就是隐藏的，则不需要再隐藏。如果是控件中的下拉框，也不用隐藏。
   bolHide = false;
}
if( ( (objLeft + objWidth) > x && (y + h + 20) > objTop && (objTop+objHeight) > y && objLeft < (x+w) ) && bolHide ){
   //arrTiannetHide.push(obj);//记录被隐藏的标签对象
   arrTiannetHide[arrTiannetHide.length] = obj;
   obj.style.visibility = "hidden";
}


}
}
//显示被隐藏的标签
function tiannetShowObject(){
for(var i = 0;i < arrTiannetHide.length;i ++){
//alert(arrTiannetHide[i]);
arrTiannetHide[i].style.visibility = "";
}
}
//初始化日期。
function tiannetInitDate(strDate){
var arr = strDate.split(tiannetDateSplit);
tiannetYear = arr[0];
tiannetMonth = arr[1];
tiannetDay = arr[2];
}
//清空
function tiannetClear(){
tiannetOutObject.value = "";
tiannetHideControl();
}
//任意点击时关闭该控件
function document.onclick(){ 
with(window.event.srcElement){ 
if (tagName != "INPUT" && getAttribute("Author") != "tiannet")
    tiannetHideControl();
}
}
//按ESC键关闭该控件
function document.onkeypress(){
if( event.keyCode == 27 ){
tiannetHideControl();
}
}