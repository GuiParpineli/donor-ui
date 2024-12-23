import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {DonorValidator} from './DonorValidatorUtils';

@Component({
  selector: 'app-input-data',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input-data.component.html',
  styleUrls: ['./input-data.component.css'],
})
export class InputDataComponent {
  jsonInput: string = '';
  apiUrl: string = 'http://127.0.0.1:8080/public/api/donor/save';

  constructor(private http: HttpClient) {
  }

  onFileUpload(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input?.files?.length) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        try {
          this.jsonInput = JSON.stringify(JSON.parse(reader.result as string), null, 2);
        } catch (error) {
          alert('Não foi possível processar o arquivo. Certifique-se de que é um JSON válido.');
        }
      };

      reader.readAsText(file);
    }
  }

  onSubmitJson(): void {
    try {
      const jsonData = JSON.parse(this.jsonInput);

      if (!Array.isArray(jsonData)) {
        alert('O JSON precisa ser uma lista (array).');
        return;
      }

      const validation = DonorValidator.validateList(jsonData);

      if (!validation.valid) {
        alert(`Erros de validação encontrados:\n\n${validation.errors.join('\n')}`);
        return;
      }

      this.http.post(this.apiUrl, jsonData).subscribe({
        next: (response) => {
          alert('Dados enviados com sucesso!');
          this.jsonInput = '';
        },
        error: (err) => {
          alert('Erro ao enviar os dados.');
        },
      });
    } catch (error) {
      alert('O JSON digitado é inválido. Por favor, corrija e tente novamente.');
    }
  }
}
