describe('Payments test (with setup and tear-down)', function() {
  beforeEach( function( ) { 
    billAmtInput.value = 100;
    tipAmtInput.value = 10;
  });


  it('should add a new payment to the payments table on submitPaymentInfo()', function() {
    submitPaymentInfo();

    expect(Object.keys(allPayments).length).toEqual(1);
    expect(allPayments['payment' + paymentId].billAmt).toEqual('100');
    expect(allPayments['payment' + paymentId].tipAmt).toEqual('10');
    
  });

  it('should append the new payment info to the UI"s PaymentTable', function () {
    submitPaymentInfo();
    let paymentTableTr = document.querySelector(`#payment${paymentId}`);
    expect(paymentTableTr.firstElementChild.innerText).toEqual('$100');
    expect(paymentTableTr.firstElementChild.nextSibling.innerText).toEqual('$10');
    expect(paymentTableTr.lastElementChild.previousElementSibling.innerText).toEqual('10%');
    
  });


  it('should update the summary table on the UI', function() {
    submitPaymentInfo()
    let summaryTableRow = document.querySelector("#summaryTable tbody tr")
    expect(summaryTableRow.firstElementChild.innerText).toEqual('$100');
    expect(summaryTableRow.firstElementChild.nextElementSibling.innerText).toEqual('$10');
    expect(summaryTableRow.lastElementChild.innerText).toEqual('10%');
    
  });

   
  afterEach(function() {
    allPayments = {}
    billAmtInput.value = "";
    tipAmtInput.value = "";
    document.querySelector("#paymentTable tbody tr").remove();
    document.querySelector("#summaryTable tbody tr").firstElementChild.innerText = "";
    document.querySelector("#summaryTable tbody tr").lastElementChild.innerText = "";
    document.querySelector("#summaryTable tbody tr").lastElementChild.previousElementSibling.innerText = "";
  
  }); 
})