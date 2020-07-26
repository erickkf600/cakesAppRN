import styled from 'styled-components/native'
import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
//STYLED COMPONENTS
export const Categorie = styled.View`
    background: #FACCC0;
    width: 100%;
    height: 70px;
    margin: 30px auto;
    border-radius: 15px;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
   box-shadow: 0px 4px 8px rgba(0,0,0,0.9);
`;

export const styles = StyleSheet.create({
    warapper: {
        flex: 1,
        alignItems: 'center',
    },
    container:{
        margin: 'auto',
        flex: 1,
    },
    slideItem:{
        marginRight: wp('8.5%'),
    }
});


