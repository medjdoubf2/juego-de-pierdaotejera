 function jugar() {
      const eleccionUsuario = parseInt(document.getElementById('usuarioEleccion').value);
      const eleccionComputadora = Math.floor(Math.random() * 3) + 1; // Genera un número entre 1 y 3
      
      if (eleccionUsuario < 1 || eleccionUsuario > 3) {
        document.getElementById('resultado').innerText = 'Entiendo que no quieres jugar. Adios.';
        return;
      }
      
      let resultado = '';
      
      if (eleccionUsuario === eleccionComputadora) {
        resultado = '¡Empate!';
      } else if (
        (eleccionUsuario === 1 && eleccionComputadora === 3) || // Piedra gana a Tijera
        (eleccionUsuario === 2 && eleccionComputadora === 1) || // Papel gana a Piedra
        (eleccionUsuario === 3 && eleccionComputadora === 2)    // Tijera gana a Papel
      ) {
        resultado = '¡Ganaste!';
      } else {
        resultado = '¡Perdiste! La computadora eligió ' + eleccionComputadora;
      }
      
      document.getElementById('resultado').innerText = resultado;
    }