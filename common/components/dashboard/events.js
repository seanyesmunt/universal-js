import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import Event from './event'

const Events = (props) => {
  const { events } = props
  return (
    <div className={css(styles.events)}>
      <h2>User created events</h2>
      {
        events.length && events.map((event) => <Event {...event} />)
      }
    </div>
  )
}
const styles = StyleSheet.create({
  events: {

  }
})

export default Events