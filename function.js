function validate(){
    let flag=true;
    var fn=document.getElementById("FName");
    if(fn.value.length==0)
        flag=false;
    var ln=document.getElementById("LName");
    if(ln.value.length==0)
        flag=false;
    var e=document.getElementById("email");
    if(e.value.length==0)
        flag=false;
    var Wn=document.getElementById("WName");
    if(Wn.value.length==0)
        flag=false;
    if(flag==false)
        alert("Enter all Required Details");
    return flag;

}