import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { Http, Response } from '@angular/http'
import { Action } from 'redux';
import * as _ from 'lodash'

import { IUsersState } from '../../app.state'

export interface IUsersAction extends Action {
  names?: string[]
}

@Injectable()
export class UsersActions {

  static FETCH_USERS         = 'fetch users';
  static FETCH_USERS_SUCCESS = 'fetch users success';
  static FETCH_USERS_FAIL    = 'fetch users fail';

  constructor(private ngRedux: NgRedux<IUsersState>, public http: Http) {}

  fetchUsers(): void {
    this.ngRedux.dispatch({type: UsersActions.FETCH_USERS})
    this.fetchUsersAjax()
  }

  fetchtUsersSuccess(usersList: any[]): void {
    this.ngRedux.dispatch({
      type: UsersActions.FETCH_USERS_SUCCESS,
      names: usersList
    })
  }

  fetchUsersFail(): void {
    this.ngRedux.dispatch({type: UsersActions.FETCH_USERS_FAIL})
  }

  fetchUsersAjax(): void {
    const song1 =  {"title":"Abba - The Winner Takes It All","author_name":"AbbaVEVO","height":344,"width":459,"thumbnail_width":480,"author_url":"https:\/\/www.youtube.com\/user\/AbbaVEVO","thumbnail_height":360,"type":"video","thumbnail_url":"https:\/\/i.ytimg.com\/vi\/92cwKCU8Z5c\/hqdefault.jpg","provider_url":"https:\/\/www.youtube.com\/","html":"\u003ciframe width=\"459\" height=\"344\" src=\"https:\/\/www.youtube.com\/embed\/92cwKCU8Z5c?feature=oembed\" frameborder=\"0\" gesture=\"media\" allowfullscreen\u003e\u003c\/iframe\u003e","provider_name":"YouTube","version":"1.0"};
    const song2 =  {"height":344,"thumbnail_width":480,"thumbnail_url":"https:\/\/i.ytimg.com\/vi\/xFrGuyw1V8s\/hqdefault.jpg","title":"Abba - Dancing Queen","type":"video","thumbnail_height":360,"width":459,"provider_url":"https:\/\/www.youtube.com\/","html":"\u003ciframe width=\"459\" height=\"344\" src=\"https:\/\/www.youtube.com\/embed\/xFrGuyw1V8s?feature=oembed\" frameborder=\"0\" gesture=\"media\" allowfullscreen\u003e\u003c\/iframe\u003e","provider_name":"YouTube","version":"1.0","author_name":"AbbaVEVO","author_url":"https:\/\/www.youtube.com\/user\/AbbaVEVO"};
    const names: any[] = [song1,song2];
    this.fetchtUsersSuccess(names);
    // this.http.request('https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=92cwKCU8Z5c')
    //   .subscribe((res: Response ) => {
    //     const objs: any[] = res.json()
    //     debugger
    //     const names: any[] = []
    //   }, (err: any) => {
    //     console.error('Failed to get users')
    //     this.fetchUsersFail()
    //   })
  }

}
