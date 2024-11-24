document.querySelectorAll('.menu > li').forEach(item => {
    item.addEventListener('mouseover', () =>{
        const submenu = item.querySelector('.submenu');
        if (submenu){
            submenu.style.display = 'block';
        }
    });

    item.addEventListener('mouseout', () =>{
        const submenu = item.querySelector('.submenu');
        if (submenu){
            submenu.style.display = 'none';
        }
    })
});

function limpar(){
    const editor = document.getElementById('editor');
    editor.innerText = '';
}

function newWindow() {
    const newTab = window.open("", "_blank");
    
    const htmlContent = `
    <!DOCTYPE html>
        <html lang="pt-br">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Editor Texto Rich Text</title>
                <link rel="stylesheet" href="css/reset.css" />
                <link rel="stylesheet" href="css/style.css" /> 
                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">
            </head>

            <body>
                <nav class="navbar">
                    <ul class="menu">
                        <li class="without-margin">
                            Arquivo
                            <ul class="submenu">
                                <li onclick="limpar()">Novo</li>
                                <li onclick="newWindow()">Nova Janela</li>
                                <li id="file-input-btn">Abrir</li>
                                <input type="file" id="file-input" />
                                <li id="save">Salvar</li>
                                <li onclick="salvarComo()">Salvar como...</li>
                                <li>Configurar página...</li>
                                <li>Imprimir</li>
                                <li>Sair</li>
                            </ul>
                        </li>
                        <li>
                            Editar
                            <ul class="submenu">
                                <li>Desfazer</li>
                                <li>Recortar</li>
                                <li>Copiar</li>
                                <li>Colar</li>
                                <li>Excluir</li>
                                <li>Buscar com o bing...</li>
                                <li>Localizar...</li>
                                <li>Localizar próxima</li>
                                <li>Localizar Anterior</li>
                                <li>Substituir...</li>
                                <li>Ir para...</li>
                                <li>Selecionar tudo</li>
                                <li>Hora/Data</li>
                            </ul>
                        </li>
                        <li>
                            Formatar
                            <ul class="submenu">
                                <li>Quebra automática de linha</li>
                                <li>Fonte</li>
                            </ul>
                        </li>
                        <li>
                            Exibir
                            <ul class="submenu">
                                <li>Zoom</li>
                                <li>Barra de status</li>
                            </ul>
                        </li>
                        <li>
                            Ajuda
                            <ul class="submenu">
                                <li>Exibir Ajuda</li>
                                <li>Enviar Comentários</li>
                                <li>Sobre o Bloco de Notas</li>
                            </ul>
                        </li>
                    </ul>
                </nav>

                <section class="personalizacao">
                    <div class="fonte">
                        <div class="fonte-first-line">
                            <select class="font-family" name="select" id="select" onchange="fonte()">
                                <option value="Calibri">Calibri (corpo)</option>
                                <option value="Arial">Arial</option>
                                <option value="Times New Roman">Times New Roman</option>
                                <option value="Georgia">Georgia</option>
                                <option value="Verdana">Verdana</option>
                                <option value="Courier New">Courier New</option>
                            </select>
                            <select name="fontsize" id="fontsize" onchange="fonteTamanho()">
                                <option value="10">10</option>
                                <option value="11" selected>11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                                <option value="17">17</option>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                            </select>  
                            <div class="arrow-button" onclick="increaseFontSize()">
                                <i class= "fas fa-font"></i>
                                <i class="fas fa-arrow-up"></i>
                            </div>
                            <div class="arrow-button-down" onclick="decreaseFontSize()">
                                <i class= "fas fa-font"></i>
                                <i class="fas fa-arrow-down"></i>
                            </div>
                        </div>
                        <div class="fonte-second-line">
                            <button class="btn-bold" onclick="negrito()">N</button>
                            <button class="btn-italic" onclick="italico()">I</button>
                            <button class="btn-sub" onclick="sublinhado()">S</button>
                            <button id="btn" class="riscado" onclick="riscado()">abc</button>
                            <div class="font-color-select">
                                <div class="efeito-letra">
                                    <button class="color-button">A</button>
                                    <div class="color-display" id="color-display"></div>
                                </div>
                                <select name="fontcolor" id="fontcolor" onchange="fontColor()">
                                    <option value="red" class="option-red"></option>
                                    <option value="black" class="option-black"></option>
                                    <option value="green" class="option-green"></option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="vertical-line"></div>
                    <div class="paragrafo">
                        <div id="paragrafo-first-line">
                            <button class="btn-alinhar" onclick="adicionarListaNaoOrdenada()">
                                <i class ="fas fa-list-ul"></i>
                            </button>
                            <button class="btn-alinhar" onclick="adicionarListaOrdenada()">
                                <i class="fas fa-list-ol"></i>
                            </button>
                            <button class="btn-alinhar" onclick="aumentarRecuo()">
                                <i class="fas fa-indent"></i>
                            </button>
                            <button class="btn-alinhar" onclick="diminuirRecuo()">
                                <i class="fas fa-outdent"></i>
                            </button>
                        </div>
                        <div id="paragrafo-second-line">
                            <button class="btn-alinhar" onclick="alignText('left')">
                                <i class="fas fa-align-left"></i>
                            </button>
                            <button class="btn-alinhar" onclick="alignText('center')">
                                <i class="fas fa-align-center"></i>
                            </button>
                            <button class="btn-alinhar" onclick="alignText('right')">
                                <i class="fas fa-align-right"></i>
                            </button>
                            <button class="btn-alinhar" onclick="justify()">
                                <i class="fas fa-align-justify"></i>
                            </button>
                            <div style="display: flex;">
                                <div class="efeito-letra">
                                    <p><i class="fas fa-fill-drip"></i></p>
                                    <div class="color-display-background" id="color-display-background"></div>
                                </div>
                                <select name="backgroundcolor" id="backgroundcolor" onchange="backgroundcolor()">
                                    <option value="blue" class="option-blue"></option>
                                    <option value="yellow" class="option-yellow"></option>
                                    <option value="green" class="option-green"></option>
                                    <option value="white" class="option-white"></option>
                                </select>
                            </div>
                        </div>
                    </div>
                </section>

                <div id="editor" contenteditable="true" class="content-principal"  oninput="count()"></div><br>
                <br><br>

                <div id="info"></div>

                <script src="js/script.js" defer>

                </script>
            </body>
        </html>`



    newTab.document.write(htmlContent);
    newTab.document.close(); // Fecha o documento para garantir que o conteúdo seja renderizado
}

