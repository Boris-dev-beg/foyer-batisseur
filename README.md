# Foyer Bâtisseur

Site vitrine pour Foyer Bâtisseur, promoteur immobilier basé à Bafoussam, au Cameroun. La page présente les terrains, les modèles de villas et les étapes d’un projet immobilier, avec des moyens de contact par WhatsApp.

> Cette version est une démonstration : les contenus et données présentés sont fictifs. Elle ne constitue pas une plateforme de transaction ou de suivi de chantier connectée à un service backend.

## Fonctionnalités

- Présentation de l’entreprise et de ses engagements.
- Sections consacrées aux terrains, aux villas et aux étapes d’un projet.
- Coordonnées, questions fréquentes et liens WhatsApp préremplis.
- Interface responsive réalisée avec Tailwind CSS v4.

## Technologies

- React 19 et TypeScript
- Vite
- Tailwind CSS v4 et son plugin Vite
- React Router
- Lucide React et React Icons

## Démarrer le projet

Prérequis : Node.js et npm.

```bash
npm install
npm run dev
```

Vite affiche l’adresse locale du serveur dans le terminal.

## Commandes

```bash
npm run dev      # serveur de développement
npm run build    # vérification TypeScript et compilation de production
npm run preview  # prévisualisation du build
npm run lint     # vérification ESLint
```

## Organisation du code

```text
src/
├── components/
│   ├── layout/       # en-tête et pied de page
│   ├── sections/     # sections de la page d’accueil
│   ├── shared/       # composants partagés
│   └── ui/           # éléments d’interface
├── data/             # contenus, libellés et configuration du site
├── pages/            # composition des pages
├── App.tsx           # composant racine
└── index.css         # import Tailwind et variables de thème
public/images/        # logos et visuels du site
```

Les exports de `src/data/index.ts` permettent d’importer les données communes depuis le dossier `data`.
