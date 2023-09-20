# Usa una imagen base de Node.js
FROM node:14

# # Establece el directorio de trabajo dentro del contenedor
# WORKDIR /app

# Copia el archivo de la aplicación y el archivo package.json a /app en el contenedor
COPY package*.json ./ 

COPY . .

# Instala las dependencias de la aplicación
RUN npm install

# Expón el puerto en el que la aplicación escuchará dentro del contenedor
EXPOSE 80

# Comando para iniciar la aplicación Node.js
CMD ["node", "app.js"]
