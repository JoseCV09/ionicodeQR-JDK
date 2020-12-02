import { Component } from '@angular/core';
import { BarcodeScanner } from "@ionic-native/barcode-scanner/ngx";
 
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  dataCodificada: any;
  dataScan: {};

  constructor(private barcodeScanner: BarcodeScanner) {

  }

  readCodeScan() {
    this.barcodeScanner.scan().then(barcodeData => {
        this.dataScan = barcodeData;
      })
      .catch(err => {
        console.log("Error", err);
      });
  }
 
  encodeCode() {
    this.barcodeScanner.encode(this.barcodeScanner.Encode.TEXT_TYPE, this.dataCodificada).then(
        encodedData => {
          this.dataCodificada = encodedData;
        },
        err => {
          console.log("Un error ha ocurrido: " + err);
        }
      );
  }

}
