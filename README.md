# Portfolio — Leonardo Vinicius

Portfolio pessoal desenvolvido com Next.js, TypeScript e Tailwind CSS.

## Stack

- **Framework:** Next.js 16 (App Router)
- **Linguagem:** TypeScript
- **Estilo:** Tailwind CSS
- **Animações:** Framer Motion
- **Fonte:** Inter (Google Fonts)
- **Deploy:** Vercel

## Estrutura de Seções

| # | Seção | Descrição |
|---|-------|-----------|
| — | Hero | Apresentação, CTAs e download do currículo |
| 01 | Sobre | Bio, foto e dados pessoais |
| 02 | Habilidades | Stack técnica por categoria |
| 03 | Projetos | Projetos selecionados com links |
| 04 | Experiência | Trajetória profissional e educação |
| 05 | Serviços | O que ofereço como freelancer |
| 06 | Comunidade | Devs Tocantins |
| 07 | Depoimentos | Carrossel com recomendações do LinkedIn |
| 08 | Contato | Email, WhatsApp, LinkedIn e GitHub |

## Estrutura de Arquivos

```
src/
├── app/
│   ├── layout.tsx        # Metadados, fonte, favicon
│   ├── page.tsx          # Montagem das seções
│   ├── globals.css       # Estilos globais e scrollbar
│   └── favicon.svg       # Logo LS personalizado
├── components/
│   ├── sections/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   ├── Services.tsx
│   │   ├── Community.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   └── ui/
│       └── Logo.tsx      # SVG do logo LS
public/
├── foto-leonardo.jpeg
└── Curriculo_Leonardo_Vinicius.pdf
```

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Atualizando conteúdo

| O que mudar | Onde |
|-------------|------|
| Bio e dados pessoais | `src/components/sections/About.tsx` |
| Stack e estatísticas | `src/components/sections/Skills.tsx` |
| Projetos | `src/components/sections/Projects.tsx` |
| Experiência e educação | `src/components/sections/Experience.tsx` |
| Serviços | `src/components/sections/Services.tsx` |
| Links da Devs Tocantins | `src/components/sections/Community.tsx` |
| Depoimentos | `src/components/sections/Testimonials.tsx` |
| Email, WhatsApp, redes | `src/components/sections/Contact.tsx` |
| Currículo | Substitua `public/Curriculo_Leonardo_Vinicius.pdf` |
| Foto | Substitua `public/foto-leonardo.jpeg` |
| Favicon / Logo | `src/app/favicon.svg` e `src/components/ui/Logo.tsx` |
| Título e metadados | `src/app/layout.tsx` |

## Deploy na Vercel

> **Atenção:** O projeto está na **raiz** do repositório.
> Se o projeto foi importado quando havia uma subpasta `portfolio/`,
> é necessário corrigir o Root Directory nas configurações.

**Como corrigir:**
1. Acesse [vercel.com](https://vercel.com) → seu projeto → **Settings**
2. Vá em **General** → **Root Directory**
3. **Apague** o valor `portfolio` e deixe o campo **vazio**
4. Clique em **Save** e faça um novo deploy

Após isso o build funcionará normalmente — o `next build` local passa sem erros.
