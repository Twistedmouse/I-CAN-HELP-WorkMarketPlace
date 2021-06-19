
const sendEmail = async (event) => {
    event.preventDefault();
    alert("Send mail now");
    document.location.replace("/sendEmail");

};


document.querySelector(".acceptjob").addEventListener("click", sendEmail);