# Usar uma imagem base com Node.js
FROM node:18-bullseye

# Definir diretório de trabalho dentro do container
WORKDIR /app

# Copiar arquivos package.json e package-lock.json
COPY package.json package-lock.json ./

# Instalar dependências do projeto
RUN npm install

# Instalar os navegadores do Playwright
RUN npx playwright install --with-deps

# Copiar o restante dos arquivos do projeto
COPY . .

# Compilar o TypeScript (opcional, se você estiver compilando antes)
RUN npx tsc

# Definir o comando padrão para rodar os testes
CMD ["npx", "playwright", "test"]
