import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-form-first',
  templateUrl: './form-first.component.html',
  styleUrls: ['./form-first.component.css']
})
export class FormFirstComponent implements OnInit {

  status = "Form not submitted"
  defaultName = ""
  defaultEmail = ""
  user = ""
  displayPassword = true

  lightStatus = "GREEN"
  names = ['Daniel', 'Alberto', 'Maria', 'Marcos']

  //Transferiendo data entre components comunicandolos.
  //@Input() parentDataToChild
  @Input('parentDataToChild') messageFromParent

  //Hacia parentComponent mediante un evento
  @Output() childEvent = new EventEmitter();


  courses = []
  errorMessage = ""

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    
    //this.courses = this.courseService.getCourses()
    //console.log(this.courses)

    //Subscribiendo el observer y volcando los datos
    this.courseService.getCourses().subscribe(data=>this.courses=data, 
                                              error => this.errorMessage = error)
  
  }

  onSendForm(email) {

    console.log(this.courses)
    console.log(email)

    alert('Enviado el formulario')

    this.status = "Form has been send"

  }

  onDefaultForm() {

    this.defaultName = "Daniel"
    this.defaultEmail = "daniel@gmail.com"

  }

  onSendEvent() {
    this.childEvent.emit('Enviando evento desde component hijo hasta padre')
  }

}
