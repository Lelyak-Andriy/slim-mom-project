import { createReducer } from '@reduxjs/toolkit';
import moment from 'moment'
import setDate from './calendarAction';

const dateReducer = createReducer(moment(Date.now()).format("YYYY-MM-DD"), {
  [setDate]: (state, action) => action.payload
})

export default dateReducer