import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Letters } from "../../config/config";

const AlphabetChartSection = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    justify-content: center;
    height: 80px;s
  
`

const AlphabetChart = () => {
    return(
        <AlphabetChartSection>
         <img src="../abc1280x960.png" alt="Alphabet" style={{width: '1000px', height: 'auto'}} />
                
        </AlphabetChartSection>
    )
}

export default AlphabetChart