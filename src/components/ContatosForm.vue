<template>
  <form @submit.prevent="onSubmit">
    <!-- Icone -->

    <CardItem>
      <template #icon>
        <DocumentationIcon />
      </template>

      <!-- primeiro nome -->

      <template #heading>Nome</template>

      <div class="form-group">
        <div class="imput-container">
          <label for=""> Olá {{ PrimeiroNome }}</label>
          <input
            class="form-control"
            type="text"
            v-model.trim="v$.PrimeiroNome.$model"
            placeholder="Digite seu nome aqui"
          />
        </div>
        <div
          class="input-errors"
          v-for="(error, index) of v$.PrimeiroNome.$errors"
          :key="index"
        >
          <div class="error-msg">{{ error.$message }}</div>
        </div>
      </div>
    </CardItem>
    <!-- -------------------------------------------------- -->
    <!-- Icone -->

    <CardItem>
      <template #icon>
        <ToolingIcon />
      </template>

      <!-- Sobrenome -->

      <template #heading>Sobrenome</template>

      <div class="form-group">
        <div class="imput-container">
          <label for=""> Voce faz parte da familia : {{ Sobrenome }}</label>
          <input
            class="form-control"
            type="text"
            v-model="v$.Sobrenome.$model"
            placeholder="Digite seu Sobrenome aqui"
          />
        </div>
        <div
          class="input-errors"
          v-for="(error, index) of v$.Sobrenome.$errors"
          :key="index"
        >
          <div class="error-msg">{{ error.$message }}</div>
        </div>
      </div>
    </CardItem>
    <!-- -------------------------------------------------- -->
    <!-- Icone -->

    <CardItem>
      <template #icon>
        <EcosystemIcon />
      </template>

      <!-- Email -->

      <template #heading>Email</template>
      <div class="form-group">
        <div class="imput-container">
          <label for=""> Seu melhor email é: {{ Email }}</label>
          <input
            class="form-control"
            type="text"
            v-model="v$.Email.$model"
            placeholder="Digite seu email aqui"
          />
        </div>
        <div
          class="input-errors"
          v-for="(error, index) of v$.Email.$errors"
          :key="index"
        >
          <div class="error-msg">{{ error.$message }}</div>
        </div>
      </div>
    </CardItem>

    <!-- -------------------------------------------------- -->
    <!-- Icone -->

    <CardItem>
      <template #icon>
        <CommunityIcon />
      </template>

      <!-- idade -->

      <template #heading>Idade</template>

      <div class="form-group">
        <div class="imput-container">
          <label for=""> Você já comemorou {{ Idade }} primaveras</label>
          <input
            class="form-control"
            type="number"
            v-model="v$.Idade.$model"
            placeholder="Digite sua idade aqui"
          />
        </div>
        <div
          class="input-errors"
          v-for="(error, index) of v$.Idade.$errors"
          :key="index"
        >
          <div class="error-msg">{{ error.$message }}</div>
        </div>
      </div>
    </CardItem>

    <!-- -------------------------------------------------- -->
    <!-- Icone -->

    <CardItem>
      <template #icon>
        <CommunityIcon />
      </template>

      <!-- Telefone -->

      <template #heading>Telefone</template>

      <div class="form-group">
        <div class="imput-container">
          <label for=""> Seu melhor telefone é : {{ Telefone }} </label>
          <input
            type="text"
            v-model="v$.Telefone.$model"
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
        <div
          class="input-errors"
          v-for="(error, index) of v$.Telefone.$errors"
          :key="index"
        >
          <div class="error-msg">{{ error.$message }}</div>
        </div>
      </div>
    </CardItem>

    <!-- -------------------------------------------------- -->
    <!-- Icone -->

    <CardItem>
      <template #icon>
        <SupportIcon />
      </template>

      <!-- CPF -->

      <template #heading>CPF</template>
      <div class="form-group">
        <div class="imput-container">
          <label for=""> Para o estado voce é o numero : {{ Cpf }}</label>
          <input
            type="text"
            v-model="v$.Cpf.$model"
            placeholder="Digite seu CPF aqui"
          />
        </div>
        <div
          class="input-errors"
          v-for="(error, index) of v$.Cpf.$errors"
          :key="index"
        >
          <div class="error-msg">{{ error.$message }}</div>
        </div>
      </div>
    </CardItem>

    <!-- -------------------------------------------------- -->
    <!-- Icone -->

    <CardItem>
      <template #icon>
        <SupportIcon />
      </template>

      <!-- CEP-->

      <template #heading>CEP</template>
      <div class="form-group">
        <div class="imput-container">
          <label for=""> Sua localização no mapa é: {{ Cep }}</label>
          <input
            type="text"
            v-model="v$.Cep.$model"
            placeholder="Digite seu CEP aqui"
          />
        </div>
      </div>
      <div
        class="input-errors"
        v-for="(error, index) of v$.Cep.$errors"
        :key="index"
      >
        <div class="error-msg">{{ error.$message }}</div>
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
  </form>
</template>

<script lang="ts">
import { ref } from "vue";
import CardItem from "@/components/CardItem.vue";
import DocumentationIcon from "@/components/icons/IconDocumentation.vue";
import ToolingIcon from "@/components/icons/IconTooling.vue";
import EcosystemIcon from "@/components/icons/IconEcosystem.vue";
import CommunityIcon from "@/components/icons/IconCommunity.vue";
import SupportIcon from "@/components/icons/IconSupport.vue";
import useVuelidate from "@vuelidate/core";
import {
  required,
  numeric,
  between,
  email,
  maxLength,
} from "@vuelidate/validators";

export function validName(PrimeiroNome: string) {
  let validNamePattern = new RegExp("^[a-zA-Z]+(?:[-'\\s][a-zA-Z]+)*$");
  if (validNamePattern.test(PrimeiroNome)) {
    return true;
  }
  return false;
}

const PrimeiroNome = ref("");
const Sobrenome = ref("");
const Email = ref("");
const Idade = ref("");
const Telefone = ref("");
const Cpf = ref("");
const Cep = ref("");

export default {
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  data() {
    return {
      CardItem,
      DocumentationIcon,
      ToolingIcon,
      EcosystemIcon,
      CommunityIcon,
      SupportIcon,
      PrimeiroNome: "",
      Sobrenome: "",
      Email: "",
      Idade: "",
      Telefone: "",
      Cpf: "",
      Cep: "",
    };
  },
  validations() {
    return {
      PrimeiroNome: {
        required,
        name_validation: {
          $validator: validName,
          $message: "Nome Invalido. Nome vallido deve conter letras e espaços",
        },
      },
      Sobrenome: {
        required,
        name_validation: {
          $validator: validName,
          $message:
            "Sobrenome Invalido.Sobrenome valido de conter letras e espaços ",
        },
      },
      Email: {
        required,
        email,
        email_validation: {
          //colocar regex de email
          $message: "Email Invalido",
        },
      },
      Idade: {
        required,
        numeric,
        betweenValue: between(0, 120),
      },
      Telefone: {
        required,
        numeric,
        maxLengthValue: maxLength(9),
      },
      Cpf: { required },
      Cep: { required },
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
