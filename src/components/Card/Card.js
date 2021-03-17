import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';

const InfoCard = ({title, text}) => {

  return (
    <Container maxWidth="xs">
      <Card data-testid="Card">
        <CardContent data-testid="CardContent">
          <Typography data-testid="TitleCard" variant="h3">{title}</Typography>
          <Typography data-testid="ParagraphCard" variant="body1">{text}</Typography>
        </CardContent>
        <CardActions data-testid="CardActions">
          <Button 
            data-testid="CardButton"
            color="primary" variant="contained">
            Apretame
          </Button> 
        </CardActions>
      </Card>
    </Container>
  );
};

InfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}
export default InfoCard;