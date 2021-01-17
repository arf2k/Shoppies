import React, { useState } from "react";
import { Card, Image, Button, Icon } from "semantic-ui-react";

const MovieCard = (props) => {
  const [disabled, setDisabled] = useState(false);

  const disable = () => {
    setDisabled(true);
  };

  let button =
    props.parent === "results" ? (
      <Button
        disabled={disabled}
        onClick={() => {
          props.addNominee(props.movie);

          disable();
        }}
      >
        <Icon name="trophy" />
        Nominate
      </Button>
    ) : (
      <Button onClick={() => props.deleteNominee(props.movie)}>
        <Icon name="delete" />
        Remove
      </Button>
    );
  return (
    <>
      <Card.Group>
        <Card style={{ backgroundColor: "#63A25D" }}>
          <Card.Content>
            <Image floated="left" size="mini" src={props.movie.Poster} />
            <Card.Header>{props.movie.Title}</Card.Header>
            <Card.Meta>{props.movie.Year}</Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <div className="ui one button">{button}</div>
          </Card.Content>
        </Card>
      </Card.Group>
    </>
  );
};

export default MovieCard;
