import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { GoldService } from '../service/gold-price.service';
import { Pocket } from '../models/pocket.model'
import { Product } from '../models/product.model';
import { CreatePocket } from '../models/create-pocket.model';
import { Customer } from '../models/customer.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Params } from '@angular/router';
import { HistoryPrice } from '../models/history-price.model';



@Component({
  selector: 'app-gold',
  templateUrl: './gold.component.html',
  styleUrls: ['./gold.component.scss']
})
export class GoldComponent implements OnInit, OnChanges {

  // @Input() productId: string = "";

  constructor(private readonly goldService: GoldService,
              private formBuilder: FormBuilder,
              private modalService: NgbModal,
              private readonly activatedRoute: ActivatedRoute
              ) { }
  

  public pieChartLabels1 = [];
  public pieChartData1 = [];
  historyPrice: HistoryPrice[] = []

  public pieChartLabels2 = [];
  public pieChartData2 = [];

  productId: string = "";
  pockets: Pocket[] = [];
  product: Product;
  pocketForm: FormGroup;
  customer: Customer = {
    id:sessionStorage.getItem('id')
  }
  productTest: Product = {
    id: this.productId
  }

  pocket: Pocket = {
    id:"",
    pocketName: "",
    pocketQty:0,
    customer:this.customer,
    product:this.productTest
  };

    
  totalQty: number = 0

  submitPocket(): void {
    this.pocket.pocketName = this.pocketForm.value.namePocket
    this.goldService.createPocket(this.pocket).subscribe();
  }

  deletePocket(id:string): void {
    this.goldService.deletePocket(id).subscribe();
  }

  setPocket(pocket: Pocket): void {
    this.pocket = pocket
  }

  updatePocket():void {
    this.pocket.pocketName = this.pocketForm.value.namePocket
    this.goldService.updatePocket(this.pocket).subscribe();
  }

  buyTransaction(){
    
  }

  sellTransaction() {

  }

  ngOnInit(): void {


    this.pocketForm = new FormGroup({
      namePocket: new FormControl('',[Validators.required])
    })

    this.activatedRoute.queryParams
    .subscribe((queryParams: Params) => {
        const id = queryParams.id;
        this.productTest.id = id;
        this.goldService.getProductById(id).subscribe((response) => {
          this.product = response;
          this.totalQty = 0;
          this.pieChartLabels1 = []
          this.pieChartLabels2 = []
          this.pieChartData1 = []
          this.pieChartData2 = []
        })

        console.log(this.productId);
        console.log("test");
        
        
        this.goldService.getAllPocket().subscribe((response) => {
          this.pockets = response.filter(pocket => pocket.product.id == id)
          
          console.log(this.pockets);
          
          for (let index = 0; index < this.pockets.length; index++) {
              this.totalQty += this.pockets[index].pocketQty;
            }
        })

        this.goldService.getHistoryPriceByProductId(id).subscribe((response) => {
          this.historyPrice = response
          
          for (let index = 0; index < this.historyPrice.length; index++) {
            this.pieChartData1.push(this.historyPrice[index].priceBuy)
            this.pieChartLabels1.push(this.historyPrice[index].historyDate)
            
            this.pieChartData2.push(this.historyPrice[index].priceSell)
            this.pieChartLabels2.push(this.historyPrice[index].historyDate)
          }
        })


    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  

}
