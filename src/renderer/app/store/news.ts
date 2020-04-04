import { observable } from 'mobx';
import { ipcRenderer, remote } from 'electron';
import console = require('console');
import cheerio = require("cheerio");
import store from '.';
const editJsonFile = require("edit-json-file");

export class NewsStore {

  @observable
  public loaded: boolean = false;

  @observable
  public list: any = [];

  @observable
  public shouldLoadNews: boolean = false;

  public $: any;

  public async loadNews(id, el) {
    //if(id == 0) return;

    var $ = this.$;
    try {
      var obj = {
        url: "https://news.google.com/" + $("article > h3 > a", el).first().attr("href"),
        favicon: `https://www.google.com/s2/favicons?domain=` + $("div > div > a", el).first().text(),
        source: $("article > div > div > a", el).first().text(),
        title: $("article > h3 > a", el).first().text(),
        wholeTitle: $("article > h3 > a", el).first().text(),
        desc: $("article > div > span", el).first().text(),
        image: $("figure > img", el).first().attr("src"),
        publishDate: $("time", el).first().text(),
        key: id
      }
      if(obj.title){
        this.list.push(obj);
      }
    } catch(e){
      console.error(e);
    }
  }

  public async load() {
    const data = await fetch(`https://cors-anywhere.herokuapp.com/https://news.google.com/topstories`);
    const body = await data.text();
    const $ = cheerio.load(body);

    console.log("Fetching news");

    const prefix = "body > c-wiz > div > div > div > div > main > c-wiz > div > div";
    var news = $(prefix);

    this.$ = $;

    console.log("Looping news");

    news.each((id, el) => this.loadNews(id, el));
  }

  public async loadOld() {
    const data = await fetch(`https://dot.ender.site/v${store.api}/news`);
    const json = await data.json();

    console.log(data)

    this.shouldLoadNews = false;

    this.list = [];

    if(json.status == "ok") {

      for (var i = 0; i < json.articles.length; i++) {

        if(json.articles[i].urlToImage) {

          if(i != 5) {

            if(json.articles[i].title.length >= 60) {
              var lastIndex = json.articles[i].title.lastIndexOf("-");
              if(json.articles[i].title.substring(0, lastIndex).replace('\n', ' ').substring(0, 60).slice(-1) == " ") {
                var title = json.articles[i].title.substring(0, lastIndex).replace('\n', ' ').substring(0, 60-1) + '...'
              }
              else {
                var title = json.articles[i].title.substring(0, lastIndex).replace('\n', ' ').substring(0, 60) + '...'
              }
            }
            else {
              var title = `${json.articles[i].title.substring(0, lastIndex).replace('\n', ' ')}`;
            }
    
            this.list.push({
              url: json.articles[i].url,
              favicon: `https://www.google.com/s2/favicons?domain=${json.articles[i].url}`,
              source: json.articles[i].source.name.split(".")[0],
              title: title,
              wholeTitle: json.articles[i].title,
              desc: json.articles[i].description,
              image: `${json.articles[i].urlToImage}`,
              publishDate: json.articles[i].publishedAt,
              key: i
            })

          }
          else {
            break;
          }

        }
      }
    
    }
  }

  public async loadAll() {
    const data = await fetch(`https://dot.ender.site/v${store.api}/news`);
    const json = await data.json();

    this.shouldLoadNews = false;

    this.list = [];

    console.log(data)

    if(json.status == "ok") {

      for (var i = 0; i < json.articles.length; i++) {

        if(i != json.articles.length) {
          if(json.articles[i].urlToImage) {

            if(json.articles[i].title.length >= 60) {
              var lastIndex = json.articles[i].title.lastIndexOf("-");
              if(json.articles[i].title.substring(0, lastIndex).replace('\n', ' ').substring(0, 60).slice(-1) == " ") {
                var title = json.articles[i].title.substring(0, lastIndex).replace('\n', ' ').substring(0, 60-1) + '...'
              }
              else {
                var title = json.articles[i].title.substring(0, lastIndex).replace('\n', ' ').substring(0, 60) + '...'
              }
            }
            else {
              var title = `${json.articles[i].title.substring(0, lastIndex).replace('\n', ' ')}`;
            }
    
            this.list.push({
              url: json.articles[i].url,
              favicon: `https://www.google.com/s2/favicons?domain=${json.articles[i].url}`,
              source: json.articles[i].source.name.split(".")[0],
              title: title,
              wholeTitle: json.articles[i].title,
              desc: json.articles[i].description,
              image: `${json.articles[i].urlToImage}`,
              publishDate: json.articles[i].publishedAt,
              key: i
            })

          }
        }

        }
        
      }
    
    }

}