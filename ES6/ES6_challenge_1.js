function orderSupplies(item, callback) {
  let warehouse; //undefined
  const deliveryTime = Math.random() * 3000;
  setTimeout(() => {
    warehouse = {
      paint: {
        product: 'Neon Green Paint',
        directions: () => 'mix it!'
      },
      brush: {
        product: 'Horsehair brush',
        directions: () => 'start painting!'
      },
      tarp: {
          product: 'A large tarp',
          directions: () => 'cover the floor!'
      }
    };
    callback(warehouse[item]);
  }, deliveryTime);
}
function receivedItem(item) {
    console.log(`Received ${item.product}, time to ${item.directions}!`);
}

let havePaint = false;
orderSupplies('brush', function(item){
    receivedItem(item);
    havePaint = true;
});


orderSupplies('paint', (item)=>{
    if(havePaint){
        receivedItem(item);
    } else {
        console.log("Checking for paint");
    }
    
});