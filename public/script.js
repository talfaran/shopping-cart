var ShoppingCart = function () {

  // an array with all of our cart items
  var cart = [];
  var totalPrice = 0;

  var updateCart = function () {
    $('.cart-list').empty();
    $('.total').empty();
    var source = $('#items-display').html();
    var template = Handlebars.compile(source);
    
    for(var i=0;i<cart.length;i++){
      var newHTML = template(cart[i]);
     
      console.log(totalPrice)
    // append our new html to the page
    $('.cart-list').append(newHTML);
    }
    $('.total').append(totalPrice);

    // TODO: Write this function. In this function we render the page.
    // Meaning we make sure that all our cart items are displayed in the browser.
    // Remember to empty the "cart div" before you re-add all the item elements.
  }

  var findItemInHtml = function (currentItem) {
    var $clickedItem = $(currentItem).closest('.card-item');
    console.log($clickedItem);
    var itemName = $clickedItem.data().name;
    console.log(itemName);
    var itemPrice = $clickedItem.data().price;
    console.log(itemPrice);

    item = {
      name: itemName,
      price: itemPrice
    }
    return item;
  }


  var addItem = function (item) {
    totalPrice = totalPrice + item.price;
    cart.push(item);
    console.log(cart)
    // TODO: Write this function. Remember this function has nothing to do with display. 
    // It simply is for adding an item to the cart array, no HTML involved - honest ;-)
  }

  var clearCart = function () {
  cart = [];
  totalPrice = 0;
  updateCart();
 
  }
  var togglecart = function() {
    $(".shopping-cart").toggleClass('show');
}

  return {
    updateCart: updateCart,
    addItem: addItem,
    clearCart: clearCart,
    findItemInHtml: findItemInHtml,
    togglecart: togglecart
  }

};

var app = ShoppingCart();

// update the cart as soon as the page loads!
app.updateCart();


//--------EVENTS---------

$('.view-cart').on('click', function () {
  app.togglecart(this);
});

$('.add-to-cart').on('click', function () {
  // TODO: get the "item" object from the page
  var item = app.findItemInHtml(this)
  app.addItem(item);
  app.updateCart();
});

$('.clear-cart').on('click', function () {
  app.clearCart();
});