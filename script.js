function convert(){
    let amount = document.getElementById('amount').value;
    let from = document.getElementById('from').value;
    let to = document.getElementById('to').value;
    let result

    if(from == "vnd" && to == "usd"){
        result = 'Result: ' + (amount/23000) + ' USD'
    }
    else if (from == "usd" && to == "vnd") {
        result = 'Result: ' + (amount*23000) + ' VND'
    }
    else if(from == 'vnd'){
        result = 'Result: '+amount+' VND'
    }
    else{
        result = 'Result: '+amount+' USD' 
    }

    document.getElementById('result').innerHTML = result
}




