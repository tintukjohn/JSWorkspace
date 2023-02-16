window.onload = ajax;

function validate() {
    let name = document.getElementById("name");
    let password = document.getElementById("password");
    if (name.value.trim() == "admin" && password.value.trim() == "12345") {
        return true;
    } else {
        return false;
    }
}

function ajax() {
    var x = "";
    try {
        let request = new XMLHttpRequest();
        request.open("GET", 'https://jsonplaceholder.typicode.com/todos', true);
        request.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let response = JSON.parse(this.responseText)
                for (let i = 0; i < response.length; i++) {
                    let li = document.createElement("li");
                    document.getElementById("parent").append(li);
                    li.innerHTML = `<input type="checkbox" name="checkbox" id="cb${i}"> <h5 style='color:${generateColor()}'>User ${response[i].userId} :  ${response[i].title}</h5>`;
                    let input = document.getElementById("cb" + i);
                    if (response[i].completed) {
                        input.checked = true;
                        input.disabled = true;
                    }
                    input.addEventListener("click", handleSubmit);
                }
            }
        }
        request.send()

    } catch (error) {
        console.log("error", error)
    }
}

async function handleSubmit() {
    var promise = new Promise(function (resolve, reject) {
        let checkboxes = document.querySelectorAll('input[name="checkbox"]:checked');
        let output = [];
        checkboxes.forEach((checkbox) => {
            if (!checkbox.disabled) {
                output.push(checkbox.value);
            }
        });

        if (output.length == 5) {
            resolve("Congrats. 5 Tasks have been Successfully Completed!");
        } else {
            reject("Error: Its not equal");
        }
    });

    promise
        .then(await function (s) {
            console.log('s');
            alert(s);
        })
        .catch(function (e) {
            console.log('e');
        })
}

function generateColor() {
    let color = '#';
    let digits = '0123456789ABCDEF';
    for (let i = 0; i < 6; i++) {
        let randomDigit = Math.floor(Math.random() * 16);
        color += digits[randomDigit];
    }
    return color;
}
