# DecimalToBinaryConverter

## 🔧 Descripción
`DecimalToBinaryConverter` es una aplicación web ligera para convertir números decimales en binario en tiempo real.
Está desarrollada con HTML + CSS + JavaScript puro, sin dependencias externas.

---

## 🚀 Características

- Conversión inmediata de decimal a binario.
- Soporta:
  - `0` correctamente (retorna `0`)
  - números positivos enteros
- Validación básica de entrada:
  - no acepta campos vacíos
  - no acepta valores no numéricos
- Entrada por botón y tecla `Enter`.

---

## 📁 Estructura

- `index.html`: interfaz de usuario y estructura DOM.
- `styles.css`: estilo visual responsivo y limpio.
- `script.js`: lógica de conversión y control de eventos.

---

## 🛠️ Uso

1. Abrir `index.html` en el navegador.
2. Ingresar un número decimal positivo.
3. Clicar `Convertir` o pulsar `Enter`.
4. Ver resultado en el elemento de salida.

---

## 🧪 Ejemplos

- `1` → `1`
- `2` → `10`
- `7` → `111`
- `16` → `10000`
- `0` → `0`

---

## 💡 Implementación Principal (`script.js`)

- `decimalToBinary(input)`
  - Convierte entero decimal a cadena binaria por división sucesiva entre 2.
  - Actualiza `result.innerText`.
- `checkUserInput()`
  - valida el input
  - llama al convertidor
  - limpia el campo.
- binding eventos:
  - `convertBtn.click`
  - `numberInput.keydown` (`Enter`)

---

## 📝 Mejoras sugeridas

- Soportar negativos con complemento a dos.
- Añadir validación de rango y detener valores no enteros.
- Soportar números muy grandes (BigInt).
- Mensajes inline en lugar de `alert`.
- UI/UX: accesibilidad WAI-ARIA y temas.
- Internacionalizar (i18n) texto en español/inglés.

---

## 📦 Instalación

No requiere instalación. Solo clonar y abrir:

```bash
git clone <repo>
cd DecimalToBinaryConverter/DecimalToBinaryConverter
start index.html
```

---

## 🧾 Licencia

Proyecto didáctico; puede utilizarse libremente y adaptarse a objetivo educativo.
