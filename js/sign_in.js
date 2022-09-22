new Vue({
    el: '#app-login',
    data() {
        return {
            input: {
                username: "",
                password: ""
            }
        }
    },
    methods: {
        //Function for login
        login: function(){

            var storedName = localStorage.getItem('name');
            var storedPw = localStorage.getItem('pw');

            if(this.input.username == storedName && this.input.password == storedPw){
                //An alert message to pop up when the user has registered their account and entered the correct details
                alert('You are successfully logged in.');

                //When the user clicks the sign in button, they should be directed to the netflix home page
                location.href = "netflix_home.html";
            }else {
                //An alert error message to pop up when the user hasn't registered their account
                alert('User does not exist. Please sign up.');
            }
        }
    }
})