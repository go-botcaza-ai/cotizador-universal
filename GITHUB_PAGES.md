# Instrucciones GitHub Pages + Dominio Personalizado

## ✅ Lo que ya está configurado:

1. **CNAME actualizado**: `go.cotizador.ai`
2. **Manifest.json**: PWA configurada
3. **Service Worker**: Offline-first listo
4. **GitHub Pages**: Habilitado en branch `main`

---

## 📋 Pasos finales para GitHub Pages

### 1. Apuntar DNS al dominio

En tu registrador de dominio (GoDaddy, Namecheap, etc.):

**Opción A: Usando registros A (Recomendado)**
```
A    185.199.108.153
A    185.199.109.153
A    185.199.110.153
A    185.199.111.153
```

**Opción B: Usando CNAME (alternativa)**
```
CNAME  go-botcaza-ai.github.io
```

---

### 2. Verificar configuración en GitHub

1. Ve a: **Repo > Settings > Pages**
2. Verifica:
   - ✅ Source: Deploy from branch
   - ✅ Branch: main / root
   - ✅ Custom domain: go.cotizador.ai

3. Si ves el botón "Enforce HTTPS" → **actívalo** (wait 5 min para certificado SSL)

---

### 3. Esperar a que GitHub valide el dominio

- Primera vez: 10-24 horas
- Verifica en: https://go.cotizador.ai
- Si hay error DNS: espera 15-30 minutos más

---

## 🔗 URLs finales (después de que GitHub Pages esté activo)

| Opción | URL |
|--------|-----|
| **GitHub Pages (Recomendado)** | https://go.cotizador.ai |
| Render.com (backup) | https://go-botcaza-ai.onrender.com |
| GitHub.io | https://go-botcaza-ai.github.io/cotizador-universal |

---

## 📱 Miniapp en Telegram

Cuando GitHub Pages esté online, puedes configurar:

### En BotFather de Telegram:
```
/setmenubutton

Bot: @tu_bot_username
Menu: Show menu button
Button URL: https://go.cotizador.ai

/setappdefaultadministrator
Bot: @tu_bot_username
App URL: https://go.cotizador.ai
```

---

## 🚀 Flujo de actualización (después de configurar)

```bash
# 1. Hace cambios localmente
git add .
git commit -m "feat: Nueva funcionalidad"

# 2. Push a main
git push origin main

# 3. GitHub Pages auto-deploya en ~30 segundos
# ✅ La app estará en https://go.cotizador.ai

# 4. Verificar cambios
open https://go.cotizador.ai
```

---

## ⚠️ Importante para PWA en GitHub Pages

Asegúrate de que `sw.js` tenga las URLs correctas:

```javascript
const urlsToCache = [
    '/',                          // ✅ Raíz del dominio
    '/index.html',                // ✅ 
    '/cotizador-app.html',        // ✅
    '/Manifest.json',             // ✅
    '/sw.js'
];
```

---

## 🔐 Certificado SSL/TLS

GitHub Pages proporciona certificado GRATIS:
- ✅ Automático al activar "Enforce HTTPS"
- ✅ Válido 1 año (se renueva auto)
- ✅ Compatible con PWA (requerido para Service Worker)

---

## 📊 Comparativa: GitHub Pages vs Render

| Feature | GitHub Pages | Render |
|---------|--------------|--------|
| **Costo** | GRATIS ✅ | GRATIS (con límites) |
| **Performance** | ⭐⭐⭐⭐ (CDN global) | ⭐⭐⭐ (servidores US) |
| **Dominio custom** | ✅ | ✅ |
| **PWA/Service Worker** | ✅ | ✅ |
| **Backend API** | ❌ (solo static) | ✅ |
| **Base de datos** | ❌ | ❌ (requiere externa) |

**Recomendación**: GitHub Pages para frontend + Render para backend API (si la necesitas después)

---

## 🎯 Checklist Final

- [ ] Actualicé CNAME a `go.cotizador.ai`
- [ ] Apunté DNS en mi registrador
- [ ] Activé "Enforce HTTPS" en GitHub Pages
- [ ] Esperé 24 horas para propagación DNS
- [ ] Verifiqué que https://go.cotizador.ai funciona
- [ ] Probé offline con DevTools > Network > Offline
- [ ] Agregué a pantalla de inicio (PWA) en móvil
- [ ] Configuré Telegram bot con app URL

---

## 📞 Soporte

¿Problema con DNS? Herramientas útiles:
- DNS Checker: https://dnschecker.org/
- SSL Checker: https://www.sslshopper.com/ssl-checker.html
- GitHub Pages Status: https://www.githubstatus.com
