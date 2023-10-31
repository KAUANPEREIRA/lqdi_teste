import styled from "styled-components";

export const ContentFormContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: auto;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DivExperienceProject = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Plus Jakarta Sans", sans-serif;
  width: 419px;
  height: 166px;

  h1 {
    font-weight: 600;
    font-size: 32px;
  }

  span {
    font-weight: 500;
    font-size: 20px;
    color: rgba(8, 17, 30, 1);
  }
`;

export const FormContent = styled.form`
  display: flex;
  flex-direction: column;

  label {
    font-family: "Plus Jakarta Sans", sans-serif;
    font-size: 15px;
    font-weight: 500;
    color: rgba(16, 17, 19, 1);
  }
`;

export const InputRegister = styled.input`
  width: 480px;
  height: 47px;
  background-color: rgba(241, 244, 249, 1);
  border-radius: 60px;
  border: 0px;
  outline: 0;
`;

export const BoxForm = styled.div``;

export const InputTextArea = styled.textarea`
  width: 480px;
  height: 192px;
  border-radius: 10px;
  background-color: rgba(241, 244, 249, 1);
  border: 0;
  outline: 0;
`;

// export const InputFile = styled.input`
//   width: 480px;
//   height: 47px;
//   border: 2px dashed rgba(63, 63, 63, 0.4);
//   border-radius: 10px;

//   button {
//     background-color: red;
//   }
// `;

export const ButtonSubmitt = styled.button`
  margin-top: 40px;
  margin-bottom: 40px;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-weight: 700;
  width: 122px;
  color: #fff;
  height: 52px;
  cursor: pointer;
  border: 0;
  background-color: black;
  border-radius: 40px;
`;

export const CustomFileInput = styled.label`
  width: 441px;
  height: 40px;
  background-color: rgba(241, 244, 249, 1);
  color: #fff;
  border: none;
  border-radius: 5px;
  text-align: center;
  line-height: 40px;
  cursor: pointer;
`;

export const InputFile = styled.input`
  display: none; /* Oculta o input original */
`;
