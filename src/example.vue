<template>
    <div class="msg">{{ msg }}</div>
</template>

<script>
    // this dependency needs to be mocked
    import SomeService from './service'

    export default {
        data () {
            return {
                msg: SomeService.msg
            }
        }
    }
</script>