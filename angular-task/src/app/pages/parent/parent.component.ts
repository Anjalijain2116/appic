import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { DataService } from '../../core/services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [CommonModule, ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent implements OnInit {
  parentMessage: string = "Message from Parent";
  message: string = '';
  data:string[] = [];
  errorMessage: string = '';
  routeParams: string |null= '';

  constructor(private dataService: DataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(param =>{
      this.routeParams = param.get('id');
    })
    this.dataService.getData().subscribe({
      next: (data) => this.data = data,
      error: (err) => this.errorMessage = err
    });
  }

  receiveMessage($event: string) {
    this.message = $event;
  }
}
