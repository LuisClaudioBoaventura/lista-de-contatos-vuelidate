<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Nome</template>
    <div>
      <form id="contato-form">
        <div class="imput-container">
          <label for="nome"> Nome do cliente</label>
          <input
            type="text"
            id="nome"
            name="nome"
            v-model="nome"
            placeholder="Digite seu nome aqui"
          />
        </div>
      </form>
    </div>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Sobrenome</template>
    <div>
      <form id="contato-form">
        <div class="imput-container">
          <label for="nome"> Sobrenome do cliente</label>
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
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Email</template>
    <div>
      <form id="contato-form">
        <div class="imput-container">
          <label for="email"> Email do cliente</label>
          <input
            type="text"
            id="email"
            name="email"
            v-model="email"
            placeholder="Digite seu nome aqui"
          />
        </div>
      </form>
    </div>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Idade</template>
    <div>
      <form id="contato-form">
        <div class="imput-container">
          <label for="nome"> Idade do cliente</label>
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
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>CPF</template>
    <div>
      <form id="contato-form">
        <div class="imput-container">
          <label for="cpf"> CPF do cliente</label>
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
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>CEP</template>
    <div>
      <form id="contato-form">
        <div class="imput-container">
          <label for="nome"> CEP do cliente</label>
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
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <div>
      <form id="contato-form">
        <div class="imput-container">
          <input type="submit" class="submit btn" value="Salvar Contato" />
        </div>
      </form>
    </div>
  </WelcomeItem>
</template>

<script setup lang="ts">
import WelcomeItem from "./WelcomeItem.vue";
import DocumentationIcon from "./icons/IconDocumentation.vue";
import ToolingIcon from "./icons/IconTooling.vue";
import EcosystemIcon from "./icons/IconEcosystem.vue";
import CommunityIcon from "./icons/IconCommunity.vue";
import SupportIcon from "./icons/IconSupport.vue";
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
</style>
