import Head from 'next/head';
import React, { ReactNode } from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import User from './User';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  const uri = process.env.NEXT_PUBLIC_BACKEND_URL;
  const client = new ApolloClient({ uri });

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <main>
          <header>
            <h1 className="title"> 🎉 </h1>
            <User />
          </header>

          <ApolloProvider client={client}>{children}</ApolloProvider>
        </main>
        <footer>
          To see more apps like this please visit{' '}
          <a
            href="https://luke10x.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span role="img" aria-label="luke10x.dev">
              👉 luke10x.dev 😍
            </span>
          </a>
        </footer>
      </div>

      <style>{`
        header {
          padding: 10px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        h1 {
          flex: 0 1;
          font-size: 4rem;
        }
        header div {
          flex: 1 0;
        }
        .container {
          height: 100%;
          display: flex;
          flex-direction: column;
      
        }
        @media (min-width: 1000px) {
          .container {
            width: 1000px;
            margin: 0 auto;
          }
        } 
        main {
          flex: 1;
        }
        footer {
          padding: 1em;
          color: white;
          text-align: center;
        }
        footer a {
          color: #f1b31c;
        }
        footer a:hover {
          color: #fcea2b;
        }
      `}</style>
      <style>{`
        html,
        body {
          height: 100%;
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          background: #3f3f3f;
          color: white;  
        }
        #__next {
          height: 100%;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};

export default Layout;
