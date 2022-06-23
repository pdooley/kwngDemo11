FROM img_kwng_demo_base

COPY ./e2e/ ./e2e/
COPY ./src/ ./src/

COPY env.sh .
COPY env_proj.sh .
COPY debug.sh .
