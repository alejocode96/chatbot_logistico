import React, { useState, useEffect } from 'react';

const LogisticoContext = React.createContext();

function LogisticoProvider({ children }) {

  const questions = [
    "Cuál fue el tiempo promedio de permanencia en la región planta XX?",
    "¿Cuáles son las regiones con el promedio de tiempo de permanencia más alto durante el mes de enero en la zona norte?",
    "¿Top 10 de las regiones con el promedio de tiempo de permanencia mas alto durante el mes de marzo de 2025?",
    "¿Cuáles vehículos estuvieron más de 5 horas en la zona norte para la operación ensacado?",
    "¿Cuál es el vehículo con el tiempo de permanencia mas alto entre el 01/02/2025 y el 07/02/2025 y en qué región fue ?"
  ];

  // Estado para el texto que se está mostrando actualmente
  const [currentText, setCurrentText] = useState('');
  // Índice de la pregunta actual en el array
  const [questionIndex, setQuestionIndex] = useState(0);
  // Estado que indica si estamos borrando el texto
  const [isDeleting, setIsDeleting] = useState(false);
  // Índice de caracter actual (cuántas letras mostrar o borrar)
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    // Pregunta actual basada en el índice
    const currentQuestion = questions[questionIndex];
    // Velocidad de escritura/borrado
    let typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (isDeleting) {
        // Si estamos borrando, quitar una letra
        setCurrentText(currentQuestion.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else {
        // Si estamos escribiendo, agregar una letra
        setCurrentText(currentQuestion.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }

      // Si terminamos de escribir, esperar 2 segundos antes de borrar
      if (!isDeleting && charIndex === currentQuestion.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      }
      // Si terminamos de borrar, pasar a la siguiente pregunta
      else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setQuestionIndex((prev) => (prev + 1) % questions.length); // Volver al inicio si se termina el array
      }
    }, typingSpeed);

    // Limpiar el timeout para evitar bugs o múltiples ejecuciones
    return () => clearTimeout(timeout);

  }, [charIndex, isDeleting, questionIndex]);


  return (
    <LogisticoContext.Provider value={{
      currentText, setCurrentText,
      questionIndex, setQuestionIndex,
      isDeleting, setIsDeleting,
      charIndex, setCharIndex
    }}>
      {children}
    </LogisticoContext.Provider>
  )

}

export { LogisticoContext, LogisticoProvider };