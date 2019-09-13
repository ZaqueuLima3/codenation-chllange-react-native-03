import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
  },
  header: {
      alignItems: 'center',
      justifyContent: "space-between",
      flexDirection: 'row',
      borderBottomColor: '#7800ff',
      borderBottomWidth: 2,
      padding: 16,
      paddingTop: 55
  },
  headerImage: {
      height: 45,
      width: 250
  },
  title: {
      color: '#7800ff',
      fontSize: 30,
      padding: 16
  },
  profileImage: {
    borderRadius: 22,
    height: 45,
    width: 45
  },
});
