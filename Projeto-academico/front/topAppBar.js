import { StyleSheet, Text, View, Image } from 'react-native';

function TopAppBar(props) {
    return (
        <View style={styles.topAppBar}>
          <Image source={require("../assets/images/lista-de-itens.png")} style={styles.image}/>
          <Text>{props.title}</Text>
          <Image source={require("../assets/images/usuario.png")} style={styles.image}/>
        </View>
    );
}

export default TopAppBar

const styles = StyleSheet.create({
  topAppBar: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  image: {
    width: 32,
    height: 32,
    margin: 8
  }
});
