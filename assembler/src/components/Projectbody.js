import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Projectbody(props) {
  let projectId = props.id.toString();
  let projectLink = "/codeeditor/"+projectId;
  return (
    <Card style={{
    width: '20rem',
    'margin-block': '24px',
   'margin-left': '24px'
 }}>
    <Card.Body style={{'box-shadow':'0px 1px 20px 9px'}}>
      <Card.Title>{props.projectName}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{props.projectName}</Card.Subtitle>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Link to={projectLink}><Button variant="warning">View project</Button></Link>
      
    </Card.Body>
  </Card>
  );
}

export default Projectbody;