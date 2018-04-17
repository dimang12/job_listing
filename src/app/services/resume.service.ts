import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ResumeService {
  public url: String = 'http://localhost:8080/account/resume/'
  constructor(private httpClient: HttpClient) { }

  public getResume() {
    // this.httpClient.get(this.url)
    return [
      {
        'id': 1, 'firstName': 'Dimang', 'lastName': 'Chou', 'position': 'Crew Member',
        'location': 'Oakland, California', 'email': 'dimang12@gmail.com', 'phone': '5108096093'
      }
      ];
  }

}
