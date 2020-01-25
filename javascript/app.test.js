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
    submitPaymentInfo();

    
  });

  it ("it should remove the server's row from the UI's Server table when the row's delete button is clicked", function () {
   
    let deleteBtn = document.querySelector("td > button");
    
    deleteTableRow(deleteBtn);
    // No servers objects in allServers object
    expect(Object.keys(allServers).length).toEqual(0);
    
    // No servers displayed on server
    // - Server's table has zero tr's in tbody of #id=serverTable
  
  });

  it ("it should update remaining servers' earnings in UI's server table to reflect deletion of a server", function(){


  });

  it ("it should update the allServers object to reflect the server's deletion from the UI", function () {

  });

  // Deletion of Payment information 

  it ("it should remove a row of data from UI Payment table when that row's delete buttion is clicked", function () {

  });

  it ("it should update the allPayments object to reflect the server data deleted from the UI", function () {

  });

  it ("it should update the UI's Shift Summary table to reflect deletion of data from the UI Payment table ", function () {

  });

  it ("it should update the Earnings amounts of the Servers in the Server table when a Payment is deleted", function () {

  });

  afterEach (function() {
    serverTbody.innerHTML = "";
    allServers = {};
  });

}); 