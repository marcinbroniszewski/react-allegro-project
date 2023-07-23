# Sklep Internetowy - Projekt w React TypeScript

## Opis

Projekt jest sklepem internetowym stworzonym jako aplikacja za pomocą React. Jest to kopia Allegro, z całą funkcjonalnością dla sklepu internetowego, takimi jak: przeglądanie kategorii, dodawanie produktów do koszyka, możliwością rejestracji oraz logowania, dodawanie nowych produktów.

Sam projekt korzysta z API, dzięki któremu tworzy dynamiczne kategorie, jak i całą strukturę aplikacji.

Rejestracja nowych użytkowników oraz logowanie jest możliwa dzięki Firebase Authentication.

## Demo

Link do działającej wersji projektu: [Sklep Internetowy - Demo](https://allegro-642ad.web.app)

## Instalacja

Aby uruchomić projekt lokalnie, wykonaj poniższe kroki:

1. Sklonuj repozytorium:

```git clone https://github.com/marcinbroniszewski/react-allegro-project```

2. Przejdź do odpowiedniego folderu:

```cd react-allegro-project```

3. Zainstaluj zależności:

```npm install```

4. Uruchom projekt:

```npm start```

Projekt powinien być dostępny na `http://localhost:3000/`.

## Funkcje

- Przeglądanie produktów
- Dodawanie produktów do koszyka
- Rejestracja i logowanie użytkowników
- Dodawanie nowych produktów
- Dynamiczne kategorie produktów oparte na danych z API

## Zależności

- React
- TypeScript
- Redux Toolkit
- Firebase
- Redux Persist
- Fontawesome
- React Slick

## Konfiguracja

Projekt korzysta z Firebase do uwierzytelniania użytkowników i przechowywania danych. Aby skonfigurować połączenie z Firebase, dodaj plik `.env` w głównym katalogu projektu z poniższymi zmiennymi środowiskowymi:

```REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_firebase_app_id
```
## Kontakt

Jeśli masz jakieś pytania, sugestie lub chciałbyś zgłosić błąd, skontaktuj się ze mną przez [e-mail](mailto:mk.broniszewski@gmail.com).
