import React, { useState,useEffect } from "react";
import { useGetCryptoNewsQuery } from "../../api/newsApi";
import { useGetCryptosQuery } from "../../api/crytoApi";
import {MdArrowDropDown} from 'react-icons/md'
import {
  DContainer,
  Description,
  DInput,
  DLabel,
  DSelectBox,
  DSelected,
  GridWrapper,

  LabelContainer,
  MainContent,
  OptionContainer,
  OptionLabel,
  PImage,
  PName,
  ProviderContainer,
  PTime,
  SBody,
  SDivider,
  SImage,
  SName,
  STop,
  Wrapper,
} from "./News.styled";
import { Bitcoin } from "../../assets/images";

const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
  const [isActive,setIsActive] = useState(false)
  const [cryptos,setCryptos] = useState([])
  const [searchTerm, setSearchTerm] = useState("");

  const { data, isFetching } = useGetCryptoNewsQuery({
    newsCategory,
    count: simplified ? 6 : 12,
  });
  const { data: cryptoList } = useGetCryptosQuery(50);

  const handlerSearch= (e) => {
    setNewsCategory(e.target.textContent);
    setIsActive(!isActive)
  }
  useEffect(() => {
    const filterData = cryptoList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCryptos(filterData);
  }, [cryptoList, searchTerm]);

  if (isFetching) return "Loading.....";
  console.log(data?.value);
  return (
    <Wrapper>
      {!simplified && (
        <DContainer>
          <DSelectBox>
            <DSelected onClick={() => setIsActive(!isActive)}>
              <DInput 
              placeholder={newsCategory}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              />
              <MdArrowDropDown />
            </DSelected>

        {isActive && (
              <OptionContainer>
                 <OptionLabel >{newsCategory}</OptionLabel>
                {cryptos.map((coin,index) => {
                  return(
                    <OptionLabel key={index} onClick={handlerSearch} >{coin.name}</OptionLabel>
                  )
                })}
       
             </OptionContainer>
        )}
          </DSelectBox>
        </DContainer>
        //   <DSelect
        //   placeholder="Select a crypto"
        //   value={newsCategory}

        //   onChange={(e) => setNewsCategory(e.target.value)}
        // >
        //     <DOption value="Cryptocurrency">Cryptocurrency</DOption>
        //     {cryptoList ?. data ?. coins.map(coin => <DOption value={coin.name}>{coin.name}</DOption>)}
        //   </DSelect>
      )}
      <GridWrapper>
        {data?.value?.map(
          (
            { name, description, datePublished, image, provider, url },
            index
          ) => (
            <MainContent key={index} href={url}>
              <STop>
                <SName>{name}</SName>
                <SImage src={image?.thumbnail?.contentUrl || Bitcoin} />
              </STop>
              <SDivider />
              <SBody>
                <Description>{`${description.substring(
                  0,
                  100
                )} .....`}</Description>
              </SBody>
              <ProviderContainer>
                <LabelContainer>
                  <PImage src={provider[0]?.image?.thumbnail?.contentUrl} />
                  <PName>{provider[0].name}</PName>
                </LabelContainer>
                <PTime>1min ago</PTime>
              </ProviderContainer>
            </MainContent>
          )
        )}
      </GridWrapper>
    </Wrapper>
  );
};

export default News;
