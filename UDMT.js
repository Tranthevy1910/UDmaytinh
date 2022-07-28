function tong(){
    let so1= +document.getElementById("so1").value;
    let so2= +document.getElementById("so2").value;
    let result = so1 + so2;
    document.getElementById("result").innerHTML=result;
}

function hieu(){
    let so1= +document.getElementById("so1").value;
    let so2= +document.getElementById("so2").value;
    let result = so1 - so2;
    document.getElementById("result").innerHTML=result;
}

function result(){
    let so1= +document.getElementById("so1").value;
    let so2= +document.getElementById("so2").value;
    let result = so1*so2;
    document.getElementById("result").innerHTML=nhan;
}

function thuong(){
    let so1= +document.getElementById("so1").value;
    let so2= +document.getElementById("so2").value;
    let result = so1/so2;
    document.getElementById("result").innerHTML=result;
}