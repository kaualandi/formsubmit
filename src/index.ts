import 'dotenv/config';
import { createServer } from './config/express';
import { AddressInfo } from 'net';
import http from 'http';
import { logger } from './config/logger';
import { sendMail } from './sendMail';

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || '5000';

async function startServer() {
  const app = createServer();
  const server = http.createServer(app).listen({ host, port }, () => {
    const addressInfo = server.address() as AddressInfo;
    logger.info(`Server ready at http://${addressInfo.address}:${addressInfo.port}`);
  });

  app.post('/send-mail/:to', sendMail);

  const signalTraps: NodeJS.Signals[] = ['SIGTERM', 'SIGINT', 'SIGUSR2'];
  signalTraps.forEach((type) => {
    process.once(type, async () => {
      logger.info(`process.once ${type}`);

      server.close(() => {
        logger.debug('HTTP server closed');
      });
    });
  });
}

startServer();
