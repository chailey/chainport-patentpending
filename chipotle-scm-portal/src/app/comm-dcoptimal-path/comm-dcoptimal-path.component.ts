import { Component, OnInit, ViewChild, Input } from '@angular/core';
import {} from '@types/googlemaps';

@Component({
  selector: 'app-comm-dcoptimal-path',
  templateUrl: './comm-dcoptimal-path.component.html',
  styleUrls: ['./comm-dcoptimal-path.component.css']
})
export class CommDcoptimalPathComponent implements OnInit {
  map:google.maps.Map;
  marker:any;
  @ViewChild('gmap') gmapElement:any;

  @Input() mapResult:any;

  constructor() { }

  ngOnInit() {
  }
  ngChanges(){
    var mapProp = {
      center: new google.maps.LatLng(37.774546, -122.433523),
      zoom: 13,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
  }
 

  this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);

  // var heatmap = new google.maps.visualization.HeatmapLayer({
  //   data: this.getPoints(),
  //   map: this.map
  // });

  this.map.data.addListener('click', function (event) {
    console.log("hello world");
  });
  var latLng = new google.maps.LatLng(-8.064903, -34.896872);
  console.log("tee",latLng);

  this.map.data.addListener("click", function () {
    console.log("clicked me");
  });

  var locations = [
    {"Id":'Marker 1', "coord":new google.maps.LatLng(37.783, -122.447),"message":"ivory trade"},
    {"Id":'Marker 2', "coord":new google.maps.LatLng(37.782, -122.445),"message":"exotic animal trade"},
  ];

  var secretMessages = ['This', 'is', 'the', 'secret', 'message'];
  for (var i = 0; i < locations.length; i++) {
    var t = locations[i].coord;
   
    console.log("t,y", t);
    this.marker = new google.maps.Marker({
      position: t,
      map: this.map
    });

    this.attachSecretMessage(this.marker, locations[i].message);
    this.marker.addListener("click",function(e){
      console.log("this is great",e);
    });
   // heatmap.setMap(this.map);
  }
}

ngOnInit() {
}

private attachSecretMessage(marker, secretMessage) {
  var infowindow = new google.maps.InfoWindow({
    content: secretMessage
    
  });

  marker.addListener('click', function() {
    infowindow.open(marker.get('map'), marker);
  
  });
}
private getPoints() {
  return [
    { location: new google.maps.LatLng(37.782, -122.447), weight: 0.5 },
    new google.maps.LatLng(37.782, -122.445),
    { location: new google.maps.LatLng(37.782, -122.443), weight: 2 },
    { location: new google.maps.LatLng(37.782, -122.441), weight: 3 },
    { location: new google.maps.LatLng(37.782, -122.439), weight: 2 },
    new google.maps.LatLng(37.782, -122.437),
    { location: new google.maps.LatLng(37.782, -122.435), weight: 0.5 },

    { location: new google.maps.LatLng(37.785, -122.447), weight: 3 },
    { location: new google.maps.LatLng(37.785, -122.445), weight: 2 },
    new google.maps.LatLng(37.785, -122.443),
    { location: new google.maps.LatLng(37.785, -122.441), weight: 0.5 },
    new google.maps.LatLng(37.785, -122.439),
    { location: new google.maps.LatLng(37.785, -122.437), weight: 2 },
    { location: new google.maps.LatLng(37.785, -122.435), weight: 3 }
  ]
}
  

}
