import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import {Platform} from '@ionic/angular';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {

  public urlPhoto:string;
  public showPhoto:boolean = false;

  constructor(private camera: Camera,
    public platform: Platform, 
    public toastController: ToastController 
    
    ) { }

  ngOnInit() {
  }

  public takePhoto(){

    if(this.platform.is('hybrid')){

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     let base64Image = 'data:image/jpeg;base64,' + imageData;
     this.showPhoto=true;
     this.urlPhoto=base64Image;
     console.log(`imageData_*:${this.urlPhoto}, base64*_: ${base64Image} `);
    }, (err) => {
      console.log(`Camera issue:" + ${err}`);
     // Handle error
    });



  }else{
    this.presentToast();
  }

}

async presentToast() {
  const toast = await this.toastController.create({
    message: '<ion-text style="font-weight:bold;">Estas en el navegador, no puedes tomar fotos</ion-text>',
    duration: 2000, 
    color:'danger'
  });
  toast.present();
}
}
