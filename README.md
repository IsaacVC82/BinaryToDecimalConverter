# Binary To Decimal Converter

## 🔧 Descripción
`Binary to decimal` es una aplicación web ligera para convertir números decimales en binario en tiempo real.
Está desarrollada con HTML + CSS + JavaScript puro, sin dependencias externas.
<img width="975" height="421" alt="image" src="https://github.com/user-attachments/assets/59ecc6e0-4e01-4c0d-b891-8139554d0b0d" />


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
- `10` → `2`
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
git clone https://github.com/IsaacVC82/BinaryToDecimalConverter.git
cd BinaryToDecimalConverter/BinaryToDecimalConverter
start index.html
```

---

## 🧾 Licencia

Proyecto didáctico; puede utilizarse libremente y adaptarse a objetivo educativo.
