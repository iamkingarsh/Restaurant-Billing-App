var DC = 40, VC = 80, CC = 20, ZSC = 35;
var DC_q = 0, VC_q = 0, CC_q = 0, ZSC_q = 0;

var name = "", email = "";
var DCBill = "", VCBill = "", CCBill = "", ZSCBill = "";
var Total_Amount = 0;

// Personal_Details

let Name1 = document.getElementById("name1");
let Email1 = document.getElementById("email1");

let Name2 = document.getElementById("name2");
let Email2 = document.getElementById('email2');

Name1.addEventListener("keyup", function () {
    Name2.innerHTML = Name1.value;
})

Email1.addEventListener("keyup", function () {
    Email2.innerHTML = Email1.value;
})

//Billing

// Diet Coke
document.getElementById("DC").addEventListener("keyup", function () {
    if (this.value == "" || this.value == 0) {
        DCBill = "";
        DC_q = 0;
        showBill();
    } else {
        DC_q = this.value;
        DCBill = "<tr><td>Diet Coke</td><td> ₹ " + DC + "</td><td>" + DC_q + "</td><td>" + DC + "x" + DC_q + " = " + DC * DC_q + "</td></tr>";
        showBill();
    }
});

// Vanilla Coke
document.getElementById("VC").addEventListener("keyup", function () {
    if (this.value == "" || this.value == 0) {
        VCBill = "";
        VC_q = 0;
        showBill();
    } else {
        VC_q = this.value;
        VCBill = "<tr><td>Vanilla Coke</td><td> ₹ " + VC + "</td><td>" + VC_q + "</td><td>" + VC + "x" + VC_q + " = " + VC * VC_q + "</td></tr>";
        showBill();
    }
});

// Coca Cola
document.getElementById("CC").addEventListener("keyup", function () {
    if (this.value == "" || this.value == 0) {
        CCBill = "";
        CC_q = 0;
        showBill();
    } else {
        CC_q = this.value;
        CCBill = "<tr><td>Coca Cola</td><td> ₹ " + CC + "</td><td>" + CC_q + "</td><td>" + CC + "x" + CC_q + " = " + CC * CC_q + "</td></tr>";
        showBill();
    }
});

//Zero Sugar Coke
document.getElementById("ZSC").addEventListener("keyup", function () {
    if (this.value == "" || this.value == 0) {
        ZSCBill = "";
        ZSC_q = 0;
        showBill();
    } else {
        ZSC_q = this.value;
        ZSCBill = "<tr><td>Zero Sugar Coke</td><td> ₹ " + ZSC + "</td><td>" + ZSC_q + "</td><td>" + ZSC + "x" + ZSC_q + " = " + ZSC * ZSC_q + "</td></tr>";
        showBill();
    }
});

function showBill() {
    document.getElementById("bill").innerHTML = DCBill + VCBill + CCBill + ZSCBill; //table statement
    document.getElementById("Amount").innerHTML = DC * DC_q + VC * VC_q + CC * CC_q + ZSC * ZSC_q; // total amount
}

//Bill Printing

function PrintBill() {
    var Box1 = document.getElementById("dissolve-1")
    var Box2 = document.getElementById("dissolve-2")
    var box3 = document.getElementById("print")
    var btn = document.getElementById("btn")
    Box1.style.display = "none";
    Box2.style.display = "none";
    box3.classList.append = "New";
    // btn.style.display= "none"
    document.body.innerHTML;
    print();
    Box1.style.display = "block";
    Box2.style.display = "block";
    box3.style.margin = "margin: 0px auto;"
    // btn.style.display= "block";
}
// document.body.innerHTML = Body;

function naam(e) {
    console.log("Hello " + e)
}
naam("Arshad")