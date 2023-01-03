export type User = {
    uid: string;
    email: string;
    emailVerified: boolean;
    isAnonymous: boolean;
    providerData: ProviderData[];
    stsTokenManager: StsTokenManager;
    createdAt: string;
    lastLoginAt: string;
    apiKey: string;
    appName: string;
  }
  
  type StsTokenManager = {
    refreshToken: string;
    accessToken: string;
    expirationTime: number;
  }
  
  type ProviderData = {
    providerId: string;
    uid: string;
    displayName?: any;
    email: string;
    phoneNumber?: any;
    photoURL?: any;
  }