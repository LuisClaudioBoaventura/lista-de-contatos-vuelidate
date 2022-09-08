<template>
  <CardItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Nome</template>

    <form id="contato-form">
      <div class="imput-container">
        <label for="nome"> Olá {{ nome }}</label>
        <input
          type="text"
          id="nome"
          name="nome"
          v-model="nome"
          placeholder="Digite seu nome aqui"
        />
        <div v-if="v$.nome.$error">Campo nome tem um erro</div>
      </div>
    </form>
  </CardItem>

  <CardItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Sobrenome</template>
    <div>
      <form id="contato-form">
        <div class="imput-container">
          <label for="nome"> Voce faz parte da familia : {{ sobrenome }}</label>
          <input
            type="text"
            id="sobrenome"
            name="sobrenome"
            v-model="sobrenome"
            placeholder="Digite seu Sobrenome aqui"
          />
        </div>
      </form>
    </div>
  </CardItem>

  <CardItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Email</template>
    <div>
      <form id="contato-form">
        <div class="imput-container">
          <label for="email"> Seu melhor email {{ email }}</label>
          <input
            type="text"
            id="email"
            name="email"
            v-model="email"
            placeholder="Digite seu email aqui"
          />
        </div>
        <!--  <p>
          <input v-model="sobrenome" v-if="v$.email.$error" />
          Campo email possui um erro
        </p> -->
      </form>
    </div>
  </CardItem>

  <CardItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Idade</template>
    <div>
      <form id="contato-form">
        <div class="imput-container">
          <label for="nome"> Você já comemorou {{ idade }} primaveras</label>
          <input
            type="text"
            id="idade"
            name="idade"
            v-model="idade"
            placeholder="Digite sua idade aqui"
          />
        </div>
      </form>
    </div>
  </CardItem>

  <CardItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Telefone</template>
    <div>
      <form id="contato-form">
        <div class="imput-container">
          <label for="telefone"> Seu melhor telefone é : {{ telefone }} </label>
          <input
            type="text"
            id="telefone"
            name="telefone"
            v-model="telefone"
            placeholder="Digite seu telefone aqui"
          />
          <!-- Botão de adcionar -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            class="ml-2 cursor-pointer"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              fill="green"
              d="M11 11V7h2v4h4v2h-4v4h-2v-4H7v-2h4zm1 11C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"
            />
          </svg>

          <!-- Botão de remover -->

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            class="ml-2 cursor-pointer"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              fill="#EC4899"
              d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9.414l2.828-2.829 1.415 1.415L13.414 12l2.829 2.828-1.415 1.415L12 13.414l-2.828 2.829-1.415-1.415L10.586 12 7.757 9.172l1.415-1.415L12 10.586z"
            />
          </svg>
        </div>
      </form>
    </div>
  </CardItem>

  <CardItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>CPF</template>
    <div>
      <form id="contato-form">
        <div class="imput-container">
          <label for="cpf"> Para o estado voce é o numero : {{ cpf }}</label>
          <input
            type="text"
            id="cpf"
            name="cpf"
            v-model="cpf"
            placeholder="Digite seu CPF aqui"
          />
        </div>
      </form>
    </div>
  </CardItem>

  <CardItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>CEP</template>
    <div>
      <form id="contato-form">
        <div class="imput-container">
          <label for="nome"> Sua localização no mapa é: {{ cep }}</label>
          <input
            type="text"
            id="cep"
            name="cep"
            v-model="cep"
            placeholder="Digite seu CEP aqui"
          />
        </div>
      </form>
    </div>
  </CardItem>

  <CardItem>
    <template #icon>
      <SupportIcon />
    </template>
    <div>
      <form id="contato-form">
        <div class="imput-container">
          <input type="submit" class="submit-btn" value="Salvar Contato" />
        </div>
      </form>
    </div>
  </CardItem>
</template>

<script lang="ts">
import { ref } from "vue";
import useVuelidate from "@vuelidate/core";
import {
  required,
  email,
  numeric,
  minLength,
  maxLength,
} from "@vuelidate/validators";

const nome = ref("");
const sobrenome = ref("");
/*const email = ref("");*/
const idade = ref("");
const telefone = ref("");
const cpf = ref("");
const cep = ref("");

export default {
  setup() {
    return {
      v$: useVuelidate(),
    };
  },

  data() {
    return {
      nome: "",
      sobrenome: "",
      email: "",
      idade: "",
      telefone: "",
      cpf: "",
      cep: "",
    };
  },
  validations() {
    return {
      nome: { required },
      sobrenome: { required },
      email: { required, email },
      idade: {
        numeric,
        minLengthValue: minLength(1),
        maxLengthValue: maxLength(120),
      },
      telefone: { required },
      cpf: { required },
      cep: { required },
    };
  },
};
</script>

<style>
.imput-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
}

label {
  font-weight: bold;
  margin-bottom: 5px;
  color: #222;
  padding: 5px 5px;
  border-left: 4px solid #fcba03;
}

input {
  padding: 5px 5px;
  width: auto;
  border-radius: 5px;
}

.submit-btn {
  background-color: #222;
  color: #fcba03;
  font-weight: bold;
  border: 2px solid #222;
  padding: 10px;
  font-size: 16px;
  margin: 0 auto;
  cursor: pointer;
  transition: 0.5s;
}
</style>
