const jobId = document.querySelector(".jobId").innerHTML.trim();

const deleteJobs = async (event) => {
    event.preventDefault();
    alert("Your job is being deleted...");
    const response = await fetch("/yourjobs", {
        method: "POST",
        body: JSON.stringify({ jobId }),
        headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
        alert("Job deleted!");
        document.location.replace("/yourjobs");
    } else {
        alert("Failed to delete job.");
    }

};

document.querySelector(".deletejob").addEventListener("click", deleteJobs);