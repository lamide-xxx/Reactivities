import React from "react";
import { Button, ButtonGroup, Card, CardContent, CardDescription, CardHeader, CardMeta, Image } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";

interface Props{
    activity : Activity;
    cancelSelectActivity : () => void;
    openForm : (id : string) => void;
}

export default function ActivityDetails({activity, cancelSelectActivity, openForm} : Props){
    return (
        <Card fluid>
            <Image src={`/assets/categoryImages/${activity.category}.jpg`} />
            <CardContent>
                <CardHeader>{activity.title}</CardHeader>
                <CardMeta>
                    <span>{activity.date}</span>
                </CardMeta>
                <CardDescription>
                    <div>{activity.description}</div>
                </CardDescription>
            </CardContent>
            <CardContent extra>
                <ButtonGroup widths={2}>
                    <Button onClick={()=> openForm(activity.id)} basic color='blue' content = 'Edit'/>
                    <Button onClick={cancelSelectActivity} basic color='grey' content = 'Cancel'/>
                </ButtonGroup>
            </CardContent>
        </Card>

    )
}