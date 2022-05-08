<template>
    <div class="container p-4"   id="divElement">
        <form class="form-group" @submit.prevent="RegisterData">
           <h2 style="text-align:left;">Hello <img src="@/assets/img/memoji.png" alt="">,</h2>
           <p class="mt-4">In a few steps, you can buy, send and receive, save and borrow crypto funds with just your email address.</p>
           <input type="email" name="Email" v-model="email" class="form-control form-control-sm " id="exampleInputEmail1" placeholder="Email address">
           <p class="mt-2">By entering your personal email address, you agree to our <a href="#">Terms & Conditions</a></p>
           <input type="submit" value="Submit">
        </form>
    </div>
</template>

<script>


export default {
name:'FormOne',
}
</script>

<style scoped>
#divElement{
    position: absolute;
    top: 40%;
    left: 40%;
    margin-top: -50px;
    margin-left: -50px;
    width: 400px;
    height: 400px;
    border: 1px solid #3E3E3E
}
form h2{
    color: #fff;
    font-size: 2rem;
}
form p{
    font-size: 13px;
}
form{
    color: #9F9F9F;
}
form a{
   color: #9F9F9F; 
}
input[type=email]{
    background: #313131;
    border: none;
    height: 2.5rem;
    margin-top: 3rem;
}
input[type=email]:focus{
    border: none;
    outline: none !important;
    border-bottom: 2px solid yellow;
    color: #fff;
}
input[type=submit]{
    background: #313131;
    color: #fff;
    width: 100%;
    height: 2.5rem;
    margin-top: 4rem;
    font-size: 0.8rem;
    border: none;
}
input:focus::-webkit-input-placeholder {
    font-size: .75em;
    position: relative;
    top: -15px; 
    transition: 0.2s ease-out;
    color: yellow;
}

input::-webkit-input-placeholder {
    transition: 0.2s ease-in;
}

</style>



