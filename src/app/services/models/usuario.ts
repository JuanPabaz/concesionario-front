/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { GrantedAuthority } from '../models/granted-authority';
export interface Usuario {
  accountNonExpired?: boolean;
  accountNonLocked?: boolean;
  authorities?: Array<GrantedAuthority>;
  credentialsNonExpired?: boolean;
  enabled?: boolean;
  idUsuario?: number;
  nombreCompleto?: string;
  password?: string;
  role?: 'CLIENTE' | 'ADMIN' | 'SUPERVISOR';
  username?: string;
}
