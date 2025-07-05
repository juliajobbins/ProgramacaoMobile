import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import {
  Button,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

const fotoPadrao = require("../../assets/images/react-logo.png");

export default function Index() {
  const [image, setImage] = useState<string | null>(null);
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [localizacao, setLocalizacao] = useState("");

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 40}
      >
        <ScrollView
          contentContainerStyle={[styles.container, { flexGrow: 1 }]}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.imgWrapper}>
            <Pressable onPress={pickImage}>
              <Image
                source={image ? { uri: image } : fotoPadrao}
                style={styles.estiloFoto}
              />
            </Pressable>
            <View style={styles.botaoImagem}>
              <Button title="Escolher Foto" onPress={pickImage} color="#000080" />
            </View>
          </View>

          <View style={styles.card}>
            <TextInput
              style={styles.nomeInput}
              value={nome}
              onChangeText={setNome}
              placeholder="Digite o seu nome"
              placeholderTextColor="#87cefa"
            />
            <View style={styles.linha} />

            <View style={styles.item}>
              <Ionicons name="person" size={20} color="#87cefa" />
              <TextInput
                style={styles.textInput}
                value={idade}
                onChangeText={setIdade}
                placeholder="Digite a sua idade"
                placeholderTextColor="#aaa"
              />
            </View>

            <View style={styles.item}>
              <Ionicons name="mail" size={20} color="#87cefa" />
              <TextInput
                style={styles.textInput}
                value={email}
                onChangeText={setEmail}
                placeholder="Digite o seu e-mail"
                placeholderTextColor="#aaa"
                keyboardType="email-address"
              />
            </View>

            <View style={styles.item}>
              <Ionicons name="call" size={20} color="#87cefa" />
              <TextInput
                style={styles.textInput}
                value={telefone}
                onChangeText={setTelefone}
                placeholder="Digite o seu telefone"
                placeholderTextColor="#aaa"
                keyboardType="phone-pad"
              />
            </View>

            <View style={styles.item}>
              <Ionicons name="home" size={20} color="#87cefa" />
              <TextInput
                style={styles.textInput}
                value={localizacao}
                onChangeText={setLocalizacao}
                placeholder="Digite a sua localização"
                placeholderTextColor="#aaa"
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    padding: 20,
    paddingBottom: 40,
    flexGrow: 1,
    justifyContent: "flex-start",
  },
  imgWrapper: {
    alignItems: "center",
    marginBottom: 20,
    marginTop: 20,
  },
  estiloFoto: {
    width: 180,
    height: 180,
    borderRadius: 90,
    borderWidth: 2,
    borderColor: "#000080",
    resizeMode: "cover",
  },
  botaoImagem: {
    marginTop: 10,
    width: 160,
    borderRadius: 12,
    overflow: "hidden",
  },
  card: {
    backgroundColor: "#0d0d1a",
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#000080",
  },
  nomeInput: {
    fontSize: 22,
    color: "#87cefa",
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
    paddingVertical: 4,
  },
  linha: {
    borderBottomColor: "#000080",
    borderBottomWidth: 1,
    marginVertical: 10,
    height: 1,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  textInput: {
    color: "#ffffff",
    fontSize: 18,
    marginLeft: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
    flex: 1,
    paddingVertical: 4,
  },
});
