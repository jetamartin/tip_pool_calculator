describe("Utility test for appendDeleteBtn", function() {

  beforeEach(function() {

  });

  it ("it should append a delete button to a given Table Row", function() { 
    let tr = document.createElement('TR');
    appendDeleteBtn(tr);

    let tdContainingDeleteBtn = tr.lastElementChild;

    expect(tdContainingDeleteBtn.firstElementChild.nodeName).toEqual('BUTTON');
    expect(tdContainingDeleteBtn.firstElementChild.innerText).toEqual('X');

  });

  afterEach(function() {

  })

});

describe("Delete Server and Payment data via table row delete button", function() {

  beforeEach (function() {
    serverNameInput.value = 'Alice';
    submitServerInfo();

    billAmtInput.value = 100;
    tipAmtInput.value = 10;
    submitPaymentInfo();

    
  });

  it ("it should remove the server's row from the UI's Server table when the row's delete button is clicked", function () {
    submitPaymentInfo();
    let deleteBtn = document.querySelector("#serverTable td > button");
    
    deleteTableRow(deleteBtn);
    // No servers objects in allServers object
    expect(Object.keys(allServers).length).toEqual(0);
    expect(document.querySelector("#serverTable tbody").firstElementChild).toEqual(null);
   
  });

  it ("it should remove a server & update remaining servers' earnings in UI's server table to reflect deletion of a server", function(){
    serverNameInput.value = 'Rick';
    submitServerInfo();

    let deleteBtn = document.querySelector("#serverTable td > button");
    deleteTableRow(deleteBtn);
    expect(Object.keys(allServers).length).toEqual(1);
    
    expect(document.querySelector("#serverTable tbody tr td").nextElementSibling.innerText).toEqual("$10.00");
    
  });

  // // Deletion of Payment information 

  it ("it should remove payment data from the UI's Payment table and update the allPayments object when that row's delete buttion is clicked", function () {
    
    let deleteBtn = document.querySelector("#paymentTable td > button");
    
    deleteTableRow(deleteBtn);
    // No servers objects in allServers object
    expect(Object.keys(allPayments).length).toEqual(0);
    expect(document.querySelector("#paymentTable tbody").firstElementChild).toEqual(null);
  });

  it ("it should update the UI's Shift Summary table to reflect deletion of data from the UI Payment table ", function () {
    billAmtInput.value = 200;
    tipAmtInput.value = 20;
    submitPaymentInfo();

    let deleteBtn = document.querySelector("#paymentTable td > button");
    
    deleteTableRow(deleteBtn);

    let summaryTableTr = document.querySelector("#summaryTable tbody tr");
    expect(summaryTableTr.firstElementChild.innerText).toEqual("$200");
    expect(summaryTableTr.firstElementChild.nextElementSibling.innerText).toEqual("$20");
    expect(summaryTableTr.lastElementChild.innerText).toEqual("10%");
   });

  it ("it should update the Earnings amounts of the Servers in the Server table when a Payment is deleted", function () {
    serverNameInput.value = 'Rick';
    submitServerInfo();

    billAmtInput.value = 200;
    tipAmtInput.value = 20;
    submitPaymentInfo();

    let deleteBtn = document.querySelector("#paymentTable td > button"); 
    deleteTableRow(deleteBtn);

    expect(document.querySelector("#serverTable tbody tr").firstElementChild.nextElementSibling.innerText).toEqual("$10.00");

  });

  afterEach (function() {
    serverTbody.innerHTML = "";
    allServers = {};

    allPayments = {}
    billAmtInput.value = "";
    tipAmtInput.value = "";
    // if a prior test case deleted the only payment then no need to clear out payment table entry or summary items
    if (document.querySelector("#paymentTable tbody tr")) {
      document.querySelector("#paymentTable tbody tr").remove();
      document.querySelector("#summaryTable tbody tr").firstElementChild.innerText = "";
      document.querySelector("#summaryTable tbody tr").lastElementChild.innerText = "";
      document.querySelector("#summaryTable tbody tr").lastElementChild.previousElementSibling.innerText = "";
    }
   
  });

}); 