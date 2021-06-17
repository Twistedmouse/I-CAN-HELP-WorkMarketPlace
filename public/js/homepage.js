const postJobFunction = async (event) => {
  event.preventDefault();

  const jobname = document.querySelector(".job-name").value.trim();
  const jobDescr = document.querySelector(".job-descr").value.trim();
  const price = document.querySelector(".job-price").value.trim();
  const location = document.querySelector(".job-location").value.trim();

  const userid = 10;
  if (jobname && jobDescr && price && location) {
    const response = await fetch("/api/jobs", {
      method: "POST",
      body: JSON.stringify({ jobname, price, jobDescr, location, userid }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      alert("Job posted successfully!!");
      document.location.replace("/");
    } else {
      alert("Failed to sign up.");
    }
  }
};

document
  .querySelector(".postjob-btn")
  .addEventListener("click", postJobFunction);
