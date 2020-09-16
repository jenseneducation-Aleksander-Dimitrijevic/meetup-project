# Steg för steg - applikationens uppbyggnad.

- Börjar med att strukturera min applikation på följande vis:

  - Dela upp frontend och backend med respektive mappar exempelvis **client** och **api**
  - För klienten används Vue
  - För backend används node med express

- Pusha applikation till en molntjänst, exempelvis Heroku:
  - I vardera mapp **api**, **client** skapar jag en **Dockerfile** med respektive skripts och kommandon.
  - I roten använder jag mig av en **docker-compose.yml** fil som skapar och kör igång en avbild/container av respektive mapp.
  - Bygger en **public** minifierad mapp i **client** som skapas i **api** mappen med hjälp av ett skript i **vue.config.js** filen som finns i **client** mappen.
  - Kör igång både **client** och **api** med kommandot: **docker-compose up --build** som bygger både containers och kör igång applikationen.
  - Loggar in på heroku med kommandot: **heroku container:login**.
  - Skapar en heroku applikation där min lokala applikation pushas till, **heroku create <HEROKU-APP-NAME>**.
  - Skapar en tagg till för min avbild och **docker tag <imageName> registry.heroku.com/<HEROKU-APP-NAME>/web**.
  - Pushar min avbild till heroku med kommandot: **docker push registry.heroku.com/<HEROKU-APP-NAME>/web**.
  - Kör en release till heroku med kommandot: **heroku container:release web**.
  - Öppnar upp appen i webbläsaren med kommandot: **heroku open**.
