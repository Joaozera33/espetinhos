function salvarCategoria() {
    const codigo = document.getElementById('codigo').value;
    const descricao = document.getElementById('descricao').value;
    
    if (codigo && descricao) {
        const tabela = document.getElementById('table-categorias');
        const novaLinha = tabela.insertRow();
        novaLinha.insertCell(0);
        novaLinha.insertCell(1).innerText = codigo;
        novaLinha.insertCell(2).innerText = descricao;
        
        codigo = '';
        descricao = '';
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}

function salvarProduto() {
    const categoria = document.getElementById('categoria').value;
    const codigo = document.getElementById('codigo').value;
    const descricao = document.getElementById('descricao').value; 
    const preco = document.getElementById('preco').value; 
    const imagem = document.getElementById('imagem').value;

    if (categoria && codigo && descricao && preco && imagem) {
        const tabela = document.getElementById('table-produtos');
        const novaLinha = tabela.insertRow();
        novaLinha.insertCell(0);
        novaLinha.insertCell(1).innerText = categoria;
        novaLinha.insertCell(2).innerText = codigo;
        novaLinha.insertCell(3).innerText = descricao;
        novaLinha.insertCell(4).innerText = preco;
        novaLinha.insertCell(5).innerText = imagem;
        
        categoria = '';
        codigo = '';
        descricao = '';
        preco = '';
        imagem = '';
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}

function consultarPedido() {
    const cliente = document.getElementById('cliente').value;
    const inicio = document.getElementById('inicio').value;
    const fim = document.getElementById('fim').value;
    const situacao = document.getElementById('situacao').value;
    const pedido = document.getElementById('pedido').value;
    
    if (cliente && pedido) {
        const tabela = document.getElementById('table-cliente');
        const novaLinha = tabela.insertRow();
        novaLinha.insertCell(0).innerText = cliente;
        novaLinha.insertCell(1).innerText = pedido;
        
        cliente = '';
        inicio = '';
        fim = '';
        situacao = '';
        pedido = '';
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}