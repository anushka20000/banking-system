var button = document.getElementById("buttons");

button.addEventListener("click", function() {
    document.querySelector(".pop").style.display = "flex";

});

document.getElementById("close-win").addEventListener("click", function() {
    document.querySelector(".pop").style.display = "none";
});

var send = document.getElementById("send");
send.addEventListener("click", function() {
    document.querySelector(".pop").style.display = "none";

    var str = document.getElementById("name").value;

    var str2 = document.getElementById("amt").value;
    var nstr2 = parseFloat(str2);
    var r = document.getElementById("swag").innerHTML;
    var amt = document.getElementById("s").innerHTML;
    var namt = parseFloat(amt);
    var tamt = nstr2 + namt;

    var a = document.getElementById("ani").innerHTML;
    var aamt = document.getElementById("a").innerHTML;
    var naamt = parseFloat(aamt);
    var taamt = nstr2 + naamt;

    var b = document.getElementById("ban").innerHTML;
    var bmt = document.getElementById("b").innerHTML;
    var nbmt = parseFloat(bmt);
    var tbmt = nstr2 + nbmt;

    var ta = document.getElementById("tan").innerHTML;
    var tamtt = document.getElementById("t").innerHTML;
    var ntamt = parseFloat(tamtt);
    var ttamt = nstr2 + ntamt;

    var v = document.getElementById("vir").innerHTML;
    var vmt = document.getElementById("v").innerHTML;
    var nvmt = parseFloat(vmt);
    var tvmt = nstr2 + nvmt;

    var m = document.getElementById("ma").innerHTML;
    var mmt = document.getElementById("n").innerHTML;
    var nmmt = parseFloat(mmt);
    var tmmt = nstr2 + nmmt;

    var w = document.getElementById("swas").innerHTML;
    var wmt = document.getElementById("w").innerHTML;
    var nwmt = parseFloat(wmt);
    var twmt = nstr2 + nwmt;

    var p = document.getElementById("por").innerHTML;
    var pmt = document.getElementById("p").innerHTML;
    var npmt = parseFloat(pmt);
    var tpmt = nstr2 + npmt;

    var i = document.getElementById("ai").innerHTML;
    var imt = document.getElementById("i").innerHTML;
    var nimt = parseFloat(imt);
    var timt = nstr2 + nimt;

    var q = document.getElementById("sam").innerHTML;
    var qmt = document.getElementById("m").innerHTML;
    var nqmt = parseFloat(qmt);
    var tqmt = nstr2 + nqmt;
    var bal_acc = parseFloat(document.getElementById("total-balance").innerHTML);

    if (bal_acc >= nstr2) {
        if (str === r) {
            document.getElementById("s").innerHTML = tamt;
            alert("Transaction is successful " + "An amount of " + nstr2 + " has been transferred to " + r);
            document.getElementById("total-balance").innerHTML = bal_acc - nstr2;

        } else if (str === a) {
            document.getElementById("a").innerHTML = taamt;
            alert("Transaction is successful " + "An amount of " + nstr2 + " has been transferred to " + a);
            document.getElementById("total-balance").innerHTML = bal_acc - nstr2;

        } else if (str === b) {
            document.getElementById("b").innerHTML = tbmt;
            alert("Transaction is successful " + "An amount of " + nstr2 + " has been transferred to " + b);
            document.getElementById("total-balance").innerHTML = bal_acc - nstr2;

        } else if (str === ta) {
            document.getElementById("t").innerHTML = ttamt;
            alert("Transaction is successful " + "An amount of " + nstr2 + " has been transferred to " + ta);

            document.getElementById("total-balance").innerHTML = bal_acc - nstr2;

        } else if (str === v) {
            document.getElementById("v").innerHTML = tvmt;
            alert("Transaction is successful " + "An amount of " + nstr2 + " has been transferred to " + v);

            document.getElementById("total-balance").innerHTML = bal_acc - nstr2;

        } else if (str === m) {
            document.getElementById("n").innerHTML = tmmt;
            alert("Transaction is successful " + "An amount of " + nstr2 + " has been transferred to " + m);
            document.getElementById("total-balance").innerHTML = bal_acc - nstr2;


        } else if (str === w) {
            document.getElementById("w").innerHTML = twmt;
            alert("Transaction is successful " + "An amount of " + nstr2 + " has been transferred to " + w);
            document.getElementById("total-balance").innerHTML = bal_acc - nstr2;


        } else if (str === p) {
            document.getElementById("p").innerHTML = tpmt;
            alert("Transaction is successful " + "An amount of " + nstr2 + " has been transferred to " + p);
            document.getElementById("total-balance").innerHTML = bal_acc - nstr2;


        } else if (str === i) {
            document.getElementById("i").innerHTML = timt;
            alert("Transaction is successful " + "An amount of " + nstr2 + " has been transferred to " + i);
            document.getElementById("total-balance").innerHTML = bal_acc - nstr2;

        } else if (str === q) {
            document.getElementById("m").innerHTML = tqmt;
            alert("Transaction is successful " + "An amount of " + nstr2 + " has been transferred to " + q);
            document.getElementById("total-balance").innerHTML = bal_acc - nstr2;

        } else {
            alert("Invalid User Id. Sorry, failed transaction!");

        }
    } else {
        alert("You do not have sufficient balance in your account");
    }

});