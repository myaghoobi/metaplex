import { Metadata, ParsedAccount, shortenAddress } from '@oyster/common';
import React from 'react';

import { ArtContent } from '../../../../../../components/ArtContent';
import { useArt } from '../../../../../../hooks';

interface IPropsRedeemCard {
  item: ParsedAccount<Metadata>;
  probability: string;
}

const RedeemCard = ({
  item: { info, pubkey },
  probability,
}: IPropsRedeemCard) => {
  const { creators } = useArt(pubkey);

  return (
    <div className="card-redeem">
      <div className="info">
        <div className="card-redeem__image">
          <ArtContent pubkey={pubkey} uri={info.data.uri} preview={false} />
        </div>
        <div className="info__text">
          <p className="info__title">{info.data.name}</p>
          <p className="info__creators">
            {creators?.map(creator => " " + (creator.name || shortenAddress(creator.address || '')))}
          </p>
        </div>
      </div>
      <div className="card-redeem__percentage">
        <p>{`${probability}% `}<p>chance</p></p>
      </div>
    </div>
  );
}

export default RedeemCard;