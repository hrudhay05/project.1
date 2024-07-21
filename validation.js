function printError(Id, Msg) {
    document.getElementById(Id).innerHTML = Msg;
}

function validateForm() {
    var name = document.Form.name.value.trim();
    var name1 = document.Form.name1.value.trim();
    var email = document.Form.email.value.trim();
    var mobile = document.Form.mobile.value.trim();
    var country = document.Form.country.value;
    var course = document.Form.course.value;
    var gender = document.Form.gender.value;

    var nameErr = false;
    var name1Err = false;
    var emailErr = false;
    var mobileErr = false;
    var countryErr = false;
    var courseErr = false;
    var genderErr = false;

    if (name === "") {
        printError("nameErr", "Please enter your first name");
        nameErr = true;
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (!regex.test(name)) {
            printError("nameErr", "Please enter a valid first name");
            nameErr = true;
        } else {
            printError("nameErr", "");
        }
    }

    if (name1 === "") {
        printError("nameErr1", "Please enter your last name");
        name1Err = true;
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (!regex.test(name1)) {
            printError("nameErr1", "Please enter a valid last name");
            name1Err = true;
        } else {
            printError("nameErr1", "");
        }
    }

    if (email === "") {
        printError("emailErr", "Please enter your email address");
        emailErr = true;
    } else {
        var regex = /^\S+@\S+\.\S+$/;
        if (!regex.test(email)) {
            printError("emailErr", "Please enter a valid email address");
            emailErr = true;
        } else {
            printError("emailErr", "");
        }
    }

    if (mobile === "") {
        printError("mobileErr", "Please enter your mobile number");
        mobileErr = true;
    } else {
        var regex = /^[1-9]\d{9}$/;
        if (!regex.test(mobile)) {
            printError("mobileErr", "Please enter a valid 10 digit mobile number");
            mobileErr = true;
        } else {
            printError("mobileErr", "");
        }
    }

    if (country === "Select") {
        printError("countryErr", "Please select your country");
        countryErr = true;
    } else {
        printError("countryErr", "");
    }

    if (course === "Select") {
        printError("courseErr", "Please select your course");
        courseErr = true;
    } else {
        printError("courseErr", "");
    }

    if (gender === "") {
        printError("genderErr", "Please select your gender");
        genderErr = true;
    } else {
        printError("genderErr", "");
    }

    // Return true only if all validation flags are false
    if (!nameErr && !name1Err && !emailErr && !mobileErr && !countryErr && !courseErr && !genderErr) {
        // All validations passed, allow form submission
        return true;
    } else {
        // Validation failed, prevent form submission
        return false;
    }
}
