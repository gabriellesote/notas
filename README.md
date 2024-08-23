<img src="https://github.com/gabriellesote/notas/blob/main/assets/banners%20(3).png"/>
<h3> Descrição </h3>

<p> Esse repositório contém o código desenvolvido para o teste prático como parte do processo seletivo para a <em>dti Digital </em>. O objetivo do teste é implementar uma web aplicação de lembretes, utilizando NodeJS (backend) e ReactJS (frontend). </p>

<h3> Funcionalidades</h3>

<p>

- **Adicionar Lembretes:** Os usuários podem criar novos lembretes inserindo um título e uma data. O lembrete é salvo no banco de dados e exibido na lista de lembretes.

- **Exibição de lembretes:** A aplicação lista todos os lembretes cadastrados, mostrando a nota e a data formatada no estilo dd/MM/yyyy.

- **Editar Lembretes:** Os usuários podem selecionar um lembrete existente para editar o título ou a data. As alterações são salvas e o lembrete atualizado é exibido.
  
- **Excluir Lembretes:** Os usuários podem deletar um lembrete existente. Após a exclusão, o lembrete é removido da lista e do banco de dados.
</p>

<h3>  Tecnologias Utilizadas </h3>

<p>

  - **Frontend:** React
  - **Backend:** NodeJs
  - **Banco de dados:** PostgreSQL  → [NeonTech](https://neon.tech)
  - **Outras ferramentas:** Git - VSCode

</p>

<h2> Como Executar o Projeto </h2>

  1.  Clone este repositório:

```
git clone https://github.com/gabriellesote/notas.git
```

2. Instale as dependências:

 - Navegue para a pasta backend

```
cd backend
```

   
   - E instale: 

```
 npm install cors@2.8.5 dotenv@16.4.5 express@4.19.2  nodemon@3.1.4 postgres@3.4.4
```

 - Navegue para a pasta frontend

```
cd ../frontend
```
   - E instale:

    
<p>   
  
  *Opção npm* </p>
```
npm install @testing-library/jest-dom@5.17.0 @testing-library/react@13.4.0 @testing-library/user-event@13.5.0 axios@1.7.4 date-fns@3.6.0 react-dom@18.3.1 react-icons@5.3.0 react-scripts@5.0.1 react-toastify@9.0.8 react@18.3.1 styled-components@6.1.12 web-vitals@2.1.4
```

<p>   
  
  *Opção yarn* </p>

```
yarn add @testing-library/jest-dom@5.17.0 @testing-library/react@13.4.0 @testing-library/user-event@13.5.0 axios@1.7.4 date-fns@3.6.0 react-dom@18.3.1 react-icons@5.3.0 react-scripts@5.0.1 react-toastify@9.0.8 react@18.3.1 styled-components@6.1.12 web-vitals@2.1.4
```

3. Configure as variáveis de ambiente:

   





