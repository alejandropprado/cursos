import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

type GenderType = 'male' | 'female';
type ClientType = { name: string; gender: GenderType };

@Component({
  selector: 'app-uncommon-pages',
  templateUrl: './uncommon-pages.component.html',
  styleUrls: ['./uncommon-pages.component.css'],
})
export class UncommonPagesComponent {
  public name: string = 'Alejandro';
  public gender: GenderType = 'male';
  public invitationRecord: Record<GenderType, string> = {
    female: 'invitarla',
    male: 'invitarlo',
  };
  public clients: ClientType[] = [
    {
      name: 'Maria',
      gender: 'female',
    },
    {
      name: 'Juan',
      gender: 'male',
    },
    {
      name: 'Florencia',
      gender: 'female',
    },
    {
      name: 'Roberto',
      gender: 'male',
    },
  ];
  public clientsRecords: Record<string, string> = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando',
    other: 'tenemos # clientes esperando',
  };

  public get clientsName(): string[] {
    return this.clients.map((client) => client.name);
  }

  public get person(): ClientType {
    return this.clients[0];
  }

  public myObservableTimer = interval(1000).pipe(
    tap({
      next: (value) => console.log(value),
    })
  );

  public promiseValue: Promise<string> = new Promise((resolve) => {
    setTimeout(() => {
      return resolve('Aqui la data');
    }, 3000);
  });

  onChangeClient(): void {
    if (this.gender === 'male') {
      this.name = 'Melisa';
      this.gender = 'female';
      return;
    }

    this.name = 'Alejandro';
    this.gender = 'male';
  }

  onDeleteClient() {
    this.clients.pop();
  }
}
