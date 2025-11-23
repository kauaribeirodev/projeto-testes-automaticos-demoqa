# 🧪 DemoQA Automation Suite

Projeto de automação de testes Quality Assurance (QA) desenvolvido para validar as funcionalidades do site [DemoQA](https://demoqa.com/).

Este projeto tem como objetivo praticar e demonstrar interações avançadas com elementos web modernos e realizar testes híbridos combinando Interface (UI) e API.

## 🎯 Escopo do Projeto

O projeto cobre os seguintes módulos da aplicação:

### 🖥️ UI Testing (Front-end)

- **Elements:** Manipulação de Text Box, Checkbox, Web Tables e Upload/Download de arquivos.
- **Forms:** Preenchimento de formulários complexos com Date Pickers.
- **Alerts, Frame & Windows:**
  - Tratamento de Múltiplas Abas e Janelas.
  - Interação com Iframes e Nested Frames (Iframes aninhados).
  - Manipulação de Modais e Alertas nativos do navegador.
- **Widgets:** Automação de Accordian, Slider, Progress Bar e Tool Tips.
- **Interactions:** Testes de Drag & Drop, Sortable e Resizable.

### 🔌 API Testing (Back-end)

- **Book Store API:**
  - Criação de usuários e geração de Token (Autenticação).
  - Validação de endpoints (GET, POST, DELETE).
  - **Estratégia Híbrida:** Uso da API para injetar massa de dados e autenticar o usuário antes dos testes de UI, otimizando o tempo de execução.

## 🛠️ Tecnologias Utilizadas

- **Linguagem:** [Ex: JavaScript / TypeScript / Java / Python]
- **Framework de Teste:** [Ex: Cypress / Playwright / Selenium / Robot]
- **Design Pattern:** Page Object Model (POM)
- **Relatórios:** [Ex: Allure Reports / Mochawesome]
- **CI/CD:** [Ex: GitHub Actions]
