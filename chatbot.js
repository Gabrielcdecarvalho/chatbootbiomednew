const wppconnect = require('@wppconnect-team/wppconnect');

wppconnect.create({
  catchQR: (base64Qrimg, asciiQR, attempts, urlCode) => {
    console.log('🔹 ASCII QR Code:\n', asciiQR);
    console.log('🔹 URL Code:', urlCode);
  },
  statusFind: (statusSession, session) => {
    console.log('🔹 Status Session:', statusSession);
  },
  headless: true, // Mantém headless, já que Railway não tem interface gráfica
}).then((client) => start(client));

function start(client) {
  console.log('✅ Bot iniciado com sucesso e aguardando mensagens...');
  
  client.onMessage((message) => {
    if (message.body === 'Oi') {
      client.sendText(message.from, 'Olá! Sou um bot 🤖');
    }
  });
}
