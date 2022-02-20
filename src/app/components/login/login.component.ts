import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: User = new User();
  public userLogin: any;
  public userType: any;
  public error: boolean = false;
  public image: any;



  constructor(private router: Router) { }

  ngOnInit(): void {
    this.isLogin();
  }

  isLogin() {

    // this.userLogin = this.localStorage.get('login');
    // this.userType = this.localStorage.get('tipo');

    if (this.userLogin) {

      switch (this.userType) {
        // Administrador
        case 1: {
          // this.router.navigate(['/home-adm']);
          break;
        }
        // Analista
        case 2: {
          // this.router.navigate(['/home-entidade']);
          break;
        }

        default: {
          this.router.navigate(['/']);
          console.log('Usuario não reconhecido! Favor realizar autenticação');
          break;
        }
      }

    }
    return
  }


  login() {
    // this.authService.login(this.user).subscribe(
    //   result => {
    //     if (result[0].login == true) {

    //       this.user = result;
    //       this.localStorage.set('nome', result[0].nome);
    //       this.localStorage.set('id_usuario', result[0].id_usuario);
    //       this.localStorage.set('sobrenome', result[0].sobrenome);
    //       this.localStorage.set('email', result[0].email);
    //       this.localStorage.set('id_empresa', result[0].empresa);
    //       this.localStorage.set('nm_empresa', result[0].nm_empresa);
    //       this.localStorage.set('fone', result[0].fone);
    //       this.localStorage.set('login', result[0].login);
    //       this.localStorage.set('tipo', result[0].tipo);
    //       this.localStorage.set('whats', result[0].whats);
    //       // this.localStorage.set('mimetype', result[0].mimetype);
    //       // this.localStorage.set('filepath', result[0].filepath);
    //       // this.localStorage.set('size', result[0].size);
    //       // this.localStorage.set('filename', result[0].filename);
    //       this.localStorage.set('face', result[0].face);

    //       // this.image = { mimetype: result[0].mimetype, filepath: result[0].filepath };
    //       // console.log(this.user.face, this.image);
    //       if (this.user.face != null) {
    //         this.authService.getImage(this.user.face).subscribe(
    //           result => {
    //             console.log(result);
    //             this.localStorage.set('face', result);
    //           }, error => {
    //             console.log(error);
    //           });
    //       }
    //       switch (result[0].tipo) {
    //         // Administrador
    //         case 1: {
    //           this.router.navigate(['/home-adm']);
    //           break;
    //         }
    //         // Entidade Reconhecida
    //         case 2: {
    //           this.router.navigate(['/home-entidade']);
    //           break;
    //         }
    //         // Empresa
    //         case 3: {
    //           this.router.navigate(['/home-empresa']);
    //           break;
    //         }
    //         //     //  Entidade não reconhecida
    //         //     case 4: { 
    //         //       // this.router.navigate(['/home-empresa']); 
    //         //       break; 
    //         //    }
    //         //    //  Entidade sem ranking
    //         //    case 5: { 
    //         //     // this.router.navigate(['/home-empresa']); 
    //         //     break; 
    //         //  }
    //         default: {
    //           this.router.navigate(['/']);
    //           console.log('Usuario não reconhecido! Favor realizar autenticação');
    //           break;
    //         }
    //       }

    //     } else {
    //       this.error = true;
    //     }
    //   },
    //   error => {
    //     this.error = true;
    //   }
    // );
  }

}
