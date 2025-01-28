document.getElementById("calcular-btn").addEventListener("click", () => {
    const nomeProduto = document.getElementById("nome-produto").value;
    const precoFornecedor = parseFloat(document.getElementById("preco-fornecedor").value);
    const precoComparacao = parseFloat(document.getElementById("preco-comparacao").value);
    const produtoMaior8 = document.getElementById("produto-maior-8").checked;

    if (isNaN(precoFornecedor) || precoFornecedor <= 0) {
        alert("Por favor, insira um preço válido para o fornecedor.");
        return;
    }

    const taxaFixa = produtoMaior8 ? 4 : precoFornecedor / 2;
    const precoComTaxas = precoFornecedor + (precoFornecedor * 0.14) + (precoFornecedor * 0.06) + taxaFixa;
    const precoFinal = precoComTaxas + (precoComTaxas * 0.125);

    const resultadoTexto = document.getElementById("resultado-texto");
    if (!isNaN(precoComparacao)) {
        const cor = precoFinal < precoComparacao ? "verde" : "vermelho";
        resultadoTexto.innerHTML = `<span class="${cor}">Preço Final: R$ ${precoFinal.toFixed(2)}</span>`;
    } else {
        resultadoTexto.textContent = `Preço Final: R$ ${precoFinal.toFixed(2)}`;
    }
});

document.getElementById("upload-imagem").addEventListener("change", async (event) => {
    const imagem = event.target.files[0];
    if (!imagem) return;

    // Processar a imagem com Google Vision API
    alert("Integração da API será adicionada aqui.");
});
