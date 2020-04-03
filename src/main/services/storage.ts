import { app } from 'electron';
import { platform, homedir } from 'os';
import { resolve } from 'path';

export const startStorageService = () => {
  if (platform() == 'darwin') {
    app.setPath('userData', resolve(homedir(), 'Library', 'Application Support', 'Dot Browser'));
  } else if (platform() == 'win32') {
    app.setPath('userData', resolve(homedir(), 'AppData', 'Roaming', 'Dot Browser'));
  } else {
    app.setPath('userData', resolve(homedir(), '.local', 'share', 'Dot Browser'));
  }

  process.env.__DOT_USERDATA_PATH = app.getPath('userData');

  return app.getPath('userData');
};
