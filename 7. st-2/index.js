function show(){
    console.log("hello");
    let value=document.getElementById("input_value").value;
    let height=0;
    while(value>=0){
        height+= value%10;
        value=Math.trunc(value/10);
    }
    alert(height);

}