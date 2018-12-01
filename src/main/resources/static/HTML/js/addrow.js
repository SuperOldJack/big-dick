function addrow_bar(){
    j=sqd.rows.length;
    newRow=document.all.sqd.insertRow(-1)
    newcell=newRow.insertCell()
    newcell.style.backgroundColor='#f7f7f7'
    newcell.innerHTML=j
	document.getElementById("rowcount").value=j
    newcell=newRow.insertCell()
    newcell.style.backgroundColor='#f7f7f7'
    newcell.innerHTML="<input name=delNumber type=radio >"
    newcell=newRow.insertCell()
    newcell.style.backgroundColor='#f7f7f7'
    newcell.innerHTML="<input name=goodscode"+j+" type=text class=INPUT1 id=goodscode"+j+" size=8 onClick=edit_row("+j+")>"
    newcell=newRow.insertCell()
    newcell.style.backgroundColor='#f7f7f7'
    newcell.innerHTML="<input name=goodsname"+j+" type=text class=INPUT1 id=goodsname"+j+"  size=16  onClick=edit_row("+j+")>"
    newcell=newRow.insertCell()
    newcell.style.backgroundColor='#f7f7f7'
    newcell.innerHTML="<input name=goodsunit"+j+" type=text class=INPUT1 id=goodsunit"+j+"  size=8>"
    newcell=newRow.insertCell()
    newcell.style.backgroundColor='#f7f7f7'
    newcell.innerHTML="<input name=units"+j+" type=text class=INPUT1 id=units"+j+"  size=3>"
    newcell=newRow.insertCell()
    newcell.style.backgroundColor='#f7f7f7'
    newcell.innerHTML="<input onpropertychange=count("+j+") name=price"+j+" type=text class=INPUT1 id=price"+j+"  size=8>"
    newcell=newRow.insertCell()
    newcell.style.backgroundColor='#f7f7f7'
    newcell.innerHTML="<input onpropertychange=count("+j+") name=number"+j+" type=text class=INPUT1 id=number"+j+"  size=8>"
    newcell=newRow.insertCell()
    newcell.style.backgroundColor='#f7f7f7'
    newcell.innerHTML="<input name=money"+j+" type=text class=INPUT1 id=money"+j+"  size=8>"
    newcell=newRow.insertCell()
    newcell.style.backgroundColor='#f7f7f7'
    newcell.innerHTML="<input name=remark"+j+" type=text class=INPUT1 id=remark"+j+"  size=20><input name=aveprice"+j+" type=hidden class=INPUT1 id=aveprice"+j+"  size=20><input name=fact_num"+j+" type=hidden id=fact_number"+j+">"
}

