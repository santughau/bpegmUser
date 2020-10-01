import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { LoadingController } from "@ionic/angular";

@Injectable({
  providedIn: "root",
})
export class YoutubeServiceService {
  channelId = "UCrwRhQA7odF09VCfgXrcucQ";
  api = "AIzaSyDLJoFpXVc-d-s3LATRMKvwCOj0hp_s0gk";

  constructor(
    private http: HttpClient,
    public loadingController: LoadingController
  ) {}
  playlist(id?) {
    return this.http.get(
      "https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=" +
        this.channelId +
        "&key=" +
        this.api +
        "&maxResults=50"
    );
  }

  playlistList(playlistId) {
    return this.http.get(
      "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=" +
        playlistId +
        "&key=" +
        this.api +
        "&maxResults=50"
    );
  }

  getChannelData() {
    return this.http.get(
      "https://www.googleapis.com/youtube/v3/channels?part=statistics%2Csnippet&id=" +
        this.channelId +
        "&key=" +
        this.api
    );
  }

  getVideoDetails(id) {
    return this.http.get(
      "https://www.googleapis.com/youtube/v3/videos?part=statistics%2Csnippet&id=" +
        id +
        "&key=" +
        this.api
    );
  }

  getAllVideos() {
    return this.http.get(
      "https://www.googleapis.com/youtube/v3/activities?part=contentDetails%2Csnippet&channelId=" +
        this.channelId +
        "&key=" +
        this.api +
        "&maxResults=50"
    );
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message:
        "कृपया थोडा वेळ वाट पहा आम्ही सर्वर  वरून  माहिती घेऊन  येत  आहोत ..... ",
    });
    await loading.present();
  }

  playlistList_page(pageToken) {
    return this.http.get(
      "https://www.googleapis.com/youtube/v3/activities?part=contentDetails%2Csnippet&channelId=" +
        this.channelId +
        "&key=" +
        this.api +
        "&maxResults=50&pageToken=" +
        pageToken
    );
  }

  GetFullplaylist(pageToken) {
    return this.http.get(
      "https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=" +
        this.channelId +
        "&key=" +
        this.api +
        "&maxResults=50&pageToken=" +
        pageToken
    );
  }

  GetFullplaylistList(playlistId, pageToken) {
    return this.http.get(
      "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=" +
        playlistId +
        "&key=" +
        this.api +
        "&maxResults=50&pageToken=" +
        pageToken
    );
  }

  getPost(): Observable<any> {
    return this.http.get("https://bpegm.co/bpegmRestApi/baliram.php");
  }
}
