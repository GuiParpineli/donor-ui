# Aplicação de Processamento de Doadores

Este projeto é uma aplicação frontend baseada em Angular projetada para gerenciar e visualizar dados relacionados a doadores de sangue. Os usuários podem fazer upload de um arquivo JSON ou inserir dados por meio de um campo de texto para que as informações sejam processadas por um sistema backend. Os dados processados são usados para criar visualizações informativas.

---

## **Funcionalidades**

### **1. Autenticação de Usuário**

- O usuário deve efetuar login para acessar a aplicação.
- Credenciais de acesso:
  - **Usuário:** `admin`
  - **Senha:** `12345678`

---

### **2. Upload de Arquivo ou Entrada de Texto**

- Os usuários podem fornecer os dados por meio de um arquivo JSON ou inserir diretamente os dados no formato JSON em um campo de texto.
- Os dados fornecidos serão processados pelo backend.

---

### **3. Visualizações de Dados**

A aplicação gera as seguintes visualizações e informações baseadas nos dados processados:

1. **Número de Candidatos por Estado:**

- Um gráfico exibe quantos candidatos existem na lista para cada estado do Brasil.

2. **IMC (Índice de Massa Corporal) Médio por Faixa Etária:**

- Calcula o IMC médio para intervalos de idade em incrementos de 10 anos (Ex.: 0–10, 11–20, 21–30, etc.).
- Fórmula:  
  **IMC = peso / (altura²)**

3. **Percentual de Obesidade por Gênero:**

- Mostra o percentual de pessoas obesas separadamente para homens e mulheres.
- Um candidato é considerado obeso se seu IMC > 30.

4. **Média de Idade por Tipo Sanguíneo:**

- Determina e exibe a média de idade para cada tipo sanguíneo.

5. **Quantidade de Possíveis Doadores por Tipo Sanguíneo Receptor:**

- Calcula e exibe quantos doadores potenciais existem para cada tipo sanguíneo receptor.

---

## **Configuração do Ambiente de Desenvolvimento**

### **1. Servidor de Desenvolvimento**

Para executar o servidor de desenvolvimento:

```bash
ng serve
```

Após iniciar, abra seu navegador e vá para `http://localhost:4200/`. A aplicação recarregará automaticamente caso você realize alterações nos arquivos-fonte.

---

### **2. Construção**

Para compilar o projeto para produção, execute:

```bash
ng build
```

Isso criará a aplicação e armazenará a saída na pasta `dist/`.

---

## **Requisitos Técnicos**

- **Necessário NodeJs 20 ou superior**

## **Detalhes para Login**

- **Usuário:** `admin`
- **Senha:** `12345678`

Essas credenciais devem ser usadas para acessar a aplicação.

---

## **Visualizações e Funcionalidades**

1. Distribuição de candidatos por estado.
2. IMC médio por faixa etária.
3. Percentual de obesidade por gênero.
4. Média de idade por tipo sanguíneo.
5. Potenciais doadores para cada tipo sanguíneo receptor.
