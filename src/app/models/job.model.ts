export class JobModel {

  constructor(private id: number,
              private title?: string,
              private city_id?: number,
              private job_type?: number,
              private salary?: number,
              private summary?: string,
              private duty?: string,
              private requirement?: string,
              private company_id?: number,
              private companyModel?: any,
              private cityModel?: any
              ) {
    this.id = id;
    this.title = title;
    this.city_id = city_id;
    this.job_type = job_type;
    this.salary = salary;
    this.summary = summary;
    this.duty = duty;
    this.requirement = requirement;
    this.company_id = company_id;
    this.companyModel = companyModel;
    this.cityModel = cityModel;
  }

}
