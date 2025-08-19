    
    var mao;
    var maoMaquina = Math.floor(Math.random() * 4) + 1; // 1: Pedra, 2: Papel, 3: Tesoura
    function verificarMao(){
        
        while(mao != maoMaquina){
        mao = parseInt(window.prompt("Escolha Pedra, Papel ou Tesoura: "));    
        if(mao === maoMaquina){
            console.log("Empate");
        } else if(mao === 1 && maoMaquina === 2 ||
            mao === 2 && maoMaquina === 3 ||
            mao === 1 && maoMaquina === 3
        ){
            console.log("Você perdeu");
        } else if(mao === 2 && maoMaquina === 1 ||
            mao === 3 && maoMaquina === 2 ||
            mao === 3 && maoMaquina === 1){
                console.log("Você ganhou");
            }
        console.log("Você escolheu: " + mao);
        console.log("A máquina escolheu: " + maoMaquina);
        
        }

        verificarMao();
        
    }