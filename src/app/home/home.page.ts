import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  slideOpt = {
    initialSlide: 0,
    slidesPerView: 1,
    centerdSlides: true,
    speed: 600
  };
  slides = [
    { title: "This title", subtitle: "Subtitle", description: "Aqui descriotion", icon: "play" },
    { title: "This title", subtitle: "Subtitle", description: "Aqui descriotion", icon: "play" },
    { title: "This title", subtitle: "Subtitle", description: "Aqui descriotion", icon: "play" }
  ];
  constructor() { }
}
