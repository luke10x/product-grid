import { gql } from 'apollo-boost';
import { useQuery, useLazyQuery } from '@apollo/react-hooks';
import React, { useEffect } from 'react';
import Link from 'next/link';
import { ListQuery } from '../_graphql/client/ListQuery';
import Basic from './Basic';
import { useSelector } from 'react-redux';
import { State } from './store';
import { UserQuery } from '../_graphql/client/UserQuery';
import { findUserBadge, parseUserAvailableBadges } from './badges';

const LIST_QUERY = gql`
  query ListQuery {
    productList {
      id
      name
      image_key
      price {
        current_price
        original_price
        currency_code
      }
      offer_ids
    }
  }
`;

const USER_QUERY = gql`
  query UserQuery($userId: String!) {
    user(id: $userId) {
      available_badges
      offers {
        id
        type
      }
    }
  }
`;

const Grid = () => {
  const userId: string = useSelector((state: State) => state.loggedInUserId);

  const { loading, error, data } = useQuery<ListQuery>(LIST_QUERY);
  const [
    startLoadingUser,
    { loading: userLoading, error: userError, data: userData },
  ] = useLazyQuery<UserQuery>(USER_QUERY);

  useEffect(() => {
    console.log('useEffect', userId);
    if (userId !== undefined) startLoadingUser({ variables: { userId } });
  }, [userId]);

  if (loading) return <p>Loading...</p>;
  if (userLoading) return <p>Loading user details...</p>;
  if (error) return <p>Error :(</p>;
  if (userError) return <p>Error while loading user :(</p>;

  return (
    <div className="grid">
      {data &&
        data.productList.map((item) => {
          const badge =
            userData === undefined
              ? undefined
              : findUserBadge(
                  parseUserAvailableBadges(userData.user),
                  item.offer_ids,
                );

          return (
            <Link href={`/product/${item.id}`} key={item.id}>
              <a className="card item">
                {badge && <img src={`/${badge}_icon.jpg`} />}
                <h3>{item.name} &rarr;</h3>
                <Basic
                  currencyCode={item.price.currency_code}
                  originalPrice={item.price.original_price}
                  currentPrice={item.price.current_price}
                  imageKey={item.image_key}
                />
              </a>
            </Link>
          );
        })}
      ;
      <style>{`
        .grid {
          flex: 1;
          display: flex;
          justify-content: space-between;
          align-content: flex-start;
          flex-wrap: wrap;
        }
        .item {
          flex: 1 0 300px;
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
    </div>
  );
};

export default Grid;
