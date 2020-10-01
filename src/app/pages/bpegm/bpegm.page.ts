import { Component, OnInit } from "@angular/core";
import { LoadingController } from "@ionic/angular";
import { YoutubeServiceService } from "src/app/youtube-service.service";
import { InAppBrowser } from "@ionic-native/in-app-browser/ngx";

@Component({
  selector: "app-bpegm",
  templateUrl: "./bpegm.page.html",
  styleUrls: ["./bpegm.page.scss"],
})
export class BpegmPage implements OnInit {
  data = [];
  constructor(
    public loadingController: LoadingController,
    private service: YoutubeServiceService,
    private iab: InAppBrowser
  ) {}

  ngOnInit() {
    this.presentLoading();
    this.service.getPost().subscribe((res) => {
      this.data = res;
      this.loadingController.dismiss();
    });
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: "my-custom-class",
      message:
        "कृपया थोडा वेळ वाट पहा आम्ही सर्वर  वरून  माहिती घेऊन  येत  आहोत ..... ",
    });
    await loading.present();
  }

  detailsPage(id) {
    console.log("https://bpegm.in/wazirx.php?id=" + id);
    const browser = this.iab.create(
      "https://bpegm.in/wazirx.php?id=" + id,
      "_system"
    );
    browser.show();
  }
}
