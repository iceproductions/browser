import { ipcRenderer } from 'electron';

import { makeId } from './string';

export const callViewMethod = (id: number, scope: string, ...args: any[]): Promise<any> => {
  return new Promise((resolve) => {
    const callId = makeId(32);
    ipcRenderer.send(`browserview-call`, {
      args,
      scope,
      tabId: id,
      callId,
    });

    ipcRenderer.once(`browserview-call-result-${callId}`, (e, result) => {
      resolve(result);
    });
  });
};
