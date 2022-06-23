source ./env.sh
docker stop $KW_CONT_PROJ
docker rm $KW_CONT_PROJ
docker run -it -p $KW_HOST:$KW_PORT:$KW_PORT -v $PWD:$KW_DIR_PROJ --name $KW_CONT_PROJ $KW_IMG_PROJ
