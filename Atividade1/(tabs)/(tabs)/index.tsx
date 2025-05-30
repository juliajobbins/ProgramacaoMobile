import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const foto = require("../../assets/images/react-logo.png");

export default function Index() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.imgWrapper}>
        <Image source={foto} style={styles.estiloFoto} />
      </View>

      <View style={styles.card}>
        <Text style={styles.nome}>Julia Fernanda Jobbins</Text>
        <Text style={styles.linha}></Text>
        <View style={styles.item}>
          <Ionicons name="person" size={20} color="#87cefa" />
          <Text style={styles.texto}>16 anos</Text>
        </View>
        <View style={styles.item}>
          <Ionicons name="mail" size={20} color="#87cefa" />
          <Text style={styles.texto}>jobbinsjuliafernanda@gmail.com</Text>
        </View>
        <View style={styles.item}>
          <Ionicons name="call" size={20} color="#87cefa" />
          <Text style={styles.texto}>(42) 9821-8305</Text>
        </View>
        <View style={styles.item}>
          <Ionicons name="home" size={20} color="#87cefa" />
          <Text style={styles.texto}>Ponta Grossa / PR</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 20,
  },
  imgWrapper: {
    alignItems: "center",
    marginBottom: 20,
  },
  estiloFoto: {
    width: 180,
    height: 180,
    borderRadius: 90,
    borderWidth: 2,
    borderColor: "#000080",
  },
  card: {
    backgroundColor: "#0d0d1a",
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#000080",
  },
  nome: {
    fontSize: 28,
    color: "#87cefa",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  linha: {
    borderBottomColor: "#000080",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  texto: {
    color: "#ffffff",
    fontSize: 18,
    marginLeft: 10,
  },
});
