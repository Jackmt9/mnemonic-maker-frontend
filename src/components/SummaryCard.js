// import Card from "react-bootstrap/Card";
import React, {Button} from 'react';
import { Card, CardHeader, CardBody, CardFooter } from "react-simple-card";
export default function SummaryCard (props){
        return (
          <>
            <Card>
              <CardHeader>Mnemonic Summary</CardHeader>
        <CardBody>Your Input: {props.query}</CardBody>
              <CardBody>Matching Phrase:{props.matchingPhrase} </CardBody>
              <CardFooter>Play Song:</CardFooter>
            </Card>
          </>
        );

}
