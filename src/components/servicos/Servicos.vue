<template>
   <div>
     <h5>Serviços</h5>
     <hr>
     <div class="row">
        <div class="col mb-2" v-for="d in dados" :key="d.id">
            <div class="card" style="width: 11rem">
                <img class="card-img-top" :src="`/img/${d.icone}`">
                <div class="card-body text-center">
                    <router-link :to="{name: 'servico', params:{id: d.id}}">
                        <p class="card-text">{{d.servico}}</p>
                     </router-link>
                </div>
            </div>
        </div>
     </div>
     <router-view class="mt-3"></router-view> <!--isso é um router-view default-->
     <router-view name="opcoes"></router-view>
     <router-view name="indicadores"></router-view>
   </div>
</template>

<script>
import ApiMixins from "@/mixins/ApiMixins";


    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'Servicos',
        mixins: [ApiMixins],
        created(){
            this.getDadosApi('http://localhost:3000/servicos')
        }
    }
</script>