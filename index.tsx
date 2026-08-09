import { View, Text, Image, Pressable, StyleSheet, Platform, Alert } from 'react-native';

export default function HomeScreen() {

  function buttonClick(e: any) {
    if (Platform.OS === "web") {
      window.alert("Pronto habrá proyectos por ver");
    } else {
      Alert.alert("Pronto habrá proyectos por ver");
    }
  }

  return (
    <View style={styles.contenedor}>

      <Image
        source={require('../../assets/images/mifoto.png')}
        style={styles.imagen}
      />

      <Text style={styles.titulo}>
        Krystel Alvarado
      </Text>

      <Text style={styles.texto}>
        Estudiante de Ingeniería en Sistemas.
      </Text>

      <Text style={styles.carnet}>
        Carné: 0907-25-28958
      </Text>

      <Pressable
        style={styles.boton}
        onPress={buttonClick}
      >
        <Text style={styles.textoBoton}>
          Ver proyectos
        </Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
  },

  imagen: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#222222',
  },

  texto: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
    color: '#555555',
  },

  carnet: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#555555',
  },

  boton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#007AFF',
  },

  textoBoton: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});