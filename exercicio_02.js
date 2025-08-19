       
        function jogarJokenPo(){
            //Decladrando as variáveis
        var maoUsuario;
        var maoMaquina = Math.floor(Math.random() * 3) + 1; // 1: Pedra, 2: Papel, 3: Tesoura
            //Prompt do usuário
        maoUsuario = parseInt(window.prompt("Escolha: 1- Pedra\n 2- Papel\n 3- Tesoura"));    
            //Verificando se a escolha é válida
       if(isNaN(maoUsuario) || maoUsuario < 1 || maoUsuario > 3){
        alert("Escolha inválida! Por favor, escolha 1, 2 ou 3.");
        return; // Encerra a função se a escolha for inválida
       }
        //Mapeia os números para as mãos correspondentes
        var jogadas = {
            1: "Pedra",
            2: "Papel",
            3: "Tesoura"
        };

        console.log(`Você escolheu: ${jogadas[maoUsuario]}` );
        console.log(`A máquina escolheu: ${jogadas[maoMaquina]}`);
    
            //Escolha do usuário
        console.log("Você escolheu: " + maoUsuario);
            //Escolha da máquina
        console.log("A máquina escolheu: " + maoMaquina);
        
        if(maoUsuario === maoMaquina){
            console.log("Empate!");
        } else if(maoUsuario ===1 && maoMaquina === 3 ||
                maoUsuario === 2 && maoMaquina === 1 ||
                maoUsuario === 3 && maoMaquina === 2
        ){
            console.log("Você Ganhou!");
        } else{
            console.log("Você Perdeu!");
        }
    }
     jogarJokenPo();