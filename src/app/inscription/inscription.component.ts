import { Component} from '@angular/core';
import { AuthentificationService } from '../authentification.service';
import { Router } from '@angular/router';

@Component({
selector: 'app-inscription',
templateUrl: './inscription.component.html',
styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {

  newuser = {"nom":"", "prenom":"", "email":"", "password":""};
  message: string = "";

constructor(private authService: AuthentificationService,
private router: Router) { }

onSubmit() {
  this.authService.addutilisateur(this.newuser).subscribe(reponse => {
  this.message = reponse['message'];

});
}



}