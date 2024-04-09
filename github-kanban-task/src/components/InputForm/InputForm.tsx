/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Form } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchIssues } from '../../redux/slices/issuesSlice';

function InputForm() {
  const [inputValue, setInputValue] = useState('');

  const dispatch = useAppDispatch();
  const issues = useAppSelector((state) => state.issues.issues);

  const handleFetchIssues = () => {
    const url = inputValue;
    dispatch(fetchIssues({ url }));
  };

  useEffect(() => {
    console.log('Issues:', issues);
  }, [issues]);

  const handleChange = (event: any) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {

    handleFetchIssues()

    // getIssues(inputValue).then(issues => {
    //   console.log('List of issues:', issues);
    // });
    setInputValue('');
  };
  return (
    <>
      <Form.Label htmlFor="inputPassword5">Input form</Form.Label>
      <Form.Control
        type="text"
        id="inputPassword5"
        value={inputValue}
        aria-describedby="passwordHelpBlock"
        onChange={handleChange}
      />
      <Button variant="secondary" onClick={handleClick}>
        Load Issues
      </Button>{' '}
    </>
  );
}

export default InputForm;