document.getElementById('file-input-btn').addEventListener('click', function(){
    document.getElementById('file-input').click()
})

function increaseFontSize(){
    const select = document.getElementById('fontsize');
    let value = select.value;

    if(value.endsWith("pt")){
        value = value.replace("pt", "");
    };

    let fontsize = parseInt(value);
    fontsize += 1;
  
    document.getElementById('editor').style.fontSize = fontsize + 'pt';

    select.value = fontsize.toString();
}

function decreaseFontSize(){
    const select = document.getElementById('fontsize');
    let value = select.value;

    if(value.endsWith("pt")){
        value = value.replace("pt", "");
    };

    let fontsize = parseInt(value);
    fontsize -= 1;

    document.getElementById('editor').style.fontSize = fontsize + 'pt';

    select.value = fontsize.toString();
}

const boldButton = document.querySelector('btn');
const texto = document.getElementById('editor');

function negrito(){
    const botao = document.querySelector('.btn-bold');
    botao.classList.toggle('selecionado');

    document.execCommand('bold');
}

function italico(){
    const botao = document.querySelector('.btn-italic');
    botao.classList.toggle('selecionado');

    document.execCommand('italic');
}

function sublinhado(){
    const botao = document.querySelector('.btn-sub');
    botao.classList.toggle('selecionado');

    document.execCommand('underline');
}

function riscado() {
    const editor = document.getElementById('editor');
    
    // Verifica se já tem o estilo 'line-through'
    if (editor.style.textDecoration === 'line-through') {
        // Se já tiver, remove o estilo
        editor.style.textDecoration = '';
    } else {
        // Caso contrário, adiciona o estilo
        editor.style.textDecoration = 'line-through';
    }
}

function fonte(){
    const select = document.getElementById('select');
    const value = select.value;

    document.execCommand('fontName', false, value)
    //(textarea) console.log('Fonte selecionada:', value);
    // editor.style.fontFamily = value;

}

function fonteTamanho() {
    const select = document.getElementById('fontsize');
    let value = select.value;
    console.log("value : " + value);

    // Verifica se o valor tem "pt" e remove, mantendo apenas o número
    if (value.endsWith("pt")) {
        value = value.replace("pt", "");
    }

    // Converte o valor para número inteiro
    let fontsize = parseInt(value);

    // Verifica se há texto selecionado
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        const selectedText = range.cloneContents();

        // Cria um elemento temporário para aplicar a formatação
        const span = document.createElement('span');
        span.style.fontSize = fontsize + 'pt';
        span.appendChild(selectedText);

        // Aplica a seleção modificada no documento
        range.deleteContents();
        range.insertNode(span);

        // Restaura a seleção após a modificação
        const newRange = document.createRange();
        newRange.selectNodeContents(span);
        selection.removeAllRanges();
        selection.addRange(newRange);
    }

    // Atualiza o valor do select para refletir o novo tamanho de fonte
    select.value = fontsize; // Agora o valor no select também inclui "pt"
    console.log("value atualizado : " + select.value);
}



// function fonteTamanho(){
//     const editor = document.getElementById('editor');
//     const select = document.getElementById('fontsize');
//     const value = select.value;

//     let fontsize = parseInt(value);

//     editor.style.fontSize = fontsize + 'px';
//     //document.execCommand('fontSize', false, value);
    
