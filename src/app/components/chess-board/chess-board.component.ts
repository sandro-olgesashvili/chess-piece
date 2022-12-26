import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chess-board',
  templateUrl: './chess-board.component.html',
  styleUrls: ['./chess-board.component.css'],
})
export class ChessBoardComponent implements OnInit {
  board: number[] = [];

 
  onOff: boolean = false;

  ind:number = 29;

  constructor() {}

  ngOnInit(): void {
    for (let i = 1; i <= 64; i++) {
      this.board.push(i);
    }
  }

  change(num: number): void {
    if (num === this.ind) {
      this.onOff = !this.onOff;
    }

    if (
      (this.onOff && num === this.ind + 1) ||
      (this.onOff && num === this.ind - 1) ||
      (this.onOff && num === this.ind + 8) ||
      (this.onOff && num === this.ind - 8) ||
      (this.onOff && num === this.ind - 7) ||
      (this.onOff && num === this.ind + 9) ||
      (this.onOff && num === this.ind + 7) ||
      (this.onOff && num === this.ind - 9)
    ) {
      if (
        (this.ind === 1 && num === 8) ||
        (this.ind === 8 && num === 1) ||
        (this.ind === 9 && num === 8) ||
        (this.ind === 8 && num === 9) ||
        (this.ind === 9 && num === 16) ||
        (this.ind === 16 && num === 9) ||
        (this.ind === 17 && num === 16) ||
        (this.ind === 16 && num === 17) ||
        (this.ind === 17 && num === 24) ||
        (this.ind === 24 && num === 17) ||
        (this.ind === 25 && num === 24) ||
        (this.ind === 24 && num === 25) ||
        (this.ind === 25 && num === 32) ||
        (this.ind === 32 && num === 25) ||
        (this.ind === 33 && num === 32) ||
        (this.ind === 32 && num === 33) ||
        (this.ind === 33 && num === 40) ||
        (this.ind === 40 && num === 33) ||
        (this.ind === 41 && num === 40) ||
        (this.ind === 40 && num === 41) ||
        (this.ind === 41 && num === 48) ||
        (this.ind === 48 && num === 41) ||
        (this.ind === 49 && num === 48) ||
        (this.ind === 48 && num === 49) ||
        (this.ind === 49 && num === 56) ||
        (this.ind === 56 && num === 49) ||
        (this.ind === 57 && num === 56) ||
        (this.ind === 56 && num === 57) ||
        (this.ind === 57 && num === 64) ||
        (this.ind === 64 && num === 57)
      ) {
        this.onOff = false;
        return;
      }
      this.onOff = false;
      this.ind = num;
    }
  }
}
