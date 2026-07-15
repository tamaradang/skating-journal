import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Entry } from "../models/entry.model";

@Injectable({
  providedIn: 'root'
})
export class EntryService {
    private apiUrl = '/api/entries';

    constructor(private http:HttpClient){}

    getEntries(){
        return this.http.get<Entry[]>(this.apiUrl);
    }
}