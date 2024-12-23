import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/AuthService';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [
    FormsModule,
    NgIf
  ]
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage: string | null = null;

  constructor(private authService: AuthService, private router: Router) {
  }

  onLogin(): void {
    this.authService.login(this.username, this.password).subscribe({
      next: (isLoggedIn) => {
        if (isLoggedIn) {
          alert('Login realizado com sucesso!');
          this.router.navigate(['/']);
        } else {
          this.errorMessage = 'Credenciais inválidas.';
        }
      },
      error: (err) => {
        this.errorMessage = 'Houve um problema ao efetuar login. Verifique seus dados.';
        console.error(err);
      },
    });
  }
}
