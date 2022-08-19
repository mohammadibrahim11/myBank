// step-1
document.getElementById('withdraw-btn').addEventListener('click',function(){
  
    const withdrawField = document.getElementById('withdrawfield');
    const withdrawFieldAmountstring = withdrawField.value;
    const withdrawFieldAmount = parseFloat(withdrawFieldAmountstring);



    const withdrawTotalElement = document.getElementById('withdraw-total');
    const withdrawTotalAmountString = withdrawTotalElement.innerText;
    const withdrawTotalAmount = parseFloat(withdrawTotalAmountString);

    const totalwithdraw = withdrawFieldAmount + withdrawTotalAmount

    withdrawTotalElement.innerText = totalwithdraw;

    const balnaceTotalElement = document.getElementById('balance-total');
    const  balnaceTotalElementString = balnaceTotalElement.innerText;
    const previousBalnaceTotal =parseFloat(balnaceTotalElementString);

    const newBalanceTotal = previousBalnaceTotal - withdrawFieldAmount;
    balnaceTotalElement.innerText = newBalanceTotal;

 


    

    withdrawField.value= '';
})