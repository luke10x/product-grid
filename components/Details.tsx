import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import React from 'react';
import { ProductQuery } from '../_graphql/client/ProductQuery';
import Basic from './Basic';

const PRODUCT_QUERY = gql`
  query ProductQuery($id: String!) {
    product(id: $id) {
      id
      name
      image_key
      price {
        current_price
        original_price
        currency_code
      }
      information {
        section_text
        section_title
      }
    }
  }
`;

interface DetailsProps {
  productId: string;
}

const Details: React.FC<DetailsProps> = ({ productId }: DetailsProps) => {
  const { loading, error, data } = useQuery<ProductQuery>(PRODUCT_QUERY, {
    variables: { id: productId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  if (data) {
    const item = data.product;
    return (
      <>
        <h3>{item.name}</h3>

        <div className="product-with-info">
          <div className="basic">
            <Basic
              currencyCode={item.price.currency_code}
              originalPrice={item.price.original_price}
              currentPrice={item.price.current_price}
              imageKey={item.image_key}
            />
          </div>
          <div className="extra">
            {item.information.map((information) => {
              return (
                <>
                  <h2>{information.section_title}</h2>
                  <p>{information.section_text}</p>
                </>
              );
            })}
          </div>
        </div>
        <style>{`
          .product-with-info {
            display: flex;
          }
          @media (max-width: 720px) {
            .product-with-info {
              flex-direction: column;
            }
            .basic img {
              width: 100%;
              height: auto;
            }
          }
          .product-with-info .basic {
            flex: 0 0 30%
          }
          .product-with-info .basic .price {
            display: flex;
            justify-content: space-between;
          }
          .product-with-info .extra {
            flex: 1;
            padding: 0 1em;
          }
        `}</style>
      </>
    );
  }
};

export default Details;
