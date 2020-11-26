import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PhotoService } from 'src/app/photo.service';


@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit { 

  constructor(private photoServ: PhotoService, private route: ActivatedRoute) {  }

  i: string;
  photo: any = [];

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.i = params['i'];
    
    this.photoServ.getPhoto(this.i).subscribe(photo => {
      console.log(photo);
      this.photo = photo;

    });
  
  })

}

}