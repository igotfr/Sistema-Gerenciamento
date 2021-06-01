<!-- Formulário de Login -->
<script>
  // Arquivos importados
  import { goto } from '$app/navigation'
  import Input from '$lib/Input.svelte';
  import Button from '$lib/Button.svelte';
  import { createForm } from 'svelte-forms-lib';
  import * as yup from 'yup';
  import loginUser from '../../strapi/loginUser';

  let message = ''

  // Criando formulário usando yup e svelte-forms-lib
  const { form, errors, handleChange, handleSubmit } = createForm({
    // Valroes iniciais
    initialValues: {
      email: '',
      password: ''
    },
    // Validação
    validationSchema: yup.object().shape({
      email: yup.string().required('É necessário colocar um e-mail').email(),
      password: yup.string().required('É necessário inserir uma senha').min(6, 'Senha tem que ter pelo menos 6 caracteres')
    }),
    // Função de envio de formulário
    onSubmit: async (values) => {
      // Buscar dados de login
      const loginRes = await loginUser(values);
      // Se resposta do servidor for positiva
      if (loginRes.status === 200 && loginRes.statusText === 'OK') {
        // Redirecionar para página do agente
        goto(`/agent/${loginRes.data.user.id}`)
      } else if (loginRes.status === 400) {
        // Se não, setar mensagem
        message = 'Há algo de errado com as suas informações, por favor verifique'
      }
    }
  });
</script>

<!-- Formulário -->
<form class="form--wrapper" on:submit|preventDefault={handleSubmit}>
  <small class="font-body md:text-lg text-red ml-7 md:ml-20 lg:ml-5/12">{message}</small>
  <!-- Input de E-mail -->
  <Input 
    inputWidth="w-10/12 lg:w-4/12"
    type="email" 
    labelText="E-mail:"
    placeholder="fulano@detal.com"
    error={$errors.email}
    bind:value={$form.email}
    on:change={handleChange}
  />
  {#if $errors.email}
    <small class="font-body md:text-lg text-red ml-7 md:ml-20 lg:ml-5/12">{$errors.email}</small>
  {/if}
  <!-- Input de Senha -->
  <Input
    inputWidth="w-10/12 lg:w-4/12"
    type="password"
    labelText="Senha:"
    placeholder="******"
    error={$errors.password}
    bind:value={$form.password}
    on:change={handleChange}
  />
  {#if $errors.password}
    <small class="font-body md:text-lg text-red ml-7 md:ml-20 lg:ml-5/12">{$errors.password}</small>
  {/if}
  <!-- Botão -->
  <div class="flex flex-col items-center lg:ml-40">
    <Button type="submit" customClasses="p-2 mt-5 w-10/12 lg:mr-1/12 lg:w-4/12">Logar</Button>
  </div>
</form>

<style lang="postcss">
  .form--wrapper {
    @apply w-full;
  }
  .error {
    @apply text-red;
    @apply ml-7;
  }
</style>