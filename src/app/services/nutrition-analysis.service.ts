import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {NutritionAnalysisRequest} from '../Models/nutritionAnalysisRequest';

const httpOptions = {
  headers : new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class NutritionAnalysisService {

  private url = 'https://api.edamam.com/api/nutrition-details?app_id=95b24f4b&app_key=f343a9d911c9a02afe96ff5ddd45ba71';

  constructor(private http: HttpClient) { }

  getNutritionAnalysis(nutritionalAnalysisRequest: NutritionAnalysisRequest) {
    return this.http.post(this.url, nutritionalAnalysisRequest, httpOptions);
  }
}
