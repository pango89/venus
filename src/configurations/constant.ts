import { JwtVerifyOptions } from '@nestjs/jwt';

export const jwtConstants = {
  issuer: 'solar',
  algorithm: 'HS256',
  customerAccessTokenExpiry: process.env.CUSTOMER_ACCESS_TOKEN_EXPIRY_IN_MINUTES
    ? `${process.env.CUSTOMER_ACCESS_TOKEN_EXPIRY_IN_MINUTES}m`
    : '10m',
  customerRefreshTokenExpiryInHours: 24,
  verificationTokenExpiry: '120h',
  resetTokenExpiry: '30m',
  jwtIdForAccessToken: 'AccessToken',
  jwtIdForVerificationToken: 'VerificationToken',
  jwtIdForResetToken: 'ResetToken',
};

export const jwtVerifyOptions: JwtVerifyOptions = {
  secret: process.env.JWT_SECRET_KEY,
  issuer: jwtConstants.issuer,
  algorithms: ['HS256'],
};

export enum ColumnOrder {
  'ASC' = 'ASC',
  'DESC' = 'DESC',
}

export const TableToColumnMapping = {
  stock_recommendation: {
    created_at: ['created_at'],
  },
};
