import React from 'react';
import { Text, View, Image, FlatList, TouchableOpacity } from 'react-native';

import AccelerationItem from '../../components/AccelerationItem';

import { styles } from './styles';

import { accelerations } from '../../data/accelerations';
import { profile } from '../../data/profile';

export default function Acceleration({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.headerImage}
          source={{uri: 'https://forum.codenation.com.br/uploads/default/original/2X/2/2d2d2a9469f0171e7df2c4ee97f70c555e431e76.png'}}
        />

        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Image
            className="profile-image"
            style={styles.profileImage}
            source={{uri: profile.picture }}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Acelerações</Text>
      <FlatList
        data={accelerations}
        keyExtractor={item => item.slug}
        renderItem={({item, index}) => <AccelerationItem item={item} />}
      />
    </View>
  );
}
