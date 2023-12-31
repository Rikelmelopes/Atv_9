import Pagina from "@/components/Pagina";
import professorValidator from "@/validators/professoresValidators";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { BsArrowLeftCircleFill, BsCheck2 } from "react-icons/bs";
import { mask } from "remask";

const form = () => {
  const { push } = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function salvar(dados) {
    axios.post("/api/professores", dados);
    push("/professores");
  }

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    const mascara = event.target.getAttribute("mask");
    setValue(name, mask(value, mascara));
  }

  return (
    <Pagina titulo="Professor">
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="nome">
            <Form.Label>Nome: </Form.Label>
            <Form.Control
              type="text"
              mask="999.999.999-99"
              {...register("nome", professorValidator.nome)}
              onChange={handleChange}
            />
            {errors.nome && (
              <small className="text-danger">{errors.nome.message}</small>
            )}
          </Form.Group>

          <Form.Group as={Col} controlId="cpf">
            <Form.Label>CPF: </Form.Label>
            <Form.Control
              type="text"
              mask="999.999.999-99"
              {...register("cpf", alunoValidator.cpf)}
              onChange={handleChange}
            />
            {errors.cpf && (
              <small className="text-danger">{errors.cpf.message}</small>
            )}
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="matricula">
            <Form.Label>Matricula: </Form.Label>
            <Form.Control
              type="text"
              {...register("matricula", professorValidator.matricula)}
            />
            {errors.matricula && (
              <small className="text-danger">{errors.matricula.message}</small>
            )}
          </Form.Group>

          <Form.Group as={Col} controlId="salario">
            <Form.Label>Salario: </Form.Label>
            <Form.Control
              type="number"
              {...register("salario", professorValidator.salario)}
            />
            {errors.salario && (
              <small className="text-danger">{errors.salario.message}</small>
            )}
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="email">
            <Form.Label>Email: </Form.Label>
            <Form.Control
              type="email"
              {...register("email", professorValidator.email)}
            />
            {errors.email && (
              <small className="text-danger">{errors.email.message}</small>
            )}
          </Form.Group>

          <Form.Group as={Col} controlId="telefone">
            <Form.Label>Telefone: </Form.Label>
            <Form.Control
              type="tel"
              mask="(99) 99999-9999"
              onChange={handleChange}
              {...register("telefone", professorValidator.telefone)}
            />
            {errors.telefone && (
              <small className="text-danger">{errors.telefone.message}</small>
            )}
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="cep">
            <Form.Label>CEP: </Form.Label>
            <Form.Control
              type="text"
              {...register("cep", professorValidator.cep)}
            />
            {errors.cep && (
              <small className="text-danger">{errors.cep.message}</small>
            )}
          </Form.Group>
          <Form.Group as={Col} controlId="logradouro">
            <Form.Label>Logradouro: </Form.Label>
            <Form.Control
              type="text"
              {...register("logradouro", professorValidator.logradouro)}
            />
            {errors.logradouro && (
              <small className="text-danger">{errors.logradouro.message}</small>
            )}
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="complemento">
            <Form.Label>Complemento: </Form.Label>
            <Form.Control
              type="text"
              {...register("complemento", professorValidator.complemento)}
            />
            {errors.complemento && (
              <small className="text-danger">
                {errors.complemento.message}
              </small>
            )}
          </Form.Group>
          <Form.Group as={Col} controlId="numero">
            <Form.Label>Numero: </Form.Label>
            <Form.Control
              type="text"
              {...register("numero", professorValidator.numero)}
            />
            {errors.numero && (
              <small className="text-danger">{errors.numero.message}</small>
            )}
          </Form.Group>

          <Form.Group as={Col} controlId="bairro">
            <Form.Label>Bairro: </Form.Label>
            <Form.Control
              type="text"
              {...register("bairro", professorValidator.bairro)}
            />
            {errors.bairro && (
              <small className="text-danger">{errors.bairro.message}</small>
            )}
          </Form.Group>
        </Row>

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
