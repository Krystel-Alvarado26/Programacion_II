import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, Button, StyleSheet,   } from 'react-native';

export default function App() {

  const [tareas, setTareas] = useState<string[]>([
    'Hacer tarea de programación',
    'Estudiar para el examen',
    'Leer la documentación de React Native',
  ]);

  const [nuevaTarea, setNuevaTarea] = useState('');
  const [mostrarInput, setMostrarInput] = useState(false);

  const guardarTarea = () => {

    if (nuevaTarea.trim() === '') {
      return;
    }

    setTareas([
      ...tareas,
      nuevaTarea.trim(),
    ]);

    setNuevaTarea('');
    setMostrarInput(false);
  };

  return (
    <ScrollView style={styles.contenedor}>

      <Text style={styles.titulo}>
        Lista de tareas
      </Text>

      <View style={styles.botonNueva}>
        <Button
          title="Nueva tarea"
          onPress={() => setMostrarInput(true)}
        />
      </View>

      {mostrarInput && (
        <View style={styles.formulario}>

          <TextInput
            style={styles.input}
            placeholder="Ingrese una tarea"
            value={nuevaTarea}
            onChangeText={setNuevaTarea}
          />

          <Button
            title="Guardar"
            onPress={guardarTarea}
          />

        </View>
      )}

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

  botonNueva: {
    marginBottom: 20,
  },

  formulario: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    backgroundColor: 'white',
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

