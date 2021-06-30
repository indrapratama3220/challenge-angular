import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PortofolioService } from '../service/portofolio.service';
import { Pocket } from '../models/pocket.model'
import { Product } from '../models/product.model';
import { Customer } from '../models/customer.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HistoryPrice } from '../models/history-price.model';




@Component({
  selector: 'app-portofolio',
  templateUrl: './portofolio.component.html',
  styleUrls: ['./portofolio.component.scss']
})
export class PortofolioComponent implements OnInit, OnChanges {

  @Input() id: number = 0;

  constructor(private readonly portofolioService: PortofolioService,
              private formBuilder: FormBuilder,
              private modalService: NgbModal,
              private readonly activatedRoute: ActivatedRoute,
              private readonly router : Router
              ) { }
  
  historyPrice: HistoryPrice[] = []
  public pieChartLabels1 = [];
  public pieChartData1 = [];
  
  public pieChartLabels2 = [];
  public pieChartData2 = [];



  productId: string = "";
  pockets: Pocket[] = [];
  
  products:Product[] = [];

  product: Product ={};
  pocketForm: FormGroup;
  transactionForm: FormGroup;

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
    this.portofolioService.createPocket(this.pocket).subscribe();
  }

  deletePocket(id:string): void {
    this.portofolioService.deletePocket(id).subscribe();
  }

  setPocket(pocket: Pocket): void {
    this.pocket = pocket
  }

  updatePocket():void {
    this.pocket.pocketName = this.pocketForm.value.namePocket
    this.portofolioService.updatePocket(this.pocket).subscribe();
  }

  buyTransaction(){
    this.router.navigateByUrl('/transaction')
    console.log(this.transactionForm.value);
    sessionStorage.setItem('purchaseType', "0")
    sessionStorage.setItem('productValueInGram', this.transactionForm.value.gram)
    
  }

  sellTransaction() {
    this.router.navigateByUrl('/transaction')
    console.log(this.transactionForm.value);
    sessionStorage.setItem('purchaseType', "1")
    sessionStorage.setItem('productValueInGram', this.transactionForm.value.gram)
  }

  ngOnInit(): void {

    this.pocketForm = new FormGroup({
      namePocket: new FormControl('',[Validators.required])
    })

    this.transactionForm = new FormGroup({
      gram: new FormControl('',[Validators.required]),
      idr: new FormControl('',[Validators.required])
    })

    this.portofolioService.getAllProduct().subscribe((response) => {
      this.products = response
      console.log(response);
      
    })

    this.activatedRoute.queryParams
    .subscribe((queryParams: Params) => {
        const id = queryParams.id;
        this.productTest.id = id;
        this.portofolioService.getProductById(id).subscribe((response) => {
          this.product = response;
          this.totalQty = 0;
          this.pieChartLabels1 = []
          this.pieChartLabels2 = []
          this.pieChartData1 = []
          this.pieChartData2 = []
        })
    
        console.log(this.productId);
        console.log("test");
        
        
        this.portofolioService.getAllPocket().subscribe((response) => {
          this.pockets = response.filter(pocket => pocket.product.id == id)
          
          console.log(this.pockets);
          
          for (let index = 0; index < this.pockets.length; index++) {
              this.totalQty += this.pockets[index].pocketQty;
            }
        })
    
        this.portofolioService.getHistoryPriceByProductId(id).subscribe((response) => {
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
