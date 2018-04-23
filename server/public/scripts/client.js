console.log('js');

let currentType= '';

function doMathNow() {
    console.log('in doMathNow');
    // target elements with ids of xIn and yIn and get their value
    // create object to send
    let objectToSend = {
        x: $('#xIn').val(),
        y: $('#yIn').val(),
        type: currentType
    } // end objectToSend
    console.log('sending to server:', objectToSend);
    $.ajax({
        method: 'POST',
        url: '/doMath',
        data: objectToSend
    }).then(function (response){
        console.log('back from server with', response);
    });
} // end doMathNow function

function setOperator() {
    console.log('in setOperator', $(this).text());
    currentType = $(this).text();
} //end setOperator function
function readyNow(){
    console.log('JQ');
    // click handler for element with id of doMathButton
    $('#doMathButton').on('click', doMathNow);
    $('#addButton').on('click', setOperator);
    $('#subractButton').on('click', setOperator);
    $('#multiplyButton').on('click', setOperator);
    $('#divideButton').on('click', setOperator);
} // end readyNow function

$(document).ready(readyNow);
