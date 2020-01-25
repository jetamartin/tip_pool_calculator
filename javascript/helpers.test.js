describe("Helpers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    // let theServers = ["James","Mary", "Jenny"];
    // for (const server of theServers) {
    //     serverNameInput.value = server;
    //     submitServerInfo();
    // }
    
    allPayments = { 
      payment1: {billAmt: '300', tipAmt: '30'},
      payment2: {billAmt: '100', tipAmt: '15'},
      payment3: {billAmt: '100', tipAmt: '30'} 
    }
  });

  it('should sum all billAmt totals', function () {
    let billAmtTotal = sumPaymentTotal('billAmt');
    expect(billAmtTotal).toEqual(500);
  });

  it("should calculate and return the tip percent (billAmt/tipAmt)", function() {
    let tipPercent = calculateTipPercent(100, 10);
    expect(tipPercent).toEqual(10);
  }); 

  it(("should create a HTML td element with the input value and append it to a tr element passed as input"), function() {
    let tr = document.createElement('TR')
    appendTd(tr, "hello");

    expect(tr.firstElementChild.nodeName).toEqual('TD');
    expect(tr.firstElementChild.innerText).toEqual('hello');

  });

  afterEach(function() {
    allPayments = {};
  });
});
