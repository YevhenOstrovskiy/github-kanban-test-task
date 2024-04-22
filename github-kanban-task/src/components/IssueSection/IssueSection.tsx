/* eslint-disable no-console */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Issue } from '../../types/Issue';
import IssueCard from '../IssueCard/IssueCard';

interface IssueSectionProps {
  issues: Issue[];
  category: string;
}

const IssueSection: React.FC<IssueSectionProps> = ({ issues, category }) => {
  const filteredIssues = issues.filter(issue => issue.status === category);

  return (
    <Container>
      <Row>
        {filteredIssues.map((issue) => (
          <Col
            className="mb-3"
            key={issue.id}
            xs={12} sm={6}
            md={1} lg={12}
          >
            <IssueCard issue={issue} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default IssueSection;
