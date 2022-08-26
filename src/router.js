import { createRouter,  createWebHistory} from "vue-router";
//createWebHashHistory
import Home from "@/views/Home";
import Login from "@/views/Login";
import Site from "@/views/Site";
import Servicos from "@/components/servicos/Servicos";
import Vendas from "@/components/vendas/Vendas";
import Leads from "@/components/vendas/Leads";
import Contratos from "@/components/vendas/Contratos";
import Dashboard from "@/components/dashboard/Dashboard";
import Lead from "@/components/vendas/Lead";
import VendasPadrao from "@/components/vendas/VendasPadrao";
import Servico from "@/components/servicos/Servico";
import Opcoes from "@/components/servicos/Opcoes";
import Indicadores from "@/components/servicos/Indicadores";
import DashboardRodape from "@/components/dashboard/DashboardRodape";
import PaginaNaoEncontrada from "@/views/PaginaNaoEncontrada";


const routes = [
    {
        path: '/', //localhost:8080/
        component: Site,
        meta: { requerAutorizacao: false }
    },
    {
        path: '/home', //localhost:8080/home
        alias: '/app',
        component: Home,
        meta: { requerAutorizacao: true },
        children:[
            {path: 'vendas', component: Vendas, children:
             [
                {path: 'leads', component: Leads, name: 'leads'}, //localhost:8080/home/vendas/leads  ----- rota filha da filha
                // {path: 'leads/:id:outroParametro', props: true, component: Lead, name: 'lead', alias: ['/l/:id:outroParametro', '/pessoa/:id:outroParametro', '/:id:outroParametro']}, //localhost:8080/home/vendas/leads/1  ----- rota filha da filha
                {path: 'leads/:id', props: true, component: Lead, name: 'lead', alias: ['/l/:id', '/pessoa/:id', '/:id']},
                {path: 'contratos', component: Contratos, name: 'contratos'}, //localhost:8080/home/vendas/contratos
                {path: '', component: VendasPadrao, name: 'vendas'}
             ]
            }, //localhost:8080/home/vendas
            {path: 'servicos', component: Servicos, name: 'servicos', children: [
                {path: ':id', props:{default: true, indicadores: false, opcoes: true},  alias: '/s/:id', name: 'servico', components: 
                {
                    default: Servico,
                    opcoes: Opcoes,
                    indicadores: Indicadores
                }, 
                } //localhst:8080/home/servicos/5
            ]
            }, //localhost:8080/home/servicos  ---- a propriedade name: 'abc' é um apelido da rora
            {path: 'dashboard', name: 'dashboard', components:
             {
               default: Dashboard,
               rodape: DashboardRodape
             }, 
            }, //localhost:8080/home/dashboard
        ]
    },
    {
        path: '/login', //localhost:8080/login
        component: Login

    },
    {path: '/redirecionamento-1', redirect: '/home/servicos'},
    {path: '/redirecionamento-2', redirect: {name: 'leads'}},
    {path: '/redirecionamento-3', redirect: '/home/vendas'},
    {path: '/redirecionamento-4', redirect: {name: 'vendas'}},
    {path: '/redirecionamento-5', redirect: to => {
        //podemos programar algo antes do redirecionamento ser efetivado
        console.log(to);
        return {name: 'vendas'}
    }},
    // {path: '/:catchAll(.*)*', redirect: '/'} //Vue2 path: '*'    na versao 3 do vue as rotas coringas é '/:catchAll(.*)*'
    {path: '/:catchAll(.*)*', component: PaginaNaoEncontrada}

]

const router = createRouter({
    history: createWebHistory(),
    //routes: routes ---> quando a chave e o valor têm o msm nome podemos deixar apenas o nome como vai ficar abaixo
    routes
})

router.beforeEach((to) => {
    console.log(to.meta);
    if(to.meta.requerAutorizacao){
        console.log('validar acesso');
    }else{
        console.log('apenas seguir a navegação');
    }
    //verificar se o usuario esta autorizado a acessar a rota
    // console.log('metodo xecutado antes do acesso a rota destino');
})

router.afterEach((to, from) =>{
    // console.log('guarda de rota executada apos a conclusão da navegação');
    // console.log('origem', from);
    // console.log('destino', to);
})

export default router
