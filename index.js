function PrintElem(elem)
{
    var mywindow = window.open('', 'PRINT');

    mywindow.document.write('<html><head><title>' + document.title  + '</title>');
    mywindow.document.write('<link rel="stylesheet" href="./style.css">');
    mywindow.document.write('</head><body >');
    mywindow.document.write(document.getElementById("container").innerHTML);
    mywindow.document.write('</body><script>setTimeout(window.print(),5000)</script></html>');

    mywindow.document.close(); // necessary for IE >= 10
    mywindow.focus(); // necessary for IE >= 10*/


    
    
    
    
    
    //mywindow.close();

    return true;
}

var bt = document.getElementById("printBt");

bt.addEventListener("click",()=>{
  window.print();
})
