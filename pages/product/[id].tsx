import React from 'react';
import Layout from '../../components/Layout';
import Link from 'next/link';
import Details from '../../components/Details';
import { useRouter } from 'next/router';

const Product: React.FC = () => {
  const router = useRouter();
  const id = router.query.id as string | undefined;

  return (
    <Layout>
      {id !== undefined && (
        <div className="card item">
          <Link href="/">&larr;Back</Link>
          <Details productId={id} />
        </div>
      )}

      <style>{`
        .item {
          flex: 1 0;
          padding: 10px;
          margin: 10px;
          box-sizing: border-box;
          border-radius: 3px;
        }
        .card {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-content: center;
          align-items: center;
          background: white;
          color: black;
          text-align: left;
        }
      `}</style>
    </Layout>
  );
};

export default Product;
