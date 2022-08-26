<template>
<div>
    <div class="card">
        <div class="card-header bg-primary text-white">{{dados.servico}}</div> 
        <div class="card-body">
            <p class="card-text">{{dados.descricao}}</p>
        </div> 
    </div>
 </div>   
</template>

<script>
import ApiMixins from "@/mixins/ApiMixins";
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Servico',
    props: ['id'],
    mixins: [ApiMixins],
    created() {
        this.getDadosApi(`http://localhost:3000/servicos/${this.id}`)
    },

    // watch: {
    //     $route(to){ //conveenção pra usar nos parametro do watch  (to, from)
    //         //console.log(to.params, from.params);
    //         if(to.params.id != undefined) this.getDadosApi(`http://localhost:3000/servicos/${to.params.id}`)
    //     }
    // },
        beforeRouteUpdate(to, from, next){
            //to = $route para onde estamos indo
            //from = $route de onde estamos vindi
            //next = faz com q o fluxo de navegação siga em frente
            if(to.params.id != undefined) this.getDadosApi(`http://localhost:3000/servicos/${to.params.id}`)
            next()
        }


  }  
</script>