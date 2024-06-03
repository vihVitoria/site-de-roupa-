
    

       // Simulação de uma api de produtos

       let produtos = [
        {   id:"1",
            nome:'colete casaco ',
            tamanho:'G',
            cor:'azul',
            preco:'59,90',
            sexo:'menino',
            src:"fotos/fotosProdutos/colete-bebe.jpg",
            descricao:'colete para inverno',
            categoria:'meninas',
            maisVendido:true,
            destaqueSemana:false
        },
        {   
            id:"2",
            nome:'vestido vermelho',
            tamanho:'G',
            cor:'preto',
            preco:'80,00 ',
            sexo:'menina',
            src:"fotos/fotosProdutos/vestido verm.jpg",
            descricao:'vestido vermelho casual',
            categoria:'meninas',
            maisVendido:true,
            destaqueSemana:false
        },
        {   id:"3",
            nome:'gorro marrom',
            tamanho:'G',
            cor:'marrom',
            preco:'29,90',
            sexo:'unisex',
            src:"fotos/fotosProdutos/gorro.png",
            descricao:'gorro marrom, ótimo para os dias de inverno',
            categoria:'acessorios',
            maisVendido:true,
            destaqueSemana:false
        },
        {   id:"4",
            nome:'vestido rosa',
            tamanho:'G',
            cor:'cinza',
            preco:'200.00',
            sexo:'meninos',
            src:"fotos/fotosProdutos/vestido rosa.webp",
            descricao:'vestido rosa com saia de renda.',
            categoria:'meninos',
            maisVendido:false,
            destaqueSemana:true
        },
        {   id:"5",
            nome:'conjuntinho casual ',
            tamanho:'G',
            cor:'branco',
            preco:'32,20',
            sexo:'meninos',
            src:"fotos/fotosProdutos/blusa rosa.webp",
            descricao:'conjunto casual verão',
            categoria:'meninos',
            maisVendido:false,
            destaqueSemana:true
        },
        {   id:"6",
            nome:'blusa casual',
            tamanho:'G',
            cor:'azul',
            preco:'20,00',
            sexo:'meninos',
            src:"fotos/fotosProdutos/blusa 2.webp",
            descricao:'blusa para o verão.',
            categoria:'meninos',
            maisVendido:false,
            destaqueSemana:true
        },
        {   id:"7",
        nome:'tênis rosa',
        tamanho:'G',
        cor:'rosa',
        preco:'100.00',
        sexo:'meninas',
        src:"fotos/fotosProdutos/tenis-rosa.jpg",
        descricao:'tênis rosa casual',
        categoria:'calçados',
        maisVendido:false,
        destaqueSemana:false,
    },
    {   id:"8",
    nome:'tênis casual rosa',
    tamanho:'G',
    cor:'azul',
    preco:'150.00',
    sexo:'meninos',
    src:"fotos/fotosProdutos/tenis elastico.webp",
    descricao:'tênis rosa, estampa de picolé',
    categoria:'calçados',
    maisVendido:false,
    destaqueSemana:false,
    },
    {   id:"9",
    nome:'bota preta',
    tamanho:'G',
    cor:'vermelho',
    preco:'150.00',
    sexo:'meninas',
    src:"fotos/fotosProdutos/bota preta.webp",
    descricao:'bota preta casual',
    categoria:'calçados',
    maisVendido:false,
    destaqueSemana:false,
    },
    {   id:"10",
    nome:'sandália rosa',
    tamanho:'G',
    cor:'rosa',
    preco:'60,00',
    sexo:'meninas',
    src:"fotos/fotosProdutos/sandalia-rosa.jpg",
    descricao:'sandália rosa com coração na parte frontal.',
    categoria:'calçados',
    maisVendido:false,
    destaqueSemana:false,
    },
    {   id:"11",
    nome:'sapatilha branca',
    tamanho:'G',
    cor:'branco',
    preco:'59,90',
    sexo:'meninos',
    src:"fotos/fotosProdutos/sapatilha.webp",
    descricao:'sapatilha branca com laço',
    categoria:'calçados',
    maisVendido:false,
    destaqueSemana:false,
    },
    {   id:"12",
    nome:'calça rosa com elastico ',
    tamanho:'G',
    cor:'rosa',
    preco:'100,00',
    sexo:'meninos',
    src:"fotos/fotosProdutos/calça.webp",
    descricao:'calça para o inverno e super aquecida',
    categoria:'meninos',
    maisVendido:false,
    destaqueSemana:false,
    },
    {   id:"13",
    nome:'short jeans',
    tamanho:'G',
    cor:'azul',
    preco:'59,90',
    sexo:'meninos',
    src:"fotos/fotosProdutos/short.jpg",
    descricao:'short casual para o verão',
    categoria:'meninos',
    maisVendido:false,
    destaqueSemana:false,
    },
    {   id:"15",
    nome:'Colete casaco bebê',
    tamanho:'G',
    cor:'rosa',
    preco:'100,00',
    sexo:'meninas',
    src:"fotos/fotosProdutos/colete-bebe.jpg",
    descricao:'colete para meninas, do tipo casaco, rosa-salmão.',
    categoria:'meninas',
    maisVendido:false,
    destaqueSemana:false,
    },
    {   id:"16",
    nome:'macaquinho florido',
    tamanho:'G',
    cor:'azul',
    preco:'30,50',
    sexo:'meninas',
    src:"fotos/fotosProdutos/macaquinho-florido.jpg",
    descricao:'macaquinho florido verão',
    categoria:'meninas',
    maisVendido:false,
    destaqueSemana:false,
    },
    {   id:"17",
    nome:'conjutinho branco e estampa azul',
    tamanho:'G',
    cor:'branco',
    preco:'50,00',
    sexo:'meninas',
    src:"fotos/fotosProdutos/conjunto branco2.webp",
    descricao:'conjuntinho casual ',
    categoria:'meninas',
    maisVendido:false,
    destaqueSemana:false,
    },
    {   id:"18",
    nome:'conjuntinho branco',
    tamanho:'G',
    cor:'branco',
    preco:'85,50',
    sexo:'meninas',
    src:"fotos/fotosProdutos/conjunto branco.jpg",
    descricao:'conjuntinho estampa da minne casual',
    categoria:'meninas',
    maisVendido:false,
    destaqueSemana:false,
    },
    {   id:"19",
    nome:'kit moletom rosa',
    tamanho:'G',
    cor:'rosa',
    preco:'100,00',
    sexo:'meninas',
    src:"fotos/fotosProdutos/kit-moletom-rosa.jpg",
    descricao:'Kit 2 peças de moletom, blusa e calça, rosa',
    categoria:'meninas',
    maisVendido:false,
    destaqueSemana:false,
    },
    {   id:"20",
    nome:'conjuntinho preto',
    tamanho:'G',
    cor:'preto',
    preco:'85,00',
    sexo:'meninas',
    src:"fotos/fotosProdutos/conjunto preto.webp",
    descricao:'conjuntinho preto casual',
    categoria:'meninas',
    maisVendido:false,
    destaqueSemana:false,
    },
    {   id:"21",
    nome:'kit de laços',
    tamanho:'G',
    cor:'rosa',
    preco:'25,00',
    sexo:'unisex',
    src:"fotos/fotosProdutos/kit de laços.jpg",
    descricao:'kit de laços com parte de rendas',
    categoria:'acessorios',
    maisVendido:false,
    destaqueSemana:false,
    },
    {   id:"22",
    nome:'Pulseiras',
    tamanho:'G',
    cor:'rosa',
    preco:'10,00',
    sexo:'unisex',
    src:"fotos/fotosProdutos/pulseira.jpg",
    descricao:'Pulseira casual e lindissima',
    categoria:'acessorios',
    maisVendido:false,
    destaqueSemana:false,
    },
    {   id:"23",
    nome:'kit com touca, luva e meia, estampa de ratinho',
    tamanho:'G',
    cor:'rosa',
    preco:'59,00',
    sexo:'meninas',
    src:"fotos/fotosProdutos/kit-toca-luva-meia-rosa.jpg",
    descricao:'kit com touca, luva e meia, de tecido de algodão, estampa de ratinho',
    categoria:'acessorios',
    maisVendido:false,
    destaqueSemana:false,
    },
    {   id:"24",
    nome:'bolsa de gatinho',
    tamanho:'G',
    cor:'rosa',
    preco:'90,00',
    sexo:'meninas',
    src:"fotos/fotosProdutos/bolsa.jpg",
    descricao:'bolsinha para deixar o look mais arrumado',
    categoria:'acessorios',
    maisVendido:false,
    destaqueSemana:false,
    },
    {   id:"25",
    nome:'kit com touca, luva e meia, estampa de urso panda',
    tamanho:'G',
    cor:'preto',
    preco:'36,80',
    sexo:'meninas',
    src:"fotos/fotosProdutos/kit-touca-luva-meia-panda.jpg",
    descricao:'kit com touca, luva e meia, de tecido de algodão, estampa de urso panda',
    categoria:'acessorios',
    maisVendido:false,
    destaqueSemana:false,
    },


    
    
        
    ]

    //Buscando parametros de categoria na URL
        const locationURL = window.location
        const search = new URLSearchParams(locationURL.search)
        const categoria = search.get('categoria')

        console.log(categoria)

        const divProdutos = document.getElementById("vitrineCategoria");

  



   //Buscando parametros de cor na URL
   const locationFiltro = window.location
   const searchCor = new URLSearchParams(locationFiltro.searchCor)
   let corURL = search.get('cor')

   console.log(corURL)

  // Inserção de produtos dinamicamente no setor Todas as categorias sem filtros
   if(categoria === 'todas-as-categorias' && corURL == null) (
    divProdutos.innerHTML = produtos.map(produto => (
       `
       <div class="produtoAmostra">
       <a href=produto.html?produtoid=${produto.id}>
           <div class="imagemProduto">
               <img src="${produto.src}">
           </div>
           <h1>${produto.nome}</h1>
               <h2>R$ ${produto.preco}</h2>
               <p>${produto.descricao}</p>
       </a>
   </div>
   ` 
 )).join('')) 
  // Inserção de produtos dinamicamente no setor da categoria especifica sem filtros
 else if(corURL == null) {
     
   divProdutos.innerHTML = produtos.map(produto => (
       produto.categoria == categoria ? (
       `
       <div class="produtoAmostra">
       <a href=produto.html?produtoid=${produto.id}>
           <div class="imagemProduto">
               <img src="${produto.src}">
           </div>
           <h1>${produto.nome}</h1>
               <h2>R$ ${produto.preco}</h2>
               <p>${produto.descricao}</p>
       </a>
   </div>
   `) : null
 )).join('')
 }

 // Filtros 

 let filtro = {
    cor: ''
}

