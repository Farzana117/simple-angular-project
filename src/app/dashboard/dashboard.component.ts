import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public patients =[
    {'index': 0, 'id':'test_123', 'date':'02-Jan-2020', 'status':'Available','actions':'dwnlod'},
    {'index': 1, 'id':'test_123', 'date':'02-Jan-2020', 'status':'Available', 'actions':'dwnlod'},
    {'index': 2, 'id':'test_123', 'date':'02-Jan-2020', 'status':'Available', 'actions':'dwnlod'},
    {'index': 3, 'id':'test_123', 'date':'02-Jan-2020', 'status':'Available', 'actions':'dwnlod'},
    {'index': 4, 'id':'test_123', 'date':'02-Jan-2020', 'status':'Available', 'actions':'dwnlod'},
    {'index': 5, 'id':'test_123', 'date':'02-Jan-2020', 'status':'Available', 'actions':'dwnlod'},
    {'index': 6, 'id':'test_123', 'date':'02-Jan-2020', 'status':'Available', 'actions':'dwnlod'},
    {'index': 7, 'id':'test_12233', 'date':'02-Jan-2020', 'status':'Available', 'actions':'dwnlod'},
    {'index': 8, 'id':'test_123111', 'date':'02-Jan-2020', 'status':'Available', 'actions':'dwnlod'},
    {'index': 9, 'id':'test_123', 'date':'02-Jan-2020', 'status':'Available', 'actions':'dwnlod'},
    {'index': 10, 'id':'test_123', 'date':'02-Jan-2020', 'status':'Available', 'actions':'dwnlod'},
    {'index': 11, 'id':'test_111123', 'date':'02-Jan-2020', 'status':'Available', 'actions':'dwnlod'},
    {'index': 12, 'id':'test_123', 'date':'02-Jan-2020', 'status':'Available', 'actions':'dwnlod'},
    {'index': 13, 'id':'test_123', 'date':'02-Jan-2020', 'status':'Available', 'actions':'dwnlod'},
    {'index': 14, 'id':'test_123', 'date':'02-Jan-2020', 'status':'Available', 'actions':'dwnlod'},
    {'index': 15, 'id':'test_123', 'date':'02-Jan-2020', 'status':'Available', 'actions':'dwnlod'},
    {'index': 16, 'id':'test_111123', 'date':'02-Jan-2020', 'status':'Available', 'actions':'dwnlod'},
    {'index': 17, 'id':'test_123', 'date':'02-Jan-2020', 'status':'Available', 'actions':'dwnlod'},
    {'index': 18, 'id':'test_123', 'date':'02-Jan-2020', 'status':'Available', 'actions':'dwnlod'},
    {'index': 19, 'id':'test_123', 'date':'02-Jan-2020', 'status':'Available', 'actions':'dwnlod'},
    {'index': 20, 'id':'test_123', 'date':'02-Jan-2020', 'status':'Available', 'actions':'dwnlod'},
    {'index': 21, 'id':'test_111123', 'date':'02-Jan-2020', 'status':'Available', 'actions':'dwnlod'},
    {'index': 22, 'id':'test_123', 'date':'02-Jan-2020', 'status':'Available', 'actions':'dwnlod'},
    {'index': 23, 'id':'test_123', 'date':'02-Jan-2020', 'status':'Available', 'actions':'dwnlod'},
    {'index': 24, 'id':'test_123', 'date':'02-Jan-2020', 'status':'Available', 'actions':'dwnlod'},
    {'index': 25, 'id':'test_123', 'date':'02-Jan-2020', 'status':'Available', 'actions':'dwnlod'},
  ];
  page = 1;
  pageSize =5;
  items = [];
  clonedArr = [...this.patients];
  total: number = 0;
  searchPatient: string='';
  public hidePagination = false;
  public noData = false;
  constructor() {
   }

  ngOnInit() {
    this.total=this.patients.length;
    this.pageSize =5;
    this.patients.forEach((el,i)=>{
      this.items.push(el[i]);
    })
    console.log(this.total);
  }

  addPatient(){
    this.patients.push({'index': this.total, 'id':'test_123', 'date':'02-Jan-2020', 'status':'Available', 'actions':'dwnlod'});
    this.total=this.patients.length;
    console.log(this.total);
  }

  searchPatients(val){
    let found = this.patients.find(x => x.id === val);
    if(found && this.searchPatient !== ''){  
      this.patients = [];
      this.patients.push(found);
      this.page = 1;
      this.hidePagination = true;
      this.noData = false;
    }
    else if(!found){
      this.hidePagination = true;
      this.noData = true;
    }
    else{
      this.patients=this.clonedArr;
      this.hidePagination = false;
      this.noData = false;
    }
  }

  showAllData(){
    if(this.searchPatient != ''){
      this.searchPatients(this.searchPatient);
    }
    else{
      this.patients=this.clonedArr;
      this.hidePagination = false;
      this.noData = false;
    }
  }

}
