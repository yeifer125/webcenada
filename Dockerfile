# ---------- Base ----------
FROM node:20-alpine

# ---------- Directorio de trabajo ----------
WORKDIR /app

# ---------- Copiar dependencias ----------
COPY package.json package-lock.json ./

# ---------- Instalar dependencias ----------
RUN npm install

# ---------- Copiar código ----------
COPY . .

# ---------- Construir la app ----------
RUN npm run build

# ---------- Servir la app con un server ligero ----------
RUN npm install -g serve

# ---------- Exponer puerto ----------
EXPOSE 5000

# ---------- Comando de ejecución ----------
CMD ["serve", "-s", "build", "-l", "5000"]
