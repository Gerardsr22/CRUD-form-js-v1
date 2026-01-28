FROM node:alpine

# Directori de treball dins del contenidor
WORKDIR /app

# Copia els fitxers de dependències a /app
COPY package*.json ./

# Instal·la les dependències
RUN npm install

# Copia tot el codi del projecte
COPY . .

# Exposa el port 5000 (documentació, no és obligatori però és bona pràctica)
EXPOSE 5000

# Comanda per iniciar el servidor
CMD ["node", "server.js"]