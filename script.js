// email js 
function sendMail(){
    const parm = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value,

    }
    const serviceID = "service_13o0rtx";
const templateID = "template_ivrbjr1";

emailjs.send(serviceID, templateID, parm).then(
    function (res) {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("your message have sent successfully!");
    }
)
}




