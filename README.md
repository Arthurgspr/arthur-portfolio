# Arthur Gaspar — Portfólio

Portfólio profissional de **Arthur Gaspar de Souza**, estudante de Sistemas de
Informação e desenvolvedor em início de carreira, com foco em Análise de
Dados, Análise de Sistemas, Desenvolvimento de Software e Cybersecurity.

Construído com Next.js (App Router), TypeScript, Tailwind CSS e Framer Motion.

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

- [Next.js 14](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)

---

## Como instalar

Pré-requisito: [Node.js](https://nodejs.org/) 18 ou superior.

```bash
npm install
```

## Como executar localmente

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

Outros comandos úteis:

```bash
npm run build   # gera a build de produção
npm run start   # executa a build de produção localmente
npm run lint    # roda o linter
```

---

## Estrutura do projeto

```
arthur-portfolio/
├── app/
│   ├── api/contact/route.ts   # API Route do formulário de contato
│   ├── globals.css            # estilos globais e tokens de design
│   ├── layout.tsx             # layout raiz, fontes e metadata (SEO)
│   ├── page.tsx                # composição das seções da home
│   ├── robots.ts               # gera /robots.txt automaticamente
│   └── sitemap.ts              # gera /sitemap.xml automaticamente
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── Education.tsx
│   ├── Certificates.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── SectionHeading.tsx     # título + descrição reutilizável
│   └── TypingRotator.tsx      # efeito de digitação do Hero
├── data/
│   └── portfolio.ts            # ⭐ ARQUIVO CENTRAL DE CONTEÚDO
├── lib/
│   └── utils.ts
├── types/
│   └── index.ts
├── public/
│   ├── favicon.svg
│   └── images/
│       ├── arthur-profile.webp   # (adicionar — ver instruções abaixo)
│       └── projects/             # (adicionar — ver instruções abaixo)
├── .env.example
└── package.json
```

---

## Como personalizar o conteúdo

Praticamente **todo o conteúdo textual do site** vem de um único arquivo:

```
data/portfolio.ts
```

Lá estão organizados: dados pessoais, redes sociais, textos da seção
"Sobre", skills, idiomas, experiência profissional, projetos, formação,
bootcamps, certificados e textos da seção de contato.

Você normalmente **não precisa editar nenhum componente** em `/components`
para atualizar textos, adicionar um projeto novo ou mudar uma skill —
basta editar `data/portfolio.ts`.

Todo dado de exemplo (ainda não confirmado) está sinalizado no código com
o comentário `// MOCK DATA` ou `// MOCK LINK`, para deixar claro o que
precisa ser revisado antes de publicar.

---

## Como trocar as imagens

Veja o guia detalhado em `public/images/README-IMAGENS.txt`. Resumo:

| Imagem | Caminho |
|---|---|
| Foto de perfil | `/public/images/arthur-profile.webp` |
| Screenshots dos projetos | `/public/images/projects/project-01.webp` (e 02, 03, 04) |
| Open Graph (compartilhamento) | `/public/og-image.png` |

Basta colocar o arquivo com o nome exato na pasta indicada — nenhum
código precisa ser alterado.

---

## Como adicionar o currículo

1. Nomeie o arquivo PDF como `Arthur-Gaspar-CV.pdf`.
2. Coloque-o na pasta `/public`.
3. O botão "Baixar currículo" do Hero já aponta para esse caminho
   (`resumeUrl` em `data/portfolio.ts`).

Se preferir outro nome de arquivo, basta atualizar o valor de
`resumeUrl` em `data/portfolio.ts`.

---

## Como alterar os projetos

Edite o array `projects` em `data/portfolio.ts`. Cada projeto segue este
formato:

```ts
{
  slug: "nome-do-projeto",
  title: "Título do Projeto",
  description: "Descrição curta e objetiva do que o projeto faz.",
  technologies: ["Next.js", "TypeScript"],
  category: "Systems", // "Data Analytics" | "Systems" | "Cybersecurity" | "Academic"
  image: "/images/projects/project-01.webp",
  liveUrl: "https://link-do-projeto.com", // ou "#" se ainda não existir
  githubUrl: "https://github.com/usuario/repo", // ou "#" se ainda não existir
  featured: true, // opcional — apenas o primeiro projeto marcado como featured recebe destaque
  isMock: true, // remova esta linha quando o projeto for real
}
```

O **primeiro item do array** sempre recebe o card maior e em destaque na
seção de Projetos.

---

## Como adicionar GitHub e LinkedIn

Edite o objeto `social` em `data/portfolio.ts`:

```ts
export const social: SocialLinks = {
  github: "https://github.com/seu-usuario-real",
  linkedin: "https://linkedin.com/in/seu-usuario-real",
  email: "arthurgaspardesouza@gmail.com",
  whatsapp: "https://wa.me/5522997673405",
};
```

Esses links são usados no rodapé e na seção de contato.

---

## Formulário de contato

O formulário em `components/Contact.tsx` já funciona "fora da caixa" com
uma API Route local (`app/api/contact/route.ts`) que valida os dados e
registra a mensagem no log do servidor — mas **não envia e-mail** até que
você conecte um provedor. Escolha uma das opções:

### Opção 1 — Formspree (mais simples)

1. Crie uma conta em [formspree.io](https://formspree.io) e um novo formulário.
2. Copie o endpoint fornecido (algo como `https://formspree.io/f/xxxxxxx`).
3. Adicione no seu `.env` (crie a partir do `.env.example`):
   ```
   NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxxxx
   ```
4. Pronto — o formulário passa a enviar direto para o Formspree
   automaticamente, sem precisar tocar em código.

### Opção 2 — Resend (envio de e-mail via API)

1. Instale a dependência: `npm install resend`
2. Crie uma API key em [resend.com](https://resend.com).
3. Adicione `RESEND_API_KEY` no seu `.env`.
4. Em `app/api/contact/route.ts`, descomente o bloco de exemplo com
   `Resend` e ajuste o e-mail de destino.

### Opção 3 — API Route própria

A rota `app/api/contact/route.ts` já está pronta para ser expandida com
qualquer outro provedor de e-mail ou banco de dados de sua preferência.

---

## Google Analytics

1. Crie uma propriedade no [Google Analytics](https://analytics.google.com/).
2. Copie o ID de medição (formato `G-XXXXXXXXXX`).
3. Adicione no seu `.env`:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

Se essa variável não for definida, o Analytics simplesmente não é
carregado — nenhum código extra é necessário.

---

## Como publicar (deploy na Vercel)

1. **Instale as dependências e teste localmente:**
   ```bash
   npm install
   npm run dev
   ```

2. **Crie um repositório no GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Portfólio inicial"
   git branch -M main
   git remote add origin https://github.com/Arthurgspr/arthur-portfolio.git
   git push -u origin main
   ```

3. **Conecte com a Vercel:**
   - Acesse [vercel.com](https://vercel.com) e faça login com sua conta GitHub.
   - Clique em "Add New" → "Project".
   - Selecione o repositório recém-criado.

4. **Faça o deploy:**
   - A Vercel detecta automaticamente que é um projeto Next.js.
   - Clique em "Deploy" e aguarde a build finalizar.

5. **Adicione um domínio personalizado (opcional):**
   - No painel do projeto na Vercel, vá em "Settings" → "Domains".
   - Adicione seu domínio e siga as instruções de configuração de DNS.

6. **Configure as variáveis de ambiente:**
   - No painel do projeto, vá em "Settings" → "Environment Variables".
   - Adicione `NEXT_PUBLIC_GA_ID` e/ou `NEXT_PUBLIC_FORMSPREE_ENDPOINT`
     conforme necessário (veja `.env.example`).
   - Refaça o deploy após adicionar variáveis novas.

7. **Atualize o conteúdo depois de publicado:**
   - Edite `data/portfolio.ts` (ou qualquer outro arquivo), faça commit
     e push — a Vercel gera um novo deploy automaticamente a cada push
     na branch principal.

---

## Domínio personalizado

Depois de conectar o domínio na Vercel (passo 5 acima), atualize também
a constante `siteUrl` em `app/layout.tsx`, `app/robots.ts` e
`app/sitemap.ts` para refletir o domínio real — isso garante que o SEO
(Open Graph, sitemap, robots.txt) aponte para as URLs corretas.

---

## Dados mockados — o que revisar antes de publicar

Antes de considerar o site pronto para uso profissional, revise todo
item sinalizado com `// MOCK DATA` ou `// MOCK LINK` no código,
principalmente em `data/portfolio.ts`:

- [ ] URL real do GitHub (`social.github`)
- [ ] URL real do LinkedIn (`social.linkedin`)
- [ ] Foto de perfil (`/public/images/arthur-profile.webp`)
- [ ] Currículo em PDF (`/public/Arthur-Gaspar-CV.pdf`)
- [ ] Imagem de Open Graph (`/public/og-image.png`)
- [ ] Domínio real (`siteUrl` em `layout.tsx`, `robots.ts`, `sitemap.ts`)
- [ ] Projetos reais (substituir os 4 projetos de exemplo)
- [ ] Nível real de inglês (`languages`)
- [ ] Bootcamp (substituir dados de exemplo, se aplicável)
- [ ] Certificados (substituir ou remover os exemplos, se aplicável)

Nenhum desses itens impede o site de funcionar — eles existem para que
o projeto já nasça completo e visualmente pronto, com dados de exemplo
claramente sinalizados no código-fonte.
#   a r t h u r - p o r t f o l i o 
 
 