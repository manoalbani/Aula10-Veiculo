import { useState } from 'react'
import styles from './Veiculo.module.css'

function Veiculo() {
  const [count, setCount] = useState(0)
  let [veiculo, setVeiculo] = useState({});
  let [veiculos, setVeiculos] = useState([
    {
      marca: "Toyota",
      modelo: "Corolla",
      ano: 2021,
      cor: "Prata",
    },
    {
      marca: "Ford",
      modelo: "Mustang",
      ano: 2020,
      cor: "Vermelho",
    },
    {
      marca: "Chevrolet",
      modelo: "Camaro",
      ano: 2019,
      cor: "Amarelo",
    },
    {
      marca: "Honda",
      modelo: "Civic",
      ano: 2022,
      cor: "Branco",
    },
  ]);

  return (
    <div>
      <h1>Veiculo</h1>

      <div>
        <table border={1}>
          <tr>
            <td>modelo</td>
            <td>marca</td>
            <td>cor</td>
            <td>ano</td>
          </tr>
          {veiculos.map(x => {
            return <tr>
              <td>{x.modelo}</td>
              <td>{x.marca}</td>
              <td>{x.cor}</td>
              <td>{x.ano}</td>
            </tr>
          })}
        </table>
      </div>
    </div>
  )
}

export default Veiculo
