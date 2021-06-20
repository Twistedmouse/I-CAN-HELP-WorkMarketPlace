const userEmail = document.querySelector(".useremail").innerHTML.trim();
const jobTitle = document.querySelector(".jobName").innerHTML.trim();

const sendEmail = async (event) => {
  event.preventDefault();

  const response = await fetch("/sendEmail", {
    method: "POST",
    body: JSON.stringify({ userEmail, jobTitle }),
    headers: { "Content-Type": "application/json" },
  });
  console.log(response);
  if (response.ok) {
    alert("Job Accepted and Job giver Notified.");
    document.location.replace("/");
  } else {
    alert("Failed to accept job.");
  }
  // document.location.replace("/sendEmail");
};

document.querySelector(".acceptjob").addEventListener("click", sendEmail);
