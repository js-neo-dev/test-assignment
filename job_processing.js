// input is a nested array of jobs with format [[start_at, end_at]]
jobs = [
  [1,1],
  [2,3],
  [2,4],
  [2,5],
  [1,3],
  [1,4],
  [1,5],
]

// initial variables
var time = 0
var highest_jobs = 0
var peak_start_time = 0
var peak_end_time = 0
var running_jobs = []

function update_running_jobs(){
  for(var i = 0; i < jobs.length; i++){
    if( jobs[i][0] == time){
      running_jobs.push(jobs[i])
      jobs.splice(i, 1)
      i--;
    }
  }
}

function remove_completed_jobs(){
  for(var j = 0; j < running_jobs.length; j++){
    if(running_jobs[j][1] < time){
      running_jobs.splice(j, 1)
      j--;
    }
  }
}

function update_peak_time(){
  if(highest_jobs < running_jobs.length){
    highest_jobs = running_jobs.length
    peak_start_time = time
  }
  if(highest_jobs == running_jobs.length){
    peak_end_time = time
  }
}

while (jobs.length > 0 || running_jobs.length > 0){
  time++;
  update_running_jobs();
  remove_completed_jobs();
  update_peak_time();
}
console.log('peak time is', peak_start_time, '-', peak_end_time, 'with', highest_jobs, 'jobs running')
