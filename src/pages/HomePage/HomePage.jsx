import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useGetCryptosQuery } from "../../api/crytoApi";
import Currency from "../Currency/Currency";
import News from "../News/News";
import { SMainContent, STitle, TCTitle, TCurrency, TCurrencyRate, TExchange, TLabel, TMarketCup, TMarkets, TopCurrency, TopItems, TValue, TVolume, Wrapper } from "./HomePage.styled";

const HomePage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const dataStats = data?.data?.stats;
  if (isFetching) return "Loading....";
  const {total, totalExchanges,totalMarketCap, totalMarkets, total24hVolume,referenceCurrencyRate } = dataStats;
  return (
    <Wrapper>
      <STitle>Global Crypto Stats</STitle>
      <SMainContent>
        <TCurrency>
          <TLabel>Total Cryptocurrencies</TLabel>
          <TValue>{total}</TValue>
        </TCurrency>
        <TExchange>
          <TLabel>Total Exchnages</TLabel>
          <TValue>{totalExchanges}</TValue>
        </TExchange>
        <TMarketCup>
          <TLabel>Total MarketCap</TLabel>
          <TValue>{totalMarketCap}</TValue>
        </TMarketCup>
        <TVolume>
          <TLabel>Total 24th Volume</TLabel>
          <TValue>{total24hVolume}</TValue>
        </TVolume>
        <TMarkets>
          <TLabel>Total Markets</TLabel>
          <TValue>{totalMarkets}</TValue>
        </TMarkets>
        <TCurrencyRate>
          <TLabel>Currency Rate</TLabel>
          <TValue>{referenceCurrencyRate}</TValue>
        </TCurrencyRate>
      </SMainContent>
      <TopItems>
        <TCTitle>Top 10 cryptocurrencies in the world</TCTitle>
        <Link to="/currency"> Show more</Link>
      </TopItems>
      <Currency simplified />
      <TopItems>
        <TCTitle>Top 10 news in the world</TCTitle>
        <Link to="/news"> Show more</Link>
      </TopItems>
      <News simplified />
    </Wrapper>
  );
};


export default HomePage;
