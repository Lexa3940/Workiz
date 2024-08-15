document.getElementById("jobForm").addEventListener("submit", function (event) {
  event.preventDefault();

  // Client Details
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;

  // Job Details
  const jobType = document.getElementById("jobType").value;
  const jobSource = document.getElementById("jobSource").value;
  const jobDescription = document.getElementById("jobDescription").value;

  // Service Location
  const address = document.getElementById("address").value;
  const city = document.getElementById("city").value;
  const state = document.getElementById("state").value;
  const zipCode = document.getElementById("zipCode").value;
  const area = document.getElementById("area").value;

  // Scheduled
  const startDate = document.getElementById("startDate").value;
  const startTime = document.getElementById("startTime").value;
  const endTime = document.getElementById("endTime").value;
  const testSelect = document.getElementById("testSelect").value;

  const data = {
    title: `Job for ${firstName} ${lastName}`,
    person_name: `${firstName} ${lastName}`,
    phone: phone,
    email: email,
    status: "open",
    job_type: jobType,
    job_source: jobSource,
    job_description: jobDescription,
    "995304bdcbc9b608721c728e78b2a923ec7c759c": address, 
    "388395bc1abbfb9159f26378ff7f95b22ddf05e7": city,
    "eefc5f95d5d33334427334624df0d33fbf04eb3e": state,
    "c25de398dcc2770edf851610f6f6700af0139ca1": zipCode,
    "956fd6bbdd0bc8e125087407190800471b21d3b5": area,
    "5b634395e8f24b0481d5275df0c7f9140919eeba": startDate,
    "16946850c4771bc751fe285ff470f46a06d27545": startTime,
    "8ca2b0340eebe337aa6d95dbef6798769998edcf": endTime,
    "70cb92ace57a011db5cd7b98f4df10db0a9e9b14": testSelect,
  };

  // Send data to Pipedrive
  fetch("https://api.pipedrive.com/v1/deals?api_token=a5fff730904649f6ec791032ebded4d0c784eb43", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then(response => {
      if (!response.ok) {
        return response.json().then(error => {
          console.error("Error details:", error);
          return Promise.reject(error);
        });
      }
      return response.json();
    })
    .then(data => {
      console.log("Success:", data);
      alert("Deal created successfully in Pipedrive");
    })
    .catch(error => {
      alert("Error creating deal in Pipedrive");
      console.error("Error:", error);
    });
});
