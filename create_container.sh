docker run -d \
    -w /home/workspace/nodejs-treinaweb \
    -v "$PWD":/home/workspace/nodejs-treinaweb \
    -p 8080:3000 \
    -p 1001:1000 \
    -p 81:80 \
    --name nodejs-treinaweb -it node