import React, {useState} from "react";
import { Card, Image, Button, Icon } from "semantic-ui-react";

function MovieCard(props) {
  
  const [disabled, setDisabled] = useState(false)
  
 const disable = () =>{
   setDisabled(true)
 }

  return (
    <>
      <Card.Group>
        <Card>
          <Card.Content>
            <Image floated="left" size="mini" src={props.movie.Poster} />
            <Card.Header>{props.movie.Title}</Card.Header>
            <Card.Meta>{props.movie.Year}</Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <div className="ui one button">
              <Button icon disabled={disabled} labelPosition="left" onClick={() => { {props.addNominee(props.movie)}disable()}} >
                <Icon name="trophy" />
                Nominate
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </>
  );
}

export default MovieCard;
