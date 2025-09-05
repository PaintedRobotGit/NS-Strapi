export default ({ env }) => ({
    'users-permissions': {
        config: {
            jwtSecret: env('JWT_SECRET'),
            providers: {
                google: {
                    enabled: true,
                    clientId: env('GOOGLE_CLIENT_ID'),
                    clientSecret: env('GOOGLE_CLIENT_SECRET'),
                    scope: [
                        'openid',
                        'email',
                        'profile',
                        'https://www.googleapis.com/auth/userinfo.profile',
                        'https://www.googleapis.com/auth/userinfo.email'
                    ],
                },
            },
        },
    },
    upload: {
        config: {
            provider: 'cloudinary',
            providerOptions: {
                cloud_name: env('CLOUDINARY_NAME'),
                api_key: env('CLOUDINARY_KEY'),
                api_secret: env('CLOUDINARY_SECRET'),
            },
            actionOptions: {
                upload: {},
                uploadStream: {},
                delete: {},
            },
        },
    },
});
