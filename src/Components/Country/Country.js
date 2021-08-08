import React from 'react'
import { Typography, Space} from 'antd'
import'./Country.css'
const { Title, Text } = Typography

function Country({flag, name, nativeName, population, region, capital}) {
  return (
    <Space direction="vertical" className="country-info">
      <div className="country-info__image">
        <img src={flag} alt="Flag"/>
      </div>
      <Space direction="vertical">
        <Title className="country-info__title">{name}</Title>
        <Text className="country-info__text"><strong>Language:</strong> {nativeName}</Text>
        <Text className="country-info__text"><strong>Capital:</strong> {capital}</Text>
        <Text className="country-info__text"><strong>Región:</strong> {region}</Text>
        <Text className="country-info__text"><strong>Population:</strong> {population}</Text>
      </Space>
    </Space>  
  )
}

export default Country