import { StyledSloganTitlte, StyledTitleOne } from "../../styles/typography"
import { StyledSloganContainer, StyledSloganSection } from "./style"

export const SloganSection = () => {
  return (
    <StyledSloganSection>
      <StyledSloganContainer>
        <StyledTitleOne titleStyle="large">Conectando pessoas,</StyledTitleOne>
        <StyledSloganTitlte titleStyle="small">Potencializando negócios</StyledSloganTitlte>
      </StyledSloganContainer>
    </StyledSloganSection>
  )
}