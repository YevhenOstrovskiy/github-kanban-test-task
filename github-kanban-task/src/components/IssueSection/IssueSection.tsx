import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Issue } from '../../types/Issue';
import IssueCard from '../IssueCard/IssueCard';


interface IssueSectionProps {
  issues: Issue[];
}

const IssueSection: React.FC<IssueSectionProps> = ({ issues }) => {
  return (
    <Container>
      <Row>
        {issues.map((issue) => (
          <Col key={issue.id} xs={12} sm={6} md={4} lg={3}>
            <IssueCard issue={issue} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default IssueSection;
