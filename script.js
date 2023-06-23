// Tambahkan kode JavaScript kalian di file ini

function isNumber(num) {
  return !isNaN(num);
}

function checkboxIsChecked() {
  return document.getElementById("status").checked;
}

function handleGetFormData() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const city = document.getElementById("city").value;
  const zipCode = document.getElementById("zip-code").value;
  const status = document.getElementById("status").checked;
  const props = {
    name: name,
    email: email,
    city: city,
    zipCode: zipCode,
    status: status,
  };
  return props;
}

function validateFormData(props) {
  if (props != null && isNumber(props.zipCode) && checkboxIsChecked()) {
    return true;
  } else {
    return false;
  }
}

document
  .getElementById("submit-form")
  .addEventListener("click", function (event) {
    event.preventDefault();
    submit();
  });

function submit() {
  const props = handleGetFormData();
  const hasil = validateFormData(props);
  if (hasil == false) {
    document.getElementById("warning").innerText =
      "Periksa form anda sekali lagi";
  } else {
    document.getElementById("warning").innerText = "";
  }
}
