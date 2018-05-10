export interface Job{
    id :number,
    city:string,
    job_type : string,
    salary : number,
    summary : string,
    duty : string,
    requirement:string,
}

function log(message){
    console.log(message);

}

var message = 'Hello World';
log(message);