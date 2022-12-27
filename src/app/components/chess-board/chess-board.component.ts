import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chess-board',
  templateUrl: './chess-board.component.html',
  styleUrls: ['./chess-board.component.css'],
})
export class ChessBoardComponent implements OnInit {
  board: number[] = [];

  onOff: boolean = false;

  ind: number = 9;

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
      (this.onOff && num === this.ind + 10) ||
      (this.onOff && num === this.ind - 10) ||
      (this.onOff && num === this.ind + 17) ||
      (this.onOff && num === this.ind - 17) ||
      (this.onOff && num === this.ind - 15) ||
      (this.onOff && num === this.ind + 15) ||
      (this.onOff && num === this.ind + 6) ||
      (this.onOff && num === this.ind - 6)
    ) {
      if (
        (this.ind === 1 && num === 7) ||
        (this.ind === 2 && num === 8) ||
        (this.ind === 9 && num === 15) ||
        (this.ind === 9 && num === 24) ||
        (this.ind === 10 && num === 16) ||
        (this.ind === 17 && num === 7) ||
        (this.ind === 17 && num === 23) ||
        (this.ind === 17 && num === 32) ||
        (this.ind === 18 && num === 24) ||
        (this.ind === 25 && num === 8) ||
        (this.ind === 25 && num === 15) ||
        (this.ind === 25 && num === 31) ||
        (this.ind === 25 && num === 40) ||
        (this.ind === 26 && num === 32) ||
        (this.ind === 33 && num === 16) ||
        (this.ind === 33 && num === 23) ||
        (this.ind === 33 && num === 39) ||
        (this.ind === 33 && num === 48) ||
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
        (this.ind === 34 && num === 40) ||
        (this.ind === 41 && num === 24) ||
        (this.ind === 41 && num === 31) ||
        (this.ind === 41 && num === 47) ||
        (this.ind === 41 && num === 56) ||
        (this.ind === 42 && num === 48) ||
        (this.ind === 49 && num === 32) ||
        (this.ind === 49 && num === 39) ||
        (this.ind === 49 && num === 55) ||
        (this.ind === 49 && num === 64) ||
        (this.ind === 50 && num === 56) ||
        (this.ind === 57 && num === 40) ||
        (this.ind === 57 && num === 47) ||
        (this.ind === 57 && num === 63) ||
        (this.ind === 58 && num === 64) ||
        // 
        (this.ind === 8 && num === 2) ||
        (this.ind === 8 && num === 18) ||
        (this.ind === 8 && num === 25) ||
        (this.ind === 7 && num === 17) ||
        (this.ind === 7 && num === 1) ||
        (this.ind === 15 && num === 9) ||
        (this.ind === 15 && num === 25) ||
        (this.ind === 16 && num === 1) ||
        (this.ind === 16 && num === 10) ||
        (this.ind === 16 && num === 26) ||
        (this.ind === 16 && num === 33) ||
        (this.ind === 23 && num === 17) ||
        (this.ind === 23 && num === 33) ||
        (this.ind === 24 && num === 9) ||
        (this.ind === 24 && num === 18) ||
        (this.ind === 24 && num === 34) ||
        (this.ind === 24 && num === 41) ||
        (this.ind === 31 && num === 25) ||
        (this.ind === 31 && num === 41) ||
        (this.ind === 32 && num === 17) ||
        (this.ind === 32 && num === 26) ||
        (this.ind === 32 && num === 42) ||
        (this.ind === 32 && num === 49) ||
        (this.ind === 39 && num === 33) ||
        (this.ind === 39 && num === 49) ||
        (this.ind === 40 && num === 25) ||
        (this.ind === 40 && num === 34) ||
        (this.ind === 40 && num === 50) ||
        (this.ind === 40 && num === 57) ||
        (this.ind === 47 && num === 41) ||
        (this.ind === 47 && num === 57) ||
        (this.ind === 48 && num === 33) ||
        (this.ind === 48 && num === 42) ||
        (this.ind === 48 && num === 58) ||
        (this.ind === 55 && num === 49) ||
        (this.ind === 56 && num === 41) ||
        (this.ind === 56 && num === 50) ||
        (this.ind === 63 && num === 57) ||
        (this.ind === 64 && num === 49) ||
        (this.ind === 64 && num === 58) 
      ) {
        this.onOff = false;
        return;
      }
      this.onOff = false;
      this.ind = num;
    }
  }
}
