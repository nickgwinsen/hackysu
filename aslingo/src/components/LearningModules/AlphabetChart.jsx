import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Letters } from "../../config/config";
const AlphabetChartSection = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    justify-content: center;

    h1 {
        font-size: 60px;
        margin-top: 0;
    }

    span {
        color: var(--main-blue);
    }
`

const AlphabetChart = () => {
    return(
        <AlphabetChartSection>
         <h1> Hello </h1>
        </AlphabetChartSection>
    )
}

export default AlphabetChart