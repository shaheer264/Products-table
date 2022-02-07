function myFunction () {
    var id = document.getElementById('ID').value;
    var price = document.getElementById('Price').value;
    var name = document.getElementById('Name').value;
    var output= {};
    console.log("correct");
    output = logic (id, price, name);
    display(output);
}
function logic(id, price, name) {
    arr=[];
    obj = {};
    {
        obj["id"] = id;
        obj["name"] = name;
        obj["price"] = price; 
        arr.push(obj);
        console.log(arr);
        return arr;  
    }
}
function display(result) {
    var text=document.getElementById("table1");
    text.innerHTML+=`<tr> 
    <td>${result[0].id}</td>
    <td>${result[0].name}</td>
    <td>${result[0].price}</td>
 </tr>`;
}  
