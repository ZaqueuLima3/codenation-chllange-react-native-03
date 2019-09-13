import {
  StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
  loadingContent: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
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
    padding: 16,
  },
  profileTitle: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 16
  },
  profileImage: {
    borderRadius: 22,
    height: 45,
    width: 45
  },
  profileName: {
    color: '#7800ff',
    fontSize: 20,
    paddingLeft: 16
  },
  userContent: {
    backgroundColor: '#000',
    borderRadius: 2,
    margin: 16,
    padding: 16,
    marginTop: 0
  },
  contentLabel: {
    color: '#FFFFFF',
    fontSize: 11
  },
  contentText: {
    color: '#FFFFFF',
    fontSize: 14
  },
  mBottom: {
    marginBottom: 16
  },
  languageContent: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  language: {
    backgroundColor: '#666',
    borderRadius: 50,
    marginRight: 16,
    marginTop: 8
  },
  languageText: {
    color: '#FFFFFF',
    fontSize: 14,
    padding: 5,
    paddingHorizontal: 10
  }
});
