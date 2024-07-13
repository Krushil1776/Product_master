function validateForm() {

    // Get form input values
    var userName = $("#userName").val();
    var email = $("#Email").val();
    var password = $("#passwo").val();
    var confirmPassword = $("#passwo1").val();

    // Check if any field is empty
    if(userName == null || userName == ""){
        toastr.error("Please Enter Valid UserName");
        return;
    }

      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            toastr.error("Invalid email address");
            return;
        }

  // Check if any field is empty
    if(password == null || password == ""){
        toastr.error("Please Enter Valid Password");
        return;
    }
    // Check if passwords match
    if (password !== confirmPassword) {
        toastr.error("Passwords do not match");
        return;
    }

    // Validate email format


    // Create data object to send in AJAX request
    var data = {
        name: userName,
        email: email,
        password: password
    };

    // AJAX request to create user
    $.ajax({
        url: "/CreateUser",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(data),
        success: function(response) {
            // Handle success response from server
            toastr.success("User created successfully");
            Clear();
            // Optionally, redirect or perform other actions here
        },
        error: function(xhr, status, error) {
            // Handle error response from server
            toastr.error("Email id Present   " + error);
        }
    });
}



function Clear(){
$("#userName").val("");
$("#Email").val("");
$("#passwo").val("");
 $("#passwo1").val("");
}