import React, { useState } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'

export function List(props) {
  function getIcons(liked) {
    return liked ? require('../img/likeada.png') : require('../img/like.png')
  }

  function showLikes(likers) {
    if (likers === 0) {
      return
    }

    return (
      <Text style={styles.likes}>
        {likers} {likers > 1 ? 'curtidas' : 'curtida'}
      </Text>
    )
  }

  return (
    <View>
      <View style={styles.viewProfile}>
        <Image
          source={{ uri: props.data.profilePicture }}
          style={styles.profilePicture}
        />
        <Text style={styles.userName}>{props.data.name}</Text>
      </View>

      <Image
        resizeMode="cover"
        source={{ uri: props.data.pubPicture }}
        style={styles.pubPicture}
      />

      <View style={styles.btnArea}>
        <TouchableOpacity>
          <Image source={getIcons(props.data.liked)} style={styles.icons} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnComment}>
          <Image source={require('../img/comment.png')} style={styles.icons} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnSend}>
          <Image source={require('../img/send.png')} style={styles.icons} />
        </TouchableOpacity>
      </View>

      {showLikes(props.data.likers)}

      <Text style={styles.footerName}>{props.data.name}</Text>
      <Text style={styles.footerDescription}>{props.data.description}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  viewProfile: {
    padding: 8,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  userName: {
    paddingLeft: 5,
    fontSize: 18,
    color: '#000'
  },
  pubPicture: {
    height: 400,
    alignItems: 'center'
  },
  btnArea: {
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center'
  },
  icons: {
    width: 25,
    height: 25
  },
  btnComment: {
    marginLeft: 5
  },
  btnSend: {
    marginLeft: 5
  },
  likes: {
    fontWeight: 'bold',
    marginLeft: 5
  },
  footerName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5
  },
  footerDescription: {
    marginLeft: 5,
    marginBottom: 10,
    fontSize: 15
  }
})
