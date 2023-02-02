<script src="https://www.paypal.com/sdk/js?client-id=tebatsomarokane48@gmail.com"></script>
<script>
  // Add item to cart
  document.getElementById("add-to-cart").addEventListener("click", function() {
    // Add item to cart logic here...
    document.getElementById("checkout").style.display = "inline-block";
  });

  // Checkout with PayPal
  document.getElementById("checkout").addEventListener("click", function() {
    paypal.Buttons({
      createOrder: function(data, actions) {
        // Set up the order and calculate the total amount
        return actions.order.create({
          purchase_units: [{
            amount: {
              currency_code: "ZAR",
              value: "25.00"
            }
          }]
        });
      },
      onApprove: function(data
