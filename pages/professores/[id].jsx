import Pagina from "@/components/Pagina";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { BsArrowLeftCircleFill, BsCheck2 } from "react-icons/bs";

const form = () => {
  const { push, query } = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (query.id) {
      axios.get(`/api/professores/${query.id}`).then((res) => {
        const disciplina = res.data;

        for (let atributo in disciplina) {
          setValue(atributo, disciplina[atributo]);
        }
      });
    }
  }, [query.id]);

  function salvar(dados) {
    axios.put(`/api/professores/${dados.id}`, dados);
    push("/professores");
  }

  return (
    <Pagina titulo="Professor">
      <Form>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome: </Form.Label>
          <Form.Control type="text" {...register("nome")} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="cpf">
          <Form.Label>CPF: </Form.Label>
          <Form.Control
            type="text"
            mask="999.999.999-99"
            {...register("cpf", alunoValidator.cpf)}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="matricula">
          <Form.Label>Matricula: </Form.Label>
          <Form.Control type="number" {...register("matricula")} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="salario">
          <Form.Label>Salario: </Form.Label>
          <Form.Control type="number" {...register("salario")} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email: </Form.Label>
          <Form.Control type="email" {...register("email")} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="telefone">
          <Form.Label>Telefone: </Form.Label>
          <Form.Control
            type="tel"
            mask="(99) 99999-9999"
            {...register("telefone", alunoValidator.telefone)}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="cep">
          <Form.Label>CEP: </Form.Label>
          <Form.Control type="text" {...register("cep")} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="logradouro">
          <Form.Label>Logradouro: </Form.Label>
          <Form.Control type="text" {...register("logradouro")} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="complemento">
          <Form.Label>Complemento: </Form.Label>
          <Form.Control type="text" {...register("complemento")} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="numero">
          <Form.Label>Numero: </Form.Label>
          <Form.Control type="text" {...register("numero")} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="bairro">
          <Form.Label>Bairro: </Form.Label>
          <Form.Control type="text" {...register("bairro")} />
        </Form.Group>

        <div className="text-center">
          <Button variant="success" onClick={handleSubmit(salvar)}>
            <BsCheck2 className="me-1" />
            Salvar
          </Button>
          <Link href={"/professores"} className="ms-2 btn btn-danger">
            <BsArrowLeftCircleFill className="me-1" />
            Voltar
          </Link>
        </div>
      </Form>
    </Pagina>
  );
};

export default form;
