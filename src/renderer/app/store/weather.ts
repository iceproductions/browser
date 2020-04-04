import { observable, observe, action } from 'mobx';
import * as React from 'react';

import store from '.';
import { ipcRenderer, remote } from 'electron';
import { extname, resolve } from 'path';
import { string } from 'prop-types';
import { checkServerIdentity } from 'tls';
import console = require('console');
import { homedir } from 'os';
const editJsonFile = require("edit-json-file");
let file = editJsonFile(resolve(homedir()) + '/dot/dot-options.json');

// Special thanks to DusterTheFirst for this neat bit of code 😊

export class WeatherStore {

  @observable
  public loaded?: boolean = false;

  @observable
  public location?: string;

  @observable
  public temp?: number;

  @observable
  public tempLow?: number;

  @observable
  public summary?: string;

  @observable
  public icon?: string;

  @observable
  public timetype?: string;

  @observable
  public timeInt?: number;

  @observable
  public tempindicator?: string;

  @observable
  public nextDays?: any[];

  /** This function will be called when your app is first opened or when they need to reload the data */
  public async load(deg?: string): Promise<void> {
    try {

      if (!file.get("tempType")) {
        file.set("tempType", "c");
        file.save()
      }

      var dt = "c";
      if (deg) {
        if (deg == "F") {
          dt = "F"
        }
      }
      if (!deg) {
        if (!file.get("tempType")) {
          dt = "c";
          return;
        }
        dt = file.get("tempType");
      }

      function FtoC(f: number): number {
        return (f - 32) * 5 / 9
      };

      function convert(f: number): number {
        if (dt = "F") return f;
        return FtoC(f);
      }

      try {
        var r = await fetch("https://cors-anywhere.herokuapp.com/https://weather.com");
        var re = await r.text();
        var url = re.match(/weather\/tenday\/l\/[a-z0-9]+/gmi)[0];
        var res = await fetch("https://cors-anywhere.herokuapp.com/https://weather.com/" + url);
      } catch(e){
        console.error("Weather fetch error:", e);
        return;
      }

      var body = await res.text();

      var matches = body.match(/<span class="[a-z-]*"( className="[a-z-]*")?>[0-9a-z]+</gmi);
      this.temp = convert(parseInt(matches[1].match(/[0-9]+/)[0]));
      this.tempLow = convert(parseInt(matches[2].match(/[0-9]+/)[0]));

      function getDay(matches: RegExpMatchArray, offset: number) {
        return {
          name: matches[offset].match(/>([a-z]+)</i)[1],
          high: convert(parseInt(matches[offset + 1].match(/[0-9]+/)[0])),
          low: convert(parseInt(matches[offset + 2].match(/[0-9]+/)[0]))
        };
      }

      this.nextDays = [
        getDay(matches, 3),
        getDay(matches, 6),
        getDay(matches, 9),
        getDay(matches, 12)
      ];
      console.log("Found days");

      this.location = body.match(/city=([a-z]+)/)[1];
      this.summary = body.match(/description"><span>([a-z ]+)<\//i)[1];


      var today = new Date()
      var curHr = today.getHours()

      if (curHr < 12) {
        this.timetype = store.locale.lang.search_bar[0].timeTypes[0].morning
        this.timeInt = 0;
      } else if (curHr < 18) {
        this.timetype = store.locale.lang.search_bar[0].timeTypes[0].afternoon
        this.timeInt = 2;
      } else {
        this.timetype = store.locale.lang.search_bar[0].timeTypes[0].evening
        this.timeInt = 3;
      }

      /*
      const data = await fetch(`https://dot.ender.site/v${store.api}/weather?d=${dt}`);
      const json = await data.json();

      this.location = json.city;
      this.temp = json.temp;
      this.summary = json.weather;
      this.icon = json.icon;
      this.timetype = json.timetype;

      if (this.timetype == "Day") {
        this.timeInt = 0;
      }
      if (this.timetype == "Morning") {
        this.timeInt = 1;
      }
      if (this.timetype == "Afternoon") {
        this.timeInt = 2;
      }
      if (this.timetype == "Night") {
        this.timeInt = 3;
      } 
      this.timeInt = 2;
     */

      this.loaded = true;
    }
    catch (e) {
      console.log(e)
    }
  }

}
