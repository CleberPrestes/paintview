import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PaintService {

  constructor(private httpClient: HttpClient) { }


  listPaint() : Observable<any>{
    return this.httpClient.get("https://app-painting.herokuapp.com/paintings");
  }
}
