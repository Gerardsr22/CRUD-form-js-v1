# Script per instalar els serveis necessaris al servidor

#!/bin/bash
sudo apt update && sudo apt upgrade -y

git clone https://github.com/Gerardsr22/CRUD-form-js-v1.git

sleep 10

cd ./CRUD-form-js-v1/FrontEnd

# Crea una imatge docker del Frontend
docker image build -t frontend-image .
# . -> indica q es fassi el docker que està a la carpeta actual

# Crea una xarxa docker pq els contenidors es comuniquin
docker network create --driver bridge crud-network 

# Crea un contenidor amb la imatge anteriorment creada
docker run -d -p 8080:80 --network mi-red-nat --name frontend-container frontend-image
# -d -> El crea en segon plà
# -p -> Redirecció de ports del 8080 al 80
# --network -> selecciona la network que usarà
# --name -> assigna un nom a aquest contenidor
# darrer front

docker 