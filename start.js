function submitForm(e) {
    e.preventDefault();
    let name = document.forms["welcome_form"]["name"].value;
    // let name1 = document.forms["welcome_form"]["name1"].value;
    sessionStorage.setItem("name", name);
    // sessionStorage.setItem("name1", name1);
  
    location.href = "index.html";
  }