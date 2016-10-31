import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class EnvService {

  env = environment;

  constructor() { }

  getEnv = function() {
    return this.env;
  }

}
