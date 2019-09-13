import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  item: {
      borderWidth: 1,
      borderColor: '#EFEFEF',
      flexDirection: 'row',
      margin: 15,
      marginTop: 0
  },
  itemImage: {
      height: 90,
      width: 90,
  },
  itemContent: {
      borderLeftWidth: 1,
      borderColor: '#EFEFEF',
      padding: 10
  },
  itemName: {
      fontSize: 20
  },
  itemLocation: {
      color: '#7800ff',
      fontSize: 16,
      marginTop: 5
  },
  itemDate: {
      fontSize: 14,
      marginTop: 5,
  },
});
