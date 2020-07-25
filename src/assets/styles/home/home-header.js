import styled from 'styled-components/native'
import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
//STYLED COMPONENTS
export const Head = styled.View`
    width: 85%;
    height: 55px;
    background: #fff;
    margin: 70px auto 30px;
`;

export const Search = styled.View`
    display: flex;
    flex: 1;
    flex-direction: row;
    padding: 0 10px;
    justify-content: flex-start;
    align-items: center;
`;

export const styles = StyleSheet.create({
    input:{
        height: 40,
        borderRadius: 20,
        backgroundColor: "#fff",
        shadowColor: "rgba(0,0,0,0.47)",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 15,
    }
});


