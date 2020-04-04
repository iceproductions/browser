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

if (!file.get("tempType")) {
  file.set("tempType", "c");
  file.save()
  store.weather.tempindicator = "c"
}
else {
  store.weather.tempindicator = file.get("tempType")
}

export const WeatherCard = observer(() => {
  var days = [];
  if(store.weather.nextDays)
    for (var day of store.weather.nextDays) {
      days.push(
        <Item>
          <Overline>{day.name}</Overline>
          <SmallIcon style={{ backgroundImage: `url(${icons.fewClouds})` }} />
          <SmallDegrees>{day.high}°</SmallDegrees>
          <SmallDegrees night>{day.low}°</SmallDegrees>
        </Item>
      )
    }
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
        {days}
      </Items>
    </StyledCard>
  );
});
