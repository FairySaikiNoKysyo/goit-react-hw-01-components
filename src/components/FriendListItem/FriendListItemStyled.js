 import styled from 'styled-components'


export const Marker = styled.span`
display: block;
 width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color:${props => (props['data-status'] === 'true'? 'green' : 'red')};
 `