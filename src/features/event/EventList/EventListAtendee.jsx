import React, { Component } from 'react'
import { List, Image } from 'semantic-ui-react'

class EventListAtendee extends Component {
    render() {
        return (
           <List.Item>
               <Image as='a' size='mini' circular src='https://randomuser.me/api/portraits/lego/7.jpg'/>
           </List.Item>
        )
    }
}
export default EventListAtendee;