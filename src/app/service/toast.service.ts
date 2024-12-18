import { Injectable } from '@angular/core';
import {ToastController} from "@ionic/angular";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastController: ToastController) {}

  public async showToast(config: { message: string, severity?: 'error' | 'warning' | 'success' }) {
    const {message, severity} = config;
    const toast = await this.toastController.create({
      message,
      color: severity,
      duration: environment.toast.duration,
      position: environment.toast.position,
    });

    await toast.present();
  }
}
