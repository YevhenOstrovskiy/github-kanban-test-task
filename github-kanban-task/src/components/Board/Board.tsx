import { Container, Row, Col, Card } from 'react-bootstrap';
import { CategoryE } from '../../types/Category';
import IssueSection from '../IssueSection/IssueSection';
import { useAppSelector } from '../../redux/hooks';

const Board: React.FC = () => {
  const issues = useAppSelector((state) => state.issues.issues);

  return (
    <Container fluid>
      <Row>
        {Object.values(CategoryE).map((category, index) => (
          <Col key={index} className="mb-3" md={4}>
            <Card style={{ height: '100%', overflowY: 'auto' }}>
              <Card.Header>{category}</Card.Header>
              <Card.Body>
                  <IssueSection issues={issues} category={category} />
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Board;
