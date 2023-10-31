import {
  BoxForm,
  ButtonSubmitt,
  Content,
  ContentFormContainer,
  CustomFileInput,
  DivExperienceProject,
  FormContent,
  InputFile,
  InputRegister,
  InputTextArea,
} from "./style";

export const ContentForm = () => {
  return (
    <ContentFormContainer>
      <Content>
        <DivExperienceProject>
          <h1>
            Viva uma nova experiência de comunicação integrada com foco nos
            resultados.
          </h1>
          <span>Escreva-nos sobre o seu projeto</span>
        </DivExperienceProject>
        <BoxForm>
          <FormContent>
            <label>Seu nome requerido</label>
            <InputRegister />

            <label>Seu email requerido</label>
            <InputRegister />

            <label>Assunto</label>
            <InputRegister />

            <label>Mensagem</label>
            <InputTextArea />
            <p>Anexe um documento explicando seu projeto</p>
            {/* <InputFile type="file" /> */}
            <CustomFileInput>
              Clique para selecionar um arquivo
              <InputFile type="file" />
            </CustomFileInput>

            <ButtonSubmitt>Enviar</ButtonSubmitt>
          </FormContent>
        </BoxForm>
      </Content>
    </ContentFormContainer>
  );
};
