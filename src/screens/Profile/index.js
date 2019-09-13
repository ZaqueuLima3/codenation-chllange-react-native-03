import React from 'react';
import moment from 'moment';
import {
  Text,
  View,
  Image,
  ScrollView,
  ActivityIndicator,
  Animated
} from 'react-native';

import { styles } from './styles';

import { profile } from '../../data/profile';

export default class Profile extends React.PureComponent {
  fadeAnimation = new Animated.Value(0)

  state = {
    loading: true
  }


  componentDidMount() {
    this.finishLoading()
  }

  finishLoading = async () => {
    try {
      await new Promise(resolve => setTimeout(resolve, 600))
      Animated.timing(this.fadeAnimation, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true
      }).start()

      this.setState({ loading: false })
    } catch (error) {
      console.error(error)
    }
  }

  render() {

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            className="header-image"
            style={styles.headerImage}
            source={{uri: "https://forum.codenation.com.br/uploads/default/original/2X/2/2d2d2a9469f0171e7df2c4ee97f70c555e431e76.png"}}
          />
        </View>
        {this.state.loading && (
          <View style={styles.loadingContent}>
            <ActivityIndicator size="large" color="#7800ff" />
          </View>
        )}
        {!this.state.loading && (
          <ScrollView>
            <View style={styles.profileTitle}>
              <Image
                className="profile-image"
                style={styles.profileImage}
                source={{uri: profile.picture }}
              />
              <Text className="profile-name" style={styles.profileName}>{profile.name}</Text>
            </View>
            <Animated.View className="contact-content" style={[styles.userContent, { opacity: this.fadeAnimation }]}>
                <Text className="contact-label" style={styles.contentLabel}>Linkedin:</Text>
                <Text className="contact-value" style={{...styles.contentText, ...styles.mBottom}}>{profile.linkedin}</Text>

                <Text className="contact-label" style={styles.contentLabel}>Github:</Text>
                <Text className="contact-value" style={styles.contentText}>{profile.github}</Text>
            </Animated.View>
            <Animated.View className="contact-content" style={[styles.userContent, { opacity: this.fadeAnimation }]}>
                <Text className="contact-label" style={styles.contentLabel}>E-mail:</Text>
                <Text className="contact-value" style={{...styles.contentText, ...styles.mBottom}}>{profile.email}</Text>

                <Text className="contact-label" style={styles.contentLabel}>Celular:</Text>
                <Text className="contact-value" style={{...styles.contentText, ...styles.mBottom}}>{profile.phone}</Text>

                <Text className="contact-label" style={styles.contentLabel}>Data de Nascimento:</Text>
                <Text className="contact-value" style={{...styles.contentText, ...styles.mBottom}}>
                  {moment(profile.birthday).format('DD/MM/YYYY')}
                </Text>

                <Text className="contact-label" style={styles.contentLabel}>Sexo:</Text>
                <Text className="contact-value" style={{...styles.contentText, ...styles.mBottom}}>
                  {profile.gender === 1 ? 'Masculino' : 'Feminino'}
                </Text>

                <Text className="contact-label" style={styles.contentLabel}>Idiomas:</Text>
                <View style={styles.languageContent}>
                  {profile.language.map(language => (
                    <View key={language} style={styles.language}>
                      <Text className="contact-language" style={styles.languageText}>
                        {language}
                      </Text>
                    </View>
                  ))}
                </View>
            </Animated.View>
          </ScrollView>
        )}
      </View>
    );
  }
}
