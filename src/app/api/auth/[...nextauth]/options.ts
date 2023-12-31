import { connectToDatabase, disconnectToDatabase } from '@/helpers/server-helpers';
import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';

export const ADMIN_EMAILS = ['tmdgns1126@naver.com'];

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'Enter Email' },
        password: { label: 'Password', type: 'password', placeholder: 'Password' },
      },
      async authorize(credentials) {
        if (!credentials || !credentials.email || !credentials.password) return null;

        try {
          await connectToDatabase();
          const user = await prisma?.user.findFirst({
            where: {
              email: credentials.email,
            },
          });

          if (!user?.hashedPassword) return null;

          const isPasswordCorrect = await bcrypt.compare(credentials.password, user.hashedPassword);
          if (!isPasswordCorrect) return null;
          return user;
        } catch (error) {
          console.error(error);
          return null;
        } finally {
          await disconnectToDatabase();
        }
      },
    }),
    // GitHubProvider({
    //   profile(profile) {
    //     console.log('Profile Github: ', profile);

    //     let userRole = 'GitHub User';
    //     if (ADMIN_EMAILS.includes(profile?.email ?? '')) {
    //       userRole = 'GitHub Admin';
    //     }

    //     return {
    //       ...profile,
    //       role: userRole,
    //     };
    //   },
    //   clientId: process.env.GITHUB_ID ?? '',
    //   clientSecret: process.env.GITHUB_SECRET ?? '',
    // }),
    // GoogleProvider({
    //   profile(profile) {
    //     console.log('Profile Google: ', profile);

    //     let userRole = 'Google User';
    //     if (ADMIN_EMAILS.includes(profile?.email ?? '')) {
    //       userRole = 'Google Admin';
    //     }

    //     return {
    //       ...profile,
    //       id: profile.sub,
    //       role: userRole,
    //     };
    //   },
    //   clientId: process.env.GOOGLE_ID ?? '',
    //   clientSecret: process.env.GOOGLE_SECRET ?? '',
    // }),
  ],
  secret: process.env.NEXT_AUTH_SECRET,
  // callbacks: {
  //   async jwt({ token, user }) {
  //     console.log('JWT: ', token, user);
  //     if (user) {
  //       token.id = user.id;
  //       token.role = user.role;
  //     }
  //     return token;
  //   },

  //   async session({ session, token }) {
  //     console.log('Session: ', session, token);
  //     if (session?.user) {
  //       session.id = token.id;
  //       session.role = token.role;
  //     }
  //     return session;
  //   },
  // },
};
