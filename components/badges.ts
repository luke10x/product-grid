import { UserQuery_user as User } from '../_graphql/client/UserQuery';
import { OfferType } from '../_graphql/global';

interface UserOffer {
  id: string;
  type: string;
}

type Badge = 'gonesoon' | 'sale' | 'loyalty';

export interface BadgeWithOfferIds {
  badge: string;
  offerIds: string[];
}

export const parseUserAvailableBadges = ({
  available_badges: availableBadgesString,
  offers,
}: User): BadgeWithOfferIds[] => {
  const badgesForOfferTypes = availableBadgesString
    .split('||')
    .map((colonSeparated: string) => {
      const [badge, commaSeparatedOfferTypes] = colonSeparated.split(':');
      const offerTypes = commaSeparatedOfferTypes.split(',') as OfferType[];
      return { badge, offerTypes };
    });

  const badgesForOfferIds = badgesForOfferTypes.map((item) => {
    const offerIds =
      offers === null
        ? []
        : item.offerTypes.flatMap((offerType: OfferType) => {
            return offers
              .filter((offer) => offer.type === offerType)
              .map((offer) => offer.id);
          });
    return { badge: item.badge, offerIds };
  });
  return badgesForOfferIds;
};

export const findUserBadge = (
  userBadges: BadgeWithOfferIds[],
  productOfferIds: string[],
): string | undefined => {
  return userBadges.find((item: BadgeWithOfferIds) => {
    return item.offerIds.some((id: string) => productOfferIds.includes(id));
  })?.badge;
};
