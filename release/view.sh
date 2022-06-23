source ./env.sh

docker images "*"$HCN_PROJ"*"
printf "\n"

docker ps --filter "name="$HCN_PROJ --filter status=exited --filter status=running
printf "\n"

docker volume ls --filter "name="$HCN_PROJ
