import * as React from 'react';
import { observer } from 'mobx-react';
import {
  StyledCard,
  Icon,
  Header,
  Left,
  Title,
  Item,
  Items,
  Overline,
  SmallIcon,
  Degrees,
  SmallDegrees,
  Offline,
} from './style';
import { icons } from '../../constants';
import console = require('console');
const fetch = require("node-fetch");
import store from '../../store';
import { resolve } from 'path';
import { homedir } from 'os';
const editJsonFile = require("edit-json-file");
let file = editJsonFile(resolve(homedir()) + '/dot/dot-options.json');

if(!file.get("tempType")) {
  file.set("tempType", "c");
  file.save()
  store.weather.tempindicator = "c"
}
else {
  store.weather.tempindicator = file.get("tempType")
}

export const WeatherCard = observer(() => {
  return (
    <StyledCard>
      <Header time={store.weather.timeInt}>
        <Left>
          <div>
            <Title>{store.weather.location}</Title>
            <Degrees>{store.weather.temp}°</Degrees>
            <div
              style={{
                fontSize: 16,
                fontWeight: 400,
                marginBottom: 4,
                marginTop: 8,
              }}
            >
              {store.weather.summary}
            </div>
            <div style={{ fontSize: 16, fontWeight: 300 }}>{store.weather.timetype}</div>
          </div>
          <div>
            <Icon style={{ backgroundImage: `url(${icons.fewClouds})` }} />
          </div>
        </Left>
      </Header>
      <Items>
        <Item>
          <Overline>WED</Overline>
          <SmallIcon style={{ backgroundImage: `url(${icons.fewClouds})` }} />
          <SmallDegrees>20°</SmallDegrees>
          <SmallDegrees night>12°</SmallDegrees>
        </Item>
        <Item>
          <Overline>THU</Overline>
          <SmallIcon style={{ backgroundImage: `url(${icons.fewClouds})` }} />
          <SmallDegrees>20°</SmallDegrees>
          <SmallDegrees night>12°</SmallDegrees>
        </Item>
        <Item>
          <Overline>FRI</Overline>
          <SmallIcon style={{ backgroundImage: `url(${icons.fewClouds})` }} />
          <SmallDegrees>20°</SmallDegrees>
          <SmallDegrees night>12°</SmallDegrees>
        </Item>
        <Item>
          <Overline>SAT</Overline>
          <SmallIcon style={{ backgroundImage: `url(${icons.fewClouds})` }} />
          <SmallDegrees>20°</SmallDegrees>
          <SmallDegrees night>12°</SmallDegrees>
        </Item>
      </Items>
    </StyledCard>
  );
});
