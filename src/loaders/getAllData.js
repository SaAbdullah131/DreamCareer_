import { getStoredJobs } from "../Utils/fakedDB";


export const allData = async ()=>{
    const jobsData = await fetch('/jobs.json');
    const jobs = await jobsData.json()
    const SavedJobs = getStoredJobs();
    let jobsArr = [];
    for(const id in SavedJobs) {
        const foundJobs = jobs.find(job=> job.id === id)
        if(foundJobs) {
            // jobs.push(jobsData);
           jobsArr.push(foundJobs);
        }
    }
    return jobsArr
}


