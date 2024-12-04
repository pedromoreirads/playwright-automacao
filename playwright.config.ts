import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests', // Diretório onde estão os testes
  timeout: 30000, // Timeout padrão de 30 segundos para cada teste
  retries: 1, // Número de tentativas em caso de falha
  use: {
    headless: true, // Rodar os testes em modo headless
    viewport: { width: 1280, height: 720 }, // Resolução padrão
    ignoreHTTPSErrors: true, // Ignorar erros de certificado HTTPS
    screenshot: 'only-on-failure', // Capturar screenshot apenas quando o teste falha
    video: 'on', // Gravar vídeo de todos os testes
  },
  projects: [
    {
      name: 'chromium', // Projeto para Chromium
      use: { browserName: 'chromium' }, // Configura o navegador como Chromium
    },
    {
      name: 'firefox', // Projeto para Firefox
      use: { browserName: 'firefox' }, // Configura o navegador como Firefox
    },
    {
      name: 'webkit', // Projeto para WebKit
      use: { browserName: 'webkit' }, // Configura o navegador como WebKit
    },
  ],
});


