import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-bottom',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './bottom.component.html',
  styleUrl: './bottom.component.css'
})

export class BottomComponent implements OnInit {

  ngOnInit(): void {
    
  }

  
}