function filtroCor(event) {
  filtro.cor = event.target.value
  window.location = `categoria.html?categoria=${categoria}&cor=${filtro.cor}`
}

if(corURL != null) {
 const selected = document.getElementById(corURL)
 selected.classList.add("selected")

}

 
 // Verificando se os filtros estão ativos 
 if(categoria === 'todas-as-categorias' && corURL != null) (
    divProdutos.innerHTML = produtos.map(produto => (
    produto.cor == corURL ?
       `
       <div class="produtoAmostra">
       <a href=produto.html?produtoid=${produto.id}>
           <div class="imagemProduto">
               <img src="${produto.src}">
           </div>
           <h1>${produto.nome}</h1>
               <h2>R$ ${produto.preco}</h2>
               <p>${produto.descricao}</p>
       </a>
   </div>
   `:null
 )).join('')) 

 

 else if(corURL != null) {
    // Verificando se produtos são encontrados com os filtros selecionados
    if(produtos.filter(produto => produto.cor == corURL && produto.categoria == categoria).length == 0)
    { divProdutos.innerHTML = `<h1>Não foram encontrados produtos com esses filtros.</h1>`}
    // Renderizar produtos encontrados
    else
    divProdutos.innerHTML = produtos.map(produto => (
        corURL == produto.cor && produto.categoria == categoria ? (
        `
        <div class="produtoAmostra">
        <a href=produto.html?produtoid=${produto.id}>
            <div class="imagemProduto">
                <img src="${produto.src}">
            </div>
            <h1>${produto.nome}</h1>
                <h2>R$ ${produto.preco}</h2>
                <p>${produto.descricao}</p>
        </a>
    </div>
    `):null 
  )).join(''); 
  } 
  
     
  // Limpar filtros 

  function limparFiltros () {
    window.location = `categoria.html?categoria=${categoria}`
  }
  

     

    // Menu responsivo 

    function handleclick () {
       const menu = document.getElementById("nav");
       let menuDisplay = menu.style.display;
       menu.style.display = menuDisplay == 'inline-block' ? 'none' : 'inline-block'
       
       
    }

    // Título da pagina     

    if(categoria === 'todas-as-categorias') {
        document.title = `Projeto Estágio BetaLabs - Todas as Categorias`
    }

    else {
        const titulo = produtos.filter(produto => produto.categoria == categoria)[0].categoria
        const tituloCapitalized = titulo[0].toUpperCase() + titulo.substr(1);
        document.title = `Projeto Estágio BetaLabs - ${tituloCapitalized}`
    }

  

    
        

    