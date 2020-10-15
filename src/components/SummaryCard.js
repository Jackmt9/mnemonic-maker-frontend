// import Card from "react-bootstrap/Card";
import React from 'react';
import { Card, CardHeader, CardBody, CardFooter } from "react-simple-card";
export default function SummaryCard (props){
    const styles = {
      width: 200,
      background: "80A1C1",
    };
        return (
          <>
            <Card style={styles} bgColor="grey">
              <CardHeader>Mnemonic Summary</CardHeader>
              <CardBody>Your Input: {props.query}</CardBody>
              <CardBody>Matching Phrase:{props.matchingPhrase} </CardBody>
              <CardFooter>Play Song:</CardFooter>
            </Card>
          </>
        );

}
