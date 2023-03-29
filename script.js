let user = JSON.parse(localStorage.getItem("users")) || []


function register() {


    let temp_country = ""
    if (sel_country.value == "KAZAKHSTAN") temp_country = sel_country.value
    else if (sel_country.value == "ITALY") temp_country = sel_country.value
    else temp_country = sel_country.value


    user.push({
        email: inp_email_reg.value,
        password: inp_password_reg.value,
        fName: inp_name.value,
        country: temp_country,
        bDate: inp_date.value
    })

    localStorage.users = JSON.stringify(user)
}

function login() {

    for (let i = 0; i < user.length; i++) {
        if (inp_email_log.value === user[i].email && inp_password_log.value === user[i].password) {
            localStorage.index = i;
            window.location.href = "final_page.html";
        }
    }
}