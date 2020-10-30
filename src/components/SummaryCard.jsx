// import Card from "react-bootstrap/Card";
import React from 'react';
import { Card, CardHeader, CardBody, CardFooter } from "react-simple-card";
export default function SummaryCard (props){
    const styles = {
      width: 200,
      background: "80A1C1",
    };
    // console.log("youtube id",props.youtubeId)
        return (
          <>
            <Card style={styles} bgColor="grey">
              <CardHeader>Mnemonic Summary</CardHeader>
              <CardBody>Your Input: {props.query}</CardBody>
              <CardBody>Matching Phrase:{props.matchingPhrase} </CardBody>
              <iframe
              title= "youtube-vid"
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${props.youtubeId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <CardFooter>Play Song:</CardFooter>
            </Card>
          </>
        );

}
