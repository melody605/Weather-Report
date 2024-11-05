import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { Router } from 'express';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const router = Router();

router.get('/', (__, res) => {
    res.sendFile(path.join(__dirname, '../../../client/index.html'));
  });






// TODO: Define route to serve index.html

export default router;
