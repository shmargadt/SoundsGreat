import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { Action } from 'redux';

import { IUserActivityState } from '../../app.state'

export interface IUserActivityActions extends Action {
  activities?: any[]
}

@Injectable()
export class UserActivityActions {


  static FETCH_USER_ACTIVITY = 'FETCH_USER_ACTIVITY';
  static FETCH_TEST = 'FETCH_TEST';

  constructor(private ngRedux: NgRedux<IUserActivityState>) {}

  fetchUserActivity(): void {
    const activity1 =  {"title":"Abba - The Winner Takes It All","author_name":"AbbaVEVO","height":344,"width":459,"thumbnail_width":480,"author_url":"https:\/\/www.youtube.com\/user\/AbbaVEVO","thumbnail_height":360,"type":"video","thumbnail_url":"https:\/\/i.ytimg.com\/vi\/92cwKCU8Z5c\/hqdefault.jpg","provider_url":"https:\/\/www.youtube.com\/","html":"\u003ciframe width=\"459\" height=\"344\" src=\"https:\/\/www.youtube.com\/embed\/92cwKCU8Z5c?feature=oembed\" frameborder=\"0\" gesture=\"media\" allowfullscreen\u003e\u003c\/iframe\u003e","provider_name":"YouTube","version":"1.0"};
    const activity2 =  {"height":344,"thumbnail_width":480,"thumbnail_url":"https:\/\/i.ytimg.com\/vi\/xFrGuyw1V8s\/hqdefault.jpg","title":"Abba - Dancing Queen","type":"video","thumbnail_height":360,"width":459,"provider_url":"https:\/\/www.youtube.com\/","html":"\u003ciframe width=\"459\" height=\"344\" src=\"https:\/\/www.youtube.com\/embed\/xFrGuyw1V8s?feature=oembed\" frameborder=\"0\" gesture=\"media\" allowfullscreen\u003e\u003c\/iframe\u003e","provider_name":"YouTube","version":"1.0","author_name":"AbbaVEVO","author_url":"https:\/\/www.youtube.com\/user\/AbbaVEVO"};
    const usersActivity: any[] = [activity1, activity2];
    this.ngRedux.dispatch({
      type: UserActivityActions.FETCH_USER_ACTIVITY,
      activities: usersActivity
    })
  }

  fetchTest() {
    this.ngRedux.dispatch({
      type: UserActivityActions.FETCH_TEST      
    })
  }

 
}
