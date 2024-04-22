import { Container, Row, Col, Card } from 'react-bootstrap';
import { CategoryE } from '../../types/Category';
import IssueSection from '../IssueSection/IssueSection';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../../types/ItemTypes';
import { Issue } from '../../types/Issue';
import { useState } from 'react';
import { issuesSlice } from '../../redux/slices/issuesSlice';

const Board: React.FC = () => {
  const issues = useAppSelector((state) => state.issues.issues);
  const dispatch = useAppDispatch();
  const [currentCategory, setCurrentCategory] = useState<CategoryE>(
    CategoryE.todo,
  );
  const [currentId, setCurrentId] = useState<number | null>(null);

  function handleDragOver(
    e: React.DragEvent<HTMLElement>,
    category: CategoryE,
  ) {
    e.preventDefault();
    setCurrentCategory(category);
    if (currentId) {
      dispatch(
        issuesSlice.actions.changeCategoryById({
          id: currentId,
          category: currentCategory,
        }),
      );
    }
  }

  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.ISSUE,
    drop: (item: Issue) => addItemToSection(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      currentCategory: monitor.getItemType() as CategoryE,
    }),
  });

  function addItemToSection(id: number) {
    setCurrentCategory(currentCategory);
    setCurrentId(id);
    console.log('dropped', id, currentCategory);
  }

  return (
    <Container fluid ref={drop}>
      <Row>
        {Object.values(CategoryE).map((category, index) => (
          <Col
            key={index}
            className="mb-3"
            md={4}
            onDragOver={(e) => handleDragOver(e, category)}
          >
            <Card
              style={{
                height: '100%',
                overflowY: 'auto',
                border: isOver ? '1px solid #ccc' : '2px solid #ccc',
              }}
            >
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
