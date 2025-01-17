const Ziggy = {"url":"http:\/\/localhost","port":null,"defaults":{},"routes":{"dashboard":{"uri":"admin\/dashboard","methods":["GET","HEAD"]},"users.index":{"uri":"admin\/users","methods":["GET","HEAD"]},"storage.local":{"uri":"storage\/{path}","methods":["GET","HEAD"],"wheres":{"path":".*"},"parameters":["path"]}}};
if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
  Object.assign(Ziggy.routes, window.Ziggy.routes);
}
export { Ziggy };
