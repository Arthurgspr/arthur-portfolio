COMO SUBSTITUIR AS IMAGENS DO SITE
--------------------------------------------------------------

1) FOTO DE PERFIL
   Caminho esperado: /public/images/arthur-profile.webp
   - Formato recomendado: WebP, proporção retrato (ex.: 800x1000px)
   - Foto profissional, bem iluminada, fundo neutro ou levemente desfocado
   - Após adicionar o arquivo, nenhum código precisa ser alterado

2) SCREENSHOTS DOS PROJETOS
   Caminho esperado:
     /public/images/projects/project-01.webp
     /public/images/projects/project-02.webp
     /public/images/projects/project-03.webp
     /public/images/projects/project-04.webp
   - Formato recomendado: WebP, proporção 16:10 (ex.: 1200x750px)
   - Para adicionar mais projetos, edite o array "projects" em
     /data/portfolio.ts e aponte para novos arquivos de imagem

3) CURRÍCULO (PDF)
   Caminho esperado: /public/Arthur-Gaspar-CV.pdf
   - Basta colocar o arquivo PDF nessa pasta com esse nome exato,
     ou atualizar "resumeUrl" em /data/portfolio.ts com outro caminho

4) IMAGEM DE OPEN GRAPH (compartilhamento em redes sociais)
   Caminho esperado: /public/og-image.png
   - Tamanho recomendado: 1200x630px
   - Usada quando o link do site é compartilhado no WhatsApp,
     LinkedIn, Twitter/X, etc.

5) FAVICON
   Já incluído em /public/favicon.svg com as iniciais "AG".
   Para usar um ícone customizado, substitua esse arquivo (mantendo
   o nome) ou adicione um favicon.ico na mesma pasta.

Nenhuma dessas imagens está incluída neste pacote — os componentes
usam os caminhos acima como referência (placeholders), então o site
funciona normalmente mesmo sem elas, exibindo apenas espaços vazios
até que os arquivos reais sejam adicionados.
