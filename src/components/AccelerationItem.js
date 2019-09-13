import React from 'react';
import moment from 'moment';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';

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

const styles = StyleSheet.create({
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
