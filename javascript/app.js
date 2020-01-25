
let serverTable = document.querySelector("#serverTable tbody");
let paymentTable = document.querySelector("#paymentTable tbody"); 

//**********************************************************************************************/
// Helper function: Adds a delete button to a table row 
// Expects a table row element, appends a newly created td element containing delete button
//**********************************************************************************************/
function appendDeleteBtn(tr) {

  let newTd = document.createElement('td');
  let deleteBtn = document.createElement('BUTTON');
  deleteBtn.innerText = "X"
  newTd.appendChild(deleteBtn);

  tr.append(newTd);
}


//**********************************************************************************************/
// Helper functions for deleteTableRow()
//----------------------------------------------------------------------------------------------/
function deleteRowButtonClicked (e) {
  return (e.target.tagName === "BUTTON" ? true : false);
}

function rowClickedIsForServerData (id) {
  return (id.includes("server") ? true : false);
}

function getIdOfTableRow (deleteBtnClicked) {
  return deleteBtnClicked.parentElement.parentElement.id;
}

function removeClickedRowFromUI(deleteBtnClicked) {
  // document.querySelector(`"#${id}"`).remove();
  deleteBtnClicked.parentElement.parentElement.remove();
}

function deleteServerRecord( id ) {
  delete allServers[ id ];
}

function deletePaymentRecord( id ) {
  delete allPayments[ id ];
}
//**********************************************************************************************/


//**********************************************************************************************/
// Deletes table row and updates the approproriate data structure and UI to reflect deletion
// of row's data
//**********************************************************************************************/
function deleteTableRow (deleteBtnClicked) {

  // if (deleteRowButtonClicked(e)) {

  //   // Get handle for the delete button
  //   let deleteBtnClicked = e.target;  

    // Get the id of the clicked row
    let parentIdOfClickedRow = getIdOfTableRow (deleteBtnClicked);

    // Delete the clicked row from the UI
    removeClickedRowFromUI(deleteBtnClicked); 

    // Update the underlying data structure and associated UI tables to reflect UI row deletion
    if (rowClickedIsForServerData(parentIdOfClickedRow)) {  // User clicked to delete to server data row

      deleteServerRecord(parentIdOfClickedRow); // Delete associated server record from local data structure
      updateServerTable();   //Update other related server UI tables to reflect deletion of the row's data 

    } else {  // User clicked to delete to payment data row

      deletePaymentRecord(parentIdOfClickedRow); // Delete associated payment record from local data structure
      updateServerTable(); //Update other related server UI tables to reflect deletion of row data 
      updateSummary();  //Update other related paymen UI tables to reflect deletion of row data 
    }
  // }
};

function processDeleteTableRowEvent (e) {
  if (deleteRowButtonClicked(e)) {

    // Get handle for the delete button
    let deleteBtnClicked = e.target; 
    
    deleteTableRow(deleteBtnClicked);
  }
}

// Event listeners for delete button 
serverTable.addEventListener('click', processDeleteTableRowEvent); 
paymentTable.addEventListener('click', processDeleteTableRowEvent);