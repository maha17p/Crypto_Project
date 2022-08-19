import React, { useState } from "react";
import { millify } from "millify";
import { useGetCryptosQuery } from "../../api/crytoApi";
import {
  GridWrapper,
  Input,
  MainContent,
  SBody,
  SDailyChange,
  SDivider,
  SearchContainer,
  SImage,
  SMarketCup,
  SName,
  SPrice,
  STop,
  Wrapper,
} from "./Currency.styled";
import { useEffect } from "react";

const Currency = ({ simplified }) => {
  const count = simplified ? 10 : 50;
  const { data: cryptoList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const filterData = cryptoList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCryptos(filterData);
  }, [cryptoList, searchTerm]);

  if (isFetching) return "Loading........";

  return (
    <Wrapper>
      {!simplified && (
        <SearchContainer>
          <Input
            placeholder="Search Cryptocurrency..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchContainer>
      )}
      <GridWrapper>
        {cryptos?.map(({ iconUrl, name, rank, price, marketCap, change }) => (
          <MainContent key={rank} to={`/crypto/${rank}`}>
            <STop>
              <SName>
                {rank}.{name}
              </SName>
              <SImage src={iconUrl} />
            </STop>
            <SDivider />
            <SBody>
              <SPrice>Price: {millify(price)}</SPrice>
              <SMarketCup>Market Cap: {millify(marketCap)}</SMarketCup>
              <SDailyChange>Daily Change :{change}</SDailyChange>
            </SBody>
          </MainContent>
        ))}
      </GridWrapper>
    </Wrapper>
  );
};

export default Currency;
