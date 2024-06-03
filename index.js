

let container = document.getElementById('container');

const {width} = document.getElementById("slide1").getBoundingClientRect()
let max = document.querySelectorAll(".carrosel img").length
let slideAtivo = 0;


function proxima () {
    if(slideAtivo >= max-1) return null
 slideAtivo = slideAtivo + 1
 const proximoSlide = document.querySelector(".carrosel");
 proximoSlide.style.transform=`translateX(${-(width*slideAtivo)}px)`
}

function voltar () {
    if(slideAtivo <= 0) return null
    slideAtivo = slideAtivo -1
    const slideAnterior = document.querySelector(".carrosel");
    slideAnterior.style.transform=`translateX(${-(width*slideAtivo)}px)`
   }


   // Simulação de uma api de produtos

   let produtos = [
    {   id:"13",
        nome:'short jeans',
        tamanho:'G',
        preco:'59,90',
        sexo:'menino',
        src:"fotos/fotosProdutos/short.jpg",
        descricao:'short jeans casual para o verão',
        categoria:'todas categoria',
        maisVendido:true,
        destaqueSemana:false
    },
    {   
        id:"24",
        nome:'bolsa de gatinho ',
        tamanho:'G',
        preco:'90,00',
        sexo:'menino',
        src:"fotos/fotosProdutos/bolsa.jpg",
        descricao:'bolsa lindíssima',
        categoria:'meninos',
        maisVendido:true,
        destaqueSemana:false
    },

    {   
        id:"12",
        nome:'calça rosa',
        tamanho:'G',
        preco:'100,00',
        sexo:'menino',
        src:"fotos/fotosProdutos/calça.webp",
        descricao:'calça para o inverno',
        categoria:'meninos',
        maisVendido:true,
        destaqueSemana:false
    },

    {   id:"4",
        nome:'conjunto verde',
        tamanho:'G',
        preco:'59,00',
        sexo:'meninas',
        src:"fotos/fotosProdutos/conjunto-verde.webp",
        descricao:'conjuntinho-verde casual ',
        categoria:'meninos',
        maisVendido:false,
        destaqueSemana:true
    },
    {   id:"16",
        nome:'macaquinho',
        tamanho:'G',
        preco:'30,50',
        sexo:'meninos',
        src:"fotos/fotosProdutos/macaquinho-florido.jpg",
        descricao:'Macaquinho casual.',
        categoria:'meninos',
        maisVendido:false,
        destaqueSemana:true
    },
    {   id:"12",
        nome:'calça rosa',
        tamanho:'G',
        preco:'100,00',
        sexo:'meninos',
        src:"fotos/fotosProdutos/calça.webp",
        descricao:'calça rosa casual.',
        categoria:'meninos',
        maisVendido:false,
        destaqueSemana:true
    },
    
]

 // Inserção de html na div dos mais vendidos se propriedade maisVendido for true.

    const sectionMaisVendidos = document.getElementById("maisVendidos");

    sectionMaisVendidos.innerHTML = produtos.map(produto => (
        produto.maisVendido != true ? null :
        `
         <div class="produto">
            <a href=produto.html?produtoid=${produto.id}>
            <img src=${produto.src}>
            <h2>${produto.nome}</h2>
            <h3>R$ ${produto.preco}</h3>
             <p>${produto.descricao}</p>
             </a>
        </div>
    `
    )).join('')


    // Inserção de html na div dos destaques se propriedade  for true. 

    const sectionDestaques = document.getElementById("produtosDestaques")
    
    sectionDestaques.innerHTML = produtos.map(produto => (
        produto.destaqueSemana != true ? null :
        `
        </div>
            <div class="divProdutoDestaque">
                <a href='produto.html?produtoid=${produto.id}'>
                    <img src=${produto.src}>
                    <h2>${produto.nome}</h2>
                    <h3>R$ ${produto.preco}</h3>
                    <p>${produto.descricao}</p>
                </a>
            </div>
        `
    )).join('')



// Menu responsivo 

function handleclick () {
   const menu = document.getElementById("nav");
   let menuDisplay = menu.style.display;
   menu.style.display = menuDisplay == 'inline-block' ? 'none' : 'inline-block'
   
  
 
   
}
    

