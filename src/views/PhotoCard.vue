<template>
  <div class="photo-card">
    <h1>this is list card</h1>
  </div>
</template>


<script>

    export default {
        components: {

        },

        props: [
            'allPhotos'
        ],

        data () {
            return {
                form: {
                    nome: "",
                    descricao: "",
                    nota: ""
                }
            }

        },

        beforeMount(){
            if (this.tarefaDto) {
                this.$set(this.form, 'nome', this.tarefaDto.nome);
                this.$set(this.form, 'descricao', this.tarefaDto.descricao);
                this.$set(this.form, 'nota', this.tarefaDto.nota);

            }
        },

        computed:{

        },

        methods: {


        }
    }
</script>