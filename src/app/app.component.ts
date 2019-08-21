import { Component, OnInit } from "@angular/core";
import { Survey } from 'survey-angular';
import { SurveyDataService } from './services/survey-data.service';
import { readElementValue } from '@angular/core/src/render3/util';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {

  title = "Survey Sample!";


  allQuestionArray=[];
  jsonDataForSurvey;
  createSurveyJson: any;
  jsonDataForSurveyFromQuestions: { title: string; pages: any[]; };


  constructor(private data : SurveyDataService){}

 
  ngOnInit() {
    
   
    console.log(this.data.question);
    this.jsonDataForSurvey=this.data.getSampleData();
    this.createSurveyJson= this.data.question;

    this.createSurveyJson.tasks.forEach(task => {

      task.tasks.forEach(element => {
        this.setQuestion(element);  
      });
     
    });


   
    
  }
  
  setQuestion(element){
    switch(element.type){
      case "picklist" : {
        // console.log(element);
        if(element.multiple == false){
          let question= 
            [
              {
                type: "radiogroup",
                title: element.description,
                choices: this.readElementValue(element.values),
              }
            ];
          let pageNum= this.allQuestionArray.length;
          let pageName="page"+ (pageNum+1);
          this.addQuestionInJson(pageName,question);
         
        }
        break;
      } 

    }
    
  }
  readElementValue(value) {
    let choices= [];
    // console.log(value);
    value.forEach(element => {
      choices.push(element.name);
    });
    return choices;
  }

  addQuestionInJson(pageName,questionArray){

    let newQuestion ={
      name: pageName,
      questions:questionArray
    } 
    this.allQuestionArray.push(newQuestion);
    this.jsonDataForSurveyFromQuestions ={
      title: "Complete The Survey !", 
      pages: this.allQuestionArray
    }

    // console.log(this.jsonDataForSurveyFromQuestions);

  }




















  onSurveySaved(survey) {
    // this.json = survey;
  }

  sendData(result) {
    //TODO update with your own behavior    
    console.log(result);
  }
}