//     //(textarea) editor.style.fontSize = value;
//     select.value = fontsize.toString();

// }

function fontColor(){
    const select = document.getElementById('fontcolor');
    const barra = document.getElementById("color-display");
    
    const value = select.value;

    barra.style.backgroundColor = value;

    document.execCommand('forecolor', false, value);
    

    //(textarea) editor.style.color = value;
}

function alignText(alignment){
    document.execCommand('justify' + alignment, false, null)
}

function justify(){
    document.execCommand('justifyFull');
}

function backgroundcolor(){
    const select = document.getElementById('backgroundcolor');
    const barraBackground = document.getElementById('color-display-background');
    const value = select.value;

    barraBackground.style.backgroundColor = value;

    document.execCommand('backColor', false, value);

    // editor.style.backgroundColor = value;
}

function adicionarListaNaoOrdenada() {
    const editor = document.querySelector('#editor');
    let listaHTML = `<ul><li></li></ul>`;

    // Inserir a lista na posição do cursor
    document.execCommand('insertHTML', false, listaHTML);
}

function adicionarListaOrdenada(){
    const editor = document.querySelector('#editor');
    let listaHTML = `<ol><li></li></ol>`;

    // Verifica se o editor existe
    if (editor) {
        document.execCommand('insertHTML', false, listaHTML);
    }
}

// Aumenta o recuo do texto
function aumentarRecuo() {
    const editor = document.querySelector('editor');
    document.execCommand('indent');
}
  
  // Diminui o recuo do texto
  function diminuirRecuo() {
    const editor = document.querySelector('editor');
    document.execCommand('outdent');
  }

// function count() {
//     const editor = document.getElementById('editor');

//     function updateCount() {
//         // Divide o conteúdo da div em linhas e filtra linhas vazias no final
//         const linesArray = editor.innerText.split('\n').filter((line, index, arr) => 
//             line !== "" || index < arr.length - 1
//         );
//         const lines = linesArray.length;
//         const columns = (linesArray[linesArray.length - 1]?.length || 0) + 1;

//         document.getElementById('info').textContent = `linhas: ${lines} | colunas: ${columns}`;
//     }

//     // Atualiza a contagem para qualquer mudança no conteúdo
//     editor.addEventListener('input', updateCount);
// }

function count() {
    const editor = document.getElementById('editor');

    function updateCount() {
        // Dividimos o conteúdo da div com base nos elementos <div> para contar as linhas corretamente
        const linesArray = editor.innerHTML.split('<div>');

        // Remove qualquer marcação de fechamento de div ou tags vazias
        const cleanedLinesArray = linesArray.map(line => line.replace(/<\/?div>/g, '').trim());

        // Conta o número de linhas
        const lines = cleanedLinesArray.length;

        const texto = document.getElementById('editor').textContent;

        let columns;

        if(texto == ''){
            columns = 1;
        } else {
            // Calcula o número de colunas na última linha (a última string do array)
            columns = (cleanedLinesArray[cleanedLinesArray.length - 1]?.length || 0) + 1;
        }

        // Atualiza a exibição das informações
        document.getElementById('info').textContent = `linhas: ${lines} | colunas: ${columns}`;
    }

    // Atualiza a contagem para qualquer mudança no conteúdo
    editor.addEventListener('input', updateCount);
}

count()

const editor = document.getElementById('editor');
const fileInput = document.getElementById('file-input');
const btnSave = document.getElementById('save');

fileInput.addEventListener("change", ()=>{
    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = () => {
        editor.value = reader.result;
    };

    reader.readAsText(file);
})

btnSave.addEventListener('click', () =>{
    const text = editor.innerText;
    //(textarea) const text = editor.value;
    const blob = new Blob([text], {type : "text/plain"})
    const link = document.createElement("a");

    link.download = "arquivo_texto.txt";
    link.href = URL.createObjectURL(blob);
    link.click();

    console.log('funfsave');
})

async function salvarComo() {
    console.log("Função salvarComo() foi chamada.");
    const editor = document.getElementById("editor");
    const conteudo = editor.innerText;
    //(textarea) const conteudo = editor.value;
    console.log("Conteúdo do textarea:", conteudo); // Verifica o conteúdo

    try {
        const fileHandle = await window.showSaveFilePicker({
            suggestedName: 'documento.txt',
            types: [{
                description: 'Text file',
                accept: { 'text/plain': ['.txt'] }
            }]
        });
        console.log("File handle obtido:", fileHandle); // Verifica o file handle

        const writableStream = await fileHandle.createWritable();
        await writableStream.write(conteudo);
        await writableStream.close();
        console.log("Arquivo salvo com sucesso!");

        alert('Arquivo salvo com sucesso!');
    } catch (error) {
        console.error('Erro ao salvar o arquivo:', error);
        alert('O salvamento foi cancelado ou ocorreu um erro.');
    }
}
