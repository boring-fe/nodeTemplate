"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const bootstrap = () => {
    const PORT = 3000;
    const app = app_1.bootstrapApp({ PORT });
    app.listen(PORT, () => {
        console.log(' App is running at http://localhost:%d in %s mode', app.get('port'), app.get('env'));
        console.log('  Press CTRL-C to stop\n');
    });
};
bootstrap();
//# sourceMappingURL=server.js.map