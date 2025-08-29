const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual tipo de ambiente de trabalho você prefere?",
        alternativas: [
            {
                texto: "Um lugar estável, com rotina clara e poucas mudanças.",
                afirmacao: "Pessoa que valoriza segurança, previsibilidade e organização. Costuma ser responsável, leal e prefere ter controle sobre as situações."
            },
            {
                texto:  "Um ambiente dinâmico, com desafios constantes e mudanças frequentes",
                afirmacao: "Pessoa adaptável, criativa e que gosta de se reinventar. Prefere ambientes que ofereçam crescimento e não se intimida com o inesperado.."
            }    
           
        ]
    },
    {
       
            enunciado: "Confia na intuição e age rapidamente",
            alternativas: [
                {
                    texto: "Analisa com calma e pesquisa antes de agir",
                    afirmacao: "Pessoa analítica, detalhista e cautelosa. Valoriza a lógica e a informação. Provavelmente se destaca em áreas técnicas ou estratégicas."
                },
                {
                    texto:  "Confia na intuição e age rapidamente ",
                    afirmacao: "Pessoa prática, impulsiva e com espírito de liderança. Tende a ser mais emocional e confiante. Pode se destacar em ambientes que exigem decisões rápidas, como vendas ou gestão de crises."
                }    
               
            ]
        },
        {
            enunciado: "Você prefere trabalhar em um ambiente",

            alternativas: [
                {
                    texto: "Estruturado e previsível",
                    afirmacao: "Gosta de rotina, segurança e planejamento. Prefere seguir regras claras e ter controle sobre o que está por vir. Ideal para carreiras como administração, contabilidade, jurídico."
                },
                {
                    texto:    "Dinâmico e em constante mudança",
               
                    afirmacao: "Se adapta facilmente, busca desafios e novidades. Prefere ambientes criativos, com mudanças frequentes. Ideal para áreas como marketing, startups, eventos."
                }    
               
            ]
        },
]
   
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }

}
function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++
    mostraPergunta();
}
function mostraResultado(){
    caixaPerguntas.textContent = "Olha só o que podemos afirmar sobre você...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}



mostraPergunta();