import React from 'react';
import { Card } from 'react-bootstrap';
import { Issue } from '../../types/Issue';
import { formatDate } from '../../services/formatDate';
import { useDrag } from 'react-dnd';
import { ItemTypes } from '../../types/ItemTypes';

type Props = {
  issue: Issue;
};

// const ItemTypes = {
//   ISSUE: 'issue',
// };

const IssueCard: React.FC<Props> = ({ issue }) => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.ISSUE,
    item: {id: issue.id},
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  console.log(isDragging);

  return (
      <Card
        ref={drag}
        style={{
        opacity: isDragging ? 0.25 : 1,
        cursor: 'pointer',
        border: isDragging ? '1px solid #ccc' : '2px solid #ccc',
        marginBottom: '8px',
        padding: '8px',
        backgroundColor: 'white',
        }}
      >
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
