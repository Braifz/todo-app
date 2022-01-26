import styled from "styled-components";

const Container = styled.div`
  display: flex;
  background-color: #eee;
  text-align: center;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 2px 2px 2px rgb(0, 0, 0, 0.2);
  margin: 10px 0;
`;

const WrapperTitle = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const TextWrap = styled.div`
  width: 90%;
`;

const Button = styled.button`
  height: 30px;
  width: 50px;
  margin: 5px;
  font-size: 0.8rem;
  cursor: pointer;
  box-shadow: 1px 2px 2px rgb(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const ButtonDone = styled(Button)`
  border: 2px solid green;
  color: green;
  animation: 1s ease;
  &:hover {
    background-color: green;
    color: white;
  }
`;

const ButtonDelete = styled(Button)`
  border: 2px solid red;
  color: red;
  animation: 1s ease;
  &:hover {
    background-color: red;
    color: white;
  }
`;

const Task = ({ props }) => {
  const deleteTask = (props) => {
    console.log(props);
  };

  return (
    <Container key={props.id}>
      <WrapperTitle>
        <h2> Title: {props.task}</h2>
        <div>
          <ButtonDone>done</ButtonDone>
          <ButtonDelete onClick={() => deleteTask(props)}>delete</ButtonDelete>
        </div>
      </WrapperTitle>
      <TextWrap>
        <p> Task: {props.text}</p>
      </TextWrap>
    </Container>
  );
};

export default Task;
