<template>
<div>
    <h5>{{dados.id}} - {{dados.nome}}</h5>
     <!-- {{dados}} -->
     <div class="mb-3 row">
        <label class="col-sm-2 col-form-label">ID</label>
        <div class="col-sm-1">
            <input type="text" readonly class="form-control-plaintext" :value="dados.id">
        </div>
     </div>
      <div class="mb-3 row">
        <label class="col-sm-2 col-form-label">Nome</label>
        <div class="col-sm-10">
            <input type="text" readonly class="form-control" :value="dados.nome">
        </div>
     </div>
      <div class="mb-3 row">
        <label class="col-sm-2 col-form-label">telefone</label>
        <div class="col-sm-10">
            <input type="text" readonly class="form-control" :value="dados.telefone">
        </div>
     </div>

     <div class="col-auto d-flex justify-content-between">
      <button type="button" class="btn btn-warning" @click="$router.push({name: 'leads'})">Voltar</button><!--rotas nomeadas em navegação programatica-->
      <button type="button" class="btn btn-primary">Atualizar</button>
     </div>
</div>
   
</template>

<script>
import ApiMixins from "@/mixins/ApiMixins";
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Lead',
    props: ['id', 'outroParametro'],
    mixins: [ApiMixins],
    created() {
        // console.log(this.$route.params);
        this.getDadosApi(`http://localhost:3000/leads/${this.id}`)
    }

  }  
</script>