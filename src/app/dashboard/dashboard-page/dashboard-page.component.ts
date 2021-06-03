import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Stock from 'src/app/shared/model/stock-model';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {

  stocks: Stock[] = [];
  constructor(private dashbordeService: DashboardService) { }
  
  ngOnInit(): void {
    this.fetchStocks();
  }
  async fetchStocks(): Promise<void>{
    //await aguardar a resposta do servidor
    this.stocks = await this.dashbordeService.getStocks();
    console.log(this.stocks);
  }
  // Chama o serviço para obtém todos os carros
  
}
