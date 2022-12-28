import { dirname } from 'path';
import { fileURLToPath } from 'url';

export const __ = (imu) => ({
  __dirname: dirname(fileURLToPath(imu)),
  __filename: fileURLToPath(imu),
});
