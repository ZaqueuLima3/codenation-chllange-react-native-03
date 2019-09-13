import React from 'react';
import moment from 'moment';
import { Text, View, Image, FlatList } from 'react-native';

import { styles } from './styles';

export default function AccelerationItem({ item }) {
  return (
    <View style={styles.item}>
      <Image
        style={styles.itemImage}
        source={{uri: item.banner_url ? item.banner_url : 'http://denrakaev.com/wp-content/uploads/2015/03/no-image.png'}}
      />
      <View style={styles.itemContent}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemLocation}>{item.location}</Text>
        <Text style={styles.itemDate}>{moment(item.subscription_finish_at).format('DD/MM/YYYY')}</Text>
      </View>
    </View>
  );
}
