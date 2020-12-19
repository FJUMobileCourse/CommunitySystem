import {StatusBar,StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 0,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        margin: 10,
    },
    title: {
      fontSize: 32,
    },
    comment: {
        flex: 1,
        flexDirection: 'row',
        justifyContent:'flex-end'
    },
    rowFront: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      height: 50,
  },
    rowBack: {
      alignItems: 'center',
      backgroundColor: '#fff',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft: 15,
  },
    backRightBtn: {
      alignItems: 'center',
      bottom: 0,
      justifyContent: 'center',
      position: 'absolute',
      top: 0,
      width: 65,
  },
  backRightBtnRight: {
      backgroundColor: '#7B7B7B',
      right: 0,
  },
  backImage: {
    width:20,
    height:20,
    margin:10
  },
  modal:{
    marginTop:50
  }



  });

  export default styles;