document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawField =  document.getElementById('withdraw-field')
    const newWithdrawAmountString = withdrawField.value
    const newWithdrawAmount = parseFloat(newWithdrawAmountString)
    withdrawField.value = '';
    const withdrawTotalElement = document.getElementById('withdraw-total')
    const previousWithdrawTotalString = withdrawTotalElement.innerText
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString)
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = newWithdrawTotal;
    const balanceTotalElement = document.getElementById('balance-total')
    const previousBalanceTotalElementString = balanceTotalElement.innerText
    const previousBalanceTotalElementAmount = parseFloat(previousBalanceTotalElementString);
    const newBalanceTotal = previousBalanceTotalElementAmount - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal

if(newBalanceTotal < 0 ){
    alert('your bank balance is finished now Bank will give you loan .When you again deposit money bank will take it as fillup the loan')
}
    
})