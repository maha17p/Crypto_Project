import React from "react";
import {millify} from 'millify'
import { useGetExchangesQuery } from "../../api/crytoApi";
import {
  EBody,
  EBodyContainer,
  EHeader,
  EHeadingItem,
  ELogo,
  EMarket,
  EName,
  EPrice,
  ERank,
  ETitle,
  EVolume,
  Wrapper,
} from "./Exchanges.styled";
const Exchanges = () => {
  const { data, isFetching } = useGetExchangesQuery();
  const Exchanges = data?.data?.exchanges;
  if (isFetching) return "Loading......";
  console.log(Exchanges);
  return (
    <Wrapper>
      <EHeader>
        {titleArr.map((title, index) => {
          return <EHeadingItem key={index}>{title}</EHeadingItem>;
        })}
      </EHeader>
      <EBody>
        {data?.data?.exchanges.map((items,index) => {
          const {rank,name,iconUrl,price,numberOfMarkets,} = items;
          return (
            <EBodyContainer>
              <ETitle>
                <ERank>{rank}.</ERank>
                <ELogo src={iconUrl} />
                <EName>{name}</EName>
              </ETitle>
              <EVolume>{millify(items["24hVolume"])}</EVolume>
              <EMarket>{millify(numberOfMarkets)}</EMarket>
              <EPrice>{millify(price)}</EPrice>
            </EBodyContainer>
          );
        })}
      </EBody>
    </Wrapper>
  );
};

const titleArr = ["Exchanges", "24th Trade Volume", "Market", "Price"];
export default Exchanges;
