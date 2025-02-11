const main_content = document.querySelector(".main-content");

function createJobbox() {
  // Loop through each job in the jobs array
  for (let i = 0; i < jobs.length; i++) {
    const currentJob = jobs[i];
    
    // Create the job-card container
    const job_card = document.createElement("div");
    job_card.setAttribute("class", "job-card");
    
    // Create the job type element
    const job_type = document.createElement("div");
    // You can adjust the class name if needed (for example, to include "part-time" conditionally)
    job_type.setAttribute("class", "job-type part-time");
    job_type.innerText = currentJob.jobType;
    job_card.appendChild(job_type);
    
    // Create the bookmark element
    const bookmark = document.createElement("div");
    bookmark.setAttribute("class", "bookmark");
    bookmark.innerText = "☆";
    job_card.appendChild(bookmark);
    
    // Create the job title element
    const job_title = document.createElement("h2");
    job_title.setAttribute("class", "job-title");
    job_title.innerText = currentJob.jobTitle;
    job_card.appendChild(job_title);
    
    // Create the salary element
    const salary = document.createElement("div");
    salary.setAttribute("class", "salary");
    salary.innerText = `₹${currentJob.minSalary} - ₹${currentJob.maxSalary}`;
    job_card.appendChild(salary);
    
    // Create the company info box
    const company_info = document.createElement("div");
    company_info.setAttribute("class", "company-info");
    
    // Create the company logo image element
    const company_logo = document.createElement("img");
    company_logo.setAttribute("class", "company-logo");
    company_logo.setAttribute("src", currentJob.companyLogo);
    company_logo.setAttribute("alt", currentJob.companyName);
    company_info.appendChild(company_logo);
    
    // Create the company details container
    const company_details = document.createElement("div");
    company_details.setAttribute("class", "company-details");
    
    // Create the company name element
    const company_name = document.createElement("div");
    company_name.setAttribute("class", "company-name");
    company_name.innerText = `📍${currentJob.companyName}`;
    company_details.appendChild(company_name);
    
    // Create the company location element
    const company_location = document.createElement("div");
    company_location.setAttribute("class", "location");
    company_location.innerText = currentJob.location;
    company_details.appendChild(company_location);
    
    // Append company details to the company info box
    company_info.appendChild(company_details);
    
    // Append the company info box to the job card
    job_card.appendChild(company_info);

    //creating last two buttons
// this is button container
    const buttons = document.createElement("div")
    buttons.setAttribute("class" , "buttons")

    // creating buttons here
    const view_det = document.createElement("a")
    view_det.innerText = 'View Details'
    view_det.setAttribute("class" , 'btn btn-outline')

    const apply = document.createElement("a")
    apply.innerText = 'Apply Now'
    apply.setAttribute("class" , 'btn btn-primary')
    //appending buttons in button container

    buttons.appendChild(view_det)
    buttons.appendChild(apply)
    job_card.appendChild(buttons)


    
    // Finally, append the complete job card to the main content container
    main_content.appendChild(job_card);



  }
}

createJobbox();
