import React from 'react'
import { Grid, GridColumn } from 'semantic-ui-react'
import EventDetailedHeader from './EventDetailedHeader'
import EventDetailedInfo from './EventDetailedInfo'
import EventDetailedChat from './EventDetailedChat'
import EventDetailedSidebar from './EventDetailedSidebar'

const EventDetailedPage = () => {
    return (
        <Grid>
            <Grid.Column width={10}>
                <EventDetailedHeader/>
                <EventDetailedInfo/>
                <EventDetailedChat/>

            </Grid.Column>
            <GridColumn width={6}>
                <EventDetailedSidebar/>
            </GridColumn>
            </Grid>
    )
}

export default EventDetailedPage;
