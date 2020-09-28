import { OfferType } from '../_graphql/global';
import {
  BadgeWithOfferIds,
  findUserBadge,
  parseUserAvailableBadges,
} from './badges';

describe('available badges and offers for a user', () => {
  const user = {
    available_badges: 'loyalty:SLOTTED,BONUS||sale:PRIORITY_ACCESS,REDUCED',
    offers: [
      {
        id: '1',
        type: 'REDUCED' as OfferType,
      },
      {
        id: '2',
        type: 'BONUS' as OfferType,
      },
      {
        id: '3',
        type: 'PRIORITY_ACCESS' as OfferType,
      },
      {
        id: '4',
        type: 'SLOTTED' as OfferType,
      },
      {
        id: '5',
        type: 'BONUS' as OfferType,
      },
    ],
  };

  test('it parses badges with their offer ids', () => {
    const offerIds = ['2', '4', '3', '5'];

    expect(parseUserAvailableBadges(user)).toEqual([
      { badge: 'loyalty', offerIds: ['4', '2', '5'] },
      { badge: 'sale', offerIds: ['3', '1'] },
    ]);
  });
});

describe('user has two available badges', () => {
  const parsedUserBadges: BadgeWithOfferIds[] = [
    { badge: 'loyalty', offerIds: ['4', '2', '5'] },
    { badge: 'sale', offerIds: ['3', '1'] },
  ];

  test('when no badges have offers, then badge is undefined', () => {
    expect(findUserBadge(parsedUserBadges, ['6', '7'])).toBeUndefined();
  });

  test('when both badges have offers, then returns first badge', () => {
    expect(findUserBadge(parsedUserBadges, ['1', '2'])).toEqual('loyalty');
  });

  test('when second have offers, then returns second badge', () => {
    expect(findUserBadge(parsedUserBadges, ['1', '3'])).toEqual('sale');
  });
});
