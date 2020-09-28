import React from 'react';

interface BasicProps {
  originalPrice: number;
  currentPrice: number;
  currencyCode: string;
  imageKey: string;
}

const Basic: React.FC<BasicProps> = (props: BasicProps) => (
  <div className="basicbox">
    <img src={`${process.env.NEXT_PUBLIC_IMAGE_SERVER_URL}${props.imageKey}`} />

    <div className="price">
      {props.originalPrice && (
        <del>
          {props.currencyCode} {(props.originalPrice / 100).toFixed(2)}
        </del>
      )}
      <span>
        {props.currencyCode} {(props.currentPrice / 100).toFixed(2)}
      </span>
    </div>

    <style>{`
      .basicbox img {
        width: 100%;
        height: auto;
      }
      .basicbox .price {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        padding: 1em 0;

      }
      .basicbox .price > * {
        width: 100%;
        text-align: center;
      }
      .basicbox .price > span {
        font-size: 1.5em;
        color: red;
      }
    `}</style>
  </div>
);

export default Basic;
