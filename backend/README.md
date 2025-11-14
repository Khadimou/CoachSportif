# Backend Coach Sportif - API NestJS

Backend complet pour l'application Coach Sportif, construit avec NestJS, TypeORM, PostgreSQL, JWT, et Stripe.

## 🚀 Fonctionnalités

### Authentification & Autorisation
- ✅ Inscription et connexion (JWT)
- ✅ Rôles utilisateur (Client / Admin)
- ✅ Guards pour protéger les routes

### Modules Implémentés

#### 👤 Users Module
- Gestion des utilisateurs (clients et admins)
- Profils et authentification

#### 📧 Contacts Module
- Formulaire de contact avec notifications email
- Gestion des statuts (New, In Progress, Resolved)

#### 🏋️ Programs Module
- CRUD des programmes d'entraînement
- Niveaux: Débutant, Intermédiaire, Avancé
- Gestion des prix et fonctionnalités

#### 📅 Bookings Module
- Réservation de séances
- Statuts: Pending, Confirmed, Completed, Cancelled
- Historique par utilisateur

#### ⭐ Testimonials Module
- Témoignages clients avec système d'approbation admin
- Notation 1-5 étoiles

#### 💳 Payments Module
- Intégration Stripe (Payment Intents + Webhooks)
- Remboursements

#### 📬 Mail Module
- Notifications email via Nodemailer

## 📋 Installation

```bash
# 1. Installer les dépendances
npm install

# 2. Créer la base de données PostgreSQL
createdb coach_sportif

# 3. Configurer les variables d'environnement
cp .env.example .env
# Éditer .env avec vos valeurs

# 4. Initialiser la base avec des données de test
npm run seed

# 5. Lancer le serveur
npm run start:dev
```

L'API sera disponible sur: **http://localhost:3001/api**

## 🔑 Comptes de test

Après le seed:
- **Admin**: `admin@coachsportif.com` / `Admin123!`
- **Client**: `client@example.com` / `Client123!`

## 📚 Endpoints principaux

### Auth
- `POST /api/auth/register` - Inscription
- `POST /api/auth/login` - Connexion

### Programs
- `GET /api/programs` - Liste publique
- `POST /api/programs` - Créer (admin)
- `PATCH /api/programs/:id` - Modifier (admin)

### Bookings
- `POST /api/bookings` - Réserver
- `GET /api/bookings/my-bookings` - Mes réservations
- `GET /api/bookings` - Toutes (admin)

### Contacts
- `POST /api/contacts` - Envoyer message (public)
- `GET /api/contacts` - Liste (admin)

### Testimonials
- `POST /api/testimonials` - Créer (auth)
- `GET /api/testimonials` - Liste approuvés (public)
- `PATCH /api/testimonials/:id/approve` - Approuver (admin)

### Payments
- `POST /api/payments/create-payment-intent/:bookingId` - Payer
- `POST /api/payments/webhook` - Webhook Stripe

## 🔧 Configuration

### PostgreSQL
Modifier dans `.env`:
```env
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USERNAME=postgres
DATABASE_PASSWORD=your_password
DATABASE_NAME=coach_sportif
```

### Email (Gmail)
```env
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USER=your-email@gmail.com
MAIL_PASSWORD=your-app-password
```

### Stripe
```env
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
```

## 📦 Scripts

```bash
npm run start:dev    # Développement
npm run build        # Build
npm run start:prod   # Production
npm run seed         # Seed database
npm run lint         # Lint
npm run test         # Tests
```

## 🛡️ Sécurité

- Mots de passe hashés (bcrypt)
- JWT avec expiration
- Guards & rôles
- Validation des données
- CORS configuré

## 📄 Licence

MIT
