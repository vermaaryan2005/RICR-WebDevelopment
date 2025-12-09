
document.getElementById("checkout-form").addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("customerName").value;

  if (name === "") {
    alert("Please enter your name!");
    return;
  }

  console.log("Checkout Submitted by:", name);

  alert("Thank you for Shopping, " + name + "!");
});


document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("contactName").value;
  let email = document.getElementById("contactEmail").value;
  let message = document.getElementById("message").value;

  if (name === "" || email === "" || message === "") {
    alert("Please fill all required fields!");
    return;
  }

  if (!email.includes("@")) {
    alert("Please enter a valid email!");
    return;
  }

  if (message.length < 10) {
    alert("Message must contain at least 10 characters!");
    return;
  }

  console.log("Contact Form Submitted By:", name);

  alert("Thank you for contacting us, " + name + "!");
});
