// Add Data to local Storage
const addToDb= (id) => {
    let appliedJobs= {};

    // get previous data from local storage 
    const storedJobs= localStorage.getItem('appliedJobs',id);

     if(storedJobs) {
        appliedJobs = JSON.parse(storedJobs);
    }

    // check wheater added or not
    const added = appliedJobs[id];
    if(added) {
        const newAdded = added + 0;
        appliedJobs[id] = newAdded;
    } else {
        appliedJobs[id] = 1;
    }
    
    localStorage.setItem('appliedJobs',JSON.stringify(appliedJobs));
}

// get stored data from appliedJobs
const getStoredJobs= (id) => {
    let appliedJobs = {};

    const storedJobs = localStorage.getItem('appliedJobs',id);
    if(storedJobs) {
        appliedJobs = JSON.parse(storedJobs);
    }
    return appliedJobs;
}

export {addToDb ,getStoredJobs}