import React from 'react';
import { Card } from 'react-bootstrap';
import { Issue } from '../../types/Issue';
import { formatDate } from '../../services/formatDate';

type Props = {
  issue: Issue;
};

const IssueCard: React.FC<Props> = ({ issue }) => {
  return (
    <Card draggable={true}>
      <Card.Body>
        <Card.Title>{issue.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Issue #{issue.number}
        </Card.Subtitle>
        <Card.Text>Opened: {formatDate(issue.created_at)}</Card.Text>
        <Card.Text>Role: {issue.author_association}</Card.Text>
        <Card.Text>Comments: {issue.comments}</Card.Text>
        <Card.Text>Category: {issue.status}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default IssueCard;
