import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { personal, ogImage } from "@/data/portfolio";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
  display: "swap",
});

const siteUrl = "https://arthurgaspar.dev"; // MOCK — substituir pelo domínio real ao publicar

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Arthur Gaspar de Souza | Software, Data & Systems",
    template: "%s | Arthur Gaspar de Souza",
  },
  description:
    "Arthur Gaspar de Souza — estudante de Sistemas de Informação e desenvolvedor em início de carreira, com foco em Análise de Dados, Análise de Sistemas, Desenvolvimento de Software e Cybersecurity.",
  keywords: [
    "Arthur Gaspar de Souza",
    "Arthur Gaspar de Souza",
    "Sistemas de Informação",
    "Analista de Dados",
    "Analista de Sistemas",
    "Desenvolvedor",
    "Software Developer",
    "Cybersecurity",
    "Portfólio de tecnologia",
  ],
  authors: [{ name: personal.fullName }],
  creator: personal.fullName,
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    title: "Arthur Gaspar de Souza | Software, Data & Systems",
    description:
      "Estudante de Sistemas de Informação explorando desenvolvimento de software, dados, cybersecurity e IA. Confira projetos, skills e formação.",
    siteName: "Arthur Gaspar de Souza",
    images: [
      {
        url: ogImage, // MOCK — substituir por /public/og-image.png real (1200x630)
        width: 1200,
        height: 630,
        alt: "Arthur Gaspar de Souza — Software, Data & Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arthur Gaspar de Souza | Software, Data & Systems",
    description:
      "Estudante de Sistemas de Informação explorando desenvolvimento de software, dados, cybersecurity e IA.",
    images: [ogImage],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

const gaId = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-body antialiased">
        {children}

        {/* Google Analytics — só carrega se NEXT_PUBLIC_GA_ID estiver definido no .env */}
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
