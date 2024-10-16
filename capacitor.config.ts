import type {CapacitorConfig} from '@capacitor/cli';

const config: CapacitorConfig = {
    appId: 'io.ionic.starter',
    appName: 'rickMorty',
    webDir: 'dist',
    plugins: {
        SplashScreen: {
            launchShowDuration: 2000,
            backgroundColor: '#ffffff',
            // androidScaleType: 'CENTER_CROP',
            showSpinner: false,
            androidSpinnerStyle: 'small',
            iosSpinnerStyle: 'small',
            splashFullScreen: true,
            splashImmersive: true,
        }
    }
};

export default config;
