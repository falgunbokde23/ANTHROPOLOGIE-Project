var total_item_details = JSON.parse(localStorage.getItem("basket"));
// console.log(total_item_details);

var total_price = 0;
var count = 0

total_item_details.forEach(function(elem, index){
    var tableRow = document.createElement("tr");
    
    var tableData1 = document.createElement("td");
    var tableImage = document.createElement("img");
    tableData1.setAttribute("class", "timage");
    tableImage.setAttribute("src", elem.image);
    tableData1.append(tableImage);
    
    var tableData2 = document.createElement("td");
    tableData2.innerText = elem.name;
    tableData2.setAttribute("class", "tname");

    var tableData3  = document.createElement("td");
    tableData3.innerText = "$ "+elem.price;
    total_price += elem.price;
    count++;
    tableData3.setAttribute("class", "tprice");

    var tableData4 = document.createElement("td");
    tableData4.setAttribute("class", "tremove");
    var removeBtn = document.createElement("button");
    removeBtn.innerText = "Remove from basket"
    removeBtn.setAttribute("id", "removeButton");
    tableData4.append(removeBtn);
    console.log(tableData4.innerHTML)


    removeBtn.addEventListener("click", function(){
        removeFun(elem, index);
    });


    document.querySelector("#tbody").append(tableRow);
    tableRow.append(tableData1, tableData2, tableData3, tableData4);
})

function removeFun(elem,index){
        console.log("working");

        total_item_details.splice(index, 1);
        localStorage.setItem("basket", JSON.stringify(total_item_details));
        window.location.reload();
}

console.log(total_price, count);
var billNumber = document.querySelector("#Basket_heading>p").innerText = "Bill Number "+total_price/count*100;
console.log(billNumber);

document.querySelector("#subtotalAmount").innerText = total_price;
var shippment = count*10;
document.querySelector("#ShippingAmount").innerText = shippment;
document.querySelector("#Total").innerText = shippment+total_price;

document.querySelector("#promo").addEventListener("click", promoFun);

function promoFun(){
    console.log(total_price);
    var selectValue = document.querySelector("select").value;
    if(selectValue == "Shashwat50"){
        document.querySelector("#subtotalAmount").innerText = total_price/2;
        document.querySelector("#ShippingAmount").innerText = shippment/2;
        document.querySelector("#Total").innerText = (shippment+total_price)/2;
        alert("Promo code applied successfully");
    }
    else if(selectValue == "Falgun"){
        document.querySelector("#Total").innerText = total_price;
        document.querySelector("#ShippingAmount").innerText = 0;
        alert("Promo code applied successfully");
    }
    else if(selectValue == "Shalini20"){
        document.querySelector("#subtotalAmount").innerText = total_price - (total_price/5);
        document.querySelector("#Total").innerText = document.querySelector("#subtotalAmount").innerText + shippment;
        alert("Promo code applied successfully");
    }
    else if(selectValue =="Asheesh70"){
        document.querySelector("#ShippingAmount").innerText = shippment - (shippment*.7);
        document.querySelector("#Total").innerText = Number(document.querySelector("#ShippingAmount").innerText) + total_price;
        alert("Promo code applied successfully");
    }
    else if(selectValue =="Aditya"){
        document.querySelector("#Total").innerText = shippment+total_price - ((shippment+total_price)*.4);
        alert("Promo code applied successfully");
    }
}

document.querySelector("#checkout").addEventListener("click", checkoutFun);
function checkoutFun(){
    var bill = {
        subtotal: document.querySelector("#subtotalAmount").innerText,
        shipping: document.querySelector("#ShippingAmount").innerText,
        total: document.querySelector("#Total").innerText
    }

    localStorage.setItem("Bill_details", JSON.stringify(bill));
}