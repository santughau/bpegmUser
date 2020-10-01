import { Component, OnInit } from "@angular/core";
import {
  AdMobFree,
  AdMobFreeBannerConfig,
  AdMobFreeInterstitial,
} from "@ionic-native/admob-free/ngx";
@Component({
  selector: "app-author",
  templateUrl: "./author.page.html",
  styleUrls: ["./author.page.scss"],
})
export class AuthorPage implements OnInit {
  constructor(private admobFree: AdMobFree) {}

  ngOnInit() {
    const bannerConfig: AdMobFreeBannerConfig = {
      id: "ca-app-pub-4151366218309776/7288424972",
      //isTesting: true,
      autoShow: true,
    };
    this.admobFree.banner.config(bannerConfig);

    this.admobFree.banner
      .prepare()
      .then(() => {})
      .catch((e) => console.log(e));
  }
}
