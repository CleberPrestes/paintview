import { Component, OnInit } from '@angular/core';
import { PaintService } from '../paint.service';

@Component({
  selector: 'app-paint',
  templateUrl: './paint.component.html',
  styleUrls: ['./paint.component.css']
})
export class PaintComponent implements OnInit {

 paint: Array<any> = new Array();
 //paint: Object = new Object();


  constructor(private paintService: PaintService) { }

  ngOnInit(): void {
    this.loadPainting();
  }


  loadPainting(){

    this.paintService.listPaint().subscribe(paint => {
      this.paint = paint;


    }, err=> {console.log("Erro ao buscar pinturas",err)})

  }

}
