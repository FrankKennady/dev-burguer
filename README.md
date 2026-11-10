# 🍔 DevBurguer

Aplicação completa de uma hamburgueria: o cliente navega pelo cardápio, monta o carrinho e paga com cartão (Stripe). O administrador gerencia pedidos e produtos em um painel próprio.

Projeto desenvolvido durante os estudos na **DevClub**.

## ✨ Funcionalidades

**Cliente**
- Cadastro e login com autenticação JWT
- Home com carrossel de categorias e ofertas do dia
- Cardápio com filtro por categoria
- Carrinho com controle de quantidade, salvo no navegador
- Pagamento com cartão pelo Stripe (modo de teste)

**Administrador**
- Lista de pedidos com filtro por status, ordenação e detalhes de cada pedido
- Atualização do status do pedido
- Cadastro e edição de produtos com upload de imagem

**Layout responsivo** para computador, tablet e celular.

## 🛠️ Tecnologias

| Frontend (`devburguer-interface`) | Backend (`dev-burguer-api`) |
| --- | --- |
| React 19 + Vite | Node.js + Express 5 |
| styled-components | PostgreSQL + Sequelize |
| React Router | JWT + bcrypt |
| React Hook Form + Yup | Multer (upload de imagens) |
| Axios | Stripe |
| React Toastify | Yup |
| Stripe Elements | |

## 📁 Estrutura

```
dev-burguer/
├── devburguer-interface/   # Frontend (React)
└── dev-burguer-api/        # Backend (API REST)
```

## 🚀 Como rodar o projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) 20 ou superior
- [PostgreSQL](https://www.postgresql.org/) rodando na porta `5432`
- Uma conta no [Stripe](https://dashboard.stripe.com/register) (gratuita, para as chaves de teste)

### 1. Clonar o repositório

```bash
git clone https://github.com/FrankKennady/dev-burguer.git
cd dev-burguer
```

### 2. Configurar e iniciar a API

```bash
cd dev-burguer-api
npm install
```

Crie o arquivo `.env` a partir do modelo:

```bash
cp .env.example .env
```

Preencha as variáveis:

| Variável | O que colocar |
| --- | --- |
| `STRIPE_SECRET_KEY` | Chave **secreta** do Stripe (`sk_test_...`), em [dashboard.stripe.com/test/apikeys](https://dashboard.stripe.com/test/apikeys) |
| `JWT_SECRET` | Qualquer texto longo e aleatório |

Crie o banco `devburger` no PostgreSQL. A conexão está em `src/config/database.cjs` (usuário `postgres`, senha `postgres`; altere se o seu for diferente). Depois rode as migrations e inicie a API:

```bash
npx sequelize-cli db:create
npx sequelize-cli db:migrate
npm run dev
```

A API fica disponível em `http://localhost:3001`.

### 3. Configurar e iniciar o frontend

Em outro terminal:

```bash
cd devburguer-interface
npm install
cp .env.example .env
```

No `.env`, coloque a chave **pública** do Stripe (`pk_test_...`). Ela precisa ser **da mesma conta** da chave secreta usada na API.

```bash
npm run dev
```

Acesse o endereço que aparecer no terminal (normalmente `http://localhost:5173`).

### 4. Criar um usuário administrador

Cadastre um usuário pela tela de cadastro e depois transforme-o em admin no banco:

```sql
UPDATE users SET admin = true WHERE email = 'seu@email.com';
```

Faça login de novo para entrar no painel admin.

## 💳 Testando o pagamento

Use os cartões de teste do Stripe, por exemplo:

- **Número:** `4242 4242 4242 4242`
- **Validade:** qualquer data futura
- **CVC:** qualquer 3 dígitos

## 🔌 Rotas da API

| Método | Rota | Descrição | Acesso |
| --- | --- | --- | --- |
| `POST` | `/users` | Cria um usuário | Público |
| `POST` | `/session` | Faz login e retorna o token | Público |
| `GET` | `/products` | Lista os produtos | Logado |
| `POST` | `/products` | Cadastra um produto | Admin |
| `PUT` | `/products/:id` | Edita um produto | Admin |
| `GET` | `/categories` | Lista as categorias | Logado |
| `POST` | `/categories` | Cadastra uma categoria | Admin |
| `PUT` | `/categories/:id` | Edita uma categoria | Admin |
| `POST` | `/orders` | Cria um pedido | Logado |
| `GET` | `/orders` | Lista os pedidos | Logado |
| `PUT` | `/orders/:id` | Atualiza o status do pedido | Admin |
| `POST` | `/create-payment-intent` | Inicia um pagamento no Stripe | Logado |

## 👤 Autor

Feito por **Frank Kennady** — [GitHub](https://github.com/FrankKennady)
