# 🧾 Cotizador Universal

**Herramienta express para cotizar en minutos sin importar el giro de tu negocio.**

- ⚡ Rápido y offline-first
- 📱 PWA (funciona como app móvil)
- 🤖 Integración con Telegram
- 💾 Sincronización en la nube
- 🎨 Personalizable por nicho

---

## 🚀 Instalación Rápida

### Requisitos
- Node.js 18+
- Git

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/go-botcaza-ai/cotizador-universal.git
cd cotizador-universal

# 2. Instalar dependencias
npm install

# 3. Crear archivo .env desde el ejemplo
cp .env.example .env
# Editar .env con tus variables

# 4. Iniciar desarrollo
npm run dev

# 5. Build para producción
npm run build
```

---

## 📦 Variables de Entorno

Crea un archivo `.env.production` con:

```env
# Telegram Bot
VITE_TELEGRAM_BOT_TOKEN=tu_token_aqui
VITE_TELEGRAM_WEBHOOK_URL=https://tudominio.com/webhook

# API Backend
VITE_API_URL=https://api.tudominio.com

# Gemini AI (opcional)
VITE_GEMINI_API_KEY=tu_key_aqui

# Analytics
VITE_GA_ID=G_XXXXX
```

---

## 📂 Estructura del Proyecto

```
cotizador-universal/
├── index.html              # Landing & Premium check
├── cotizador-app.html      # App principal
├── sw.js                   # Service Worker (Offline)
├── Manifest.json           # PWA Config
├── build.gradle.kts        # Build Android (Kotlin)
├── package.json            # Dependencies
├── .env.example            # Variables template
└── assets/                 # Imágenes & estilos
```

---

## 🛠️ Scripts Disponibles

```bash
npm run dev       # Modo desarrollo con hot reload
npm run build     # Minificar y optimizar
npm run preview   # Ver build en local
npm run test      # Ejecutar tests
npm run lint      # Validar código
```

---

## 🌐 Despliegue

### Opción 1: Render (Actual)
```bash
# Ya configurado en https://go-botcaza-ai.onrender.com
git push origin main
# Render deploy automático
```

### Opción 2: Vercel
```bash
npm i -g vercel
vercel --prod
```

### Opción 3: GitHub Pages
```bash
npm run build
# Push a gh-pages branch
```

---

## 🔐 Seguridad en Producción

- ✅ Validar entrada de usuario
- ✅ HTTPS obligatorio
- ✅ CSP headers configurados
- ✅ Sanitizar datos antes de guardar
- ✅ Usar variables de entorno (sin hardcodear keys)

---

## 📊 Monitoreo

- **Errors**: Sentry.io
- **Analytics**: Google Analytics 4
- **Performance**: Lighthouse CI

---

## 🐛 Troubleshooting

**Q: La app no se abre offline**
- A: Limpia cache: `Application > Clear site data`

**Q: Telegram no reconoce el bot**
- A: Verifica `TELEGRAM_BOT_TOKEN` en `.env`

**Q: Las cotizaciones no se guardan**
- A: Habilita localStorage en ajustes del navegador

---

## 📞 Soporte

- Telegram: @go_botcaza_ai
- GitHub Issues: [Crear issue](https://github.com/go-botcaza-ai/cotizador-universal/issues)

---

## 📄 Licencia

MIT © 2026 Go BotzCaza
