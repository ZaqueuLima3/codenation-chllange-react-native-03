import React, { useState } from 'react';
import { Text, View, Image, FlatList, TouchableOpacity } from 'react-native';

import AccelerationItem from '../../components/AccelerationItem';
import ModalItem from '../../components/ModalItem';

import { styles } from './styles';

import { accelerations } from '../../data/accelerations';
import { profile } from '../../data/profile';

export default function Acceleration({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [itemSelected, setItemSelected] = useState([]);

  function handleSetItem(item) {
    setItemSelected(item);
    setModalVisible(true);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.headerImage}
          source={{uri: 'https://forum.codenation.com.br/uploads/default/original/2X/2/2d2d2a9469f0171e7df2c4ee97f70c555e431e76.png'}}
        />

        <TouchableOpacity 
          className="user-image-btn"
          onPress={() => navigation.navigate("Profile")}>
          <Image
            style={styles.profileImage}
            source={{uri: profile.picture }}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Acelerações</Text>

      <FlatList
        data={accelerations}
        keyExtractor={item => item.slug}
        renderItem={({item, index}) => (
          <TouchableOpacity 
            className="acceleration-item-btn"
            onPress={() => handleSetItem(item)}>
            <AccelerationItem item={item} />
          </TouchableOpacity>
        )}
      />

      <ModalItem 
        item={itemSelected}
        modalVisible={modalVisible}
        closeModal={() => setModalVisible(false)} 
      />
    </View>
  );
}
