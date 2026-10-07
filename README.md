# Hecc

Minimális Next.js oldal: **Csak neked Robi!** + gorilla poszter.

## Vercel

A projekt átnevezése után a jelenlegi production domain:

- **Jelenlegi (rename után):** https://tutorials-webproject11.vercel.app  
  (régebbi: `fun-webproject11.vercel.app` — még létezhet)

Mindkettőn **Deployment Protection / SSO** van: publikus böngészőben Vercel login jelenik meg, a Robi oldal tartalma nem látszik bejelentkezés nélkül.

### Új random domain (dashboardban kell)

Javasolt új subdomain (nem a régi `fun-…`):

**https://hecc-rp5es2yq.vercel.app**

Lépések a Vercel dashboardon (CLI auth nincs ehhez a környezethez):

1. Nyisd meg: https://vercel.com/webproject11/tutorials  
2. **Settings → Domains**
3. **Add** → írd be: `hecc-rp5es2yq.vercel.app` → mentsd (Production-ra állítsd)
4. Opcionális: távolítsd el / ne használd productionként a régi `fun-….vercel.app` és ha nem kell, a `tutorials-webproject11.vercel.app` aliasokat
5. Ha Robinak publikus link kell: **Settings → Deployment Protection** → kapcsold ki a Standard Protection / SSO-t a Production környezeten (vagy állítsd „Only Preview”-ra)

Projekt dashboard (legutóbbi deploy):  
https://vercel.com/webproject11/tutorials
