FROM node:18

# Instalar as dependências necessárias para o Playwright
RUN apt-get update && apt-get install -y \
    libnss3 \
    libnspr4 \
    libdbus-1-3 \
    libatk1.0-0 \
    libatk-bridge2.0-0 \
    libatspi2.0-0 \
    libxcomposite1 \
    libxdamage1 \
    libxfixes3 \
    libxrandr2 \
    libgbm1 \
    libdrm2 \
    libxkbcommon0 \
    libasound2 \
    libgtk-3-0 \
    libgdk-3-0 \
    libxi6 \
    libxtst6 \
    libcanberra-gtk-module \
    libnss3-dev \
    libx11-xcb1 \
    libflite1 \
    libgstreamer-1.0-0 \
    libwoff2dec1 \
    libvpx6 \
    libopus0 \
    libgstallocators-1.0-0 \
    libgstapp-1.0-0 \
    libgstbase-1.0-0 \
    libgstpbutils-1.0-0 \
    libgstaudio-1.0-0 \
    libgstgl-1.0-0 \
    libgsttag-1.0-0 \
    libgstvideo-1.0-0 \
    libgstcodecparsers-1.0-0 \
    libgstfft-1.0-0 \
    libavif15 \
    libharfbuzz-icu0 \
    libenchant-2-2 \
    libsecret-1-0 \
    libhyphen0 \
    libmanette-0.2-0 \
    libgles2 \
    libx264 \
    && apt-get clean

# Instalar Playwright
RUN npm install -D playwright

# Comando para rodar os testes
CMD ["npx", "playwright", "test"]
