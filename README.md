# Binary To Decimal Converter

## 🔧 Descripción
`Binary to decimal` es una aplicación web ligera para convertir números decimales en binario en tiempo real.
Está desarrollada con HTML + CSS + JavaScript puro, sin dependencias externas.

---

## 🚀 Características

- Conversión inmediata de binario a decimal.
- Soporta:
  - `0` correctamente (retorna `0`)
  - `1`
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
2. Ingresar un binario.
3. Clicar `Convertir` o pulsar `Enter`.
4. Ver resultado en el elemento de salida.

---

## 🧪 Ejemplos

- `1` → `1`
- `2` → `10`
- `111` → `7`
- `10000` → `16`
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
