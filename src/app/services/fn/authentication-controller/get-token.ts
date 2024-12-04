/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AuthRequestDto } from '../../models/auth-request-dto';
import { AuthResponseDto } from '../../models/auth-response-dto';

export interface GetToken$Params {
      body: AuthRequestDto
}

export function getToken(http: HttpClient, rootUrl: string, params: GetToken$Params, context?: HttpContext): Observable<StrictHttpResponse<AuthResponseDto>> {
  const rb = new RequestBuilder(rootUrl, getToken.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<AuthResponseDto>;
    })
  );
}

getToken.PATH = '/auth/login';
