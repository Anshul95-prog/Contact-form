<script>

const form = document.querySelector("form");
const firstName = document.querySelector("input[type='text']");
const lastName = document.querySelectorAll("input[type='text']")[1];
const email = document.querySelector("input[type='email']");
const message = document.querySelector("textarea");
const checkbox = document.querySelector("input[type='checkbox']");
const queryButtons = document.querySelectorAll(".query-type button");

let selectedQuery = "";

// Query Button Click
queryButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    
    // remove active from all
    queryButtons.forEach(function(btn) {
      btn.style.background = "white";
      btn.style.color = "black";
    });

    // add active to clicked
    button.style.background = "#00a884";
    button.style.color = "white";

    selectedQuery = button.innerText;
  });
});


// Form Submit
form.addEventListener("submit", function(e) {
  e.preventDefault();

  if (
    firstName.value === "" ||
    lastName.value === "" ||
    email.value === "" ||
    message.value === "" ||
    selectedQuery === ""
  ) {
    alert("Please fill all fields!");
    return;
  }

  if (!checkbox.checked) {
    alert("Please agree to the consent checkbox!");
    return;
  }

  alert("Form submitted successfully!");

  form.reset();
});

</script>
