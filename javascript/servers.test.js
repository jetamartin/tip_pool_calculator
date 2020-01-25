describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
     });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it("should add the server's name and calculated tip amount to the UI's Server table", function() {
    submitServerInfo();
    let serverTableTr = document.querySelector(`#server${serverId}`);
    expect(serverTableTr.firstElementChild.innerText).toContain('Alice');
    expect(serverTableTr.firstElementChild.nextElementSibling.innerText).toEqual('$0.00');
  }); 

  afterEach(function() {
    // teardown logic
    serverTbody.innerHTML = "";
    // Should I use something that is more general to accomodate all types of tests (e.g., adding multiple Servers)
    // If so then I would need a loop to remove members of allServers (i.e., loop)
    // for (const server in allServers) {
    //   if (allServers.hasOwnProperty(server)) {
    //     delete allServers[server];
    //     console.log(allServers);
    //   }
    // }
   
    // serverTbody.querySelector(`#server${serverId}`).remove();
    // delete allServers['server' + serverId];
    allServers = {};
  });
});
