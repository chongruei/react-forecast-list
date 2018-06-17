import React from 'react'
import _ from 'lodash'
import { Sparklines, SparklinesLine } from 'react-sparklines'

const average = (data) => {
  return _.round(_.sum(data)/data.length)
}

export default (props) => {
  return (
    <div> 
      <Sparklines height={80} width={120} data={props.data}>
        <SparklinesLine color={props.color} />
      </Sparklines>
      <div>{average(props.data)} {props.units}</div>
    </div>
  )
}