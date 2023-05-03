import styled from "styled-components";
import { useEffect, useState } from "react";
import Select from "react-select";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import * as data from "./data";

function Chart() {
  const [chart, setChart] = useState(data.data);
  const [selectedOption, setSelectedOption] = useState({
    value: "roupas",
    label: "Roupas",
  });
  const [selectedOption2, setSelectedOption2] = useState({
    value: "blusalonga",
    label: "Blusa Longa",
  });
  const [selectedOption3, setSelectedOption3] = useState({
    value: "prada",
    label: "Prada",
  });
  const options1 = [
    { value: "roupas", label: "Roupas" },
    { value: "calçados", label: "Calçados" },
    { value: "acessorios", label: "Acessórios" },
  ];
  const options2 = [
    { value: "blusalonga", label: "Blusa Longa" },
    { value: "camisa", label: "Camisas" },
    { value: "regata", label: "Regatas" },
  ];
  const options3 = [
    { value: "prada", label: "Prada" },
    { value: "boss", label: "Hugo Boss" },
    { value: "fendi", label: "Fendi" },
  ];

  useEffect(() => {
    if (selectedOption.value === "roupas") {
      setChart(data.data);
    } else if (selectedOption2.value === "camisa") {
      setChart(data.data2);
    } else if (selectedOption2.value === "blusalonga") {
      setChart(data.data);
    } else if (selectedOption2.value === "regata") {
      setChart(data.data2);
    } else if (selectedOption3.value === "prada") {
      setChart(data.data);
    } else if (selectedOption3.value === "boss") {
      setChart(data.data2);
    } else if (selectedOption3.value === "fendi") {
      setChart(data.data3);
    }
  }, [selectedOption, selectedOption2, selectedOption3]);

  return (
    <Main>
      {selectedOption ? (
        <Filter>
          <div className="filter-box">
            <p>Categoria:</p>
            <Select
              className="select"
              placeholder="Selecione"
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={options1}
            />
          </div>
          <div className="filter-box">
            <p>Produto:</p>
            <Select
              className="select"
              placeholder="Selecione"
              defaultValue={selectedOption2}
              onChange={setSelectedOption2}
              options={options2}
            />
          </div>
          <div className="filter-box">
            <p>Marca:</p>
            <Select
              className="select"
              placeholder="Selecione"
              defaultValue={selectedOption3}
              onChange={setSelectedOption3}
              options={options3}
            />
          </div>
          <h1>Vendas por Mês:</h1>
        </Filter>
      ) : (
        <></>
      )}
      <LineChart width={1500} height={400} data={chart}>
        <CartesianGrid stroke="#eee" strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Vendas" stroke="#8884d8" />
      </LineChart>
    </Main>
  );
}

export default Chart;

const Main = styled.main`
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 150px;
  margin-bottom: 80px;
  margin-left: 150px;
`;

const Filter = styled.div`
  width: 1200px;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 80px;
  margin-left: 150px;
  position: relative;

  .filter-box {
    width: 200px;
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .select {
    width: 120px;
    font-size: 15px;
  }

  p {
    font-size: 16px;
    font-weight: 400;
    color: #000;
  }

  h1 {
    font-size: 18px;
    font-weight: 500;
    color: #000;
    position: absolute;
    top: 160%;
    left: 50%;
    transform: translateX(-50%);
  }
`;
