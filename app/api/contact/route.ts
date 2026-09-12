import { NextRequest, NextResponse } from "next/server";

/**
 * API Route para o formulário de contato.
 * --------------------------------------------------------------
 * Por padrão, esta rota apenas valida os dados e retorna sucesso —
 * não há backend de envio de e-mail configurado ainda.
 *
 * Para conectar a um provedor real, escolha uma das opções abaixo
 * (veja o README, seção "Formulário de contato", para o passo a passo
 * completo):
 *
 * 1) Formspree (mais simples, sem código extra):
 *    - Crie um formulário em https://formspree.io
 *    - Defina NEXT_PUBLIC_FORMSPREE_ENDPOINT no .env
 *    - O componente Contact.tsx já envia direto para o Formspree
 *      quando essa variável existe, sem precisar desta rota.
 *
 * 2) Resend (envio de e-mail via API, mais controle):
 *    - Instale: npm install resend
 *    - Crie uma API key em https://resend.com
 *    - Descomente o bloco de exemplo abaixo e adicione RESEND_API_KEY
 *      no seu .env.
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, message } = body ?? {};

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Nome, e-mail e mensagem são obrigatórios." },
        { status: 400 }
      );
    }

    // Exemplo de integração com Resend (descomente e configure para usar):
    //
    // import { Resend } from "resend";
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "Portfólio <contato@arthurgaspar.dev>",
    //   to: "arthurgaspardesouza@gmail.com",
    //   subject: `Novo contato de ${name}${company ? ` (${company})` : ""}`,
    //   text: `${message}\n\nResponder para: ${email}`,
    // });

    console.log("Novo contato recebido via formulário:", {
      name,
      email,
      company,
      message,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: "Não foi possível processar a mensagem." },
      { status: 500 }
    );
  }
}
