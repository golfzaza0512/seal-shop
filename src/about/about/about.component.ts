import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  name: string;
  constructor(router: ActivatedRoute) {
    router.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("name")) {
        const name = paramMap.get("name");
        this.name = name;
      }
    });
  }

  ngOnInit() {
  }

}
