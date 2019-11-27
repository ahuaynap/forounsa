import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Career } from 'src/app/interfaces/career.interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Course } from 'src/app/interfaces/course.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})


export class CareersComponent implements OnInit {

  @ViewChild('modalAddCareer', { static: false }) modalAddCareer: ElementRef;
  @ViewChild('modalEditCareer', { static: false }) modalEditCareer: ElementRef;
  @ViewChild('modalAddCourse', { static: false }) modalAddCourse: ElementRef;

  private careers: Career[];
  private careerSelected: Career = {};
  private careerAdd: Career = {
    code: '',
    name: '',
    description: '',
  };
  private courseAdd: Course = {};
  private addCourseForm: FormGroup;
  private addCareerForm: FormGroup;
  private editCareerForm: FormGroup;

  constructor(private route: ActivatedRoute, private dataService: DataService, private builder: FormBuilder) {
    this.editCareerForm = this.builder.group({
      codeEditCareer: ['', Validators.required],
      nameEditCareer: ['', Validators.required],
      descriptionEditCareer: ['', Validators.required]
    });

    this.addCareerForm = this.builder.group({
      codeAddCareer: ['', Validators.required],
      nameAddCareer: ['', Validators.required],
      descriptionAddCareer: ['', Validators.required]
    });

    this.addCourseForm = this.builder.group({
      nameAddCourse: ['', Validators.required],
      creditAddCourse: ['', Validators.required],
      semesterAddCourse: ['', Validators.required],
      descriptionAddCourse: [''],
      idCourseAddCourse: ['', Validators.required],
      idPrerequisiteAddCourse: ['']
    });
  }

  ngOnInit() {
    this.getCareers();
  }

  getCareers() {
    this.dataService.getCareers().subscribe(res => {
      this.careers = res;
    });
  }

  getValues(career: Career) {
    this.careerSelected = career;
    this.editCareerForm.patchValue({
      idEditCareer: [this.careerSelected.id],
      codeEditCareer: [this.careerSelected.code],
      nameEditCareer: [this.careerSelected.name],
      descriptionEditCareer: [this.careerSelected.description]
    });
  }

  deleteCareer(career: Career) {
    this.dataService.deleteCareer(career._id).subscribe(
      res => {
        this.getCareers();
      },
      error => console.log(error)
    );
  }

  editCareer(values) {
    this.careerAdd.name = values.nameEditCareer == this.careerSelected.name ? this.careerSelected.name : values.nameEditCareer;
    this.careerAdd.description = values.descriptionEditCareer == this.careerSelected.description ? this.careerSelected.description : values.descriptionEditCareer;
    this.careerAdd.code = values.codeEditCareer == this.careerSelected.code ? this.careerSelected.code : values.codeEditCareer;


    this.dataService.updateCareer(this.careerSelected._id, this.careerAdd).subscribe(
      res => this.getCareers(),
      error => console.log(error)
    );

    this.modalEditCareer.nativeElement.click();
  }

  addCareer(values) {
    this.careerAdd.name = values.nameAddCareer;
    this.careerAdd.description = values.descriptionAddCareer;
    this.careerAdd.code = values.codeAddCareer;

    this.dataService.addCareer(this.careerAdd).subscribe(
      res => this.getCareers(),
      error => console.log(error)
    );
    this.modalAddCareer.nativeElement.click();
  }

  addCourse(values) {
    this.courseAdd.credit = Number(values.creditAddCourse);
    this.courseAdd.description = values.descriptionAddCourse;
    this.courseAdd.idCareer = this.careerSelected._id;
    this.courseAdd.idCourse = values.idCourseAddCourse;
    this.courseAdd.name = values.nameAddCourse;
    this.courseAdd.semester = Number(values.semesterAddCourse);
    this.courseAdd.idPrerequisite = values.idPrerequisiteAddCourse.split(' ');

    this.dataService.addCourse(this.careerSelected._id, this.courseAdd).subscribe(
      res => this.getCareers(),
      error => console.log(error)
    );

    this.modalAddCourse.nativeElement.click();
  }

}
