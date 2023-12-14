import { useContext } from "react"
import { ClientContext } from "../../providers/clientContext/clientContext"
import { StyledClientTitle, StyledTextOne } from "../../styles/typography";
import { StyleInfoClientSection, StyledInfosClient } from "./styles";


export const InfoClientSection = () => {
  const {client} = useContext(ClientContext);

  return(
    <StyleInfoClientSection>
      <StyledClientTitle titleStyle="bold">Cliente:</StyledClientTitle>
      <StyledInfosClient>
       <StyledTextOne>{client?.name}</StyledTextOne>
        <StyledTextOne>{client?.email}</StyledTextOne>
      </StyledInfosClient>
    </StyleInfoClientSection>
  )
}