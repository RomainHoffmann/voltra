# Voltra

Application mobile de musculation guidée, série par série.

## Stack

- Expo Router
- NativeWind (Tailwind CSS)
- React Query
- Zustand
- Supabase JS
- Zod
- React Hook Form

## Démarrage

```bash
npm install
cp .env.example .env
npm start
```

Renseigne ensuite `EXPO_PUBLIC_SUPABASE_URL` et `EXPO_PUBLIC_SUPABASE_ANON_KEY` dans `.env` (Prompt 2).

## Structure

```
app/          # Routes Expo Router (auth + app)
components/   # Composants UI réutilisables
features/     # Modules métier
lib/          # Clients, providers, config
stores/       # Stores Zustand
types/        # Types TypeScript
utils/        # Utilitaires
```

## Navigation

- `(auth)` — connexion / inscription
- `(app)` — application principale (programmes, séances, etc.)

La logique métier sera ajoutée progressivement via les prompts suivants.
