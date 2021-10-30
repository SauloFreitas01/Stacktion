'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('users', [{
        nome: "Carlos Lacerda" ,
        email: "carloslacerda@mail.com",
        senha: "carlos123",
        telefone: "+55 94 98928 4243" ,
        bio: "Desenvolvedor fullstack com 5 anos de experiência no mercado",
        valor: 120
      },
      {
        nome: "Lídia Campos" ,
        email: "lidia@lidiaUI.com" ,
        senha: "lidia123" ,
        telefone: "+55 11 97243 5178" ,
        bio: "Pesquisadora da aréa de UX/UI pela USP e freelancer nas horas vagas" ,
        valor: 170 
         
      },{
        nome: "Alberto Neves" ,
        email: "AlbertoDB@outlook.com" ,
        senha: "alberto123",
        telefone: "+55 21 93271 5852",
        bio: "DBA expert com com mais de 20 anos de experiencia",
        valor: 250
        
      },{
        nome: "Douglas veiga" ,
        email: "Douglasv@gmail.com",
        senha: "douglas123",
        telefone:" +55 44 91424 7658" ,
        bio: "Desenvolvedor PHP especializado em Laravel",
        valor:  120
        
      },{
        nome:"Pedro Novaes " ,
        email: "PedroDev@gmail.com" ,
        senha: "pedro123",
        telefone:"+55 11 96438 9745" ,
        bio: "Desenvolvedor Fulstack JR - MERN stack " ,
        valor: 70,
        
      },{
        nome: "Isa Silva" ,
        email:"isasilva@gmail.com" ,
        senha:"isa123" ,
        telefone:"+55 30 99345 3245" ,
        bio:"desenvolvedora back-end (Node.js) " ,
        valor: 130
        
      }
    
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('People', null, {});
    
  }
};