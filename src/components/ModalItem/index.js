import React, { useState } from 'react';
import moment from 'moment';
import { View, Modal, Text, Image, TouchableHighlight } from 'react-native';

import { styles } from './styles';

export default function ModalItem({ item, modalVisible, closeModal }) {
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={modalVisible}
      onRequestClose={closeModal}
      className= 'modal'
    >
      <View style={styles.container}>
        <View style={{alignItems:'center'}}>
          <Image
              style={styles.image}
              source={{uri: item.banner_url ? item.banner_url : 'http://denrakaev.com/wp-content/uploads/2015/03/no-image.png'}}
          />
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={{marginBottom:15}}> Local: {item.location}</Text>
          <Text style={{marginBottom:30}}> Inscrição + desafio ennviado até {moment(item.subscription_finish_at).format('DD/MM/YYYY')}</Text>
         

          <TouchableHighlight
            onPress={closeModal}
            className='close-modal-btn'>
            <Text style={styles.buttonText}>FECHAR</Text>
          </TouchableHighlight>
        </View>

      </View>
    </Modal>
  );
}
