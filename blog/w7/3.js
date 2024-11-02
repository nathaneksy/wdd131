function validateForm(event) {
    const theForm = event.target;
    const errors = [];

    let isValid = true;
    if (theForm.paymentMethod.value === "creditCard") {
      if (theForm.creditCardNumber.value !== "1234123412341234") {
        isValid = false;
        errors.push("Invalid Credit Card Number");
      }
    }
    if (theForm.fullName.value !== "Bob") {
      isValid = false;
      errors.push("Your name is not Bob");
    }
        if (!isValid) {
      event.preventDefault();
      showErrors(errors);
      return false;
    }
  }
  document
    .querySelector("#checkoutForm")
    .addEventListener("submit", validateForm);