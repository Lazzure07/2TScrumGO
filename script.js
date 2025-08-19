
        function onload(){
            document.getElementById("divValida").style.display = "none"
            document.getElementById("surpresa2").style.visibility = "hidden"
            document.getElementById("planeja2").style.visibility = "hidden"
            document.getElementById("diaria2").style.visibility = "hidden"
            document.getElementById("revisao2").style.visibility = "hidden"
            document.getElementById("retro2").style.visibility = "hidden"

            document.getElementById("invi").style.visibility = "hidden"
            document.getElementById("invi2").style.visibility = "hidden"



        }
        function pegaNumb(){
            var dias = document.getElementById("Dias").value
            var din = document.getElementById("Dinheiro").value
            var numeroDin = Number(din);
            var numeroDias = Number(dias);

            var pontos = ((13000 / 70)*numeroDias) + numeroDin

            console.log(numeroDias)
            document.getElementById("divCalc").innerText = pontos.toFixed(2)

        }
        
        function valida(){
            var imgValida = document.getElementById("validacao")
            var divValida = document.getElementById("divValida")

            imgValida.src = imgValida.src.includes('versovalida.png') ? 'valida.png':'versovalida.png'
            divValida.innerHTML = divValida.innerHTML.includes('COMUNICADO OFICIAL') ? null:'<p><strong><h2>COMUNICADO OFICIAL<br>VALIDAÇÃO DO BACKLOG DO PRODUTO</h2></strong></p><p><strong>Olá,</strong></p><p>Parabéns, você finalizou a montagem do Backlog do Produto. Agora, a empresa apresentou ao cliente todos os itens sugeridos na etapa anterior para que ele pudesse avaliar. Após essa validação, o cliente selecionou os seguintes itens como parte essencial do backlog:<strong>b1, b9, b10, b13, b16, b19, b20, b22, b23, b24, b25, b26, b27, b28, b30.</strong></p><p><strong>RESULTADO:</strong><br>Se você acertou 8 itens ou mais, o projeto será bonificado com <strong>R$ 1.000,00</strong>.<br>Caso tenha acertado menos de 8 itens, será aplicado um desconto de <strong>R$ 750,00</strong>.'
            divValida.style.display = (divValida.style.display === "block") ? "none" : "block";
        }
        var vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        function surpresa(){
            for (let i = 0; i < vetor.length; i++) {
                if (vetor[i] !== null) {
                    break;
                }

                if (i === vetor.length - 1) {
                    document.getElementById("surpresa").src = 'surpresa/surpresa0.png'
                    document.getElementById("surpresa").style.opacity = '0.2'
                    return;
                }
            }

            var min = 1;
            var max = 10;
            var cartaSurpresa = Math.floor(Math.random() * (max - min + 1)) + min;

            switch(cartaSurpresa){
                case 1:
                    if(vetor[0] == null){
                        surpresa()
                        break
                    }
                    vetor[0] = null
                    document.getElementById("surpresa2").src = 'surpresa/surpresa1.png'
                    document.getElementById("surpresa2").style.visibility = "visible"
                    
                    break;
                case 2:
                    if(vetor[1] == null){
                        surpresa()
                        break
                    }
                    vetor[1] = null
                    document.getElementById("surpresa2").src = 'surpresa/surpresa2.png'
                    document.getElementById("surpresa2").style.visibility = "visible"
                    
                    break;
                case 3:
                    if(vetor[2] == null){
                        surpresa()
                        break
                    }
                    vetor[2] = null
                    document.getElementById("surpresa2").src = 'surpresa/surpresa3.png'
                    document.getElementById("surpresa2").style.visibility = "visible"
                    
                    break;
                case 4:
                    if(vetor[3] == null){
                        surpresa()
                        break
                    }
                    vetor[3] = null
                    document.getElementById("surpresa2").src = 'surpresa/surpresa4.png'
                    document.getElementById("surpresa2").style.visibility = "visible"
                    
                    break;
                case 5:
                    if(vetor[4] == null){
                        surpresa()
                        break
                    }
                    vetor[4] = null
                    document.getElementById("surpresa2").src = 'surpresa/surpresa5.png'
                    document.getElementById("surpresa2").style.visibility = "visible"
                    
                    break;
                case 6:
                    if(vetor[5] == null){
                        surpresa()
                        break
                    }
                    vetor[5] = null
                    document.getElementById("surpresa2").src = 'surpresa/surpresa6.png'
                    document.getElementById("surpresa2").style.visibility = "visible"
                    
                    break;
                case 7:
                    if(vetor[6] == null){
                        surpresa()
                        break
                    }
                    vetor[6] = null
                    document.getElementById("surpresa2").src = 'surpresa/surpresa7.png'
                    document.getElementById("surpresa2").style.visibility = "visible"
                    
                    break;
                case 8:
                    if(vetor[7] == null){
                        surpresa()
                        break
                    }
                    vetor[7] = null
                    document.getElementById("surpresa2").src = 'surpresa/surpresa8.png'
                    document.getElementById("surpresa2").style.visibility = "visible"
                    
                    break;
                case 9:
                    if(vetor[8] == null){
                        surpresa()
                        break
                    }
                    vetor[8] = null
                    document.getElementById("surpresa2").src = 'surpresa/surpresa9.png'
                    document.getElementById("surpresa2").style.visibility = "visible"
                    
                    break;
                case 10:
                    if(vetor[9] == null){
                        surpresa()
                        break
                    }
                    vetor[9] = null
                    document.getElementById("surpresa2").src = 'surpresa/surpresa10.png'
                    document.getElementById("surpresa2").style.visibility = "visible"
                    
                    break;
            }
        }
        function planeja(){

            var min = 1;
            var max = 7;
            var cartaPlaneja = Math.floor(Math.random() * (max - min + 1)) + min;

            switch(cartaPlaneja){
                case 1:
                    document.getElementById("planeja2").src = 'planejamento/planeja1.png'
                    document.getElementById("planeja2").style.visibility = "visible"
                    break;
                case 2:
                    document.getElementById("planeja2").src = 'planejamento/planeja2.png'
                    document.getElementById("planeja2").style.visibility = "visible"
                    break;
                case 3:
                    document.getElementById("planeja2").src = 'planejamento/planeja3.png'
                    document.getElementById("planeja2").style.visibility = "visible"
                    break;
                case 4:
                    document.getElementById("planeja2").src = 'planejamento/planeja4.png'
                    document.getElementById("planeja2").style.visibility = "visible"
                    break;
                case 5:
                    document.getElementById("planeja2").src = 'planejamento/planeja5.png'
                    document.getElementById("planeja2").style.visibility = "visible"
                    break;
                case 6:
                    document.getElementById("planeja2").src = 'planejamento/planeja6.png'
                    document.getElementById("planeja2").style.visibility = "visible"
                    break;
                case 7:
                    document.getElementById("planeja2").src = 'planejamento/planeja7.png'
                    document.getElementById("planeja2").style.visibility = "visible"
                    break;
            }
        }
        function diaria(){

            var min = 1;
            var max = 9;
            var cartaDiaria = Math.floor(Math.random() * (max - min + 1)) + min;

            switch(cartaDiaria){
                case 1:
                    document.getElementById("diaria2").src = 'diaria/diaria1.png'
                    document.getElementById("diaria2").style.visibility = "visible"
                    break;
                case 2:
                    document.getElementById("diaria2").src = 'diaria/diaria2.png'
                    document.getElementById("diaria2").style.visibility = "visible"
                    break;
                case 3:
                    document.getElementById("diaria2").src = 'diaria/diaria3.png'
                    document.getElementById("diaria2").style.visibility = "visible"
                    break;
                case 4:
                    document.getElementById("diaria2").src = 'diaria/diaria4.png'
                    document.getElementById("diaria2").style.visibility = "visible"
                    break;
                case 5:
                    document.getElementById("diaria2").src = 'diaria/diaria5.png'
                    document.getElementById("diaria2").style.visibility = "visible"
                    break;
                case 6:
                    document.getElementById("diaria2").src = 'diaria/diaria6.png'
                    document.getElementById("diaria2").style.visibility = "visible"
                    break;
                case 7:
                    document.getElementById("diaria2").src = 'diaria/diaria7.png'
                    document.getElementById("diaria2").style.visibility = "visible"
                    break;
                case 8:
                    document.getElementById("diaria2").src = 'diaria/diaria8.png'
                    document.getElementById("diaria2").style.visibility = "visible"
                    break;
                case 9:
                    document.getElementById("diaria2").src = 'diaria/diaria9.png'
                    document.getElementById("diaria2").style.visibility = "visible"
                    break;
            }
        }
        function revisao(){

            var min = 1;
            var max = 7;
            var cartaRevisao = Math.floor(Math.random() * (max - min + 1)) + min;

            switch(cartaRevisao){
                case 1:
                    document.getElementById("revisao2").src = 'revisao/revisao1.png'
                    document.getElementById("revisao2").style.visibility = "visible"
                    break;
                case 2:
                    document.getElementById("revisao2").src = 'revisao/revisao2.png'
                    document.getElementById("revisao2").style.visibility = "visible"
                    break;
                case 3:
                    document.getElementById("revisao2").src = 'revisao/revisao3.png'
                    document.getElementById("revisao2").style.visibility = "visible"
                    break;
                case 4:
                    document.getElementById("revisao2").src = 'revisao/revisao4.png'
                    document.getElementById("revisao2").style.visibility = "visible"
                    break;
                case 5:
                    document.getElementById("revisao2").src = 'revisao/revisao5.png'
                    document.getElementById("revisao2").style.visibility = "visible"
                    break;
                case 6:
                    document.getElementById("revisao2").src = 'revisao/revisao6.png'
                    document.getElementById("revisao2").style.visibility = "visible"
                    break;
                case 7:
                    document.getElementById("revisao2").src = 'revisao/revisao7.png'
                    document.getElementById("revisao2").style.visibility = "visible"
                    break;
            }

        }
        function retro(){
            var min = 1;
            var max = 8;
            var cartaRevisao = Math.floor(Math.random() * (max - min + 1)) + min;

            switch(cartaRevisao){
                case 1:
                    document.getElementById("retro2").src = 'retro/retro1.png'
                    document.getElementById("retro2").style.visibility = "visible"
                    break;
                case 2:
                    document.getElementById("retro2").src = 'retro/retro2.png'
                    document.getElementById("retro2").style.visibility = "visible"
                    break;
                case 3:
                    document.getElementById("retro2").src = 'retro/retro3.png'
                    document.getElementById("retro2").style.visibility = "visible"
                    break;
                case 4:
                    document.getElementById("retro2").src = 'retro/retro4.png'
                    document.getElementById("retro2").style.visibility = "visible"
                    break;
                case 5:
                    document.getElementById("retro2").src = 'retro/retro5.png'
                    document.getElementById("retro2").style.visibility = "visible"
                    break;
                case 6:
                    document.getElementById("retro2").src = 'retro/retro6.png'
                    document.getElementById("retro2").style.visibility = "visible"
                    break;
                case 7:
                    document.getElementById("retro2").src = 'retro/retro7.png'
                    document.getElementById("retro2").style.visibility = "visible"
                    break;
                case 8:
                    document.getElementById("retro2").src = 'retro/retro8.png'
                    document.getElementById("retro2").style.visibility = "visible"
                    break;
            }
        }
