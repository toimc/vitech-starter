#!/bin/sh
# 构建
npm run build

# 上传部署 示例
# rsync -avz --delete -e "ssh -p 22" ./dist/ root@192.168.31.77:/home/website/pk-front-vue3