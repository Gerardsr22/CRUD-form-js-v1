# El contenidor es crea a partir d'una imatge base que du nginx instalat
FROM nginx:alpine

# Copia tots els arxius que estan a la mateixa carpeta que el Dockerfile a la ruta marcada
COPY . /usr/share/nginx/html/

EXPOSE 80

# Comanda per iniciar nginx
CMD ["nginx", "-g", "daemon off;"]



