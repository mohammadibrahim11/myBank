document.getElementById('deposit-btn').addEventListener('click',function(){
   
    const depositField = document.getElementById('depositfield')
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
   

    const depositTotalElement = document.getElementById('deposite-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    const currentDeposit = previousDepositTotal + newDepositAmount;
    // console.log(currentDeposit);
    depositTotalElement.innerText = currentDeposit;  

    const BalnaceTotalElement = document.getElementById('balance-total') ;
    const previousBalnaceTotalString  = BalnaceTotalElement.innerText
    const previousBalnaceTotal = parseFloat(previousBalnaceTotalString);

    const totalBalance = previousBalnaceTotal + newDepositAmount;
    BalnaceTotalElement.innerText = totalBalance;

   

    
    depositField.value = '';
     // console.log(depositAmount);
}
)

