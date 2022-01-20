let myCred;

async function loginMyAccount() {
  let user = document.getElementById("user").value;
  let pass = document.getElementById("pass").value;

  if (user == "" || pass == "") {
    alert("Fields Missing");
  }

  let logCred = {
    username: user,
    password: pass,
  };
  credLog = JSON.stringify(logCred);

  try {
    let loginUrl = "https://masai-api-mocker.herokuapp.com/auth/login";

    let valuer = await fetch(loginUrl, {
      method: "POST",
      body: credLog,
      headers: {
        "Content-Type": "application/json",
      },
    });

    let xo = await valuer.json();

    if (xo.token == "47097357fa18466c03efe81b056677d" || xo.error == "false") {
    } else {
      alert("Login Successful");
    }
  } catch (er) {
    alert("Invalid Credentials...");
  }
}

let register = () => {
  window.location.href = "register.html";
};
