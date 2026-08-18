# 📦 Guía de Despliegue a Producción

## Pre-requisitos Checklist

- [ ] Node.js 18+ instalado
- [ ] Cuenta en Render.com (actual host)
- [ ] Variables de entorno configuradas
- [ ] Telegram Bot Token disponible
- [ ] Dominio personalizado (opcional)

---

## 1️⃣ Configuración Local

```bash
# Clonar repo
git clone https://github.com/go-botcaza-ai/cotizador-universal.git
cd cotizador-universal

# Instalar dependencias
npm install

# Crear .env.production
cp .env.example .env.production
# Editar con tus valores reales
```

## 2️⃣ Build para Producción

```bash
# Generar archivos optimizados
npm run build

# Verificar que se creó carpeta 'dist/'
ls -la dist/

# (Opcional) Probar build localmente
npm run preview
```

## 3️⃣ Despliegue en Render

### Opción A: Push automático (Recomendado)

1. Conecta tu GitHub con Render (ya hecho)
2. Cada push a `main` se deploya automáticamente
3. Render ejecuta: `npm install && npm run build`

```bash
git add .
git commit -m "feat: Nueva versión productiva"
git push origin main
# ✅ Render inicia deploy automático
```

### Opción B: Deploy Manual

```bash
# Si quieres desplegar sin push:
1. Ve a https://dashboard.render.com
2. Selecciona tu servicio "cotizador-universal"
3. Click "Manual Deploy"
4. Selecciona branch "main"
```

---

## 4️⃣ Verificaciones Post-Despliegue

```bash
# Verificar que la app está online
curl https://go-botcaza-ai.onrender.com

# Abrir en navegador
open https://go-botcaza-ai.onrender.com

# Verificar Service Worker
# DevTools > Application > Service Workers
# Debe mostrar "active and running"

# Verificar PWA
# DevTools > Application > Manifest
# Debe cargar Manifest.json correctamente
```

---

## 5️⃣ Variables de Entorno en Render

1. Ve a Dashboard > tu app > Environment
2. Agrega cada variable desde `.env.production`:

```
VITE_TELEGRAM_BOT_TOKEN = tu_token
VITE_TELEGRAM_WEBHOOK_URL = https://go-botcaza-ai.onrender.com/webhook
VITE_API_URL = https://tu-api.com
... etc
```

**IMPORTANTE**: Usa "Secret" para valores sensibles (tokens, keys)

---

## 🔒 Checklist de Seguridad

- [ ] HTTPS activo (Render lo proporciona)
- [ ] Variables sensibles en Environment > Secret
- [ ] CORS configurado correctamente
- [ ] Validaciones de entrada activadas
- [ ] Rate limiting en API (si aplica)
- [ ] Logs monitoreados en Render

---

## 🚨 Troubleshooting Despliegue

### El build falla

```bash
# Ver logs en Render
# Dashboard > tu app > Logs > Build

# Causas comunes:
1. Falta npm install
2. Node version incompatible
3. Archivo .env sin variables críticas
```

### La app se abre pero se ve blanca

```bash
# Abrir DevTools > Console
# Buscar errores como:

# ❌ "Telegram API not found"
# → Solución: Asegurar que estás en app Telegram o localhost

# ❌ "CORS error"
# → Solución: Revisar VITE_ALLOW_DOMAINS

# ❌ "Service Worker error"
# → Solución: Limpiar cache del navegador
```

### Las cotizaciones no se guardan

```javascript
// DevTools > Console
// Verificar localStorage
localStorage.setItem('test', 'ok')
// Si da error: navegador no lo permite (incógnito, etc)
```

---

## 📊 Monitoreo Continuo

### Métricas a revisar:

- **Performance**: Lighthouse Score > 80
- **Uptime**: Verificar status.render.com
- **Errors**: Console logs en DevTools
- **Users**: Analytics en .env

### Configurar alertas:

1. Render > Settings > Alerts
2. Recibir notificaciones en email si:
   - Deploy falla
   - Servicio se cae
   - Alta latencia

---

## 🔄 Rollback de Emergencia

Si algo sale mal:

```bash
# 1. Revertar último commit
git revert HEAD

# 2. Push a main (Render redeploya automáticamente)
git push origin main

# 3. Esperar ~5 minutos a que se actualice
```

---

## 📈 Próximos Pasos Producción

- [ ] Configurar dominio personalizado (.com)
- [ ] Implementar backend API (Node/Express)
- [ ] Agregar autenticación OAuth2
- [ ] Setup Sentry para error tracking
- [ ] Configurar Google Analytics 4
- [ ] CDN para assets (Cloudflare)
- [ ] Database para historial (Firebase/Supabase)

---

## 💬 Soporte

¿Problemas? Abre issue en GitHub o contacta:
- Email: support@go-botcaza-ai.com
- Telegram: @go_botcaza_ai