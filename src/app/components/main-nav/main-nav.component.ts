import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, catchError } from 'rxjs/operators';
import { MatSidenav } from '@angular/material/sidenav';



@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent  {
  @ViewChild('sidenav') sidenav: MatSidenav | undefined;
  isExpanded = false;
  showSubmenu: boolean = false;
  showSubmenu2: boolean = false;
  isShowing = true;
  
  // public entidade = this.localStorage.get('id_empresa')
  public empresa: string = "Federação";
  public user: string = "Roberto";
  public face = null;
  // public userType = this.localStorage.get('tipo');
  public userType = 2;
  imageToShow: any;
  isImageLoading!: boolean;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    // shareReplay()
    
    
  );


  


  constructor(private router : Router,private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.mudandoTipo();
    // this.getImageFromService();

  }

  // getImageFromService(){
  //   this.isImageLoading = true;
  //   if (this.face != null) {
  //     this.authService.getImage(this.face).subscribe((data : Blob) =>{
  //       this.createImageFromBlob(data);
  //       this.isImageLoading = false;
  //     },error =>{
  //       this.isImageLoading = false;
  //       catchError(error);
  //     });
  
  //   }else{
  //     this.face = 'Imagem não encontrada'
  //   }

  // }

  // createImageFromBlob(image){
  //   let reader = new FileReader();
  //   reader.addEventListener("load", () =>{
  //     this.imageToShow = reader.result;
  //   }, false);
  //   if (image) {
  //     reader.readAsDataURL(image)
  //   }
  // }


  mudandoTipo(){
   return this.userType == 1 ? 'Administrador' : 'Analista'
  
  }

  // mouseenter() {
  //   if (!this.isExpanded) {
  //     this.isShowing = true;
  //   }
  // }

  // mouseleave() {
  //   if (!this.isExpanded) {
  //     this.isShowing = false;
  //   }
  // }
  

  logout(){
    // this.localStorage.clear();
    this.router.navigate(['/']); 
  }


}
