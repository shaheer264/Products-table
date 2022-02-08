arr=[];

function myFunction () {
    var id = document.getElementById('ID').value;
    var price = document.getElementById('Price').value;
    var name = document.getElementById('Name').value;
    console.log("correct");
    logic (id, price, name);
    display(arr);
}

function logic(id, price, name) 
{
    for (var i = 0; i < arr.length; i++)
    {
        console.log(arr[i]);
        if (arr[i].id == id)
        {
            alert("Product ID already exists");
            return;
        }
    }
    obj = {};
    obj["id"] = id;
    obj["name"] = name;
    obj["Price"] = price; 
    arr.push(obj);
}

function display(result) {
    var text=document.getElementById("table1");
    text.innerHTML="<tr>\
    <td>Product Id</td>\
    <td>Product Name</td>\
    <td>Product Price</td>\
    </tr>";
    for (let i=0; i<result.length; i++) {
        text.innerHTML+='<tr>\
        <td>' + result[i].id + '</td>\
        <td>' + result[i].name + '</td>\
        <td>' + result[i].Price + '</td>\
    </tr>';
    }
}
