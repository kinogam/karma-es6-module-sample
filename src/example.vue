<template>
    <div class="msg">{{ msg }}</div>
</template>

<script>
    // this dependency needs to be mocked
    import SomeService from './service'

    export default {
        construct(){
            let x = 1;
        },
        data () {
            return {
                msg: SomeService.msg
            }
        }
    }
</script>