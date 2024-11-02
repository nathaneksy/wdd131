<form id="checkoutForm" action="completed.html">
  <label for="fullName">Full Name:</label>
  <input type="text" id="fullName" name="fullName" required />

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required />

  <label for="address">Address:</label>
  <textarea id="address" name="address" rows="4" required></textarea>

  <label for="paymentMethod">Payment Method:</label>
  <select id="paymentMethod" name="paymentMethod" required>
    <option value="">Select Payment Method</option>
    <option value="creditCard">Credit Card</option>
    <option value="paypal">PayPal</option>
  </select>

 <p id="creditCardNumberContainer" class="hide">
    <label for="creditCardNumber">Credit Card Number:</label>
    <input
      type="text"
      id="creditCardNumber"
      name="creditCardNumber"
      pattern="[0-9]{16}"
      placeholder="Enter 16 digits"
      required
    />
  </p>

  <p id="paypalUsernameContainer" class="hide">
    <label for="paypalUsername">PayPal Username:</label>
    <input
      type="text"
      id="paypalUsername"
      name="paypalUsername"
      placeholder="Enter PayPal username"
      required
    />
  </p>

  <button type="submit">Place Order</button>
</form>