import {type UserConfigExport, defineConfig} from 'vite';

export default defineConfig(() => {
    const baseConfig: UserConfigExport = {
        server: {
            cors: true,
            headers: {
                'Cross-Origin-Resource-Policy': 'cross-origin',
            },
        }
    };

    return baseConfig;
});
