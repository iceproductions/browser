import { app, protocol } from 'electron';
import { readFile } from 'fs';
import { join } from 'path';
import { parse } from 'url';
import { extensions } from './extensions';

const applets = ['newtab'];

export const registerProtocols = () => {
  protocol.registerStandardSchemes(['dot', 'extension', 'theme']);

  // protocol.registerSchemesAsPrivileged([
  //   {
  //     scheme: 'dot',
  //     privileges: { bypassCSP: true, secure: true },
  //   },
  //   {
  //     scheme: 'dot-extension',
  //     privileges: { bypassCSP: true, secure: true },
  //   },
  // ]);

  (app as any).on('session-created', (sess: Electron.session) => {
    sess.protocol.registerBufferProtocol(
      'dot-extension',
      (request, callback) => {
        const parsed = parse(decodeURIComponent(request.url));

        if (!parsed.hostname || !parsed.pathname) {
          return callback();
        }

        const extension = extensions[parsed.hostname];

        if (!extension) {
          return callback();
        }

        const { backgroundPage, path } = extension;

        if (
          backgroundPage &&
          parsed.pathname === `/${backgroundPage.fileName}`
        ) {
          return callback({
            mimeType: 'text/html',
            data: backgroundPage.html,
          });
        }

        readFile(join(path, parsed.pathname), (err, content) => {
          if (err) {
            return (callback as any)(-6); // FILE_NOT_FOUND
          }
          return callback(content);
        });

        return null;
      },
      error => {
        if (error) {
          console.error(`Failed to register extension protocol: ${error}`);
        }
      },
    );
    sess.protocol.registerFileProtocol(
      'dot',
      (request, callback: any) => {
        const parsed = parse(request.url);

        if (applets.indexOf(parsed.hostname) !== -1) {
          if (parsed.path === '/') {
            return callback({
              path: join(app.getAppPath(), 'static/pages', 'about.html'),
            });
          }

          return callback({
            path: join(app.getAppPath(), 'build', parsed.path),
          });
        }

        if (parsed.path === '/') {
          return callback({
            path: join(
              app.getAppPath(),
              'static/pages',
              `${parsed.hostname}.html`,
            ),
          });
        }

        return callback({
          path: join(app.getAppPath(), 'static/pages', parsed.path),
        });
      },
      error => {
        if (error) console.error('Failed to register protocol');
      },
    );

    sess.protocol.registerFileProtocol(
      'theme',
      (request, callback: any) => {
        const parsed = parse(request.url);

        if (applets.indexOf(parsed.hostname) !== -1) {
          if (parsed.path === '/') {
            return callback({
              path: join(app.getAppPath(), 'static/pages', 'about.html'),
            });
          }

          return callback({
            path: join(app.getAppPath(), 'build', parsed.path),
          });
        }

        if (parsed.path === '/') {
          console.log('file:///' + encodeURIComponent(app.getAppPath()).replace(/%5C/g, "\\").replace(/%3A/g, ":") + '\\static\\app-icons\\' + parsed.hostname)
          return callback({
            path: 'file:///' + encodeURIComponent(app.getAppPath()).replace(/%5C/g, "\\").replace(/%3A/g, ":") + '\\static\\app-icons\\' + parsed.hostname
          });
        }

        return callback({
          path: 'file:///' + join(encodeURIComponent(app.getAppPath()).replace(/%5C/g, "\\").replace(/%3A/g, ":"), 'static/app-icons', parsed.path),
        });
      },
      error => {
        if (error) console.error('Failed to register protocol');
      },
    );    
  });
};
