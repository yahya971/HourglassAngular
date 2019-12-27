import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageConverterService {

  constructor() { }


  convertImage(imageUrl) {
    var file: any = imageUrl.target.files[0];
    
    var myReader: FileReader = new FileReader();
    var image;
    myReader.onloadend = (e) => {
      image = myReader.result;
      return image;
    }
    image= myReader.readAsDataURL(file);
    return image;
    
  }
}
