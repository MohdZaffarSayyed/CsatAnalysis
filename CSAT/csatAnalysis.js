function calculate() {


    var cscore = parseFloat(document.getElementById("cscore").value);
    var nratings = parseInt(document.getElementById("nratings").value)
    var rscore = parseFloat(document.getElementById("rscore").value);

    if (rscore < cscore) {
        //alert("Please enter the required score more than current score!!");
        event.preventDefault();
        swal("ERROR!", "Please enter the required score more than current score!!");
    } else {
        var DaysWorking = parseInt(document.getElementById("DaysWorking").value);
        var total = Math.round(((rscore * nratings) - (cscore * nratings)) / (5 - rscore));
        //alert(total);
        var text = total.toString();
        //alert(text);
        event.preventDefault();
        swal("Total Number of 5 scores required", text);



    }
}

function calculate2() {


    var cscore = parseFloat(document.getElementById("cscore").value);
    var nratings = parseInt(document.getElementById("nratings").value)
    var rscore = parseFloat(document.getElementById("rscore").value);

    if (rscore < cscore) {
        event.preventDefault();
        swal("ERROR!", "Please enter the required score more than current score!!");
    } else {
        var DaysWorking = parseInt(document.getElementById("DaysWorking").value);
        var total = Math.round(((rscore * nratings) - (cscore * nratings)) / (5 - rscore));
        //alert(total);
        var text = total.toString();
        //alert(text);
        event.preventDefault();

        var daily = Math.round(total / DaysWorking);
        var text2 = daily.toString();

        swal("Total Number of 5 scores required daily", text2);


    }
}