function addrow(){
    j=window.opener.document.all.sqd.rows.length;
    newRow=window.opener.document.all.sqd.insertRow(-1)
    newcell=newRow.insertCell()
    newcell.style.backgroundColor='#f7f7f7'
    newcell.innerHTML=j
	window.opener.document.getElementById("rowcount").value=j
    newcell=newRow.insertCell()
    newcell.style.backgroundColor='#f7f7f7'
    newcell.innerHTML="<input name=delNumber type=radio >"
    newcell=newRow.insertCell()
    newcell.style.backgroundColor='#f7f7f7'
    newcell.innerHTML="<input name=goodscode"+j+" type=text class=INPUT1 id=goodscode"+j+" size=8 onClick=edit_row("+j+")>"
    newcell=newRow.insertCell()
    newcell.style.backgroundColor='#f7f7f7'
    newcell.innerHTML="<input name=goodsname"+j+" type=text class=INPUT1 id=goodsname"+j+"  size=16  onClick=edit_row("+j+")>"
    newcell=newRow.insertCell()
    newcell.style.backgroundColor='#f7f7f7'
    newcell.innerHTML="<input name=goodsunit"+j+" type=text class=INPUT1 id=goodsunit"+j+"  size=8>"
    newcell=newRow.insertCell()
    newcell.style.backgroundColor='#f7f7f7'
    newcell.innerHTML="<input name=units"+j+" type=text class=INPUT1 id=units"+j+"  size=3>"
    newcell=newRow.insertCell()
    newcell.style.backgroundColor='#f7f7f7'
    newcell.innerHTML="<input onpropertychange=count("+j+") name=price"+j+" type=text class=INPUT1 id=price"+j+"  size=8>"
    newcell=newRow.insertCell()
    newcell.style.backgroundColor='#f7f7f7'
    newcell.innerHTML="<input onpropertychange=count("+j+") name=number"+j+" type=text class=INPUT1 id=number"+j+"  size=8>"
    newcell=newRow.insertCell()
    newcell.style.backgroundColor='#f7f7f7'
    newcell.innerHTML="<input name=money"+j+" type=text class=INPUT1 id=money"+j+"  size=8>"
    newcell=newRow.insertCell()
    newcell.style.backgroundColor='#f7f7f7'
    newcell.innerHTML="<input name=remark"+j+" type=text class=INPUT1 id=remark"+j+"  size=20><input name=aveprice"+j+" type=hidden class=INPUT1 id=aveprice"+j+"  size=20><input name=fact_num"+j+" type=hidden id=fact_number"+j+">"
}

function addrow_pandian(){
    j=sqd.rows.length;
    newRow=document.all.sqd.insertRow(-1)
    newcell=newRow.insertCell()
    newcell.style.backgroundColor='#f7f7f7'
    newcell.innerHTML=j
	document.getElementById("rowcount").value=j
    newcell=newRow.insertCell()
    newcell.style.backgroundColor='#f7f7f7'
    newcell.innerHTML="<input name=delNumber type=radio >"
    newcell=newRow.insertCell()
    newcell.style.backgroundColor='#f7f7f7'
    newcell.innerHTML="<input name=goodscode"+j+" type=text class=INPUT1 id=goodscode"+j+" size=8 onClick=edit_row("+j+")>"
    newcell=newRow.insertCell()
    newcell.style.backgroundColor='#f7f7f7'
    newcell.innerHTML="<input name=goodsname"+j+" type=text class=INPUT1 id=goodsname"+j+"  size=16  onClick=edit_row("+j+")>"
    newcell=newRow.insertCell()
    newcell.style.backgroundColor='#f7f7f7'
    newcell.innerHTML="<input name=goodsunit"+j+" type=text class=INPUT1 id=goodsunit"+j+"  size=8>"
    newcell=newRow.insertCell()
    newcell.style.backgroundColor='#f7f7f7'
    newcell.innerHTML="<input name=units"+j+" type=text class=INPUT1 id=units"+j+"  size=3>"
    newcell=newRow.insertCell()
    newcell.style.backgroundColor='#f7f7f7'
    newcell.innerHTML="<input onpropertychange=count("+j+") name=price"+j+" type=text class=INPUT1 id=price"+j+"  size=8>"
    newcell=newRow.insertCell()
    newcell.style.backgroundColor='#f7f7f7'
    newcell.innerHTML="<input onpropertychange=count("+j+") name=number"+j+" type=text class=INPUT1 id=number"+j+"  size=8>"
    newcell=newRow.insertCell()
    newcell.style.backgroundColor='#f7f7f7'
    newcell.innerHTML="<input name=money"+j+" type=text class=INPUT1 id=money"+j+"  size=8>"
    newcell=newRow.insertCell()
    newcell.style.backgroundColor='#f7f7f7'
    newcell.innerHTML="<input name=remark"+j+" type=text class=INPUT1 id=remark"+j+"  size=20><input name=aveprice"+j+" type=hidden class=INPUT1 id=aveprice"+j+"  size=20><input name=fact_num"+j+" type=hidden id=fact_number"+j+">"
}