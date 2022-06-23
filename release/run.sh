source ./env.sh
docker stop $HCN_CONT_PROJ
docker rm $HCN_CONT_PROJ
docker run -d -p $HCN_PORT:$NGINX_PORT -v $PWD:$HCN_DIR_PROJ --name $HCN_CONT_PROJ $HCN_IMG_PROJ
