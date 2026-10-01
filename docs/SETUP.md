# 🚀 Setup Guia de Instalação

## Pré-requisitos

- Node.js 20+
- npm ou yarn
- PostgreSQL (para produção)

## Frontend Setup

### 1. Instalar dependências
```bash
cd frontend
npm install
```

### 2. Desenvolvimento local
```bash
npm run dev
```
Acesse: http://localhost:3000

### 3. Build para produção
```bash
npm run build
```

## Backend Setup

### 1. Instalar dependências
```bash
cd backend
npm install
```

### 2. Configurar variáveis de ambiente
```bash
cp .env.example .env
# Edite o arquivo .env com suas configurações
```

### 3. Desenvolvimento local
```bash
npm run dev
```
O servidor iniciará em: http://localhost:3001

### 4. Build para produção
```bash
npm run build
npm start
```

## GitHub Pages Deployment

O frontend é automaticamente deployado para GitHub Pages quando você faz push na branch `main`.

**URL:** https://CarlosHilario06.github.io/AgendamentoBarbearia/

### Configuração manual (se necessário):

1. Vá em Settings → Pages
2. Source: Deploy from a branch
3. Branch: gh-pages
4. Save

## Estrutura de Pastas

```
barber-schedule-system/
├── frontend/              # Next.js frontend
│   ├── app/             # Páginas (App Router)
│   ├── styles/          # Estilos CSS
│   ├── public/          # Assets estáticos
│   ├── package.json
│   └── next.config.js
├── backend/              # Express API
│   ├── src/
│   │   ├── routes/      # Rotas da API
│   │   ├── controllers/ # Lógica de controle
│   │   ├── models/      # Modelos de dados
│   │   ├── services/    # Serviços/lógica
│   │   ├── middleware/  # Middlewares
│   │   └── index.ts     # Entry point
│   ├── package.json
│   └── tsconfig.json
├── docs/                 # Documentação
├── .github/workflows/    # CI/CD workflows
└── README.md
```

## Variáveis de Ambiente Necessárias

### Backend (.env)
```
PORT=3001
NODE_ENV=development
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=password
DB_NAME=barber_schedule
JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=7d
CORS_ORIGIN=http://localhost:3000
```

## Próximos Passos

- [ ] Conectar ao banco de dados
- [ ] Implementar autenticação
- [ ] Criar endpoints da API
- [ ] Integrar frontend com backend
- [ ] Testes
- [ ] Deploy em produção
