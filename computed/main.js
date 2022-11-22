var vm = new Vue({
    el: '#example',
    data() {
        return {
            message: 'Hello'
        }
    },
    computed: {
        reversedMessage: function() {
            
            return this.message.split('').reverse().join('')
            
            
        },
        now: function() {
            console.log('only one time')
            return Date.now()
        }
    },
    methods: {
        reverseMessage: function() {
            console.log('everytime the page reloads')
            return this.message.split('').reverse().join('')
            
            
        }
    }
})