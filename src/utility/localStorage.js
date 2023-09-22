

const getStoredJobApplication = () =>{
    const getStoredJobs = localStorage.getItem('job-applications')
    if(getStoredJobs){
        return JSON.parse(getStoredJobs)
    }
    return []
}

const saveJobApplications = id =>{
    const storedJobApplications = getStoredJobApplication()
    const exist = storedJobApplications.find( jobId => jobId === id)
    if(!exist){
        storedJobApplications.push(id)
        localStorage.setItem('job-applications', JSON.stringify(storedJobApplications))
    }
}

export {getStoredJobApplication, saveJobApplications}

// const getStoredJobApplication = () =>{
//     const storedJobApplications = localStorage.getItem('job-applications')
//     if(storedJobApplications){
//         return JSON.parse(storedJobApplications)
//     }
// }


// const saveJobApplications = id =>{
//     const storeApplications = getStoredJobApplication()
//     const exist = storeApplications.find( jobId => jobId === id)
//     if( !exist){
//         storeApplications.push(id)
//         localStorage.setItem('job-applications', JSON.stringify(storeApplications))
//     }
// }

// export{getStoredJobApplication, saveJobApplications}