async function createAccount() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let username = document.getElementById("username").value;
  let mobile = document.getElementById("mobile").value;
  let description = document.getElementById("description").value;

  if (
    name == "" ||
    email == "" ||
    password == "" ||
    username == "" ||
    mobile == "" ||
    description == ""
  ) {
    alert("Some fields are Empty");
    return;
  }
  let regData = {
    name: name,
    email: email,
    password: password,
    username: username,
    mobile: mobile,
    description: description,
  };

  let givenData = JSON.stringify(regData);

  try {
    let registerUrl = "https://masai-api-mocker.herokuapp.com/auth/register";

    let response = await fetch(registerUrl, {
      method: "POST",
      body: givenData,
      headers: {
        "Content-Type": "application/json",
      },
    });

    let op = await response.json();

    if (op.message == "Registration Success") {
      alert("Registration Success");
      window.location.href = "login.html";
    } else {
      alert("Registration failed, user already exists");
    }
  } catch (er) {
    console.log("ERROR : " + er);
  }
}
