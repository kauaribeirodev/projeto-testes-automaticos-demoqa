# 🧪 Suíte de Automação DemoQA

Projeto de automação de testes de Qualidade (QA) desenvolvido para validar as funcionalidades do site [DemoQA](https://demoqa.com/).

Este projeto tem como objetivo praticar e demonstrar interações avançadas com elementos web modernos e realizar testes híbridos, combinando Interface (UI) e API.

## 🎯 Escopo do Projeto

O projeto cobre os seguintes módulos da aplicação:

### 🖥️ Testes de Interface (Front-end)

- **Elementos (Elements):** Manipulação de Text Box, Checkbox, Web Tables e validação de Upload/Download de arquivos.
- **Formulários (Forms):** Preenchimento de formulários complexos, incluindo seleção de datas (Date Pickers).
- **Alertas, Frames e Janelas:**
  - Tratamento de múltiplas abas e janelas do navegador.
  - Interação com Iframes e Nested Frames (Iframes aninhados).
  - Manipulação de caixas de diálogo (Modais) e alertas nativos.
- **Widgets:** Automação de componentes dinâmicos como Accordian, Slider, Progress Bar e Tool Tips.
- **Interações (Interactions):** Testes avançados de Drag & Drop (arrastar e soltar), elementos ordenáveis (Sortable) e redimensionáveis (Resizable).

### 🔌 Testes de API (Back-end)

- **Book Store API:**
  - Autenticação: Criação de usuários e geração de Token de acesso.
  - Validação de endpoints: Métodos GET, POST e DELETE.
  - **Estratégia Híbrida:** Utilização da API para criação de massa de dados (setup) e login, agilizando a execução dos testes de interface.

## 🛠️ Tecnologias Utilizadas

- **Linguagem:** [Ex: JavaScript / Java / Python]
- **Framework de Teste:** [Ex: Cypress / Playwright / Selenium]
- **Padrão de Projeto:** Page Object Model (POM)
- **Relatórios:** [Ex: Allure Reports / Mochawesome]
- **CI/CD:** [Ex: GitHub Actions]

## 🚀 Como Rodar o Projeto

### Pré-requisitos

- [Ex: Node.js v18+]

### Instalação

Clonar o repositório:

```bash
git clone [https://github.com/seu-usuario/projeto-testes-automaticos.git](https://github.com/seu-usuario/projeto-testes-automaticos.git)
cd projeto-testes-automaticos
# Instalar dependências
[comando de instalação, ex: npm install]
```
