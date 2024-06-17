import React from "react";
import { Activity } from "../../../app/models/activity";
import { Button, Item, ItemContent, ItemDescription, ItemExtra, ItemGroup, ItemHeader, Label, Segment } from "semantic-ui-react";

interface Props{
    activities : Activity[];
    selectActivity : (id: string) => void;
    deleteActivity: (id : string) => void;
}

export default function ActivityList({activities, selectActivity, deleteActivity} : Props){
    return(
        <Segment>
            <ItemGroup divided>
                {activities.map(activity =>(
                    <Item key={activity.id}>
                        <ItemContent>
                            <ItemHeader as='a'>{activity.title}</ItemHeader>
                            <Item.Meta>{activity.date}</Item.Meta>
                            <ItemDescription>
                                <div>{activity.description}</div>
                                <div>{activity.city}, {activity.venue}</div>
                            </ItemDescription>
                            <ItemExtra>
                                <Button onClick={() => selectActivity(activity.id)} floated='right' content="View" color="blue"/>
                                <Button onClick={() => deleteActivity(activity.id)} floated='right' content="Delete" color="red"/>
                                <Label basic content={activity.category} />
                            </ItemExtra>
                        </ItemContent>
                    </Item>
                    
                ))}
            </ItemGroup>
        </Segment>
    )
}