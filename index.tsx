import React from 'react';
import {ScrollView, View, Text, StyleSheet,} from 'react-native';

export default function App() {
  const tareas = [
    'Hacer tarea de programación',
    'Estudiar para el examen',
    'Leer la documentación de React Native',
  ];

  return (
    <ScrollView style={styles.contenedor}>

      <Text style={styles.titulo}>
        Lista de tareas
      </Text>

      <View style={styles.lista}>
        {tareas.map((tarea, indice) => (
          <View
            style={styles.tarea}
            key={indice}
          >
            <Text style={styles.textoTarea}>
              {tarea}
            </Text>
          </View>
        ))}
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f2f2f2',
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 25,
  },

  lista: {
    marginTop: 10,
  },

  tarea: {
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
  },

  textoTarea: {
    fontSize: 17,
  },
});

