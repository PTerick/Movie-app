import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApimovieService } from 'src/app/services/apimovie.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  data = null
  constructor(private route: ActivatedRoute, private api: ApimovieService) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id')
     this.api.getdetails(id).subscribe(item =>
      this.data = item)
     

  }

  openWeb(){
    window.open(this.data.Website,'_blank')
  }

}
