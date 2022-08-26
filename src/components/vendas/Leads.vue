<template>
   <div>
     <h5>Leads</h5>
     <table class="table table-hover">
        <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Nome</th>
                <th scope="col">Telefone</th>
                <th scope="col"></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="d in dados" :key="d.id">
                <td>{{d.id}}</td>
                <td>{{d.nome}}</td>
                <td>{{d.telefone}}</td>
                <td>
                    <!-- <router-link :to="`/home/vendas/leads/${d.id}`" class="btn btn-sm btn-primary">
                        <i class="bi bi-pencil-square" style="cursor: pointer"></i>
                    </router-link> -->
                     <router-link :to="{name: 'lead', params: {id: d.id, outroParametro: `teste_${d.id}`}}" class="btn btn-sm btn-primary">
                        <i class="bi bi-pencil-square" style="cursor: pointer"></i>
                    </router-link>
                </td>
            </tr>
        </tbody>
     </table>
   </div>
</template>

<script>
import ApiMixins from "@/mixins/ApiMixins";


    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'Leads',
        mixins: [ApiMixins],
        created(){
            this.getDadosApi('http://localhost:3000/leads')
        }
    }
</script>