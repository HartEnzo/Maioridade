let pessoa = {
    nome: "",
    idade: "", 
    maioridade: ""
};
console.log("Qual o seu nome?");
process.stdin.on("data", function(data){
    
     if(!pessoa.nome){

        pessoa.nome = data.toString().trim();
        console.log("Qual a sua idade?");
     } else if(!pessoa.idade){

        pessoa.idade = +data.toString().trim();
        console.log("Olá " + pessoa.nome);
        if(pessoa.idade >= 18){
         
            console.log("Voce tem mais de 18 anos, é maior de idade");
            } else{

                console.log("Voce não é maior de idade, não tem 18 anos");
            }
        process.exit();
      }
    });