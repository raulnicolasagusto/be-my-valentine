¡De una! 🙌
Acá tenés un README.md completo, claro y prolijo, listo para copiar/pegar en la raíz del proyecto. Está pensado como proyecto real, no demo escolar: explica qué hace, cómo se usa, cómo se despliega y cómo se monetiza.

# 💖 Be My Valentine – Landing Viral de San Valentín

Proyecto web simple y viral para crear una propuesta romántica interactiva de San Valentín, con links personalizados, animaciones y fondo animado.  
Pensado para funcionar **100% estático** (sin backend), ideal para **Netlify** y monetización con **Google AdSense**.

---

## ✨ Características principales

- 💌 Landing romántica y responsive
- 🏃‍♂️ Botón **“No”** que huye (desktop + mobile)
- 💓 Botón **“Sí, acepto”** con animación tipo latido
- 🌸 Fondo animado con corazones, flores y regalos
- 🔗 Links personalizados usando **GET params**
- 🧾 Formulario separado para generar links
- 📢 Publicidad solo en el formulario (no arruina la experiencia)
- ⚡ Sin backend, sin base de datos, sin cookies

---

## 📂 Estructura del proyecto



/
├─ index.html
├─ styles.css
├─ script.js
│
├─ formulario/
│ ├─ index.html
│ ├─ styles.css
│ └─ script.js
│
└─ README.md


---

## 🔗 Cómo funcionan los links personalizados

El proyecto usa parámetros GET en la URL.

### Parámetros disponibles:
- `nombre` → Nombre de la persona
- `alias` → Cómo la llamas (opcional)

### Ejemplo:


https://tusitio.netlify.app/?nombre=Carla&alias=Hermosa


Resultado en la landing:


Carla,
¿quieres ser mi San Valentín Hermosa?


Footer:


❤️ Hecho con amor para mi Hermosa ❤️


Si **no hay alias**, se muestra:


❤️ Hecho con amor ❤️


---

## 🧾 Formulario de generación de links

Ruta:


/formulario


Funciones:
- Input para **Nombre**
- Input libre para **Cómo lo/la llamas**
- Genera automáticamente el link personalizado
- Lugar ideal para mostrar **Google AdSense**

El formulario **no guarda datos**, solo construye URLs.

---

## 💰 Monetización

### Actual
- 📢 Google AdSense **solo en /formulario**
- Landing principal sin publicidad (mejor UX)

### Escalable
- 🔓 Quitar ads pagando
- 💎 Alias premium
- 📲 Botón compartir por WhatsApp
- 🎁 Pantalla especial al aceptar

---

## 🚀 Deploy en Netlify

1. Ir a https://www.netlify.com
2. Arrastrar la carpeta del proyecto
3. Listo 🎉

Netlify:
- Sirve `/formulario` automáticamente
- Maneja picos de tráfico
- Ideal para proyectos virales

---

## 🧪 Desarrollo local

Recomendado:
- **VS Code + Live Server**

Acceso local:


http://127.0.0.1:5500/

http://127.0.0.1:5500/formulario


⚠️ Si abrís los archivos con `file://`, puede aparecer un listado de directorios.  
Eso **no pasa en Netlify**.

---

## 🛡️ Seguridad y privacidad

- No se almacenan datos
- No hay backend
- No hay cookies
- Todo es estático
- Parámetros visibles en URL (intencional)

---

## 🌍 Público objetivo

- Latinoamérica
- España
- Usuarios de WhatsApp / Instagram
- San Valentín, aniversarios, fechas especiales

---

## ❤️ Créditos

Proyecto creado con amor para experimentar con:
- Viralidad
- UX emocional
- Simplicidad técnica
- Monetización ligera

---

## 📌 Notas finales

Este proyecto está pensado para:
- Eventos de alto impacto y corta duración
- Picos de tráfico
- Fácil clonación para otras fechas (Navidad, aniversarios, cumpleaños)

---

✨ Hecho con amor.