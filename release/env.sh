export HCN_PROJ='gr_shawn_rel'
printenv HCN_PROJ

export NGINX_PORT=80
printenv NGINX_PORT

export HCN_PORT=4202
printenv HCN_PORT


export HCN_CONT='cont'
#printenv HCN_CONT

export HCN_IMG='img'
#printenv HCN_IMG

export HCN_DIR_PROJ='/usr/share/nginx/html'
printenv HCN_DIR_PROJ

export HCN_CONT_PROJ=$HCN_CONT"_"$HCN_PROJ
#printenv HCN_CONT_PROJ

export HCN_IMG_PROJ=$HCN_IMG"_"$HCN_PROJ
#printenv HCN_IMG_PROJ
