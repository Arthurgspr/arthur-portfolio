# Arthur Gaspar — Portfólio

Portfólio profissional de **Arthur Gaspar de Souza**, estudante de Sistemas de Informação e desenvolvedor em início de carreira, com foco em **Análise de Dados, Análise de Sistemas, Desenvolvimento de Software e Segurança Cibernética**.

Construído com **Next.js (App Router), TypeScript, Tailwind CSS e Framer Motion**.

---

## Sumário

1. [Tecnologias](#tecnologias)
2. [Como instalar](#como-instalar)
3. [Como executar localmente](#como-executar-localmente)
4. [Estrutura do projeto](#estrutura-do-projeto)
5. [Como personalizar o conteúdo](#como-personalizar-o-conteúdo)
6. [Como trocar as imagens](#como-trocar-as-imagens)
7. [Como adicionar o currículo](#como-adicionar-o-currículo)
8. [Como alterar os projetos](#como-alterar-os-projetos)
9. [Como adicionar GitHub e LinkedIn](#como-adicionar-github-e-linkedin)
10. [Formulário de contato](#formulário-de-contato)
11. [Google Analytics](#google-analytics)
12. [Como publicar (deploy na Vercel)](#como-publicar-deploy-na-vercel)
13. [Domínio personalizado](#domínio-personalizado)
14. [Dados mockados — o que revisar antes de publicar](#dados-mockados--o-que-revisar-antes-de-publicar)

---

## Tecnologias

- [Next.js 14](https://nextjs.org/) — App Router
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)

---

## Como instalar

### Pré-requisito

É necessário ter o [Node.js](https://nodejs.org/) 18 ou superior instalado.

Instale as dependências do projeto:

```bash
npm install
```

---

## Como executar localmente

Execute o projeto em modo de desenvolvimento:

```bash
npm run dev
```

Depois, acesse no navegador:

http://localhost:3000

### Outros comandos úteis

```bash
# Gera a build de produção
npm run build

# Executa a build de produção localmente
npm run start

# Executa o linter
npm run lint
```

---

## Estrutura do projeto

```text
arthur-portfolio/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts       # API Route do formulário de contato
│   ├── globals.css             # Estilos globais e tokens de design
│   ├── layout.tsx              # Layout raiz, fontes e metadados (SEO)
│   ├── page.tsx                # Composição da página inicial
│   ├── robots.ts               # Gera /robots.txt automaticamente
│   └── sitemap.ts              # Gera /sitemap.xml automaticamente
│
├── componentes/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Experience.tsx
│   ├── Projetos.tsx
│   ├── Educação.tsx
│   ├── Certificados.tsx
│   ├── Contato.tsx
│   ├── Footer.tsx
│   ├── SectionHeading.tsx       # Título + descrição reutilizável
│   └── TypingRotator.tsx        # Efeito de digitação do Hero
│
├── data/
│   └── portfolio.ts             # ⭐ ARQUIVO CENTRAL DE CONTEÚDO
│
├── lib/
│   └── utils.ts
│
├── types/
│   └── index.ts
│
├── public/
│   ├── favicon.svg
│   ├── og-image.png
│   └── images/
│       ├── arthur-profile.webp
│       └── projects/
│           ├── project-01.webp
│           ├── project-02.webp
│           ├── project-03.webp
│           └── project-04.webp
│
├── .env.example
├── package.json
└── README.md
```

> **Observação:** ajuste os nomes das pastas e arquivos acima caso eles sejam diferentes na estrutura real do seu projeto.

---

## Como personalizar o conteúdo

Praticamente **todo o conteúdo textual do site** vem de um único arquivo:

```text
data/portfolio.ts
```

Nesse arquivo estão organizados:

- Dados pessoais
- Redes sociais
- Textos da seção "Sobre"
- Habilidades
- Idiomas
- Experiência profissional
- Projetos
- Formação acadêmica
- Bootcamps
- Certificados
- Textos da seção de contato

Você normalmente **não precisa editar os componentes** em `/componentes` para:

- Atualizar textos
- Adicionar um novo projeto
- Alterar uma habilidade
- Alterar informações pessoais
- Atualizar suas redes sociais

Basta editar:

```text
data/portfolio.ts
```

### Dados de exemplo

Todo dado de exemplo ainda não confirmado deve estar sinalizado no código com:

```ts
// MOCK DATA
```

ou:

```ts
// MOCK LINK
```

Essas marcações indicam informações que precisam ser revisadas antes da publicação definitiva do site.

---

## Como trocar as imagens

Veja o guia detalhado em:

```text
public/images/README-IMAGENS.txt
```

### Resumo

| Imagem | Caminho |
|---|---|
| Foto do perfil | `/public/images/arthur-profile.webp` |
| Projeto 01 | `/public/images/projects/project-01.webp` |
| Projeto 02 | `/public/images/projects/project-02.webp` |
| Projeto 03 | `/public/images/projects/project-03.webp` |
| Projeto 04 | `/public/images/projects/project-04.webp` |
| Imagem Open Graph | `/public/og-image.png` |

Basta colocar o arquivo com o nome exato na pasta indicada.

**Nenhuma alteração no código é necessária**, desde que os nomes e caminhos sejam mantidos.

---

## Como adicionar o currículo

1. Nomeie o arquivo PDF como:

```text
Arthur-Gaspar-CV.pdf
```

2. Coloque o arquivo dentro da pasta:

```text
/public
```

3. O botão **"Baixar currículo"** do Hero já aponta para esse caminho através da propriedade `resumeUrl` em:

```text
data/portfolio.ts
```

Se preferir utilizar outro nome de arquivo, basta atualizar o valor de `resumeUrl` em `data/portfolio.ts`.

---

## Como alterar os projetos

Edite o array `projects` em:

```text
data/portfolio.ts
```

Cada projeto segue uma estrutura semelhante a:

```ts
{
  slug: "nome-do-projeto",
  titulo: "Título do Projeto",
  descricao: "Descrição curta e objetiva do que o projeto faz.",
  tecnologias: ["Next.js", "TypeScript"],
  categoria: "Sistemas",
  imagem: "/images/projects/project-01.webp",
  liveUrl: "https://link-do-projeto.com",
  githubUrl: "https://github.com/usuario/repo",
  feature: true,
  isMock: true,
}
```

### Categorias disponíveis

Exemplos:

```text
Data Analytics
Sistemas
Cibersegurança
Acadêmica
```

### Campos importantes

- `slug` — identificador do projeto
- `titulo` — nome exibido no site
- `descricao` — descrição do projeto
- `tecnologias` — tecnologias utilizadas
- `categoria` — categoria do projeto
- `imagem` — caminho da imagem
- `liveUrl` — endereço da versão publicada
- `githubUrl` — endereço do repositório
- `feature` — define se o projeto pode receber destaque
- `isMock` — indica que o projeto ainda é um exemplo

> O **primeiro item do array** recebe o card maior e em destaque na seção de Projetos.

---

## Como adicionar GitHub e LinkedIn

Edite o objeto `social` em:

```text
data/portfolio.ts
```

Exemplo:

```ts
export const social: SocialLinks = {
  github: "https://github.com/seu-usuario-real",
  linkedin: "https://linkedin.com/in/seu-usuario-real",
  email: "seu-email@gmail.com",
  whatsapp: "https://wa.me/SEUNUMERO",
};
```

Esses links são utilizados no rodapé e na seção de contato.

> Substitua os valores de exemplo pelas suas informações reais antes de publicar.

---

## Formulário de contato

O formulário localizado em:

```text
componentes/Contact.tsx
```

utiliza uma API Route localizada em:

```text
app/api/contact/route.ts
```

A API atualmente:

- Valida os dados enviados;
- Recebe as mensagens;
- Registra as informações no log do servidor.

Por padrão, **ela não envia e-mails automaticamente**.

Para enviar mensagens por e-mail, você pode utilizar uma das opções abaixo.

### Opção 1 — Formspree

O [Formspree](https://formspree.io/) é uma opção simples para configurar o envio de formulários.

1. Crie uma conta no Formspree.
2. Crie um novo formulário.
3. Copie o endpoint fornecido.
4. Adicione o endpoint ao arquivo `.env`.

Exemplo:

```env
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxxxx
```

5. Reinicie o servidor de desenvolvimento.

---

### Opção 2 — Resend

O [Resend](https://resend.com/) permite realizar o envio de e-mails através de uma API.

Instale a dependência:

```bash
npm install resend
```

Depois:

1. Crie uma chave de API no Resend.
2. Adicione `RESEND_API_KEY` ao seu `.env`.
3. Configure o envio dentro de:

```text
app/api/contact/route.ts
```

---

### Opção 3 — API Route própria

A rota:

```text
app/api/contact/route.ts
```

também pode ser expandida para utilizar:

- Outro provedor de e-mail;
- Banco de dados;
- Sistema próprio de notificações;
- Serviço externo de gerenciamento de contatos.

---

## Google Analytics

Para adicionar o Google Analytics:

1. Crie uma propriedade no [Google Analytics](https://analytics.google.com/).
2. Copie o ID de medição no formato:

```text
G-XXXXXXXXXX
```

3. Adicione o ID ao arquivo `.env`:

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

Se essa variável não estiver definida, o Google Analytics simplesmente não será carregado.

---

## Como publicar (deploy na Vercel)

### 1. Instale as dependências e teste localmente

```bash
npm install
npm run dev
```

Certifique-se de que o projeto está funcionando corretamente antes de publicar.

---

### 2. Crie um repositório no GitHub

Inicialize o Git:

```bash
git init
```

Adicione os arquivos:

```bash
git add .
```

Crie o primeiro commit:

```bash
git commit -m "Portfólio inicial"
```

Defina a branch principal:

```bash
git branch -M main
```

Adicione o repositório remoto:

```bash
git remote add origin https://github.com/Arthurgspr/arthur-portfolio.git
```

Envie o projeto:

```bash
git push -u origin main
```

---

### 3. Conecte o projeto à Vercel

Acesse [Vercel](https://vercel.com/) e faça login utilizando sua conta do GitHub.

Depois:

1. Clique em **"Adicionar Novo"**.
2. Selecione **"Projeto"**.
3. Escolha o repositório do portfólio.

---

### 4. Faça o deploy

A Vercel deve detectar automaticamente que o projeto utiliza Next.js.

Clique em:

**Deploy**

Aguarde a conclusão do processo de build.

---

### 5. Adicione um domínio personalizado

Caso possua um domínio próprio:

1. Acesse o projeto na Vercel.
2. Entre em **Configurações**.
3. Acesse **Domínios**.
4. Adicione seu domínio.
5. Configure os registros DNS conforme as instruções apresentadas pela Vercel.

---

### 6. Configure as variáveis de ambiente

No painel do projeto:

**Configurações → Variáveis de Ambiente**

Adicione as variáveis necessárias, por exemplo:

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxxxx
```

Consulte também o arquivo:

```text
.env.example
```

Após adicionar novas variáveis, faça um novo deploy.

---

### 7. Atualize o conteúdo depois de publicado

Depois que o projeto estiver publicado, basta:

1. Editar `data/portfolio.ts`;
2. Fazer um commit;
3. Executar `git push`.

A Vercel poderá gerar automaticamente um novo deploy a cada atualização enviada para a branch principal.

---

## Domínio personalizado

Depois de conectar seu domínio à Vercel, atualize também a constante:

```ts
siteUrl
```

nos seguintes arquivos:

```text
app/layout.tsx
app/robots.ts
app/sitemap.ts
```

Isso garante que os recursos de SEO, como:

- Open Graph;
- Sitemap;
- Robots.txt;
- URLs canônicas;

apontem para o domínio correto.

---

## Dados mockados — o que revisar antes de publicar

Antes de considerar o site pronto para uso profissional, revise todos os itens marcados com:

```ts
// MOCK DATA
```

ou:

```ts
// MOCK LINK
```

Principalmente em:

```text
data/portfolio.ts
```

### Checklist

- [ ] URL real do GitHub (`social.github`)
- [ ] URL real do LinkedIn (`social.linkedin`)
- [ ] Foto de perfil (`/public/images/arthur-profile.webp`)
- [ ] Currículo em PDF (`/public/Arthur-Gaspar-CV.pdf`)
- [ ] Imagem Open Graph (`/public/og-image.png`)
- [ ] Domínio real (`siteUrl` em `layout.tsx`, `robots.ts` e `sitemap.ts`)
- [ ] Projetos reais
- [ ] Remover ou substituir os projetos de exemplo
- [ ] Nível real de inglês (`linguagens`)
- [ ] Informações reais dos bootcamps
- [ ] Certificados reais
- [ ] Informações de contato
- [ ] Links das redes sociais
- [ ] Variáveis de ambiente de produção

Nenhum desses itens impede o funcionamento básico do site. Eles existem para que o projeto já tenha uma estrutura completa e visualmente pronta, enquanto os dados de exemplo ainda estão sendo substituídos.

---

## Licença

Este projeto foi desenvolvido como portfólio profissional pessoal de **Arthur Gaspar de Souza**.

---

**Arthur Gaspar — Portfólio Profissional**
