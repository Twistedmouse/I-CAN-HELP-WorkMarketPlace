const jobId = document.querySelector(".jobId").innerHTML.trim();

const deleteJobs = async (event) => {
    event.preventDefault();
    alert("Are you sure you want to delete this job?");
    const response = await fetch("/yourjobs", {
        method: "POST",
        body: JSON.stringify({ jobId }),
        headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
        alert("Job Deleted");
        document.location.replace("/yourjobs");
    } else {
        alert("Failed to delete job.");
    }

};

document.querySelector(".deletejob").addEventListener("click", deleteJobs);