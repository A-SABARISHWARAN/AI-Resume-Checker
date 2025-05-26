document.getElementById("resumeForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const jobDesc = document.getElementById("jobDesc").value;
    const resumeFile = document.getElementById("resumeFile").files[0];
  
    if (!jobDesc || !resumeFile) {
      alert("Please fill out all fields and upload a valid file.");
      return;
    }
  
    const resultBox = document.getElementById("result");
    const scoreBox = document.getElementById("scoreValue");
  
    resultBox.classList.remove("hidden");
    scoreBox.textContent = "Calculating...";
  
    setTimeout(() => {
      const fakeScore = Math.floor(Math.random() * 41) + 60;
      scoreBox.textContent = `${fakeScore} / 100`;
    }, 2000);
  });
  